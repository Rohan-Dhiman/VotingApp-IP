const express = require('express');
const {loginVoter, signupVoter, findVoter, voteCandidate} = require('../Controllers/controller.voter');
const { authenticate, authorize } = require('../middlewares/middleware.auth');

const router = express.Router();

router.get('/:voterid', findVoter);

router.post('/signup', signupVoter)

router.post('/login',loginVoter); 

router.post('/vote/:ElectionId',authenticate, authorize(['voter']), voteCandidate);

module.exports = router;