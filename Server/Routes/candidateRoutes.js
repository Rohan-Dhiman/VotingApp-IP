const express = require('express');
const Candidate = require('../Models/model.candidate.js')

const router = express.Router();


router.get('/:candidateId', async (req, res) =>{
    const {candidateId} = req.params;
    
    const candidate =await Candidate.find({_id:candidateId});

    res.send(candidate);
})

router.get('/', async (req, res) =>{
    try {
        const candidateList = await Candidate.find({});
        res.status(200).send(candidateList);  
        
    } catch (error)   {
        res.status(400).send(candidateList);
    }  
})


router.patch('/:candidateId', async (req, res)=>{
    const {candidateId} = req.params;

    const candidate = Candidate.findOne({_id:candidateId});

    const changes = req.body;
})

router.post('/', async (req, res)=>{
    const candidateData = req.body;

    try{
        const newCandidate = await Candidate.create(candidateData);
        res.status(200).json(newCandidate);

    }catch(err){
        res.status(400).json({error: err.message})
    }
    
})


module.exports = router;