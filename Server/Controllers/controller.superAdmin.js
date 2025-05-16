const SuperAdmin = require("../Models/model.superAdmin");
const Admin = require('../Models/model.admin');
const Region = require('../Models/model.region');
const {setUser} = require('../Services/Auth')
const { encryptString, compareEncrypted } = require("../Services/Encrypt");

const login =  async (req, res) => {
  const { email, password } = req.body;
  try {
    const superAdmin =await SuperAdmin.findOne({});
   
    const isMatch = await compareEncrypted(email, superAdmin.email) 
    const isPasswordMatch = await compareEncrypted(password, superAdmin.password);

    if (isMatch && isPasswordMatch) {
        const token = await setUser({
            ...req.body,
            role: "superAdmin"
        });
        res.cookie("authToken", token, {
            httpOnly: true
        })
        res.send("logged In");
    }
    else{
        res.status(400).send("access denied not the admin");
    }

  } catch (error) {
    console.error(error.message);
    res.status(500).send("couldnt login");
  }
}

const signup =  async (req, res) => {
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
}

const makeAdmin =  async (req, res)=>{
    const admin = req.body;
    try{
        const exisitingRegion =await Region.findOne({name: admin.region})
        console.log(exisitingRegion)
        if(exisitingRegion) {
          return res.status(409).send("region and admin already exists")
        }

        const newRegion = await Region.create({name:admin.region})
        admin.password = await encryptString(admin.password);
        const newAdmin = await Admin.create(admin);
        
        newRegion.admin = newAdmin._id;
        await newRegion.save();
        
        res.status(201).json(newAdmin);
    }
    catch(error){
        res.send(error.message)
    }
}

module.exports = {
    signup, login , makeAdmin
}