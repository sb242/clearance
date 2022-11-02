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

router.put("/:id", (req, res) => {
  const patientId = 1;
  // access data received from the front end axios put request
  const data = req.body.data;
  const medId = req.body.id;
  // console.log("data", data);
  // call addMedication query to add new record to the database
  medications.editMedication(data, patientId, medId).then((result) => {
    // return 'successful' to trigger re-render on the front end
    res.json("successful");
  })
    .catch((err) => {
      console.log(err.message);
    })
})

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

module.exports = router;
