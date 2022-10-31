const db = require("../../configs/db.config");

const createNewContact = (newContactObj, patient_id) => {
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
    const patientID = patient_id;
    const hpsID = data.rows[0].id;
    const values2 = [patientID, hpsID];
    const queryString2 = `
    INSERT INTO patients_health_professionals (patient_id, hp_id) VALUES ($1, $2)`;
    return db.query(queryString2, values2).then((data) => {
      console.log("data.rows", data);
      return data.rows;
    });
  });
};

//CREATE TRIGGER
//ACID DATABASE RULES
//TRANSACTION BEGIN END FUNCTION

module.exports = { createNewContact };
