import { Request, Response } from 'express';
import { OrderAdapter } from '..';

export async function getOrders(
  this: OrderAdapter,
  req: Request<any>,
  res: Response
): Promise<void> {
  const response = await this.controller.getOrders();

  const { status, json } = response;

  const data = json.map((order: any) => ({
    id: order.id,
    userId: order.userId,
    total: order.total,
    createdAt: order.createdAt,
    items: order.items.map((item: any) => {
      return {
        productId: item.productId,
        quantity: item.quantity,
        name: item.product.name,
        price: item.product.price,
        stock: item.product.stock,
        image: item.product.image,
      };
    }),
  }));

  res.status(status).json(data);
}
