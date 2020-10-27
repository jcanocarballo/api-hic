const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClientSchema = new Schema({
  name: {
      type: String,
      required: true
  },
  ape_pat:{
    type: String,
    required: true
  },
  ape_mat:{
    type: String,
    required: true
  },
  direction:{
    type: String,
    required: true
  },
  telephone:{
    type: String
  },
  email:{
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

module.exports = mongoose.model('client', ClientSchema);