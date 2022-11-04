// routes/allergies.js
const express = require("express");
const router = express.Router();
const allergies = require("../db/queries/getAllergiesByPatientID");
const addAllergy = require("../db/queries/createNewAllergy");
const deleteAllergy = require("../db/queries/deleteAllergy");

/* GET all Allergies by patient id. */
router.get("/", (req, res) => {
  allergies.getAllergiesByPatientID(req.query.patientID).then((data) => {
    console.log("Allergies query: ", data);
    res.json({ allergies: data });
  });
});

/* POST add new Allergy by patient id. */
router.post("/", (req, res) => {
  addAllergy.createNewAllergy(req.body).then((data) => {
    res.status(201).send("New allergy created");
  });
});

/* DELETE Allergy by patients id. */
router.delete("/:id", (req, res) => {
  console.log(req.params);
  deleteAllergy.deleteAllergy(req.params.id).then((data) => {
    res.status(204).send("Allergy deleted sucessfully");
  });
});


module.exports = router;
