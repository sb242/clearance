// routes/contacts.js
const express = require("express");
const router = express.Router();
const contacts = require("../db/queries/getContactsByPatientID");
const addContact = require("../db/queries/createNewContact");
const deleteContact = require("../db/queries/deleteContact");
const editContact = require("../db/queries/editContact");

/* GET all HPS contacts by patient id. */
router.get("/", (req, res) => {
  contacts.getContactsByPatientID(req.query.patientID).then((data) => {
    res.json({ contacts: data });
  });
});

router.put("/:id", (req, res) => {
  // access data received from the front end axios put request
  const data = req.body.data;
  const contactId = req.body.id;
  console.log("contactID", contactId);
  console.log("data", data);
  // call addMedication query to add new record to the database
  editContact.editContact(data, contactId).then((result) => {
    // return 'successful' to trigger re-render on the front end
    res.json("successful");
  })
    .catch((err) => {
      console.log(err.message);
    })
})

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
