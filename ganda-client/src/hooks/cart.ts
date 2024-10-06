import { useState } from 'react';
import { AxiosError } from 'axios';
import { api } from '../services/axios';
import { IUser } from '../types/user';

export interface IEventReturn {
  status: number;
  eventData?: IUser | null;
  error?: string;
}

type DataProps = {
  userId: number;
  items: Record<number, number>;
  abandoned: boolean;
};

export const useCreateCart = (): {
  createCart: (data: DataProps) => Promise<IEventReturn>;
  isLoading: boolean;
} => {
  const [isLoading, setIsLoading] = useState(true);

  async function createCart(data: DataProps): Promise<IEventReturn> {
    setIsLoading(true);

    try {
      const response = await api.post(`/carts/create`, data);
      setIsLoading(false);
      console.log('response hook: ', response);
      return {
        status: response.status,
        eventData: response.data,
      };
    } catch (err) {
      const error = err as AxiosError<string>;
      setIsLoading(false);

      console.log('error hook: ', error);
      return {
        status: error.response!.status,
        error: error.response!.data,
      };
    }
  }

  return {
    createCart,
    isLoading,
  };
};
