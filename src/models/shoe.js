const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const ShoeSchema = new Schema({
  name: { type: String },
  model: { type: String },
  type: { type: String },
  year: { type: Number },
  SKU: { type: String },
  price: { type: Number }
})

Shoe = mongoose.model('Shoe', ShoeSchema);

module.exports = Shoe;