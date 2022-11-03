const db = require("../../configs/db.config");

const getEmailByContactName = (name) => {
  const values = [name];
  const queryString = `SELECT email FROM hps WHERE name = $1`;
  return db.query(queryString, values).then((data) => {
    console.log(data.rows);
    return data.rows;
  });
};

module.exports = { getEmailByContactName };
