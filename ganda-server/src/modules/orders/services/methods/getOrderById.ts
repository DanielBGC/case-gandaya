import { PrismaEvent } from '../../entities/UserOrder';
import { OrderExistencyError } from '../../errors';
import { OrderService } from '../OrderService';

export async function getOrderById(
  this: OrderService,
  id: number
): Promise<PrismaEvent> {
  const order = this.orderRepository.findOneById(id);

  if (!order) {
    throw new OrderExistencyError();
  }

  return order;
}
