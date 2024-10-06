export interface IOrderRepository {
  findOneById(id: number): Promise<any>;
  findAll(): Promise<any[]>;
}
