import { Router } from 'express';

import { UserRouter } from '../modules/users/routes/UserRouter';
import { OrderRouter } from '../modules/orders/routes/OrderRouter';
import { ProductRouter } from '../modules/products/routes/ProductRouter';

export class AppRouter {
  routes = (): Router => {
    const router = Router();
    router.use('/users', UserRouter.routes());
    router.use('/orders', OrderRouter.routes());
    router.use('/products', ProductRouter.routes());
    return router;
  };
}
