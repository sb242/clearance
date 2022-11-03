var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var contactsRouter = require("./routes/contacts");
var medicationsRouter = require("./routes/medications");
var contactsRouter = require("./routes/contacts");
var patientsRouter = require("./routes/patients");
const pdfRouter = require("./routes/pdf");
var allergiesRouter = require("./routes/allergies");
var medicalRouter = require("./routes/medical");
const emailRouter = require("./routes/sendEmail");

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
app.use("/pdf", pdfRouter);
app.use("/allergies", allergiesRouter);
app.use("/medical", medicalRouter);
app.use("/email", emailRouter);

module.exports = app;
