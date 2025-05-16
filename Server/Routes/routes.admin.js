const express = require("express");
const { compareEncrypted } = require("../Services/Encrypt");
const { setUser } = require("../Services/Auth");
const { authenticate, authorize } = require("../middlewares/middleware.auth");
const Candidate = require('../Models/model.candidate');
const router = express.Router;

router.post("/login", async (req, res) => {
  const data = req.body;

  try {
    const admin = await Admin.findOne({ region: data.region });
    if (!admin) res.status(404).send("admin not found");
    const passwordMatch = await compareEncrypted(data.password, admin.password);
    if (!passwordMatch)
      res.status(401).json({
        accessDenied: true,
      });

    const token = await setUser({
      ...data,
      role: "admin",
    });

    res.cookie("authToken", token, {
      httpOnly: true,
    });

    res.send("logged in successfully");
  } catch (error) {
    console.error(error.message);
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


