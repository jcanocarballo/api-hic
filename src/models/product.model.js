const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  codigo:{
    type: String,
    required: true,
    unique: true
  },
  name: {
      type: String,
      required: true
  },
  description:{
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  image: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now()
  },
  modified: {
    type: Date,
    default: Date.now()
  }    
});

module.exports = mongoose.model('product', ProductSchema);