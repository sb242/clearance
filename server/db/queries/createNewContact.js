const db = require("../../configs/db.config");

//TO DO: Change query into TRANSACTION BEGIN END
const createNewContact = (newContactObj) => {
  const values = [
    newContactObj.name,
    newContactObj.phone_number,
    newContactObj.specialty,
    newContactObj.email,
    newContactObj.address,
  ];
  const queryString = `
  INSERT INTO hps (name, phone_number, specialty, email, address)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING*;
  `;
  return db.query(queryString, values).then((data) => {
    const patientID = newContactObj.patient_id;
    const hpsID = data.rows[0].id;
    const values2 = [patientID, hpsID];
    const queryString2 = `
    INSERT INTO patients_health_professionals (patient_id, hp_id) VALUES ($1, $2)`;
    return db.query(queryString2, values2).then((data) => {
      return data.rows;
    });
  });
};

module.exports = { createNewContact };