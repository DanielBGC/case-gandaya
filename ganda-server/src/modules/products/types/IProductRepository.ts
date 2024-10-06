export interface IProductRepository {
  findOneById(id: number): Promise<any>;
  findAll(): Promise<any[]>;
}
