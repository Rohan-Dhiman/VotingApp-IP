const express = require("express");
const { compareEncrypted } = require("../Services/Encrypt");
const { setUser } = require("../Services/Auth");
const { authenticate, authorize } = require("../middlewares/middleware.auth");
const Region = require('../Models/model.region')
const Admin = require("../Models/model.admin");

const router = express.Router();

router.post("/login", async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const admin = await Admin.findOne({ region: data.region });
    if (!admin) res.status(404).send("admin not found");
    const passwordMatch = await compareEncrypted(data.password, admin.password);
    if (!passwordMatch)
      return res.status(401).json({
        accessDenied: true,
      });
    const token = await setUser({
      ...data,
      role: "admin",
    });
    const region = await Region.find({name: data.region});
    res.cookie("authToken", token, {
      httpOnly: true,
    });
    res.cookie('region', )
    res.send(token);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("internal server error");
  }
});

router.post(
  "/create/poll",
  authenticate,
  authorize(["admin"]),
  async (req, res) => {
    const data = req.body;

    try {
      if (await Election.find({ name: data.name, regoin: data.region })) {
        res.send("Election already made");
      }
      const election = await Election.create(data);
      res.send("election made");
    } catch (err) {
      console.error("election not made", err.message);
    }
  }
);

module.exports = router;
