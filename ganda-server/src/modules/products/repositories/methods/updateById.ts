import { ProductRepository } from '../index';

import { PrismaEvent } from '../../entities/Product';

export async function updateById(
  this: ProductRepository,
  id: number,
  quantity: number
): Promise<PrismaEvent> {
  const response = await this.prisma.product.update({
    where: {
      id: id,
    },
    data: {
      stock: {
        decrement: quantity,
      },
    },
  });

  return response;
}
