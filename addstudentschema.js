const mongoose = require("mongoose");
const departmentSchema = new mongoose.Schema({
    Studentid     :{type:String},
    FirstName      :{type:String},
    LastName       :{type:String},
    DOB            :{type:String},
    Gender         :{type:String},
    Phoneno    :{type:String},
    EmailID        :{type:String},
    Address        :{type:String},
    YOA:{type:String},
    Course         :{type:String},
    Status         :{type:String},
    CourseID       :{type:String}
})
module.exports=mongoose.model('studentdatas',departmentSchema);