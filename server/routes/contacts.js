// routes/contacts.js
const express = require("express");
const router = express.Router();
const contacts = require("../db/queries/getContactsByPatientID");
const addContact = require("../db/queries/createNewContact");

/* GET all HPS contacts by patient id. */
router.get("/", (req, res) => {
  contacts.getContactsByPatientID(req.query.patientID).then((data) => {
    res.json({ contacts: data });
  });
});

/* POST add new HPS contact by patient id. */
router.post("/", (req, res) => {
  console.log('res', res);
  addContact.createNewContact().then((data) => {
    res.json({});
  });
});

module.exports = router;
