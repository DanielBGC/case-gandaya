import { Request, Response } from 'express';
import { UserAdapter } from '../index';

export async function getUserById(
  this: UserAdapter,
  req: Request<any>,
  res: Response
): Promise<void> {
  const response = await this.controller.getUserById(Number(req.params.id));

  const { status, json } = response;

  res.status(status).json(json);
}
