import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { IProduct } from '../types/product';
import { IModal } from '../types/modalCheckout';

interface IUserStore {
  userId: number;
  balance: number;
  products: IProduct[];
  purchasedItems: Record<number, number>;
  isModalOpen: boolean;
  modalInfo: IModal;

  setUserId: (newUserId: number) => void;
  setBalance: (newBalance: number) => void;
  setProducts: (newProducts: IProduct[]) => void;
  setPurchasedItems: (id: number, quantity: number) => void;
  clearPurchasedItems: () => void;
  setModalOpen: (isOpen: boolean) => void;
  setModalInfo: (newModalInfo: IModal) => void;
}

export const useUserStore = create(
  persist<IUserStore>(
    (set) => ({
      userId: 0,
      balance: 0,
      products: [],
      purchasedItems: [],
      isModalOpen: false,
      modalInfo: {
        success: false,
        title: '',
        message: '',
        onClose: () => null,
      },

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

      // Função para exibir o modal
      setModalOpen: (isOpen) => {
        set({ isModalOpen: isOpen });
      },

      // Função para atualizar as informações do Modal
      setModalInfo: (newModalInfo) => {
        set({ modalInfo: newModalInfo });
      },
    }),
    {
      name: 'user-store',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
