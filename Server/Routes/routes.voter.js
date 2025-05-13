const express = require('express');
const {loginVoter, signupVoter, findVoter} = require('../Controllers/controller.voter')

const router = express.Router();

router.get('/:voterid', findVoter);

router.post('/signup', signupVoter)

router.post('/login',loginVoter); 

module.exports = router;