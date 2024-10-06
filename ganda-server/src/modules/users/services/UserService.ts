import { IUserService, IUserRepository } from '../types';

import { getUserById } from './methods/getUserById';

export class UserService implements IUserService {
  constructor(protected readonly userRepository: IUserRepository) {}

  getUserById = getUserById;
}
