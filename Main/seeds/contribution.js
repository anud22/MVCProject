const { Contribution } = require('../models');

const contributions = [
    {
        fundId: 1,
        totalMoney: 56.0
    },
    {
        fundId: 2,
        totalMoney: 540
    },
    {
        fundId: 3,
        totalMoney: 5400
    },
    {
        fundId: 4,
        totalMoney: 25400
    },
    {
        fundId: 5,
        totalMoney: 400
    },
]
const seedContributions = () => Contribution.bulkCreate(contributions);

module.exports = seedContributions;

