const mongoose = require('mongoose');

const manuItemSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  description: String,
  image: String
});

// Third argument = exact collection name in your DB
module.exports = mongoose.model('ManuItem', manuItemSchema, 'manuItems');
