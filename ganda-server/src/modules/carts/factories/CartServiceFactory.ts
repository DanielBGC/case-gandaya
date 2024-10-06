import { CartService } from '../services';

import { CartRepositoryFactory } from './CartRepositoryFactory';
import { ProductRepositoryFactory } from '../../products/factories/ProductRepositoryFactory';
import { OrderRepositoryFactory } from '../../orders/factories/OrderRepositoryFactory';
import { UserRepositoryFactory } from '../../users/factories/UserRepositoryFactory';

export class CartServiceFactory {
  private constructor() {}

  static getInstance(): CartService {
    return new CartService(
      CartRepositoryFactory.getInstance(),
      ProductRepositoryFactory.getInstance(),
      OrderRepositoryFactory.getInstance(),
      UserRepositoryFactory.getInstance()
    );
  }
}
