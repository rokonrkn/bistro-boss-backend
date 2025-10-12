const express = require('express');
const router = express.Router();

const { postBookingTable, getAllBookings, updateBookingActivity } = require('../controllers/bookingController');

router.post('/bookings', postBookingTable);
router.get('/bookings', getAllBookings);
router.patch('/:id/activity', updateBookingActivity);


module.exports = router;