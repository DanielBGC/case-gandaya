import { Request, Response } from 'express';

export interface IOrderAdapter {
  getOrders(req: Request, res: Response): void;
  getOrderById(req: Request, res: Response): void;
}
