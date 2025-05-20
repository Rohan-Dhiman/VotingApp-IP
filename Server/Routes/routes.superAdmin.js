const express = require("express");
const { authenticate, authorize } = require("../middlewares/middleware.auth");
const { makeAdmin, login, signup } = require("../Controllers/controller.superAdmin");
const router = express.Router();

router.post('/admin',authenticate, authorize(['superAdmin']), makeAdmin);

router.post("/login",login);

router.post("/signup",signup);

router.get('/regions', async (req, res)=>{
    try{
        const regions = await Region.find({});
        res.status(200).json(regions);
    }
    catch(err){
        console.error(err.message);
        res.status(400).send(err);
    }
})


module.exports = router;
