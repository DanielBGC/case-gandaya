import { success, badRequest, serverError } from '../../../../helpers';
import { BaseResponse } from '../../../../types';
import { OrderExistencyError } from '../../errors';
import { OrderController } from '..';
import { PrismaEvent } from '../../entities/UserOrder';

export async function getOrders(this: OrderController): Promise<any> {
  try {
    const response = await this.orderService.getOrders();

    return success(response);
  } catch (error) {
    if (error instanceof OrderExistencyError) {
      return badRequest(error);
    }

    return serverError(error);
  }
}
