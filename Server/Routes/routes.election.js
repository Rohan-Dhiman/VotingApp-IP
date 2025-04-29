const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get all elections');
    
});


router.post('/', (req, res) => {


    res.send('Create a new election');
});


router.get('/:id', (req, res) => {
    res.send(`Get election with ID: ${req.params.id}`);
    
});


router.put('/:id', (req, res) => {
    res.send(`Update election with ID: ${req.params.id}`);
    
});


router.delete('/:id', (req, res) => {
    res.send(`Delete election with ID: ${req.params.id}`);
    // Replace with: deleteElection(req, res);
});

module.exports = router;