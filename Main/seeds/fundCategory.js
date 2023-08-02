const { FundCategory } = require('../models');

const fundCategories = [
    {
        name: 'Education',
        description: 'We offer scholarships for colleges'
    },
    {
        name: 'Emergency',
        description: 'We offer help for natural disaster victims'
    },
    {
        name: 'Cancer Institute',
        description: 'We contribute for cancer patients treatments'
    },
]
const seedFundCategories = () => FundCategory.bulkCreate(fundCategories);

module.exports = seedFundCategories;

