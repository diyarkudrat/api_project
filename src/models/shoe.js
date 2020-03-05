const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const ShoeSchema = new Schema({
  model: { type: String },
  colorways: [{ type: Schema.Types.ObjectId, ref: 'Colorway' }],
  type: { type: String },
  year: { type: Number },
  SKU: { type: String },
  price: { type: Number }
})

Shoe = mongoose.model('Shoe', ShoeSchema);

module.exports = Shoe;