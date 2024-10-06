export class CartExistencyError extends Error {
  constructor() {
    super('Cart not found');

    Object.setPrototypeOf(this, CartExistencyError.prototype);
  }
}
