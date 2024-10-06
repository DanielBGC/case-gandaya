import { CartRepository } from '../index';

import { PrismaEvent } from '../../entities/Cart';

export async function findAll(this: CartRepository): Promise<PrismaEvent[]> {
  return this.prisma.cart.findMany({
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}
