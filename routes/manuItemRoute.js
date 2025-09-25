const express = require('express');
const router = express.Router();
const { getAllMenuItems, postMenuItem, deleteManuItem } = require('../controllers/manuItemController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// GET all menu items
router.get('/menuItems', getAllMenuItems);
router.post('/menuItems', upload.single('image'), postMenuItem);
router.delete('/menuItems/:id', deleteManuItem);

module.exports = router;
