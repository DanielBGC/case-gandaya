import { CartController } from '../controllers';
import { ICartController } from '../types';
import { CartServiceFactory } from './CartServiceFactory';

export class CartControllerFactory {
  private constructor() {}

  static getInstance(): ICartController {
    return new CartController(CartServiceFactory.getInstance());
  }
}
