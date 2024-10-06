import { IOrderService, IOrderRepository } from '../types';

import { getOrderById, getOrders } from './methods';

export class OrderService implements IOrderService {
  constructor(protected readonly orderRepository: IOrderRepository) {}

  getOrderById = getOrderById;
  getOrders = getOrders;
}
