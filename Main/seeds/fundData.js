const { Fund } = require('../models');

const fundData = [
  {
    title: 'Blossoming Apricot',
    description: 'LedyX',
    targetVal: 2600,
    categoryId: 1,
    imageLink: '01-blossoming-apricot.jpg'
  },
  {
    title: 'Cosmos Flowers',
    description: 'WStudio',
    targetVal: 3000,
    categoryId: 2,
    imageLink: '02-cosmos-flowers.jpg'
  },
  {
    title: 'Sand + Sea = Summer',
    description: 'S_Photo',
    targetVal: 4000,
    categoryId: 1,
    imageLink: '03-sand-sea-summer.jpg'
  },
  {
    title: 'Beach Chairs',
    description: 'cHAIRS_Photo',
    targetVal: 3000,
    categoryId: 2,
    imageLink: '04-beach-chairs.jpg'
  },
  {
    title: 'Beach Sunrise',
    description: 'SUNRISE_Photo',
    targetVal: 2000,
    categoryId: 2,
    imageLink: '05-beach-sunrise.jpg'
  }
];

const seedFunds = () => Fund.bulkCreate(fundData);

module.exports = seedFunds;
