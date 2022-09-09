const sql = require("../database/db");

function Student(student) {
  this.id = student.id;
  this.studentid = student.studentid;
  this.name = student.name;
  this.major = student.major;
}
//get all student from database
Student.getAll = (result) => {
  sql.query("SELECT * FROM students", (err, res) => {
    if (err) {
      console.log("error on getAll()", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};
Student.getByID = (id, result) => {
  sql.query(`SELECT * FROM students WHERE id = ${id}`, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    if (res.length > 0) {
      result(null, res);
    } else {
      result({ kind: "not_found" }, null);
    }
  });
};
Student.create = (newStudent, result) => {
  sql.query("INSERT INTO students SET ?", newStudent, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...newStudent });
  });
};
Student.update = (existStudent, result) => {
  sql.query(
    "UPDATE students SET name = ?, studentid = ?, major = ? WHERE id = ?",
    [
      existStudent.name,
      existStudent.studentid,
      existStudent.major,
      existStudent.id,
    ],
    (err, res) => {
      if (err) {
        result(err, { message: "error on student.update()" });
        return;
      }
      result(null, { existStudent });
    }
  );
};
Student.delete = (id, result) => {
  sql.query("DELETE FROM students WHERE id = ?", id, (err, res) => {
    if (err) {
      result(err, { message: "error on student.delete()" });
      return;
    }
    result(null, res);
  });
};
module.exports = Student;
