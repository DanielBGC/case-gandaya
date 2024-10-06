import { Request, Response } from 'express';
import { ProductAdapter } from '../index';

export async function getProductById(
  this: ProductAdapter,
  req: Request<any>,
  res: Response
): Promise<void> {
  const response = await this.controller.getProductById(Number(req.params.id));

  const { status, json } = response;

  res.status(status).json(json);
}
