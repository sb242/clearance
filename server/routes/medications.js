// routes/users.js
const express = require("express");
const router = express.Router();
const medications = require("../db/queries/medications");

/* GET medications listing. */
router.get("/", (req, res) => {
  medications.getAllMedications().then((data) => {
    // console.log(data);
    res.json(data);
  });
});

module.exports = router;
