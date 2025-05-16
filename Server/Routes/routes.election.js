const express = require('express');
const Election = require('../Models/model.election.js');
const {authenticate, authorize} = require('../middlewares/middleware.auth.js')
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const elections  = await Election.find({});
        res.status(200).json(elections);
    }
    catch(err){
        console.log(err.message);
        res.status(400).send(err);
    }

});


router.get('/:id', (req, res) => {
    const {id} = req.params;

    try{
        const election = Election.findOne({_id:id});
        res.status(200).json(election);
    }
    catch(err){
        console.error(err.message);
        res.status(400).send(err);
    }
    
});


router.put('/:id', (req, res) => {
    const {id} = req.params;
    const newElection = req.body();
    try{
        const election = Election.findOneAndUpdate({_id:id}, newElection);
        res.status(200).json(election);
    }
    catch(err){
        console.error(err.message);
        res.status(400).json(err);
    }

});


router.delete('/:id', (req, res) => {
    const {id} = req.params;
    
    try{
        const newElection = Election.findOneAndDelete({_id:id});
        res.status(200).json(newElection);
    }
    catch(err){
        console.error(err.message);
        res.status(400).send(err);
    }
});

router.post("/create/candidate", authenticate, authorize(["admin"]), async (req, res) => {
    const data = req.body;

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