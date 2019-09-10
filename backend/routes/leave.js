const express = require("express");


const Leave = require("../models/leave");

const router = express.Router();


router.post("/apply-leave", (req, res, next) => {
  const leave = new Leave({
    
    employeeName:req.body.employeeName,
    department:req.body.department,
     leaveFromDate:req.body.leaveFromDate,
     leaveToDate:req.body.leaveToDate,
     reasonForLeave:req.body.reasonForLeave,
     numberOfDays:req.body.numberOfDays,
     description:req.body.description,
     leaveStatus:req.body.leaveStatus
    });
  leave
    .save()
    .then(leave => {
      res.status(201).json({
        message: "leave created!",
        leave:leave
      });
    })
    .catch(err => {
      res.status(500).json({
        error: "leave not created"
      });
    });
});

router.get("", (req, res, next) => {
  
  
  Leave.find().then(leaves => {
    res.status(200).json(leaves);
  });
});



router.get("/:id", (req, res, next) => {
  Leave.findById(req.params.id).then(leave => {
    if (leave) {
      res.status(200).json(leave);
    } else {
      res.status(404).json({ message: "leave not found!" });
    }
  });
});



router.put("/:id", (req, res,next) => {

Leave.findByIdAndUpdate(req.params.id,{$set:req.body}).then(result => {
    res.status(201).json({
      message: "leave updated created!",
      result: result,
     
    });
  })
  .catch(err => {
    console.log('err:'+JSON.stringify(err))
    res.status(500).json({
      message: " leave Not Updated"
    });
  });
});



/*

router.put("/:id", (req, res, next) => {
  const leave = new Leave({
    _id: req.body.id,
    employeeName:req.body.employeeName,
    department:req.body.department,
     leaveFromDate:req.body.leaveFromDate,
     leaveToDate:req.body.leaveToDate,
     reasonForLeave:req.body.reasonForLeave,
     numberOfDays:req.body.numberOfDays,
     description:req.body.description,
     leaveStatus:req.body.leaveStatus
  });
 
  Leave.findOneAndUpdate({ _id: req.params.id }, leave).then(result => {
    console.log(result);
    res.status(200).json({ message: "Update successful!" });
  });
});
*/

module.exports = router;

























module.exports = router;