const Student = require("../model/student.model");
const studentModel = require("../model/student.model");

exports.getAll = (req, res) => {
  studentModel.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error",
      });
    else res.status(200).send(data);
  });
};
exports.getByID = (req, res) => {
  studentModel.getByID(req.params.id, (err, data) => {
    if (err) {
      if (err.kind == "not_found") {
        res.status(404).send({
          status: 404,
          message: "Student not found",
        });
      } else {
        res.status(500).send({
          message: "Error on getByID",
        });
      }
    } else {
      res.status(200).send({
        status: 200,
        message: "done",
        data: data,
      });
    }
  });
};
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Student can not be empty.",
    });
  }
  const newStudent = new Student({
    id: -1,
    studentid: req.body.studentid,
    name: req.body.name,
    major: req.body.major,
  });
  Student.create(new Student(req.body), (err, data) => {
    if (!err) {
      res.status(200).send(data);
    }
  });
};
exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Student can not be empty.",
    });
  }
  Student.update(new Student(req.body), (err, data) => {
    if (err) {
    } else {
      res.status(200).send(data);
    }
  });
};
exports.delete = (req, res) => {
  const deleteid = req.params.id;
  console.log(deleteid);
  Student.delete(deleteid, (err, data) => {
    if (err) {
      console.log(err.message);
    } else {
      res.send({ message: "Student data was deleted" });
    }
  });
};
