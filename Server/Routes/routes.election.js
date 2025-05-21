const express = require('express');
const Election = require('../Models/model.election.js');
const Region = require('../Models/model.region.js')
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


router.post(
  "/create",
  authenticate,
  authorize(["admin"]),
  async (req, res) => {
    const data = req.body;
    try {
      if (await Election.find({ name: data.name, region: data.region })) {
        return res.send("Election already made");
      }
      const election = await Election.create(data);
      res.send("election made");
    } catch (err) {
      console.error("election not made", err.message);
    }
  }
);

router.post('/:electionId/results', async (req, res) => {
    const { electionId } = req.params;

    try {
        const election = await Election.findById(electionId);
        if (!election) {
            return res.status(404).json({ message: "Election not found" });
        }

        // Build results array: each candidate's index as candidateId and their votes
        const results = election.candidates.map((candidate, idx) => ({
            candidateId: candidate._id || idx,
            name: candidate.name,
            votes: candidate.votes || 0
        }));

        // Optionally, save results in the election document
        results = results.sort((a, b) => b.votes - a.votes);
        election.results = results;
        await election.save();

        res.status(200).json({ results });
    } catch (err) {
        console.error(err.message);
        res.status(400).send(err);
    }
});

module.exports = router;