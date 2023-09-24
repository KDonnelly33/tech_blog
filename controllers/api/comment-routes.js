const router = require('express').Router();
const { Comment } = require('../../models/');

router.post('/', async (req, res) => {
    console.log(req.body)
    try {
        // unhardcode this later
        const newComment = await Comment.create({
            ...req.body,
            user_id: "1",
          
        });
        console.log("New Comment")
        console.log(newComment)
      res.json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
}
);

module.exports = router;
