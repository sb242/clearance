const db = require("../../configs/db.config");

const createNewMedical = (newMedicalObj) => {
  const values = [
    newMedicalObj.patient_id,
    newMedicalObj.condition,
    newMedicalObj.start_date,
    newMedicalObj.end_date,
  ];
  const queryString = `INSERT INTO medical_history (patient_id, condition, start_date, end_date) 
  VALUES ($1, $2, $3, $4) 
  RETURNING*;`;
  return db.query(queryString, values).then((data) => {
    return data.rows;
  })
};

module.exports = { createNewMedical };