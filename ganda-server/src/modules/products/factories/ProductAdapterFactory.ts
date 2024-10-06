import { ProductAdapter } from '../adapters';
import { IProductAdapter } from '../types';
import { ProductControllerFactory } from './ProductControllerFactory';

export class ProductAdapterFactory {
  private constructor() {}

  static getInstance(): IProductAdapter {
    return new ProductAdapter(ProductControllerFactory.getInstance());
  }
}
