import { OrderAdapter } from '../adapters';
import { IOrderAdapter } from '../types';
import { OrderControllerFactory } from './OrderControllerFactory';

export class OrderAdapterFactory {
  private constructor() {}

  static getInstance(): IOrderAdapter {
    return new OrderAdapter(OrderControllerFactory.getInstance());
  }
}
