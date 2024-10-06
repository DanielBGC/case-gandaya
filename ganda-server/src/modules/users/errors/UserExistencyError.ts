export class UserExistencyError extends Error {
  constructor() {
    super('User not found');

    Object.setPrototypeOf(this, UserExistencyError.prototype);
  }
}
