import { Request, Response } from 'express';
import { CartAdapter } from '../index';

export async function getCarts(
  this: CartAdapter,
  req: Request<any>,
  res: Response
): Promise<void> {
  const response = await this.controller.getCarts();

  const { status, json } = response;

  res.status(status).json(json);
}
