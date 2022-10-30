// db/queries/medications.js

const db = require("../../configs/db.config");

const getAllMedications = () => {
  return db.query("SELECT * FROM medications;").then((data) => {
    return data.rows;
  });
};

const getMedicationByUserId = (id) => {
  return db.query(
    "SELECT * FROM medications WHERE patient_id = $1 ORDER BY start_date DESC;", [id]).then((data) => {
      return data.rows;
    });
};

module.exports = { getAllMedications, getMedicationByUserId };
