const {setUser, getUser} = require('../Services/Auth')
const {encryptString, compareEncrypted} = require('../Services/Encrypt');
const Voter = require('../Models/model.voter');

const loginVoter = async (req, res)=>{
    const {aadharId, password}= req.body;
    try {
        const voter =await Voter.findOne({aadharId: aadharId});
        if(!voter) res.status(404).send("no such voter found");
        const isMatch =await compareEncrypted(password, voter.password);
        
        if(!isMatch) res.status(401).json("access denied");
        const token = await setUser({aadharId, password});
        
        res.cookie("uid", token);
        res.status(200).json(token);
    } catch (error) {
        res.status(404).send("nothing found");
    }
}

const signupVoter = async (req, res)=>{
    const voterData = req.body;
    voterData.password = await encryptString(voterData.password);

    try{
        const existingVoter = await Voter.findOne({aadharId: voterData.aadharId});
        if(existingVoter) return res.status(400).send("voter already exists");

        const voter  = await Voter.create(voterData);
        res.status(200).json(voterData);
    }
    catch(err)
    {
        res.status(406).send("user is not created, invalid input fields" + err.message);
    }
}

const findVoter = async (req, res)=>{
    const {voterid} = req.params;
    
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

module.exports = {loginVoter, signupVoter, findVoter};