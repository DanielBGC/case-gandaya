import { Router } from 'express';
import { CartAdapterFactory } from '../factories/CartAdapterFactory';

export class CartRouter {
  static routes = (): Router => {
    const router = Router();

    const CartControllerAdapter = CartAdapterFactory.getInstance();

    router.get('/', (req, res) => CartControllerAdapter.getCarts(req, res));
    router.get('/:id', (req, res) =>
      CartControllerAdapter.getCartById(req, res)
    );
    router.post('/create', (req, res) =>
      CartControllerAdapter.createCart(req, res)
    );
    return router;
  };
}
