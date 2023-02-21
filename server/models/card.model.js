const {Schema, model} = require('mongoose');

const CardSchema = new Schema ({
  header: {type: String, unique: false, required: true},
  category: {type: Object, unique: false, required: true},
  subCategory: {type: Object, unique: false, required: true},
  price: {type: Number, unique: false, required: true},
  subPrice: {type: Number, unique: false, required: true},
  title: {type: String, unique: false, required: true},
  capScrin: {type: String, unique: false, required: true},
  scrinOne: {type: String, unique: false, required: false},
  scrinTwo: {type: String, unique: false, required: false},
});

module.exports = model('Card', CardSchema);