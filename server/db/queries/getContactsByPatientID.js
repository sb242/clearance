const db = require("../../configs/db.config");

const getContactsByPatientID = (patientID) => {
  const values = [patientID];
  const queryString = `SELECT * FROM hps WHERE hps.patient_id = $1;`;
  return db.query(queryString, values)
  .then(data => {
    console.log(`data.rows: `, data.rows);
    return data.rows;
  });
};


module.exports = { getContactsByPatientID };