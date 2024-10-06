import { ICartController, ICartService } from '../types';

import { getCartById, getCarts, createCart } from './methods/index';

export class CartController implements ICartController {
  constructor(protected readonly cartService: ICartService) {}

  getCartById = getCartById;
  getCarts = getCarts;
  createCart = createCart;
}
