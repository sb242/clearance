// db/queries/users.js

const db = require("../../configs/db.config");

const getAllPatients = () => {
  return db.query("SELECT * FROM patients;").then((data) => {
    return data.rows;
  });
};

const getPatientById = (id) => {
  return db.query("SELECT * FROM patients WHERE id = $1", [id]).then((data) => {
    return data.rows;
  });
};

module.exports = { getAllPatients, getPatientById };
