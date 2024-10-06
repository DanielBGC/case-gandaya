import { OrderRepository } from '..';

import { PrismaEvent } from '../../entities/UserOrder';

export async function findAll(this: OrderRepository): Promise<PrismaEvent[]> {
  return this.prisma.userOrder.findMany({
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });
}
