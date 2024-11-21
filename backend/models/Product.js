const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String },
  stock: { type: Number, default: 0 },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
