DROP TABLE IF EXISTS monstersLrg CASCADE;
CREATE TABLE monstersLrg (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  picture VARCHAR(255),
  threatLevel INTEGER,
  fireWeakness INTEGER,
  waterWeakness INTEGER,
  thunderWeakness INTEGER,
  iceWeakness INTEGER,
  dragonWeakness INTEGER,
  severCutDamage INTEGER,
  bluntDamage INTEGER,
  ammoDamage INTEGER
)