import { Router } from 'express';
import { UserRouter } from '../modules/users/routes/UserRouter';

export class AppRouter {
  routes = (): Router => {
    const router = Router();
    router.use('/users', UserRouter.routes());
    return router;
  };
}
