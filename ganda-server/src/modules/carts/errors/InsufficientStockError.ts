export class InsufficientStockError extends Error {
  constructor(products: string[]) {
    super(`Product has Insufficient Stock. [${products.join(', ')}]`);

    Object.setPrototypeOf(this, InsufficientStockError.prototype);
  }
}
