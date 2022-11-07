const db = require("../../configs/db.config");

const deleteMedical = (medicalID) => {
  const values = [medicalID];
  const queryString = `DELETE FROM medical_history WHERE id = $1;`;
  return db.query(queryString, values).then((data) => {
    return data.rows;
  });
};

module.exports = { deleteMedical };
