const router = require('express').Router();

const commentRoutes = require('./comment-routes.js');
const userRoutes = require('./user-routes.js');
const blogpostRoutes = require('./blogpost-routes.js');
const withAuth = require('../../utils/auth.js')
router.use('/blogpost',withAuth, blogpostRoutes);

router.use('/user', userRoutes);
router.use('/comment', withAuth, commentRoutes);
module.exports = router;


