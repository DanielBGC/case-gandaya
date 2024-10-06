export interface IUserRepository {
  findOneById(id: number): Promise<any>;
  updateOneById(id: number, totalPrice: number): Promise<any>;
}
