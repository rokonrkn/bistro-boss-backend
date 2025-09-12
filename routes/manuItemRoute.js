const express = require('express');
const router = express.Router();
const { getAllMenuItems } = require('../controllers/manuItemController');

// GET all menu items
router.get('/menuItems', getAllMenuItems);

module.exports = router;
