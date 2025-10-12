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
};

const getAllBookings = async (req, res) => {
  try {
    const bookings = await BookingTable.find();
    res.json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
};


const updateBookingActivity = async (req, res) => {
  try {
    const { id } = req.params;
    const { activity } = req.body; 

    const updatedBooking = await BookingTable.findByIdAndUpdate(
      id,
      { activity },
      { new: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    res.json({
      message: `Booking activity updated to ${activity}`,
      booking: updatedBooking
    });
  } catch (error) {
    console.error('Error updating booking activity:', error);
    res.status(500).json({ error: 'Failed to update activity status' });
  }
};

module.exports = {
  postBookingTable,
  getAllBookings,
  updateBookingActivity
};
