import { UserRepository } from '../index';

import { PrismaEvent } from '../../entities/Users';

export async function findOneById(
  this: UserRepository,
  id: number
): Promise<PrismaEvent | null> {
  return this.prisma.user.findUnique({
    where: {
      id: id,
    },
  });
}
