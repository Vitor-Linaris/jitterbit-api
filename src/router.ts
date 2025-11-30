import { Router } from 'express';

import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
import { getOrder } from './app/useCases/orders/getOrder';
import { cancelOrder } from './app/useCases/orders/cancelOrder';

export const router = Router();

// list orders
router.get('/order/list', listOrders);

// create order
router.post('/order', createOrder);

// get order by id
router.get('/order/:orderId', getOrder);

// delete order
router.delete('/order/:orderId', cancelOrder);

