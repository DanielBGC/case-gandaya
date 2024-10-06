import { BaseResponse } from '@/src/types';
import { PrismaEvent } from '../entities/Product';

export interface IProductController {
  getProducts(): Promise<BaseResponse<PrismaEvent[]>>;
  getProductById(id: number): Promise<BaseResponse<PrismaEvent>>;
}
