'use Strict';

const mongoose = require ('mongoose');

const productSchema = new mongoose.Schema ({
  id: {type: String, index: true, unique: true, required: true},
  prices_amountmax: {type: String, required: true},
  prices_amountmin: {type: String, required: true},
  prices_availability: {type: String, required: true},
  prices_condition: {type: String, required: true},
  prices_currency: {type: String, required: true},
  prices_dateseen: {type: String, required: true},
  prices_issale: {type: String, required: true},
  prices_shipping: {type: String, required: true},
  brand: {type: String, required: true},
  categories: {type: String, required: true},
  imageurls: {type: String, required: true},
  manufacturer: {type: String, required: true},
  manufacturernumber: {type: String, required: true},
  name: {type: String, required: true},
  primarycategories: {type: String, required: true},
  weight: {type: String, required: true},
});

module.exports = mongoose.model ('products', productSchema);
