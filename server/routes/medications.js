// routes/users.js
const express = require("express");
const router = express.Router();
const medications = require("../db/queries/medications");

/* GET medications listing. */

// Will need to replace hard coded user ID once login feature complete

router.get("/", (req, res) => {
  medications.getMedicationByUserId(1).then((data) => {
    res.json(data);
  });
});

// put operation to add new medication to the database
router.put("/", (req, res) => {
  const patientId = 1;
  // access data received from the front end axios put request
  const data = req.body.data;
  // call addMedication query to add new record to the database
  medications.addMedication(data, patientId).then((result) => {
    // return 'successful' to trigger re-render on the front end
    res.json("successful");
  })
    .catch((err) => {
      console.log(err.message);
    })
})

/* DELETE medication by medications id. */
router.delete("/:id", (req, res) => {
  console.log(req.params);
  medications.deleteMedication(req.params.id).then((data) => {
    res.status(204).send("Medication deleted sucessfully");
  });
});

module.exports = router;
