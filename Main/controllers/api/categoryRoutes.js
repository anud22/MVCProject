const router = require('express').Router();
const { FundCategory, Fund } = require('../../models');

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
module.exports = router;