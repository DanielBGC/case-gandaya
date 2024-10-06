import { Request, Response } from 'express';
import { CartAdapter } from '../index';

export async function createCart(
  this: CartAdapter,
  req: Request<any>,
  res: Response
): Promise<void> {
  const formattedItems = Object.entries(req.body.items)
    .map(([productId, quantity]) => ({
      productId: Number(productId),
      quantity: Number(quantity),
    }))
    .filter((item) => item.quantity > 0);

  const data = {
    ...req.body,
    items: formattedItems,
  };

  console.log('formatted data (ADAPTER): ', data);

  const response = await this.controller.createCart(data);

  console.log('response (ADAPTER): ', response);

  const { status, json } = response;

  res.status(status).json(json);
}
