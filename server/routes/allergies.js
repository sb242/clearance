// routes/allergies.js
const express = require("express");
const router = express.Router();
const allergies = require("../db/queries/getAllergiesByPatientID");
const addAllergy = require("../db/queries/createNewAllergy");
const deleteAllergy = require("../db/queries/deleteAllergy");
const editAllergy = require("../db/queries/editAllergy");

/* GET all Allergies by patient id. */
router.get("/", (req, res) => {
  allergies.getAllergiesByPatientID(req.query.patientID).then((data) => {
    res.json({ allergies: data });
  });
});

/* PUT edit existing allergy by patient id. */

router.put("/:id", (req, res) => {
  const data = req.body.data;
  const allergyId = req.body.id;
  editAllergy
    .editAllergy(data, allergyId)
    .then((result) => {
      res.json("successful");
    })
    .catch((err) => {
      console.log(err.message);
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
  deleteAllergy.deleteAllergy(req.params.id).then((data) => {
    res.status(204).send("Allergy deleted sucessfully");
  });
});

module.exports = router;
