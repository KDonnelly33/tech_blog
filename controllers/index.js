const router = require('express').Router();
const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dash-routes.js');
const withAuth = require('../utils/auth.js')

router.use('/dashboard', withAuth, dashboardRoutes);

router.use('/', homeRoutes);

router.use('/api', apiRoutes);

module.exports = router;

