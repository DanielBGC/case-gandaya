import { UserService } from '../services';
import { UserRepositoryFactory } from './UserRepositoryFactory';

export class UserServiceFactory {
  private constructor() {}

  static getInstance(): UserService {
    return new UserService(UserRepositoryFactory.getInstance());
  }
}
