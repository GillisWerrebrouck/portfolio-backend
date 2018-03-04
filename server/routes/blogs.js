const express = require('express');
const blogRepo = require('../repositories/blog.repo');

const router = express.Router();

// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => {
  blogRepo.getAllBlogPosts().then((blogposts) => {
    res.json(blogposts);
  }).catch((err) => {
    res.json(err);
  });
});

// eslint-disable-next-line no-unused-vars
router.get('/:slug', (req, res, next) => {
  blogRepo.getOneBlogpost(req.params.slug).then((blogpost) => {
    res.json(blogpost);
  }).catch((err) => {
    res.json(err);
  });
});

module.exports = router;
