const router = require('express').Router();
const { Fund } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const { title, description, targetVal, imageLink, userId, categoryId } = req.body;
        const newFund = await Fund.create({ title, description, targetVal, imageLink, userId, categoryId });
        res.status(200).json(newFund);
    } catch (err) {
        res.status(500).json({ message: 'An error occurred', error: err.message });
    }

})

router.get('/', async (req, res) => {
    try {
        const fundData = await Fund.findAll();
        if (!fundData) {
            res.status(404).json({ message: 'No Fund found' });
            return;
        }
        res.status(200).json(fundData);
    } catch (err) {
        res.status(500).json({ message: 'An error occurred', error: err.message });
    }
});
module.exports = router;