const Project = require('../database/models/project');

function getAllProjects() {
  return new Promise((resolve, reject) => {
    Project.find().sort('-date')
      .then((projects) => {
        resolve(projects);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function getOneProject(slug) {
  return new Promise((resolve, reject) => {
    Project.findOne({ slug })
      .then((project) => {
        if (project) {
          return resolve(project);
        }
        return resolve({});
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// export all repo functions
module.exports = {
  getAllProjects,
  getOneProject,
};
