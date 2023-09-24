const router = require('express').Router();
const { BlogPost } = require('../../models');

router.post("/", async (req,res)=>{
    console.log("Post route hit!")
    console.log(req.body)
   const body = req.body
// ill need to unharcoded this later
   try{
    const newBlog = await BlogPost.create(body, userId = "3")
    res.json(newBlog)
   } catch (error){
       console.log(error)
       res.json(error)
   }
}
)


module.exports = router;