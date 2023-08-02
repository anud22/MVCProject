const router = require('express').Router();
const { FundCategory, Fund, Contribution } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const categoryData = await FundCategory.findAll({
            include: [
                {
                    model: Fund,
                    attributes: ['imageLink', 'description'],
                },
            ],
        });
        const categories = categoryData.map((category) =>
            category.get({ plain: true })
        );

        console.dir(categories, { depth: null });
        // Send over the 'loggedIn' session variable to the 'category' template
        res.render('category', {
            categories,
            loggedIn: true,
        });
    } catch (err) {
        res.status(500).json({ message: 'An error occurred', error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const fundData = await Fund.findAll({
            where: { categoryId: req.params.id },
            include: [
                {
                    model: Contribution
                },
            ],
        });
        const funds = fundData.map((fund) => fund.get({ plain: true }));
        console.dir(funds, { depth: null });
        // Send over the 'loggedIn' session variable to the 'fund' template
        res.render('fund', {
            funds,
            loggedIn: true,
        });
    } catch (err) {
        res.status(500).json({ message: 'An error occurred', error: err.message });
    }
});
module.exports = router;