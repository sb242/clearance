// routes/allergies.js
const express = require("express");
const router = express.Router();
const allergies = require("../db/queries/getAllergiesByPatientID");

/* GET all Allergies by patient id. */
router.get("/", (req, res) => {
  allergies.getAllergiesByPatientID(req.query.patientID).then((data) => {
    console.log("Allergies query: ", data);
    res.json({ allergies: data });
  });
});

module.exports = router;
