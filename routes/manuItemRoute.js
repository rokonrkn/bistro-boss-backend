const express = require('express');
const router = express.Router();
const { 
  getAllMenuItems, 
  postMenuItem, 
  deleteManuItem ,
  updateMenuItem
} = require('../controllers/manuItemController');
const multer = require('multer');
const path = require('path');

// Multer storage setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // সব ফাইল uploads/ ফোল্ডারে যাবে
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // unique নাম
  }
});

const upload = multer({ storage: storage });

// Routes
router.get('/menuItems', getAllMenuItems);
router.post('/menuItems', upload.single('image'), postMenuItem);
router.delete('/menuItems/:id', deleteManuItem);
router.put('/menuItems/:id', upload.single('image'), updateMenuItem);

module.exports = router;
