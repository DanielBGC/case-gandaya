import { success, badRequest, serverError } from '../../../../helpers';
import { BaseResponse } from '../../../../types';
import { CartExistencyError } from '../../errors';
import { CartController } from '..';
import { PrismaEvent } from '../../entities/Cart';

export async function getCartById(
  this: CartController,
  id: number
): Promise<BaseResponse<PrismaEvent>> {
  try {
    const response = await this.cartService.getCartById(id);

    return success(response);
  } catch (error) {
    if (error instanceof CartExistencyError) {
      return badRequest(error);
    }

    return serverError(error);
  }
}
