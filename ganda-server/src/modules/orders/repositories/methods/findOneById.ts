import { OrderRepository } from '..';

import { PrismaEvent } from '../../entities/UserOrder';

export async function findOneById(
  this: OrderRepository,
  id: number
): Promise<PrismaEvent | null> {
  return this.prisma.userOrder.findUnique({
    where: {
      id: id,
    },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });
}
