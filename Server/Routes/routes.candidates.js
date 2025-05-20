const express = require('express');
const Candidate = require('../Models/model.candidate.js')
const {authenticate, authorize} = require('../middlewares/middleware.auth.js')
const router = express.Router();


router.get('/:candidateId', async (req, res) =>{
    const {candidateId} = req.params;
    
    const candidate =await Candidate.findById({_id:candidateId});

    res.send(candidate);
})

router.get('/', async (req, res) =>{
    const regionId = req.cookies.regionId;

    try {
        const candidateList = await Candidate.find({region: regionId});
        res.status(200).send(candidateList);  
    } catch (error)   {
        res.status(400).send(error.message);
    }  
})


router.patch('/:candidateId', authenticate, authorize(['admin']), async (req, res)=>{
    const {candidateId} = req.params;
    const changes = req.body;

    try{
        const candidate = Candidate.findByIdAndUpdate(candidateId, changes);
        res.status(200).send("changes added", candidate);
    }
    catch(err){
        console.error('some error occured', err.message);
        res.send('changes couldnt be added');
    }
})


router.post("/create/candidate", authenticate, authorize(["admin"]), async (req, res) => {
    const data = req.body;
    const region = req.cookies.regionId;
    try {
        const candidate = await Candidate.create(data);
        res.send("candidate is created");

    } catch (error) {
        console.error(error.message);
        res.send('candidate not created');    
    }
  }
);



module.exports = router;