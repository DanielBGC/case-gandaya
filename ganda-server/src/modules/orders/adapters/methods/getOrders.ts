import { Request, Response } from 'express';
import { OrderAdapter } from '..';

export async function getOrders(
  this: OrderAdapter,
  req: Request<any>,
  res: Response
): Promise<void> {
  const response = await this.controller.getOrders();

  const { status, json } = response;

  res.status(status).json(json);
}
