import { PrismaClient } from '@prisma/client';
import { IProductRepository } from '../types';
import { findAll, findOneById, updateById, findManyByIds } from './methods';
export class ProductRepository implements IProductRepository {
  constructor(protected readonly prisma: PrismaClient) {}

  findAll = findAll;
  findOneById = findOneById;
  findManyByIds = findManyByIds;
  updateById = updateById;
}
