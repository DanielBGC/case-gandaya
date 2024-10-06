import { Router } from 'express';
import { UserAdapterFactory } from '../factories/UserAdapterFactory';

export class UserRouter {
  static routes = (): Router => {
    const router = Router();

    const userControllerAdapter = UserAdapterFactory.getInstance();

    router.get('/:id', (req, res) =>
      userControllerAdapter.getUserById(req, res)
    );

    return router;
  };
}
