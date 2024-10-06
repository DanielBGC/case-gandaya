import {
  success,
  badRequest,
  serverError,
  notAcceptable,
} from '../../../../helpers';
import { BaseResponse } from '../../../../types';
import { CartController } from '../index';
import { PrismaEvent } from '../../entities/Cart';

import { InsufficientBalanceError, InsufficientStockError } from '../../errors';

export async function createCart(
  this: CartController,
  data: any
): Promise<BaseResponse<PrismaEvent>> {
  try {
    const response = await this.cartService.createCart(data);

    return success(response);
  } catch (error) {
    if (error instanceof InsufficientBalanceError) {
      return badRequest(error);
    }

    if (error instanceof InsufficientStockError) {
      return notAcceptable(error);
    }

    return serverError(error);
  }
}
