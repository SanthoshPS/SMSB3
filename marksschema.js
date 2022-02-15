const mongoose = require("mongoose");
const marksschema = new mongoose.Schema({
    srno:{type:String},	
    StudentID:{type:String},	
    CourseID:{type:String},
    Semester:{type:String},	
    Submark1:{type:String},	
    Submark2:{type:String},	
    Submark3:{type:String}
})
module.exports=mongoose.model('marksdatas',marksschema);