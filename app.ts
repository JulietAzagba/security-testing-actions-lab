type DB = { query: (q: string) => Promise<any> };
async function save(db: DB, data: string) {
  const q = `INSERT INTO items (val) VALUES ('${data}')`; // injection risk
  await db.query(q);
}
