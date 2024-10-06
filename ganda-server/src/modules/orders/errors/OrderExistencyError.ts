export class OrderExistencyError extends Error {
  constructor() {
    super('Order not found');

    Object.setPrototypeOf(this, OrderExistencyError.prototype);
  }
}
