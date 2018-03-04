const mongoose = require('mongoose');

const types = mongoose.Schema.Types;

module.exports = new mongoose.Schema({
  _id: {
    type: types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  short_description: { type: String },
  long_description: { type: String },
  images: { type: Array },
  cover_image: {
    type: String,
    required: true,
  },
  date: { type: Date },
  slug: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  hosted_link: { type: String },
  github_link: { type: String },
});
