const db = require("../../configs/db.config");

const editAllergy = (data, allergyId) => {
  console.log("data", data);
  console.log("id", allergyId)
  return db.query(`
  UPDATE allergies
  SET type = $1,
  anaphylactic = $2,
  sensitivity = $3,
  intolerance = $4
  WHERE id = $5
  RETURNING*
  ;
  `, [data.type, data.anaphylactic, data.sensitivity, data.intolerance, allergyId]).then((data) => {
    return data.rows;
  })
};

module.exports = { editAllergy };
