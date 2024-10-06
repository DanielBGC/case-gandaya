import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export { prisma, PrismaClient };

export class DataBaseFactory {
  private constructor() { }

  static getPrismaInstance(): PrismaClient {
    return prisma;
  }
}
