import { IUserAdapter, IUserController } from '../types';

import { getUserById } from './methods';

export class UserAdapter implements IUserAdapter {
  constructor(protected readonly controller: IUserController) {}

  getUserById = getUserById;
}
