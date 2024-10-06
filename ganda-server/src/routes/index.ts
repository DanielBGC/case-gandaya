import { Router } from 'express';

import { UserRouter } from '../modules/users/routes/UserRouter';
import { OrderRouter } from '../modules/orders/routes/OrderRouter';

export class AppRouter {
  routes = (): Router => {
    const router = Router();
    router.use('/users', UserRouter.routes());
    router.use('/orders', OrderRouter.routes());
    return router;
  };
}
