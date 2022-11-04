const db = require("../../configs/db.config");

const editContact = (data, contactId) => {
  console.log(data);
  console.log(contactId);
  return db.query(`
  UPDATE hps
  SET name = $1,
  phone_number = $2,
  specialty = $3,
  email = $4,
  address = $5
  WHERE id = $6
  RETURNING*
  ;
  `, [data.name, data.phone_number, data.specialty, data.email, data.address, contactId]).then((data) => {
    console.log("query data", data);
    return data.rows;
  })
};

module.exports = { editContact };
