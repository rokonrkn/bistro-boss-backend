const express = require('express');
const router = express.Router();

const { postBookingTable, getAllBookings } = require('../controllers/bookingController');

router.post('/bookings', postBookingTable);
router.get('/bookings', getAllBookings);

module.exports = router;