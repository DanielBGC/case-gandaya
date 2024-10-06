import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { IProduct } from '../types/product';

interface IUserStore {
  userId: number;
  balance: number;
  products: IProduct[];
  purchasedItems: Record<number, number>;

  setUserId: (newUserId: number) => void;
  setBalance: (newBalance: number) => void;
  setProducts: (newProducts: IProduct[]) => void;
  setPurchasedItems: (id: number, quantity: number) => void;
  clearPurchasedItems: () => void;
}

export const useUserStore = create(
  persist<IUserStore>(
    (set) => ({
      userId: 0,
      balance: 0,
      products: [],
      purchasedItems: [],

      // Função para atualizar o ID do usuário
      setUserId: (newUserId: number) => {
        set({ userId: newUserId });
      },

      // Função para atualizar o saldo
      setBalance: (newBalance: number) => {
        set({ balance: newBalance });
      },

      // Função para atualizar os produtos
      setProducts: (newProducts: IProduct[]) => {
        set({ products: newProducts });
      },

      // Função para atualizar os itens do carrinho
      setPurchasedItems: (id, quantity) =>
        set((state) => ({
          purchasedItems: {
            ...state.purchasedItems,
            [id]: quantity,
          },
        })),

      // Função para limpar todos os itens comprados
      clearPurchasedItems: () => {
        set({ purchasedItems: [] });
      },
    }),
    {
      name: 'user-store',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
