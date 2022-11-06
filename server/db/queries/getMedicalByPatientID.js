const db = require("../../configs/db.config");

const getMedicalByPatientID = (patientID) => {
  const values = [patientID];
  const queryString = `SELECT * FROM medical_history WHERE patient_id = $1`;
  return db.query(queryString, values).then((data) => {
    return data.rows;
  });
};

module.exports = { getMedicalByPatientID };
