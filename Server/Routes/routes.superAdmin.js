const express = require("express");

const SuperAdmin = require("../Models/model.superAdmin");
const Admin = require('../Models/model.admin');
const Region = require('../Models/model.region');

const { encryptString, compareEncrypted } = require("../Services/Encrypt");
const router = express.Router();

router.post('/admin', async (req, res)=>{
    const admin = req.body;
    try{
        const region = admin.region;
        const newRegion = await Region.create({
            name: region
        })

        admin.password = await encryptString(admin.password);
        const newAdmin = await Admin.create(admin);
        
        newRegion.admin = newAdmin._id;
        newRegion.save();

        res.status(201).json(newAdmin);
    }
    catch(error){
        res.status(401).json({"message": "cannot create such admin"});
    }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const superAdmin =await SuperAdmin.findOne({});
   
    const isMatch = await compareEncrypted(email, superAdmin.email) 
    const isPasswordMatch = await compareEncrypted(password, superAdmin.password);

    if (isMatch && isPasswordMatch) {
        res.status(200).send("successfully logged in ");
    }
    else{
        res.status(400).send("access denied not the admin");
    }

  } catch (error) {
    console.error(error.message);
    res.status(500).send("couldnt login");
  }
});

router.post("/signup", async (req, res) => {
  const adminData = req.body;
  try {
    adminData.password = await encryptString(adminData.password);
    adminData.email = await encryptString(adminData.email);
    const superAdmin = await SuperAdmin.create(adminData);
    
    res.status(201).json(adminData);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("couldnt signup");
  }
});

module.exports = router;
