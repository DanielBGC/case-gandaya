import { PrismaEvent } from '../entities/UserOrder';
export interface IOrderRepository {
  findOneById(id: number): Promise<any>;
  findAll(): Promise<any[]>;
  createOrder(data: any): Promise<PrismaEvent>;
}
