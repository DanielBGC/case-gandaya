import { DataBaseFactory } from '../../../prisma/factory';
import { UserRepository } from '../repositories/UserRepository';
import { IUserRepository } from '../types';

export class UserRepositoryFactory {
  private constructor() {}

  static getInstance(): IUserRepository {
    return new UserRepository(DataBaseFactory.getPrismaInstance());
  }
}
