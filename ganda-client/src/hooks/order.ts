import { useState } from 'react';
import { AxiosResponse } from 'axios';
import { api } from '../services/axios';
import { IOrder } from '../types/order';

interface IEventReturn {
  status: number;
  eventData?: IOrder[] | null;
  error?: string;
}

export const useGetOrders = (): {
  getOrders: () => Promise<IEventReturn>;
  isLoading: boolean;
} => {
  const [isLoading, setIsLoading] = useState(true);

  async function getOrders(): Promise<IEventReturn> {
    setIsLoading(true);

    try {
      const response = await api.get<IOrder[] | null>('/orders');
      setIsLoading(false);
      return {
        status: 200,
        eventData: response.data,
      };
    } catch (err) {
      const error = err as AxiosResponse<string>;
      setIsLoading(false);
      return {
        status: error.status,
        error: error.data,
      };
    }
  }

  return {
    getOrders,
    isLoading,
  };
};
