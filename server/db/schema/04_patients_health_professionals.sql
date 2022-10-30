DROP TABLE IF EXISTS patients_health_professionals CASCADE;

CREATE TABLE patients_health_professionals (
  id SERIAL PRIMARY KEY NOT NULL,
   patient_id INTEGER REFERENCES patients(id) ON DELETE CASCADE,
   hp_id INTEGER REFERENCES hps(id) ON DELETE CASCADE
);