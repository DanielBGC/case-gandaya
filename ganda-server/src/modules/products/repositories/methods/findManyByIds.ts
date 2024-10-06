import { ProductRepository } from '../index';

import { PrismaEvent } from '../../entities/Product';

export async function findManyByIds(
  this: ProductRepository,
  ids: number[]
): Promise<PrismaEvent[]> {
  return this.prisma.product.findMany({
    where: {
      id: {
        in: ids,
      },
    },
  });
}
