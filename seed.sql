CREATE DATABASE river_gauge;

\c river_gauge

CREATE SEQUENCE stations_id_seq;
CREATE SEQUENCE measurements_id_seq;

CREATE TABLE  stations (
  id int PRIMARY KEY NOT NULL DEFAULT nextval('stations_id_seq'),
  name text,
  lat numeric,
  lon numeric,
  created_at timestamptz NOT NULL DEFAULT NOW(),
  updated_at timestamptz
);

CREATE TABLE measurements (
  id int PRIMARY KEY NOT NULL DEFAULT nextval('measurements_id_seq'),
  label text,
  unit text,
  value numeric,
  station_id int NOT NULL REFERENCES stations,
  created_at timestamptz NOT NULL DEFAULT NOW(),
  updated_at timestamptz
);

INSERT INTO stations (name, lat, lon, created_at, updated_at) VALUES ('Fourmile Canyon Creek Near Sunshine, CO', -105.348777, 40.057611, NOW(), NOW());
INSERT INTO stations (name, lat, lon, created_at, updated_at) VALUES ('Fourmile Creek at Orodell, CO', -105.32625, 40.018666, NOW(), NOW());
INSERT INTO stations (name, lat, lon, created_at, updated_at) VALUES ('Boulder Creek at North 75th St', -105.178875, 40.051651, NOW(), NOW());

INSERT INTO measurements (label, unit, value, station_id, created_at, updated_at) VALUES ('River height', 'ft', 5.1, 1, NOW(), NOW());
INSERT INTO measurements (label, unit, value, station_id, created_at, updated_at) VALUES ('River height', 'ft', 5.9, 1, NOW(), NOW());
INSERT INTO measurements (label, unit, value, station_id, created_at, updated_at) VALUES ('River height', 'ft', 6.0, 1, NOW(), NOW());
INSERT INTO measurements (label, unit, value, station_id, created_at, updated_at) VALUES ('River height', 'ft', 4.9, 2, NOW(), NOW());
INSERT INTO measurements (label, unit, value, station_id, created_at, updated_at) VALUES ('River height', 'ft', 4.8, 2, NOW(), NOW());