const Blog = require('../database/models/blog');

function getAllBlogPosts() {
  return new Promise((resolve, reject) => {
    Blog.find().sort('-date')
      .then((blogposts) => {
        resolve(blogposts);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function getOneBlogpost(slug) {
  return new Promise((resolve, reject) => {
    Blog.findOne({ slug })
      .then((blogpost) => {
        if (blogpost) {
          return resolve(blogpost);
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
  getAllBlogPosts,
  getOneBlogpost,
};
