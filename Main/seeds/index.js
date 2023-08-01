const sequelize = require('../config/connection');
const seedFund = require('./fundData');
const seedFundCategories = require('./fundCategory');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedFund();
    await seedFundCategories();

    process.exit(0);
};

seedAll();