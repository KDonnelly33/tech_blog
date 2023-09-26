const router = require('express').Router();
const { User } = require('../../models');
// create new user using a post route
router.post("/", async (req,res)=>{
    console.log("Post route hit!")
    console.log(req.body)
    try {
     const newUser = await User.create({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        });
        req.session.save(()=>{
            req.session.user_id = newUser.id;
            req.session.username = newUser.username;
            req.session.logged_in = true;
            res.json(newUser);
        });

    }   catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    }
);

router.post("/login", async (req,res)=>{
    try {
        const userData = await User.findOne({where:{email:req.body.email}});
        if(!userData){
            res.status(400).json({message:"Incorrect username or passwrod"});
        
            return
        }
            
            const passwordData = await userData.checkPassword(req.body.password);   
            if(!passwordData){
                res.status(400).json({message:"Incorrect username or passwrod"});
                return;
            }
            req.session.save(()=>{
              req.session.user_id = userData.id;
              req.session.username = userData.username;
              req.session.logged_in = true;
              res.json(userData);
          });    }
    
    catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });

    router.post('/logout', (req, res) => {
        if (req.session.logged_in) {
          req.session.destroy(() => {
            res.status(204).end();
          });
        } else {
          res.status(404).end();
        }
      });
      


module.exports = router;
