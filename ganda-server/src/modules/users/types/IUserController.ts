import { BaseResponse } from '../../../types/BaseResponse';
import { PrismaEvent } from '../entities/Users';

export interface IUserController {
  getUserById(id: number): Promise<BaseResponse<PrismaEvent>>;
}
