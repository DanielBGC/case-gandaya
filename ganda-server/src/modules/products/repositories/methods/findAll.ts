import { ProductRepository } from '../index';

import { PrismaEvent } from '../../entities/Product';

export async function findAll(this: ProductRepository): Promise<PrismaEvent[]> {
  return this.prisma.product.findMany({
    where: {
      stock: {
        gt: 0, // Retorna apenas produtos com estoque maior que 0
      },
    },
  });
}
