const express = require("express");
var mongoose = require("mongoose");
const router = express.Router();//function is used to create new router object
var subjectmodel = require('../model/subjectschema');
const bodyParser = require('body-parser');
const { request, response } = require("express");
router.use(bodyParser.json());
router.post('/addsubject',(request, response)=>{
    console.log("request",request.body);
    var subjectdatas = new subjectmodel ({
        SubId:request.body.SubId,
        SubjectName:request.body.SubjectName,
        CourseId:request.body.CourseId,
        })

            console.log("record", subjectdatas);
             subjectdatas.save().then(success =>{
        console.log("Successfully created a new mark",success);
        var object = {
            "statusCode":200,
            "messsage":"Successfully create a subject datas",
            "record":success
        }
        response.send(object);
    })
    .catch(error => {
        var object = {
            "statusCode":500,
            "message":error
        };
        response.send(object);
        })
    });
    module.exports = router;