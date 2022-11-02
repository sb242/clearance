const db = require("../../configs/db.config");

const getContactsByPatientID = (patientID) => {
  const values = [patientID];
  const queryString = `SELECT * FROM hps JOIN patients_health_professionals ON hps.id = patients_health_professionals.hp_id WHERE patient_id = $1;`;
  return db.query(queryString, values).then((data) => {
    return data.rows;
  });
};

module.exports = { getContactsByPatientID };
