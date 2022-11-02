const express = require("express");
const router = express.Router();
const pdf = require("html-pdf");
const pdfTemplate = require("../documents");
var path = require("path");

const pdfSaveLocation = path.join(__dirname, "../result.pdf");

router.post("/create-pdf", (req, res) => {
  console.log("data", req.body);
  pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
    if (err) {
      return Promise.reject();
    }
    res.sendStatus(200);
    return Promise.resolve();
  });
});

router.get("/fetch-pdf", (req, res) => {
  res.sendFile(pdfSaveLocation);
});

module.exports = router;
