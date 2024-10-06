import { CartAdapter } from '../adapters';
import { ICartAdapter } from '../types';
import { CartControllerFactory } from './CartControllerFactory';

export class CartAdapterFactory {
  private constructor() {}

  static getInstance(): ICartAdapter {
    return new CartAdapter(CartControllerFactory.getInstance());
  }
}
