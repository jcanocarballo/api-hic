const mongoose = require('mongoose');
const { Schema } = mongoose;

const CategorySchema = new Schema({
  name: {
      type: String,
      required: true
  },
  description:{
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  modified: {
    type: Date,
    default: Date.now
  }    
});

module.exports = mongoose.model('categoria', CategorySchema);