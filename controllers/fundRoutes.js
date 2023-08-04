const express = require('express');
const router = express.Router();
const { Fund } = require('../models');
const multer = require('multer');

// Create a storage object with the destination and filename configurations
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/funds');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('image'), async (req, res) => {
    try {
        console.log('req.body:', req.body);
        console.log('req.file:', req.file);
        const { title, description, targetVal, categoryId } = req.body;
        const imageLink = req.file.filename; // This will contain the name of the uploaded image

        const newFund = await Fund.create({ title, description, targetVal, imageLink, categoryId });
        res.render('homepage');
    } catch (err) {
        res.status(500).json({ message: 'An error occurred', error: err.message });
    }
})

router.get('/', async (req, res) => {
    try {
        const fundData = await Fund.findAll();
        if (!fundData) {
            res.status(404).json({ message: 'No Fund found' });
            return;
        }
        res.status(200).json(fundData);
    } catch (err) {
        res.status(500).json({ message: 'An error occurred', error: err.message });
    }
});
module.exports = router;