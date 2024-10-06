import { ProductService } from '../services';
import { ProductRepositoryFactory } from './ProductRepositoryFactory';

export class ProductServiceFactory {
  private constructor() {}

  static getInstance(): ProductService {
    return new ProductService(ProductRepositoryFactory.getInstance());
  }
}
