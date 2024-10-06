import { OrderService } from '../services';
import { OrderRepositoryFactory } from './OrderRepositoryFactory';

export class OrderServiceFactory {
  private constructor() {}

  static getInstance(): OrderService {
    return new OrderService(OrderRepositoryFactory.getInstance());
  }
}
