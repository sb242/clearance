// routes/medical.js
const express = require("express");
const router = express.Router();
const medical = require("../db/queries/getMedicalByPatientID");
const addMedical = require("../db/queries/createNewMedical");
const deleteMedical = require("../db/queries/deleteMedical");

/* GET all Medical by patient id. */
router.get("/", (req, res) => {
  medical.getMedicalByPatientID(req.query.patientID).then((data) => {
    console.log("Medical query: ", data);
    res.json({ medical: data });
  });
});

/* POST add new Medical condition by patient id. */
router.post("/", (req, res) => {
  console.log("Test: ", req);
  addMedical.createNewMedical(req.body).then((data) => {
    res.status(201).send("New medical history condition created");
  });
});

/* DELETE Medical condition by patients id. */
router.delete("/:id", (req, res) => {
  console.log(req.params);
  deleteMedical.deleteMedical(req.params.id).then((data) => {
    res.status(204).send("Medical condition deleted sucessfully");
  });
});

module.exports = router;
