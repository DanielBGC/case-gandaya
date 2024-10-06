import { OrderRepository } from '../index';
import { PrismaEvent } from '../../entities/UserOrder';

export async function createOrder(
  this: OrderRepository,
  data: any
): Promise<PrismaEvent> {
  const newCart = await this.prisma.userOrder.create({
    data: {
      userId: data.userId,
      total: data.totalPrice,
      items: {
        create: data.items,
      },
    },
  });

  return newCart;
}
