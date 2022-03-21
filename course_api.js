const express = require("express");
var mongoose = require("mongoose");
const router = express.Router();//function is used to create new router object
var coursemodel = require('../model/courseschema');
const bodyParser = require('body-parser');
const { request, response } = require("express");
router.use(bodyParser.json());
router.post('/addcourse',(request, response)=>{
    console.log("request",request.body);
    var coursesdatas = new coursemodel ({
        Srno:request.body.Srno,
        Courseid:request.body.Courseid,
        Coursename:request.body.Coursename,
            MaxIntake:request.body.MaxIntake
        })

            console.log("record", coursesdatas);
             coursesdatas.save().then(success =>{
        console.log("Successfully created a new courses",success);
        var object = {
            "statusCode":200,
            "messsage":"Successfully create a new courses",
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