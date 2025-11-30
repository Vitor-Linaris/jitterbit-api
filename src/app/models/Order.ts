import { model, Schema } from 'mongoose';

export const Order = model('Order', new Schema({
  orderId: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
  items: [{
    productId: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    price: {
      type: Number,
      required: true,
    },
  }]
}, {
  versionKey: false
}));
