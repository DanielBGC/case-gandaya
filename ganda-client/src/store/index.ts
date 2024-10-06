import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// interface PurchasedItem {
//   id: number;
//   name: string;
//   quantity: number;
//   value: number;
// }

interface IUserStore {
  balance: number;
  purchasedItems: Record<number, number>;

  setBalance: (newBalance: number) => void;
  setPurchasedItems: (id: number, quantity: number) => void;
  clearPurchasedItems: () => void;
}

export const useUserStore = create(
  persist<IUserStore>(
    (set) => ({
      balance: 0,
      purchasedItems: [],

      // Função para atualizar o saldo
      setBalance: (newBalance: number) => {
        set({ balance: newBalance });
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
