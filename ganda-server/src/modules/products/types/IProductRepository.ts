import { PrismaEvent } from '../entities/Product';

export interface IProductRepository {
  findOneById(id: number): Promise<any>;
  findManyByIds(ids: number[]): Promise<PrismaEvent[]>;
  findAll(): Promise<any[]>;
  updateById(id: number, quantity: number): Promise<PrismaEvent>;
}
