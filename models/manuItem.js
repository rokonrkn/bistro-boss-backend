const mongoose = require('mongoose');

const manuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: 
  {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
  }
});


module.exports = mongoose.model('ManuItem', manuItemSchema, 'manuItems');
