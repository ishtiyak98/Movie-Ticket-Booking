const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.send({
        success: false,
        message: "user already exist",
      });
    }
    //!---- hash the password ----//
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPass;

    //!---- save the user ----//
    const newUser = new User(req.body);
    await newUser.save();
    res.send({
      success: true,
      message: "user created successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (!existingUser) {
      return res.send({
        success: false,
        message: "user doesn't exist",
      });
    }
    const validPass = await bcrypt.compare(
      req.body.password,
      existingUser.password
    );

    if (!validPass) {
      return res.send({
        success: false,
        message: "invalid password",
      });
    } else {
      const token = jwt.sign(
        { userId: existingUser._id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );
      return res.send({
        success: true,
        message: "user logged in successfully",
        data: token,
      });
    }
  } catch (error) {}
});

module.exports = router;
