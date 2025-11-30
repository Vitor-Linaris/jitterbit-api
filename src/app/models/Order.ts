import {model, Schema} from 'mongoose';

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
  items: {
    required: true,
    type: [{
      product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Item',
      },
      quantity: {
        type: Number,
        default: 1,
      },
    }],
  },
}));


