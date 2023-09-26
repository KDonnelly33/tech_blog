const router = require('express').Router();
const {BlogPost} = require('../models');

router.get('/', async (req , res) => {
  try {
    const blogData = await BlogPost.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    const blogs = blogData.map(blog => blog.get({plain:true}))
    res.render("dashboard", {blogs,
    logged_in: req.session.logged_in
    })
  } catch (error) {
    console.log(error)
  }
}
);


module.exports = router;

