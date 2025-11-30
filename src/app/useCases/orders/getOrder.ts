import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function getOrder(req: Request, res: Response) {
  try {
    const { orderId } = req.params;

    if (!orderId) {
      return res.sendStatus(400);
    }

    const order = await Order.findOne({ orderId });

    if (!order) {
      return res.sendStatus(404);
    }

    res.json(order);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
