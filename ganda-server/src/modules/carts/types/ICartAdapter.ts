import { Request, Response } from 'express';

export interface ICartAdapter {
  getCarts(req: Request, res: Response): void;
  getCartById(req: Request, res: Response): void;
  createCart(req: Request, res: Response): void;
}
