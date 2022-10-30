// routes/users.js
const express = require("express");
const router = express.Router();
const users = require("../db/queries/users");

/* GET medications listing. */
router.get("/medications", (req, res) => {
  users.getAllUsers().then((data) => {
    console.log(data);
    res.json({ users: data });
  });
});

module.exports = router;
