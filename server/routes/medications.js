// routes/users.js
const express = require("express");
const router = express.Router();
const medications = require("../db/queries/medications");

/* GET medications listing. */

// Will need to replace hard coded user ID once login feature complete

router.get("/", (req, res) => {
  medications.getMedicationByUserId(1).then((data) => {
    res.json(data);
  });
});

module.exports = router;
