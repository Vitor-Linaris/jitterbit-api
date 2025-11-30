import { Request, Response } from 'express';
import { Order } from '../../models/Order';

type IncomingItem = {
  idItem: string;
  quantidadeItem: number;
  valorItem: number;
};

export async function createOrder(req: Request, res: Response) {
    try {
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
    res.sendStatus(500);
  }
}
