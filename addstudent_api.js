const express = require("express");
var mongoose = require("mongoose");
const router = express.Router();//function is used to create new router object
var studentmodel = require('../model/addstudentschema.js');
const bodyParser = require('body-parser');
const { request, response } = require("express");
const addstudentschema = require("../model/addstudentschema.js");
router.use(bodyParser.json());

router.post('/addstudent',(request, response)=>{


    if(request.body.Studentid===""){
        var objecto={
          "statuscode":401,
          "message":"Student id should be here "
        };
        response.send(objecto);
            return;}
            console.log(request.body.Studentid.length);
  if(request.body.Studentid.length!=3){
    var objecto={
      "statuscode":400,
      "message":"studentid should be only 3 char"
    };
    response.send(objecto);
    return;
  }
            if(request.body.Firstname===""){
                var objecto={
                  "statuscode":400,
                  "message":"Firstname should be here "
                };
                response.send(objecto);
                return;
              }
              console.log(request.body.Firstname.length);
  if(request.body.Firstname.length>20){
    var objecto={
      "statuscode":400,
      "message":"firstname should be only less than 20 "
    };
    response.send(objecto);
    return;
  }
  if(request.body.Lastname===""){
    var objecto={
      "statuscode":400,
      "message":"lastname should be here "
    };
    response.send(objecto);
    return;
  }
  console.log(request.body.Lastname.length);
  if(request.body.Lastname.length>20){
    var objecto={
      "statuscode":400,
      "message":"lastname should be only less than 20 "
    };
    response.send(objecto);
    return;
  }
  if(request.body.GENDER===""){
    var objecto={
      "statuscode":400,
      "message":"GENDER should be here "
    };
    response.send(objecto);
    return;
  }
  
    console.log("request",request.body);
    var studentData = new studentmodel({
        Studentid:request.body.Studentid,
        FirstName:request.body.Firstname,
        LastName:request.body.Lastname,
        DOB:request.body.DOB,
        Gender:request.body.Gender,
        Phoneno:request.body.Phoneno,
        EmailID:request.body.EmailID,
        Address:request.body.Address,
        YOA:request.body.YOA,
        Course:request.body.Course,
        Status:request.body.Status
    
    })
   
    console.log("record", studentData);
    studentData.save().then(success =>{
        console.log("Successfully created a new department",success);
       var object = {
             "statusCode":200,
             "messsage":"Successfully create a new department",
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
  })});

  router.post('/getStudentList', (request,response) => {
    studentmodel
    .findOne({Studentid:request.body.Studentid})
    .lean()
    .exec()
    .then(function (data){
      if (data){
        var obj= {
          "statuscode": 200,
          "message":"successfully getting the students details",
          "record": data

        };
        response.send(obj);
      }
    })
    .catch(function(error){
      let obj = {
        "statuscode":500,
        "message":error
      };
      response.send(obj);
    });
  });
  router.post('/deletestd', (request,response) => {
    studentmodel.deleteOne({
      Studentid:request.body.Studentid
    })
    .exec()
    .then(function (data){
      if (data){
        var obj= {
          "statuscode": 200,
          "message":"successfully delete the student",
          "record": data

        };
        response.send(obj);
      }
    })
    .catch(function(error){
      let obj = {
        "statuscode":500,
        "message":error
      };
      response.send(obj);
    });
  });
  router.post('/modifystd', function (request, response) {
    studentmodel.findOne({Studentid:request.body.Studentid})
    .exec()
    .then(function (data) {
        if(data) {
            console.log("1",data);
            data.Phoneno = request.body.Phoneno,
            data.EmailID = request.body.EmailID,
            data.Status = request.body.Status;
            console.log("2",data);
            data.save().then(function(data) {
                var object = {
                    "statuscode": 200,
                    "record": data,
                    "message": "succesfully update a student"
                }
                response.send(object);
            })
              .catch(function(error){
                  var object = {
                      "statuscode": 500,
                      "message": "student record doesnot updated",
                      "record": error  
                  }
                  response.send(object);
              })
        }
    })
    .catch(function (error){
        var object = {
            "statuscode": 500,
            "message": "student record not found",
        }
        console.log("error message", error);
        response.send(object);
    })
});


module.exports = router ;
