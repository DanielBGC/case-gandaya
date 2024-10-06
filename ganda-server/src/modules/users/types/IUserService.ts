import { PrismaEvent } from '../entities/Users';

export interface IUserService {
  getUserById(id: number): Promise<PrismaEvent>;
}
