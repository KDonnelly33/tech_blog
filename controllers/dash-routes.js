const router = require('express').Router();
const {BlogPost} = require('../models');

router.get('/', async (req , res) => {
  try {
    const blogData = await BlogPost.findAll();
    const blogs = blogData.map(blog => blog.get({plain:true}))
    res.render("dashboard", {blogs})
  } catch (error) {
    console.log(error)
  }
}
);


module.exports = router;

