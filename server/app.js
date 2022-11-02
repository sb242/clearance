var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
let cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var contactsRouter = require("./routes/contacts");
var medicationsRouter = require("./routes/medications");
var contactsRouter = require("./routes/contacts");
var allergiesRouter = require("./routes/allergies");
var medicalRouter = require("./routes/medical");

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
app.use("/allergies", allergiesRouter);
app.use("/medical", medicalRouter);

module.exports = app;
