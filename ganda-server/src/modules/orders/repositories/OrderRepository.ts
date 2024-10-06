import { PrismaClient } from '@prisma/client';
import { IOrderRepository } from '../types';
import { findAll, findOneById } from './methods';

export class OrderRepository implements IOrderRepository {
  constructor(protected readonly prisma: PrismaClient) {}

  findAll = findAll;
  findOneById = findOneById;
}
