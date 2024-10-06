import { Request, Response } from 'express';
import { CartAdapter } from '../index';

export async function getCartById(
  this: CartAdapter,
  req: Request<any>,
  res: Response
): Promise<void> {
  const response = await this.controller.getCartById(Number(req.params.id));

  const { status, json } = response;

  res.status(status).json(json);
}
