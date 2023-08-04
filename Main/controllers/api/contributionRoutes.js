const router = require('express').Router();
const { Contribution } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const { fundId, donationAmount } = req.body;
        const fund = await Contribution.findOne({ where: { fundId } });
        let results;
        if (fund) {
            const existingDonationAmount = fund.donationAmount;
            let newAmount = parseFloat(donationAmount) + parseFloat(existingDonationAmount);
            results = Contribution.update({
                donationAmount: newAmount
            },
                {
                    where: {
                        fundId: fundId
                    }
                })
        } else {
            results = Contribution.create({
                fundId, donationAmount
            });
        }
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ message: 'An error occurred', error: err.message });
    }
})

module.exports = router;