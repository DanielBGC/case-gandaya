import { IProductAdapter, IProductController } from '../types';

import { getProductById, getProducts } from './methods';

export class ProductAdapter implements IProductAdapter {
  constructor(protected readonly controller: IProductController) {}

  getProductById = getProductById;
  getProducts = getProducts;
}
