import { PrismaEvent } from '../entities/Cart';

export interface ICartRepository {
  findOneById(id: number): Promise<any>;
  findAll(): Promise<any[]>;
  createCart(data: any): Promise<PrismaEvent>;
}
