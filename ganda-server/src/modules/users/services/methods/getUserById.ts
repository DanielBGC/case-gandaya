import { PrismaEvent } from '../../entities/Users';
import { UserExistencyError } from '../../errors/UserExistencyError';
import { UserService } from '../UserService';

export async function getUserById(
  this: UserService,
  id: number
): Promise<PrismaEvent> {
  const user = this.userRepository.findOneById(id);

  if (!user) {
    throw new UserExistencyError();
  }

  return user;
}
