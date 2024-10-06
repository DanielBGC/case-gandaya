import { DataBaseFactory } from '../../../prisma/factory';
import { ProductRepository } from '../repositories/ProductRepository';
import { IProductRepository } from '../types';

export class ProductRepositoryFactory {
  private constructor() {}

  static getInstance(): IProductRepository {
    return new ProductRepository(DataBaseFactory.getPrismaInstance());
  }
}
