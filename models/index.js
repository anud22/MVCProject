const User = require('./User');
const Fund = require('./Fund');
const FundCategory = require('./FundCategory');
const Contribution = require('./Contribution');

User.hasMany(Fund, {
  foreignKey: 'categoryId',
});

Fund.belongsTo(User, {
  foreignKey: 'categoryId',
});

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

module.exports = { Fund, FundCategory, Contribution, User };
