var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");

const pdfTemplate = require("./documents");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var contactsRouter = require("./routes/contacts");
var medicationsRouter = require("./routes/medications");
var contactsRouter = require("./routes/contacts");
var patientsRouter = require("./routes/patients");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/contacts", contactsRouter);
app.use("/medications", medicationsRouter);
app.use("/contacts", contactsRouter);
app.use("/patients", patientsRouter);

app.post("/create-pdf", (req, res) => {
  console.log("data", req.body);
  pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
    if (err) {
      return Promise.reject();
    }
    console.log("returning");
    res.sendStatus(200);
    return Promise.resolve();
  });
});

app.get("/fetch-pdf", (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`);
});
module.exports = app;
