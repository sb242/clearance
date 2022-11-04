// routes/medications.js
const express = require("express");
const router = express.Router();
const medications = require("../db/queries/medications");

router.get("/", (req, res) => {
  medications.getMedicationByUserId(1).then((data) => {
    res.json(data);
  });
});

router.put("/:id", (req, res) => {
  const patientId = 1;
  const data = req.body.data;
  const medId = req.body.id;
  medications
    .editMedication(data, patientId, medId)
    .then((result) => {
      res.json("successful");
    })
    .catch((err) => {
      console.log(err.message);
    });
});

router.post("/", (req, res) => {
  const patientId = 1;
  const data = req.body.data;
  medications
    .addMedication(data, patientId)
    .then((result) => {
      res.json("successful");
    })
    .catch((err) => {
      console.log(err.message);
    });
});

router.delete("/:id", (req, res) => {
  console.log(req.params);
  medications.deleteMedication(req.params.id).then((data) => {
    res.status(204).send("Medication deleted sucessfully");
  });
});

module.exports = router;
