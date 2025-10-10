const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    guest: {
        type: String,
        required: true
    },
    // role: { type: String, enum: ['user', 'admin'], default: 'user' },
    activity: {
        type: String,
        enum: ['Done', 'Pending'],
        default: 'Pending'
    }
});

module.exports = mongoose.model('Booking', bookingSchema, 'bookings');  