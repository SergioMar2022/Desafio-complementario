const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }],
  total: { type: Number, required: true },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Cart', cartSchema);
