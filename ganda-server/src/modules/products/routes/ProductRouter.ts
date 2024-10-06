import { Router } from 'express';
import { ProductAdapterFactory } from '../factories/ProductAdapterFactory';

export class ProductRouter {
  static routes = (): Router => {
    const router = Router();

    const ProductControllerAdapter = ProductAdapterFactory.getInstance();

    router.get('/', (req, res) =>
      ProductControllerAdapter.getProducts(req, res)
    );
    router.get('/:id', (req, res) =>
      ProductControllerAdapter.getProductById(req, res)
    );
    return router;
  };
}
