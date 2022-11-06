const db = require("../../configs/db.config");

const getAllergiesByPatientID = (patientID) => {
  const values = [patientID];
  const queryString = `SELECT * FROM allergies WHERE patient_id = $1`;
  return db.query(queryString, values).then((data) => {
    return data.rows;
  });
};

module.exports = { getAllergiesByPatientID };
