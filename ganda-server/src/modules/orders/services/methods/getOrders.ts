import { PrismaEvent } from '../../entities/UserOrder';
import { OrderService } from '../OrderService';

export async function getOrders(this: OrderService): Promise<PrismaEvent[]> {
  return this.orderRepository.findAll();
}
