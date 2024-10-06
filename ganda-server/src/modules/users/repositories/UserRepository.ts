import { PrismaClient } from '@prisma/client';
import { IUserRepository } from '../types';
import { findOneById, updateOneById } from './methods';

export class UserRepository implements IUserRepository {
  constructor(protected readonly prisma: PrismaClient) {}

  findOneById = findOneById;
  updateOneById = updateOneById;
}
