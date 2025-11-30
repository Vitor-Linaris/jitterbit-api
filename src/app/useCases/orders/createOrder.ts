import { Request, Response } from 'express';
import { Order } from '../../models/Order';

type IncomingItem = {
  idItem: string;
  quantidadeItem: number;
  valorItem: number;
};

export async function createOrder(req: Request, res: Response) {
    try {
    const existingOrder = await Order.findOne({ orderId: req.body.numeroPedido?.trim() });
    if (existingOrder) {
      return res.status(409).json({ message: 'orderId already exists' });
    }

    const mapped = {
      orderId: req.body.numeroPedido?.trim(),
      value: req.body.valorTotal,
      items: req.body.items.map((item: IncomingItem) => ({
        productId: Number(item.idItem),
        quantity: item.quantidadeItem,
        price: item.valorItem
      }))
    };

    const newOrder = await Order.create(mapped);

    res.status(201).json(newOrder);

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to create order' });
  }
}
