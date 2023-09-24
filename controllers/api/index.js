const router = require('express').Router();

const commentRoutes = require('./comment-routes.js');
const userRoutes = require('./user-routes.js');
const blogpostRoutes = require('./blogpost-routes.js');

router.use('/blogpost', blogpostRoutes);

router.use('/user', userRoutes);
router.use('/comment', commentRoutes);
module.exports = router;


