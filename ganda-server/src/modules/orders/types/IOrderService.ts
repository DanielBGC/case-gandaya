import { PrismaEvent } from '../entities/UserOrder';

export interface IOrderService {
  getOrders(): Promise<PrismaEvent[]>;
  getOrderById(id: number): Promise<PrismaEvent>;
}
