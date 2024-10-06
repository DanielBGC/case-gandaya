import { CartRepository } from '../index';

import { PrismaEvent } from '../../entities/Cart';

export async function findOneById(
  this: CartRepository,
  id: number
): Promise<PrismaEvent | null> {
  return this.prisma.cart.findUnique({
    where: {
      id: id,
    },
  });
}
