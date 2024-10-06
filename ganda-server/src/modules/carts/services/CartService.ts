import { ICartService, ICartRepository } from '../types';
import { IProductRepository } from '../../products/types';
import { IOrderRepository } from '../../orders/types';
import { IUserRepository } from '../../users/types';

import { getCartById, getCarts, createCart } from './methods';

export class CartService implements ICartService {
  constructor(
    protected readonly cartRepository: ICartRepository,
    protected readonly productRepository: IProductRepository,
    protected readonly orderRepository: IOrderRepository,
    protected readonly userRepository: IUserRepository
  ) {}

  getCartById = getCartById;
  getCarts = getCarts;
  createCart = createCart;
}
