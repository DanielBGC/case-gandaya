import { success, badRequest, serverError } from '../../../../helpers';
import { BaseResponse } from '../../../../types';
import { ProductExistencyError } from '../../errors';
import { ProductController } from '..';
import { PrismaEvent } from '../../entities/Product';

export async function getProductById(
  this: ProductController,
  id: number
): Promise<BaseResponse<PrismaEvent>> {
  try {
    const response = await this.productService.getProductById(id);

    return success(response);
  } catch (error) {
    if (error instanceof ProductExistencyError) {
      return badRequest(error);
    }

    return serverError(error);
  }
}
