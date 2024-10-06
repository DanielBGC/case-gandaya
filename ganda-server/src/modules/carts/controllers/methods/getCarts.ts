import { success, badRequest, serverError } from '../../../../helpers';
import { BaseResponse } from '../../../../types';
import { CartExistencyError } from '../../errors';
import { CartController } from '../index';
import { PrismaEvent } from '../../entities/Cart';

export async function getCarts(
  this: CartController
): Promise<BaseResponse<PrismaEvent[]>> {
  try {
    const response = await this.cartService.getCarts();

    return success(response);
  } catch (error) {
    if (error instanceof CartExistencyError) {
      return badRequest(error);
    }

    return serverError(error);
  }
}
