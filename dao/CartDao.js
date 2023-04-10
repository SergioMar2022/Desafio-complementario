const Cart = require('.Cart/models/Cart');

class CartDao {
  async getAll() {
    return Cart.find().populate('userId').populate('products').exec();
  } 

  async getById(id) {
    return Cart.findById(id).populate('userId').populate('products').exec();
  }

  async create(cart) {
    const newCart = new Cart(cart);
    return newCart.save();
  } }

  async
