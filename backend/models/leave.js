const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const leaveSchema = mongoose.Schema({
 
  employeeName:{type:String},
  department:{type:String},
  leaveFromDate:{type:Date,format:"%Y-%m-%d"},
  leaveToDate:{type:Date},
  reasonForLeave:{type: String},
  numberOfDays:{type:Number},
  description: {type: String},
  leaveStatus:{type:String,default:null}

});

leaveSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Leave", leaveSchema);
