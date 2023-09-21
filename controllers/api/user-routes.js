const router = require('express').Router();
const { User } = require('../../models');
// create new user using a post route
router.post("/", async (req,res)=>{
    console.log("Post route hit!")
    console.log(req.body)
    res.json({message:"Post route hit!"})
})  
    // try {
    //     const dbUserData = await User.create({
    //       username: req.body.username,
    //       email: req.body.email,
    //       password: req.body.password,
    //     });
    
    //     req.session.save(() => {
    //       req.session.loggedIn = true;
    
    //       res.status(200).json(dbUserData);
    //     });
    //   } catch (err) {
    //     console.log(err);
    //     res.status(500).json(err);
    //   }
    // });



module.exports = router;
