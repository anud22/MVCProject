const { Contribution } = require('../models');

const contributions = [
    {
        fundId: 1,
        donationAmount: 56.0
    },
    {
        fundId: 2,
        donationAmount: 540
    },
    {
        fundId: 3,
        donationAmount: 5400
    },
    {
        fundId: 4,
        donationAmount: 25400
    },
    {
        fundId: 5,
        donationAmount: 400
    },
]
const seedContributions = () => Contribution.bulkCreate(contributions);

module.exports = seedContributions;

