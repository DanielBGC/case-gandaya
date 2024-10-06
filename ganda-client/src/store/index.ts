import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { IProduct } from '../types/product';

interface IUserStore {
  balance: number;
  products: IProduct[];
  purchasedItems: Record<number, number>;

  setBalance: (newBalance: number) => void;
  setProducts: (newProducts: IProduct[]) => void;
  setPurchasedItems: (id: number, quantity: number) => void;
  clearPurchasedItems: () => void;
}

export const useUserStore = create(
  persist<IUserStore>(
    (set) => ({
      balance: 0,
      products: [],
      purchasedItems: [],

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
