DROP TABLE IF EXISTS hps CASCADE;


CREATE TABLE hps (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) DEFAULT NULL,
  specialty VARCHAR(255) DEFAULT NULL,
  email VARCHAR(255) DEFAULT NULL,
  address VARCHAR(255) DEFAULT NULL
);