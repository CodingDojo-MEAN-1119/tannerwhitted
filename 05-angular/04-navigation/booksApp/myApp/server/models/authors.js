const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const authorSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Name is required'],
    minlength: [5, 'Must be authors full name'],
  },
  quote: {
    type: String,
    trim: true,
    required: [true, 'Quote is required'],
    minlength: [3, 'Must be a notable quote']
  }
});

authorSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });

module.exports = mongoose.model('Author', authorSchema);
