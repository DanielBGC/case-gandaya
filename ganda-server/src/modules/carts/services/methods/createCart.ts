import { PrismaEvent } from '../../entities/Cart';
import { CartService } from '../CartService';

import { InsufficientBalanceError } from '../../errors';
import { InsufficientStockError } from '../../errors';

export async function createCart(this: CartService, data: any): Promise<any> {
  console.log('createCart (SERVICES): ', data);

  console.log('abandoned: ', data.abandoned);
  if (data.abandoned) {
    await this.cartRepository.createCart(data);
    return true;
  }

  /* Busca informações do usuário e dos produtos */
  const [user, products] = await Promise.all([
    this.userRepository.findOneById(data.userId),
    this.productRepository.findManyByIds(
      data.items.map((item: any) => item.productId)
    ),
  ]);

  /* Calcula o preço total e verifica se todos os produtos tem estoque suficiente */
  let totalPrice = 0;
  const itemsWithStock = data.items.map((item: any) => {
    const productInfo = products.find((p) => p.id === item.productId);
    totalPrice += productInfo!.price * item.quantity;

    return {
      ...item,
      hasStock: productInfo!.stock >= item.quantity,
      product: productInfo,
    };
  });

  /* Verifica se o usuário tem saldo suficiente e se todos os itens tem estoque */
  const hasEnoughBalance = user.balance >= totalPrice;
  const hasEnoughStock = itemsWithStock.every(
    (item: any) => item.hasStock === true
  );

  console.log('totalPrice: ', totalPrice);
  console.log('user.balance: ', user.balance);
  console.log('hasEnoughBalance: ', hasEnoughBalance);
  console.log('hasEnoughStock: ', hasEnoughStock);

  if (!hasEnoughBalance) {
    throw new InsufficientBalanceError();
  }

  if (!hasEnoughStock) {
    const outOfStockItems = itemsWithStock
      .filter((item: any) => !item.hasStock)
      .map((item: any) => item.name);
    throw new InsufficientStockError(outOfStockItems);
  }

  /* Insere um novo registro na tabela Cart */
  const newCart = await this.cartRepository.createCart(data);
  console.log('newCart (SERVICES): ', newCart);

  /* Insere um novo registro na tabela Order */
  await this.orderRepository.createOrder({
    userId: data.userId,
    items: data.items,
    totalPrice: totalPrice,
  });

  /* Atualiza o estoque dos produtos */
  for (const item of data.items) {
    await this.productRepository.updateById(item.productId, item.quantity);
  }

  /* Atualiza o saldo do usuário */
  await this.userRepository.updateOneById(data.userId, totalPrice);

  return true;
}
