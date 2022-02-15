const express = require("express");
var mongoose = require("mongoose");
const router = express.Router();//function is used to create new router object
var marksmodel = require('../model/marksschema');
const bodyParser = require('body-parser');
const { request, response } = require("express");
router.use(bodyParser.json());
router.post('/addmarks', (request, response) => {
  console.log("request", request.body);
  var marksdatas = new marksmodel({
    srno: request.body.srno,
    StudentId: request.body.StudentID,
    CourseID: request.body.CourseID,
    Semester: request.body.Semester,
    Submark1: request.body.Submark1,
    Submark2: request.body.Submark2,
    Submark3: request.body.Submark3
  })

  console.log("record", marksdatas);
  marksdatas.save().then(success => {
    console.log("Successfully created a new mark", success);
    var object = {
      "statusCode": 200,
      "messsage": "Successfully create a new mark",
      "record": success
    }
    response.send(object);
  })
    .catch(error => {
      var object = {
        "statusCode": 500,
        "message": error
      };
      response.send(object);
    })
});

router.post('/getmarks', (request, response) => {
  marksmodel
    .find({ srno: request.body.srno }&&{ Semester: request.body.Semester })
    .lean()
    .exec()
    .then(function (data) {
      if (data) {
        var obj = {
          "statuscode": 200,
          "message": "successfully getting student marklist",
          "record": data

        };
        response.send(obj);
      }
    })
    .catch(function (error) {
      let obj = {
        "statuscode": 500,
        "message": error
      };
      response.send(obj);
    });
});
router.post('/getstudentmarks', (request, response) => {
  marksmodel
    .findOne({ studentID: request.body.studentID })
    .lean()
    .exec()
    .then(function (data) {
      if (data) {
        var obj = {
          "statuscode": 200,
          "message": "successfully get the marks",
          "record": data

        };
        response.send(obj);
      }
    })
    .catch(function (error) {
      let obj = {
        "statuscode": 500,
        "message": error
      };
      response.send(obj);
    });
});
router.post('/getsemesterlist', (request, response) => {
  marksmodel
    .find({ Semester: request.body.Semester })
    .lean()
    .exec()
    .then(function (data) {
      if (data) {
        var obj = {
          "statuscode": 200,
          "message": "successfully get semester wise marks",
          "record": data

        };
        response.send(obj);
      }
    })
    .catch(function (error) {
      let obj = {
        "statuscode": 500,
        "message": error
      };
      response.send(obj);
    });
});
router.post('/getcoursewiseList', (request, response) => {
  marksmodel
    .findOne({ CourseID: request.body.CourseID }&&{ Semester: request.body.Semester })
    .lean()
    .exec()
    .then(function (data) {
      if (data) {
        var obj = {
          "statuscode": 200,
          "message": "successfully get department wise marks",
          "record": data

        };
        response.send(obj);
      }
    })
    .catch(function (error) {
      let obj = {
        "statuscode": 500,
        "message": error
      };
      response.send(obj);
    });
});

module.exports = router;