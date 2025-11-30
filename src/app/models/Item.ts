import { model, Schema } from 'mongoose';

export const Item = model('Item', new Schema({
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
  }
}, {
  versionKey: false
}));
