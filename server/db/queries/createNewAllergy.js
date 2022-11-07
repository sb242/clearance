const db = require("../../configs/db.config");

const createNewAllergy = (newAllergyObj) => {
  const values = [
    newAllergyObj.patient_id,
    newAllergyObj.type,
    newAllergyObj.anaphylactic,
    newAllergyObj.sensitivity,
    newAllergyObj.intolerance,
  ];
  const queryString = `INSERT INTO allergies (patient_id, type, anaphylactic, sensitivity, intolerance) 
  VALUES ($1, $2, $3, $4, $5) 
  RETURNING*;`;
  return db.query(queryString, values).then((data) => {
    return data.rows;
  });
};

module.exports = { createNewAllergy };
