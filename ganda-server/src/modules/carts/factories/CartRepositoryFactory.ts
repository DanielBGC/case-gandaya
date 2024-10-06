import { DataBaseFactory } from '../../../prisma/factory';
import { CartRepository } from '../repositories/CartRepository';
import { ICartRepository } from '../types';

export class CartRepositoryFactory {
  private constructor() {}

  static getInstance(): ICartRepository {
    return new CartRepository(DataBaseFactory.getPrismaInstance());
  }
}
