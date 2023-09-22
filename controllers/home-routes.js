const router = require('express').Router();
const {User, BlogPost, Comment} =require('../models')
const logdivider = () => console.log(`===========================================================\n=================================================`)
router.get('/', async (req , res) => {
  try {
    logdivider()
    console.log("get homeroute hit")
    const blogData = await BlogPost.findAll({
        include: [User],

    })
    logdivider()
    const blogs = blogData.map(blog => blog.get({plain:true}))
    console.log(blogs)


    res.render("homepage", {blogs})
  } catch (error) {
    logdivider()
    console.log("error at / homeroute")
    console.log(error)
    
  }
} )

router.get('/blogs/:id', async (req,res) => {
 try {
    logdivider()
    console.log("blog by id hit")
    console.log(req.params)
    const blogData = await BlogPost.findByPk(req.params.id, {
    //  include User and Comment data here
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });
    if (blogData) {
      const blog = blogData.get({ plain: true });
      console.log(blog)
      res.render('singlepost', { blog });
    } else {
      res.status(404).end();
    }
  } catch (err) { 
    res.status(500).json(err);
  }
}
);








module.exports = router;