const db = require("../../configs/db.config");

const editMedical = (data, medicalId) => {
  return db.query(`
  UPDATE medical_history
  SET condition = $1,
  start_date = $2,
  end_date = $3
  WHERE id = $4
  RETURNING*
  ;
  `, [data.condition, data.start_date, data.end_date, medicalId]).then((data) => {
    return data.rows;
  })
};

module.exports = { editMedical };
