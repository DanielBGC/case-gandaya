import { Request, Response } from 'express';
import { OrderAdapter } from '..';

export async function getOrderById(
  this: OrderAdapter,
  req: Request<any>,
  res: Response
): Promise<void> {
  const response = await this.controller.getOrderById(Number(req.params.id));

  const { status, json } = response;

  res.status(status).json(json);
}
