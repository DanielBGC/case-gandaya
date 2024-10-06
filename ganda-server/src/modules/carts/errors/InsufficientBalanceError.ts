export class InsufficientBalanceError extends Error {
  constructor() {
    super('User has Insufficient Balance.');

    Object.setPrototypeOf(this, InsufficientBalanceError.prototype);
  }
}
