import { ICartAdapter, ICartController } from '../types';

import { getCartById, getCarts, createCart } from './methods';

export class CartAdapter implements ICartAdapter {
  constructor(protected readonly controller: ICartController) {}

  getCartById = getCartById;
  getCarts = getCarts;
  createCart = createCart;
}
