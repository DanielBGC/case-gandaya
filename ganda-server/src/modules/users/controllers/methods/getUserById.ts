import { success, badRequest, serverError } from '../../../../helpers/index';
import { BaseResponse } from '../../../../types';
import { UserExistencyError } from '../../errors/UserExistencyError';
import { UserController } from '../UserController';
import { PrismaEvent } from '../../entities/Users';

export async function getUserById(
  this: UserController,
  id: number
): Promise<BaseResponse<PrismaEvent>> {
  try {
    const response = await this.userService.getUserById(id);

    return success(response);
  } catch (error) {
    if (error instanceof UserExistencyError) {
      return badRequest(error);
    }

    return serverError(error);
  }
}
