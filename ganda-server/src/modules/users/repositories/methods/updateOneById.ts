import { UserRepository } from '../index';

import { PrismaEvent } from '../../entities/Users';

export async function updateOneById(
  this: UserRepository,
  id: number,
  totalPrice: number
): Promise<PrismaEvent> {
  return this.prisma.user.update({
    where: {
      id: id,
    },
    data: {
      balance: {
        decrement: totalPrice,
      },
    },
  });
}
