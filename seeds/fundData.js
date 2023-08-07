const { Fund } = require('../models');

const fundData = [
  {
    title: 'In dire need of helping pay off my college books!',
    description: 'Please share wherever you can I would greatly appreciate it!',
    targetVal: 2600,
    categoryId: 1,
    imageLink: 'collegebooks.jpg'
  },
  {
    title: 'Emergency wrist tendon surgery!',
    description: 'Help! I have apparently been coding way too often and now I need wrist surgery :(',
    targetVal: 3000,
    categoryId: 2,
    imageLink: 'wrist.jpg'
  },
  {
    title: 'Student Laptop Crowdfund',
    description: 'Hey everyone! My laptop recently broke and I am in need of some assistance for the repairs.',
    targetVal: 4000,
    categoryId: 1,
    imageLink: 'brokenlaptop.jpg'
  },
  {
    title: 'Spine realignment',
    description: 'Pretty self explanatory, could you please share? I look like the image above.',
    targetVal: 3000,
    categoryId: 2,
    imageLink: 'spine.jpg'
  },
  {
    title: 'Emergency funds for Falkor',
    description: 'Falkor, my puppy has recently gotten very ill and I need help paying for the vet!',
    targetVal: 2000,
    categoryId: 2,
    imageLink: 'falkor.png'
  }
];

const seedFunds = () => Fund.bulkCreate(fundData);

module.exports = seedFunds;
