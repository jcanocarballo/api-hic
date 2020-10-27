const mongoose = require('mongoose');

const { Schema } = mongoose;

const VentaSchema = new Schema({

  fecha: {
    type: Date,
    default: Date.now
  },
  valor_total: Number,
  cliente: {
    type: Schema.Types.ObjectId,
    ref: 'client'
  },
  productos:[
    {
      producto:{
        type: Schema.Types.ObjectId,
        ref: 'product'
      },
      cantidad: Number,
      precio: Number
    }
  ]
});

module.exports = mongoose.model('venta', VentaSchema);