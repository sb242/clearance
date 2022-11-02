DROP TABLE IF EXISTS allergies CASCADE;

CREATE TABLE allergies (
    id SERIAL PRIMARY KEY NOT NULL,
   patient_id INTEGER REFERENCES patients(id) ON DELETE CASCADE,
   type VARCHAR(255) NOT NULL,
   anaphylactic BOOLEAN DEFAULT FALSE,
   sensitivity BOOLEAN DEFAULT FALSE,
   intolerance BOOLEAN DEFAULT FALSE
)