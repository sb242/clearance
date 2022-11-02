// routes/contacts.js
const express = require("express");
const router = express.Router();
const contacts = require("../db/queries/getContactsByPatientID");
const addContact = require("../db/queries/createNewContact");
const deleteContact = require("../db/queries/deleteContact");

/* GET all HPS contacts by patient id. */
router.get("/", (req, res) => {
  contacts.getContactsByPatientID(req.query.patientID).then((data) => {
    res.json({ contacts: data });
  });
});

/* POST add new HPS contact by patient id. */
router.post("/", (req, res) => {
  addContact.createNewContact(req.body).then((data) => {
    res.status(201).send("New contact created");
  });
});

/* DELETE HPS contact by hps id. */
router.delete("/:id", (req, res) => {
  console.log(req.params);
  deleteContact.deleteContact(req.params.id).then((data) => {
    res.status(204).send("Contact deleted sucessfully");
  });
});

module.exports = router;
