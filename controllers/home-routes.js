const router = require('express').Router();
const {User, BlogPost, Comment} =require('../models')
const logdivider = () => console.log(`===========================================================\n=================================================`)
router.get('/', async (req , res) => {
  try {
    logdivider()
    console.log("get homeroute hit")
    const blogData = await BlogPost.findAll()
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
    const blogData = await BlogPost.findByPk(req.params.id)
    console.log(blogData)
    
 } catch (error) {
    logdivider()
    console.log("error at / blog by id")
    console.log(error)
    
 }


})








module.exports = router;