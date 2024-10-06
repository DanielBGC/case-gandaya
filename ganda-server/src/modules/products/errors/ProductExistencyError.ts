export class ProductExistencyError extends Error {
  constructor() {
    super('Product not found');

    Object.setPrototypeOf(this, ProductExistencyError.prototype);
  }
}
