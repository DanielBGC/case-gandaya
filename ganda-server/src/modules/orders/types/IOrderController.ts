import { BaseResponse } from '@/src/types';
import { PrismaEvent } from '../entities/UserOrder';

export interface IOrderController {
  getOrders(): Promise<any>;
  getOrderById(id: number): Promise<BaseResponse<PrismaEvent>>;
}
