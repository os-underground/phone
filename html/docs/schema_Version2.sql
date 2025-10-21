-- Esquema SQL simple para guardar KB
CREATE TABLE IF NOT EXISTS kb (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  content TEXT,
  source TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);