export interface IUserRepository {
  findOneById(id: number): Promise<any>;
}
