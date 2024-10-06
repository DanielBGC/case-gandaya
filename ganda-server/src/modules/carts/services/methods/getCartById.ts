import { PrismaEvent } from '../../entities/Cart';
import { CartExistencyError } from '../../errors';
import { CartService } from '../CartService';

export async function getCartById(
  this: CartService,
  id: number
): Promise<PrismaEvent> {
  const cart = this.cartRepository.findOneById(id);

  if (!cart) {
    throw new CartExistencyError();
  }

  return cart;
}
