const router = require("express").Router();
const { BlogPost } = require("../../models");

router.post("/", async (req, res) => {
  console.log("Post route hit!");
  console.log(req.body);
  const body = req.body;
  // ill need to unharcoded this later
  try {
    const newBlog = await BlogPost.create({
      ...body,
      user_id: req.session.user_id,
    });
    res.json(newBlog);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

router.put("/:id", async (req, res) => {
    try {
        const updatedBlog = await BlogPost.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.json(updatedBlog);

    } catch (error) {
        console.log(error);
        res.json(error);

    }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedBlog = await BlogPost.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(deletedBlog);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

module.exports = router;