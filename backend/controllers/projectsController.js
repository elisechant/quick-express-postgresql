

const Project = require('./../models/project');


exports.index = async (req, res, next) => {
  const projects = await Project.all(req.db);
  res.render('projects/index', {
    title: 'Projects',
    projects,
  })
};

exports.detail = async (req, res, next) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    throw Error('Invalid Project id');
  }
  try {
    const project = await Project.one(req.db, id);
    res.format({
      'text/html': () => {
        res.render('projects/detail', {
          title: project.name,
          project: project,
        })
      },
      'application/json': () => res.json(project),
    })
  } catch(err) {
    if (err.name === 'QueryResultError') {
      err = new Error('Project not found');
      err.status = 404;
    }
    throw err;
  }
};
