import { PrismaEvent } from '../../entities/Product';
import { ProductService } from '../ProductService';

export async function getProducts(
  this: ProductService
): Promise<PrismaEvent[]> {
  return this.productRepository.findAll();
}
