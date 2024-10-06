import { OrderController } from '../controllers';
import { IOrderController } from '../types';
import { OrderServiceFactory } from './OrderServiceFactory';

export class OrderControllerFactory {
  private constructor() {}

  static getInstance(): IOrderController {
    return new OrderController(OrderServiceFactory.getInstance());
  }
}
