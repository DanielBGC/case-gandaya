import { useState } from 'react';
import { AxiosResponse } from 'axios';
import { api } from '../services/axios';
import { IUser } from '../types/user';

interface IEventReturn {
  status: number;
  eventData?: IUser | null;
  error?: string;
}

export const useGetUser = (): {
  getUser: (id: number) => Promise<IEventReturn>;
  isLoading: boolean;
} => {
  const [isLoading, setIsLoading] = useState(true);

  async function getUser(id: number): Promise<IEventReturn> {
    setIsLoading(true);

    try {
      const response = await api.get<IUser | null>(`/users/${id}`);
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
    getUser,
    isLoading,
  };
};
