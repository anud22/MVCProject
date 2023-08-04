const Fund = require('./Fund');
const FundCategory = require('./FundCategory');
const Contribution = require('./Contribution');

FundCategory.hasMany(Fund, {
  foreignKey: 'categoryId',
});

Fund.belongsTo(FundCategory, {
  foreignKey: 'categoryId',
  onDelete: 'CASCADE',
});

Fund.hasOne(Contribution, {
  foreignKey: 'fundId',
  onDelete: 'CASCADE',
});
Contribution.belongsTo(Fund, {
  foreignKey: 'fundId',
});

module.exports = { Fund, FundCategory, Contribution };
