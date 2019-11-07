const mongoose = require('mongoose')
const quoteSchema = new mongoose.Schema({
    name: String,
    quote: String
  });
  
  module.exports = mongoose.model('quotes', quoteSchema);