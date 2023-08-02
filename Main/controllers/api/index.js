const router = require('express').Router();
const fundRoutes = require('./fundRoutes');
const categoryRoutes = require('./categoryRoutes');
router.use('/fund', fundRoutes);
router.use('/category', categoryRoutes);
module.exports = router;

