const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ColorwaySchema = new Schema({
    name: { type: String },
    colors: { type: String }
})

Colorway = mongoose.model('Colorway', ColorwaySchema);

module.exports = Colorway;