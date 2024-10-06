import { UserAdapter } from '../adapters';
import { IUserAdapter } from '../types';
import { UserControllerFactory } from './UserControllerFactory';

export class UserAdapterFactory {
  private constructor() {}

  static getInstance(): IUserAdapter {
    return new UserAdapter(UserControllerFactory.getInstance());
  }
}
