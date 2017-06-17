
class Project {
  constructor(project) {
    this.id = project.id;
    this.name = project.name;
    return this;
  }
}

exports.all = async (db) => {
  const sql = `SELECT id, name, created_at, updated_at FROM projects
                ORDER BY created_at::date`;
  const data = await db.any(sql, true);
  return data.map(d => new Project(d));
};

exports.one = async (db, id) => {
  const sql = `SELECT id, name, created_at, updated_at FROM projects 
                WHERE id = $1`;
  const data = await db.one(sql, id);
  return new Project(data);
};
