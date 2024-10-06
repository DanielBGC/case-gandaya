import { ProductRepository } from '../index';

import { PrismaEvent } from '../../entities/Product';

export async function findAll(this: ProductRepository): Promise<PrismaEvent[]> {
  return this.prisma.product.findMany();
}
