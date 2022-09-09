//npm install express
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 4000;
const studentController = require("./controller/student.controller");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:4200" }));
// route localhost:4000/
app.get("/", (req, res) => {
  res.json({ message: "Hello world", status: 200 });
});
const studentRoute = require("./route/student.route");
app.use("/api/v1/student", studentRoute);

app.listen(PORT, () => {
  console.log("Server on ... http://localhost:" + PORT);
});
