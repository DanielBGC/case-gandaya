import { Request, Response } from 'express';

export interface IProductAdapter {
  getProducts(req: Request, res: Response): void;
  getProductById(req: Request, res: Response): void;
}
