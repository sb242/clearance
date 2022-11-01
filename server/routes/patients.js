// routes/users.js
const express = require("express");
const router = express.Router();
const users = require("../db/queries/patients");

/* GET users listing. */
router.get("/", (req, res) => {
  users.getAllPatients().then((data) => {
    console.log(data);
    res.json(data);
  });
});

router.get("/:id", (req, res) => {
  users.getPatientById(req.params.id).then((data) => {
    console.log(data);
    res.json(data);
  });
});

module.exports = router;
