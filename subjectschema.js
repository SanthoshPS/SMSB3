const mongoose = require("mongoose");
const subjectschema = new mongoose.Schema({
    SubId:{type:String},	
    SubjectName:{type:String},	
    CourseId:{type:String},
    Semester:{type:String},	
    
})
module.exports=mongoose.model('subjectdatas',subjectschema);