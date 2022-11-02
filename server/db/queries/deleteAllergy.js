const db = require("../../configs/db.config");

const deleteAllergy = (allergyID) => {
  const values = [allergyID];
  const queryString = `DELETE FROM allergies WHERE id = $1;`;
  return db.query(queryString, values).then((data) => {
    return data.rows;
  });
};

module.exports = { deleteAllergy };