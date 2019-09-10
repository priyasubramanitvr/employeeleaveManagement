const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const router = express.Router();

router.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 4).then(hash => {
    const user = new User({
      firstName:req.body.firstName,
      lastName:req.body.lastName,
      phoneNumber:req.body.phoneNumber,
      email: req.body.email,
      password: hash
    });
    user
      .save()
      .then(result => {
        res.status(201).json({
          message: "User created!",
          result: result
        });
      })
      .catch(err => {
        console.log('err:'+JSON.stringify(err))
        res.status(500).json({
          message: "Invalid authentication credentials!"
        });
      });
  });
});

router.post("/login", (req, res, next) => {
  let fetchedUser;
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id },
        "secret_this_should_be_longer",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        user: fetchedUser,
        token: token
        });
    })
    .catch(err => {
      return res.status(401).json({
        message: "Auth failed"
      });
    });
});


router.get("", (req, res, next) => {
  User.find().then(documents => {
    res.status(200).json({
      message: "Users fetched successfully!",
      users: documents
    });
  });
});


router.get("/:id", (req, res, next) => {
  User.findById(req.params.id).then(user => {
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found!" });
    }
  });
});


router.put("/:id", (req, res,next) => {

  
  User.findByIdAndUpdate(req.params.id,{$set:req.body}).then(result => {
    res.status(201).json({
      message: "user  updated created!",
      result: result
    });
  })
  .catch(err => {
    console.log('err:'+JSON.stringify(err))
    res.status(500).json({
      message: "Not Updated"
    });
  });
});
/*
router.put("/:id",(req, res) => {
  User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
      if (err) return next(err);
      res.send('user udpated.');
  });
});

*/


router.delete("/:id", (req, res, next) => {
  User.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "User deleted!" });
  });
});

module.exports = router;
