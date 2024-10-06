import { success, badRequest, serverError } from '../../../../helpers';
import { BaseResponse } from '../../../../types';
import { OrderExistencyError } from '../../errors';
import { OrderController } from '..';
import { PrismaEvent } from '../../entities/UserOrder';

export async function getOrderById(
  this: OrderController,
  id: number
): Promise<BaseResponse<PrismaEvent>> {
  try {
    const response = await this.orderService.getOrderById(id);

    return success(response);
  } catch (error) {
    if (error instanceof OrderExistencyError) {
      return badRequest(error);
    }

    return serverError(error);
  }
}
