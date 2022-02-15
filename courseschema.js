const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
    Srno:{type:String},
    Courseid:{type:String},
    Coursename:{type:String},
    MaxIntake:{type:String},


})
module.exports=mongoose.model('coursesdatas',courseSchema);