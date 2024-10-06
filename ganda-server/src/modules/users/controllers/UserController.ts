import { IUserController, IUserService } from '../types';

import { getUserById } from './methods';

export class UserController implements IUserController {
  constructor(protected readonly userService: IUserService) {}

  getUserById = getUserById;
}
