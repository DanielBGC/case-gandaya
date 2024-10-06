import { IProductService, IProductRepository } from '../types';

import { getProductById, getProducts } from './methods';

export class ProductService implements IProductService {
  constructor(protected readonly productRepository: IProductRepository) {}

  getProductById = getProductById;
  getProducts = getProducts;
}
