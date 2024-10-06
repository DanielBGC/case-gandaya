import { Request, Response } from 'express';

export interface IUserAdapter {
  getUserById(req: Request, res: Response): void;
}
