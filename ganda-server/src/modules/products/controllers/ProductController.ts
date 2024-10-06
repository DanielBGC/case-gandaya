import { IProductController, IProductService } from '../types';

import { getProductById, getProducts } from './methods/index';

export class ProductController implements IProductController {
  constructor(protected readonly productService: IProductService) {}

  getProductById = getProductById;
  getProducts = getProducts;
}
