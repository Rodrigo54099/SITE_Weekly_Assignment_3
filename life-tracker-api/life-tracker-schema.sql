CREATE TABLE users (
  id                    SERIAL PRIMARY KEY,
  password              TEXT NOT NULL,
  email                 TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
  is_admin              BOOLEAN NOT NULL DEFAULT FALSE,
  created_at            TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE sleep (
  id                    SERIAL PRIMARY KEY,
  img_url               TEXT NOT NULL,
  sleep_date            TEXT NOT NULL,
  sleep_start           TEXT NOT NULL,
  sleep_end             TEXT NOT NULL,
  user_id               INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE  nutrition (
  id                    SERIAL PRIMARY KEY,
  img_url               TEXT NOT NULL,
  food_name             TEXT NOT NULL,
  food_calories         INTEGER NOT NULL,
  food_quantity         INTEGER NOT NULL,
  user_id               INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE exercise (
  id                    SERIAL PRIMARY KEY,
  img_url               TEXT NOT NULL,
  exercise_category     TEXT NOT NULL,
  exercise_name         TEXT NOT NULL,
  exercise_duration     INTEGER NOT NULL,
  exercise_intensity    INTEGER NOT NULL,
  user_id               INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
);