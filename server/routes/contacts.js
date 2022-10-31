// routes/contacts.js
const express = require("express");
const router = express.Router();
const contacts = require("../db/queries/getContactsByPatientID");

/* GET all HPS contacts by patient id. */
router.get("/", (req, res) => {
  //Might need to change patientID when user auth completed
  contacts.getContactsByPatientID(req.query.patientID).then((data) => {
    console.log("Contacts query: ", data);
    res.json({ contacts: data });
  });
});

module.exports = router;
