DROP TABLE IF EXISTS allergies CASCADE;

CREATE TABLE allergies (
    id SERIAL PRIMARY KEY NOT NULL,
   patient_id INTEGER REFERENCES patients(id) ON DELETE CASCADE,
   type VARCHAR(255) NOT NULL,
   anaphylactic BOOLEAN NOT NULL,
   sensitivity BOOLEAN NOT NULL,
   intolerance BOOLEAN NOT NULL
)