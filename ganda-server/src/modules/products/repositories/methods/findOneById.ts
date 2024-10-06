import { ProductRepository } from '../index';

import { PrismaEvent } from '../../entities/Product';

export async function findOneById(
  this: ProductRepository,
  id: number
): Promise<PrismaEvent | null> {
  return this.prisma.product.findUnique({
    where: {
      id: id,
    },
  });
}
