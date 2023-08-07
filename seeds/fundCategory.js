const { FundCategory } = require('../models');

const fundCategories = [
    {
        name: 'Education',
        description: 'View Education based fundraisers!'
    },
    {
        name: 'Emergency',
        description: 'View Emergency based fundraisers!'
    },
]
const seedFundCategories = () => FundCategory.bulkCreate(fundCategories);

module.exports = seedFundCategories;

