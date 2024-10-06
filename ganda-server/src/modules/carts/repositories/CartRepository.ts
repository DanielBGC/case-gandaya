import { PrismaClient } from '@prisma/client';
import { ICartRepository } from '../types';
import { findAll, findOneById, createCart } from './methods';

export class CartRepository implements ICartRepository {
  constructor(protected readonly prisma: PrismaClient) {}

  findAll = findAll;
  findOneById = findOneById;
  createCart = createCart;
}
