import { IOrderController, IOrderService } from '../types';

import { getOrderById, getOrders } from './methods/index';

export class OrderController implements IOrderController {
  constructor(protected readonly orderService: IOrderService) {}

  getOrderById = getOrderById;
  getOrders = getOrders;
}
