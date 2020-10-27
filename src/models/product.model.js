const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    p_name: {
        type: String,
        required: true
    },
    p_description:{
      type: String,
      required: true
    },
    p_price:{
      type: Number,
      required: true
    },
    image: {
      type: String
    },
    p_created: {
      type: Date,
      default: Date.now()
    },
    p_modified: {
      type: Date,
      default: Date.now()
    }    
});

module.exports = mongoose.model('product', ProductSchema);