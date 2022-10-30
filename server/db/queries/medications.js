// db/queries/medications.js

const db = require("../../configs/db.config");

const getAllMedications = () => {
  return db.query("SELECT * FROM users;").then((data) => {
    return data.rows;
  });
};

const getMedicationByUserId = (id) => {
  return db.query("SELECT * FROM users; WHERE id = $1", [id]).then((data) => {
    return data.rows;
  });
};

module.exports = { getAllMedications, getMedicationByUserId };
