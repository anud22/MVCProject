const Fund = require('./Fund');
const FundCategory = require('./FundCategory');
FundCategory.hasMany(Fund, {
    foreignKey: 'category_id',
  });
  
  Fund.belongsTo(FundCategory, {
    foreignKey: 'category_id',
  });
module.exports = { Fund, FundCategory };
