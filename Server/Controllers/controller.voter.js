const {setUser, getUser} = require('../Services/Auth')
const Region = require('../Models/model.region'); 
const {encryptString, compareEncrypted} = require('../Services/Encrypt');
const Voter = require('../Models/model.voter');

const loginVoter = async (req, res)=>{
    const {aadharId, password}= req.body;

    console.log(req.body);
    try {
        const voter =await Voter.findOne({aadharId: aadharId});
        if(!voter) return res.status(404).json({"voter_not_exist": true});
        const isMatch =await compareEncrypted(password, voter.password);
        
        if(!isMatch) return res.status(401).json("access denied");
        console.log("voter found", voter);
        const token = await setUser({aadharId, password, _id: voter._id, role: "voter"});
        

        res.cookie('authToken', token, {httpOnly: true});
        const region  = await Region.findById(voter.region);
        res.cookie('regionId', region._id )

        res.status(200).json(token);
    } catch (error) {
        res.status(500).send("internal server error");
        console.error(error.message);
    }
}

const signupVoter = async (req, res)=>{
    const voterData = req.body;

    try{
        const existingVoter = await Voter.findOne({aadharId: voterData.aadharId});
        if(existingVoter) return res.status(400).send("voter already exists");

        voterData.password = await encryptString(voterData.password);

        const regionId = await Region.findOne({name: voterData.region});
        voterData.region = regionId;

        const voter  = await Voter.create(voterData);
        const token = await setUser({aadharId: voter.aadharId, password: voter.password,  role:"voter"});
        res.cookie('authToken', token, {httpOnly: true});

        const region  = await Region.findOne({name: voterData.region})
        console.log(region);
        res.cookie('regionId', region._id )

        res.status(200).json(voterData);
    }
    catch(err)
    {
        res.status(406).send("user is not created, invalid input fields" + err.message);
    }
}

const findVoter = async (req, res)=>{
    const {voterid} = req.user._id;
    
    try{
        const voter = await Voter.findOne({_id: voterid});
        if(!voter) res.status(400).send("voter not found");
        res.status(200).json(voter);
    }
    catch(err){
        console.error(err.message);
        res.status(404).json("not found");
    }
}

const voteCandidate = async (req, res) => {
    const { ElectionId } = req.params;
    const voterId = req.user._id;
    const { candidateId } = req.body; // candidateId should be the _id or index of the candidate in the array

    try {
        const voter = await Voter.findById(voterId);
        if (voter.votedElections.includes(ElectionId)) {
            return res.status(409).send("cannot vote, already voted");
        }

        const election = await require('../Models/model.election').findById(ElectionId);
        if (!election) return res.status(404).send("Election not found");

        // Find candidate by _id (if you store _id for each candidate) or by index
        const candidate = election.candidates.id(candidateId) ||
            election.candidates.find(c => c._id?.toString() === candidateId) ||
            election.candidates[candidateId]; // fallback to index if needed

        if (!candidate) return res.status(404).send("candidate Not found");

        candidate.votes = (candidate.votes || 0) + 1;
        await election.save();

        voter.votedElections.push(ElectionId);
        await voter.save();

        res.status(200).json({ ElectionId, voterId, candidateId });
    } catch (error) {
        res.status(500).send('some error occurred: ' + error.message);
    }
}

module.exports = {loginVoter, signupVoter, findVoter, voteCandidate};