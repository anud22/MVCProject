const router = require('express').Router();
const contributionRoutes = require('./contributionRoutes');
const userRoutes = require('./userRoutes');

router.use('/contribution', contributionRoutes);
router.use('/users', userRoutes);
module.exports = router;

