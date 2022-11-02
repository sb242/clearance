DROP TABLE IF EXISTS medications CASCADE;

CREATE TABLE medications (
  id SERIAL PRIMARY KEY NOT NULL,
  patient_id INTEGER REFERENCES patients(id) ON DELETE CASCADE,
  hp_id INTEGER REFERENCES hps(id) ON DELETE CASCADE,
  med_name VARCHAR(255) NOT NULL,
  purpose VARCHAR(255) NOT NULL,
  dosage_number INTEGER,
  dosage_unit VARCHAR(255),
  frequency VARCHAR(255),
  start_date DATE DEFAULT NULL,
  end_date DATE DEFAULT NULL,
  last_modified DATE NOT NULL
);
