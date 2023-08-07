const express = require('express');
const router = express.Router();
const { FundCategory } = require('../models');

router.get('/', async (req, res) => {
    try {
        const categoryData = await FundCategory.findAll({
            attributes: ['id', 'name'],
        });
        const categories = categoryData.map((category) =>
            category.get({ plain: true })
        );
        console.dir(categories, { depth: null });
        res.render('newFundraiser', {
            categories,
            logged_in:req.session.logged_in,
        })
    } catch (err) {
        res.status(500).json({ message: 'An error occurred', error: err.message });
    }
});

module.exports = router;