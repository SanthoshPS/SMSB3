const express = require("express");
var mongoose = require("mongoose");
const router = express.Router();
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var studentschema = require('./model/addstudentschema.js');
var studentapi = require('./routes/addstudent_api.js');
var courseschema = require('./model/courseschema.js');
var courseapi = require('./routes/course_api.js');
var marksschema = require('./model/marksschema.js');
var marksapi = require('./routes/marks_api.js');
var subjectschema=require('./model/subjectschema.js');
var subjectapi=require('./routes/subject_api.js');




app.use('/',router);
app.get("/",function(request,response){
    response.send("Hello World!");
});
mongoose.connect('mongodb://localhost:27017/student_management_system',() => { 
   console.log("[+] Succesfully connected to database."); 
});

app.listen(4000, function () {
    console.log("Started application on port %d", 4000);
});

app.use('/',studentapi);
app.use('/',courseapi);
app.use('/',marksapi);
app.use('/',subjectapi);