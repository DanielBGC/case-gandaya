import { PrismaEvent } from '../entities/Cart';

export interface ICartService {
  getCarts(): Promise<PrismaEvent[]>;
  getCartById(id: number): Promise<PrismaEvent>;
  createCart(data: any): Promise<PrismaEvent>;
}
