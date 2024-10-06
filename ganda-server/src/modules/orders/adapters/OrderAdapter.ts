import { IOrderAdapter, IOrderController } from '../types';

import { getOrderById, getOrders } from './methods';

export class OrderAdapter implements IOrderAdapter {
  constructor(protected readonly controller: IOrderController) {}

  getOrderById = getOrderById;
  getOrders = getOrders;
}
