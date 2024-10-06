import { BaseResponse } from '@/src/types';
import { PrismaEvent } from '../entities/Cart';

export interface ICartController {
  getCarts(): Promise<BaseResponse<PrismaEvent[]>>;
  getCartById(id: number): Promise<BaseResponse<PrismaEvent>>;
  createCart({ data }: any): Promise<BaseResponse<PrismaEvent>>;
}
