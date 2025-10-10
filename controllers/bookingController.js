const BookingTable = require('../models/bookingModels');

const postBookingTable = async (req, res) => {
    try {
      const { name, email, phone, date, time, guest } = req.body;
  
      const newBooking = new BookingTable({ name, email, phone, date, time, guest });
      await newBooking.save();
  
      res.status(201).json({ message: 'Booking created successfully' });
    } catch (error) {
      console.error('Error creating booking:', error);
      res.status(500).json({ error: 'Failed to create booking' });
    }
    
}

const getAllBookings = async (req, res) =>{
    try {
        const bookings = await BookingTable.find();
    
        res.json(bookings);
      } catch (error) {
        console.error('Error fetching menu items:', error);
        res.status(500).json({ error: 'Failed to fetch menu items' });
      }
}

module.exports = {
    postBookingTable,
    getAllBookings
}