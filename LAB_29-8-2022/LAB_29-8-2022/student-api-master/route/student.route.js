const express = require("express");
const router = express.Router();
const studentController = require("../controller/student.controller");
const Student = require("../model/student.model");

router.get("/", (req, res) => {
  studentController.getAll(req, res);
});
router.get("/:id", (req, res) => {
  studentController.getByID(req, res);
});
//create
router.post("/", (req, res) => {
  studentController.create(req, res);
});
//update
router.put("/", (req, res) => {
  studentController.update(req, res);
});
//delete
router.delete("/:id", (req, res) => {
  studentController.delete(req, res);
});
module.exports = router;
