import { CartRepository } from '../index';
import { PrismaEvent } from '../../entities/Cart';

export async function createCart(
  this: CartRepository,
  data: any
): Promise<PrismaEvent> {
  const newCart = await this.prisma.cart.create({
    data: {
      userId: data.userId,
      abandoned: data.abandoned,
      items: {
        create: data.items,
      },
    },
  });

  return newCart;
}
