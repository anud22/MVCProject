const router = require('express').Router();
const contributionRoutes = require('./contributionRoutes');
router.use('/contribution', contributionRoutes);
module.exports = router;

