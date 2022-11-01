const db = require("../../configs/db.config");

const deleteContact = (contactID) => {
  const values = [contactID];
  const queryString = `DELETE FROM hps WHERE id = $1;`;
  return db.query(queryString, values).then((data) => {
    return data.rows;
  })
};

module.exports = { deleteContact };
