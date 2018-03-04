const mongoose = require('../database.class');
const blogSchema = require('../schemes/blog');

// model, schema, collection
const Blog = mongoose.model('Blog', blogSchema, 'blogposts');
module.exports = Blog;
