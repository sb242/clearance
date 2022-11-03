// db/queries/medications.js

const db = require("../../configs/db.config");

const getAllMedications = () => {
  return db.query("SELECT * FROM medications;").then((data) => {
    return data.rows;
  });
};

// query to be modified to join the contacts table to return additional field - contact name

const getMedicationByUserId = (id) => {
  return db.query(
    `SELECT medications.id as key,* FROM medications
    INNER JOIN hps ON hps.id = medications.hp_id
    WHERE patient_id = $1
    ORDER BY start_date DESC;`, [id]).then((data) => {
      console.log("data.rows", data.rows);
      return data.rows;
    });
};

const addMedication = (data, user) => {
  return db.query(`
  INSERT INTO medications (patient_id, hp_id, med_name, purpose, dosage_number, dosage_unit, frequency, start_date, end_date, last_modified)
  VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
  RETURNING *;
  `, [user, data.hp_id, data.med_name, data.purpose, data.dosage_number, data.dosage_unit, data.frequency, data.readableStartDate, data.readableEndDate, new Date()]).then((data) => {
    return data;
  })
}

module.exports = { getAllMedications, getMedicationByUserId, addMedication };
