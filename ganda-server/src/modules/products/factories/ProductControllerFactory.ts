import { ProductController } from '../controllers';
import { IProductController } from '../types';
import { ProductServiceFactory } from './ProductServiceFactory';

export class ProductControllerFactory {
  private constructor() {}

  static getInstance(): IProductController {
    return new ProductController(ProductServiceFactory.getInstance());
  }
}
