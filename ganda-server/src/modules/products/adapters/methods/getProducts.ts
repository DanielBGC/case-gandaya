import { Request, Response } from 'express';
import { ProductAdapter } from '../index';

export async function getProducts(
  this: ProductAdapter,
  req: Request<any>,
  res: Response
): Promise<void> {
  const response = await this.controller.getProducts();

  const { status, json } = response;

  res.status(status).json(json);
}
