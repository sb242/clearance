// routes/users.js
const express = require("express");
const router = express.Router();
const users = require("../db/queries/users");

/* GET users listing. */
router.get("/", (req, res) => {
  users.getAllUsers().then((data) => {
    res.json({ users: data });
  });
});

router.get("/:id", (req, res) => {
  users.getUserById(req.params.id).then((data) => {
    console.log(data);
    res.json({ user: data });
  });
});

module.exports = router;
