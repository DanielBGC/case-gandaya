export type IOrder = {
  id: number;
  userId: number;
  total: number;
  createdAt: string;
  items: {
    productId: number;
    quantity: number;
    name: string;
    price: number;
    stock: number;
    image: string;
  }[];
};
