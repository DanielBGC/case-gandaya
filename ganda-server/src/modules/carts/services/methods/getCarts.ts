import { PrismaEvent } from '../../entities/Cart';
import { CartService } from '../CartService';

export async function getCarts(this: CartService): Promise<PrismaEvent[]> {
  return this.cartRepository.findAll();
}
