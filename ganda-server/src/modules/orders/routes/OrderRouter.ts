import { Router } from 'express';
import { OrderAdapterFactory } from '../factories/OrderAdapterFactory';

export class OrderRouter {
  static routes = (): Router => {
    const router = Router();

    const OrderControllerAdapter = OrderAdapterFactory.getInstance();

    router.get('/', (req, res) => OrderControllerAdapter.getOrders(req, res));
    router.get('/:id', (req, res) =>
      OrderControllerAdapter.getOrderById(req, res)
    );
    return router;
  };
}
