// routes/users.js
const express = require("express");
const { nodeMailer } = require("../lib/nodemailer");
const router = express.Router();
const contactsQueries = require("../db/queries/contacts");

router.post("/send", (req, res) => {
  const contactName = req.body.contactName;
  const patientFirstName = req.body.patient.first_name;
  const patientLastName = req.body.patient.last_name;
  const subject = `Clearance: Your patients updated records`;
  const body = `Hello ${contactName},<br><br>Patient: ${patientFirstName} ${patientLastName} has sent you their updated records.<br><br>Please find this attached as a pdf.<br><br>Thank you,<br><br>Clearance`;

  contactsQueries.getEmailByContactName(contactName).then((data) => {
    console.log("data", data);
    const email = data[0].email;
    console.log("email", email);
    nodeMailer(email, subject, body).catch(console.error);
  });
  res.sendStatus(200);
});

module.exports = router;
