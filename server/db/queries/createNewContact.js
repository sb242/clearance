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
    const queryString2 = `
    INSERT INTO patients_health_professionals (patient_id, hp_id) VALUES (${patientID}, ${hpsID})`
    return db.query(queryString2).then((data) => {
      console.log("data.rows", data);
      return data.rows;
    })
  });
};

module.exports = { createNewContact };

//create trigger on db would have been easier 
