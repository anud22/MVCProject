const router = require('express').Router();
const fundRoutes = require('./fundRoutes');

router.use('/fund', fundRoutes);
module.exports = router;

