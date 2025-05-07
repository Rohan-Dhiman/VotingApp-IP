const express = require('express');
const Voter = require('../Models/model.voter');
const {setUser} = require('../Services/Auth')
const cookieParser = require('cookie-parser');

const router = express.Router();

router.get('/:voterid', async (req, res)=>{
    const {voterid} = req.params;
    try{
        const voter = await Voter.findOne({_id: voterid});
        if(!voter) res.status(400).send("voter not found");
        res.status(200).json(voter);
    }
    catch(err){
        console.error(err.message);
        res.status()
    }
});

router.post('/signup', async (req, res)=>{
    const voterData = req.body;
    const voter  = await Voter.create(VoterData);
    res.status(200).json(voterData);
})


router.post('/login', async (req, res)=>{
    const {aadhar, password}= req.body;
    
    const voter =await Voter.findOne({aadhar, password});
    
    if(!voter) {
        res.cookie("uid", "-");
        res.status(404).send("no such voter found");
    }

    const token = setUser({aadhar, password});
    res.cookie("uid", token);
    res.status(203).json(token);
})

router.post('/vote', (req, res) =>{
    
})

module.exports = router;
