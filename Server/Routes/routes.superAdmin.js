const express = require("express");
const { authenticate, authorize } = require("../middlewares/middleware.auth");
const { makeAdmin, login, signup, getRegions } = require("../Controllers/controller.superAdmin");
const router = express.Router();

router.post('/admin',authenticate, authorize(['superAdmin']), makeAdmin);

router.post("/login",login);

router.post("/signup",signup);

router.get('/regions', getRegions)


module.exports = router;
