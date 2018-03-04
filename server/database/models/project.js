const mongoose = require('../database.class');
const projectSchema = require('../schemes/project');

// model, schema, collection
const Project = mongoose.model('Project', projectSchema, 'projects');
module.exports = Project;
