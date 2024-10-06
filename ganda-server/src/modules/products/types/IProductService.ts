import { PrismaEvent } from '../entities/Product';

export interface IProductService {
  getProducts(): Promise<PrismaEvent[]>;
  getProductById(id: number): Promise<PrismaEvent>;
}
