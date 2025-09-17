const express = require('express');
const router = express.Router();
const { getAllMenuItems, postMenuItem } = require('../controllers/manuItemController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// GET all menu items
router.get('/menuItems', getAllMenuItems);
router.post('/menuItems', upload.single('image'), postMenuItem);

module.exports = router;
