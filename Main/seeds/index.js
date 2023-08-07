const sequelize = require('../config/connection');
const seedUser = require('./user');
const seedFund = require('./fundData');
const seedFundCategories = require('./fundCategory');
const seedContributions = require('./contribution');


const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedFundCategories();
    await seedFund();
    await seedContributions();

    process.exit(0);
};

seedAll();