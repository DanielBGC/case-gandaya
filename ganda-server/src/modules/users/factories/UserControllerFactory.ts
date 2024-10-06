import { UserController } from '../controllers';
import { IUserController } from '../types';
import { UserServiceFactory } from './UserServiceFactory';

export class UserControllerFactory {
  private constructor() {}

  static getInstance(): IUserController {
    return new UserController(UserServiceFactory.getInstance());
  }
}
