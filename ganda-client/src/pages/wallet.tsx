import { useEffect, useState, ReactElement } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Order } from '../components/order';
import { IOrder } from '../types/order';

import { useGetUser } from '../hooks/user';
import { useGetOrders } from '../hooks/order';

import { numberToCurrencyFormat } from '../helpers/formatCurrency';

import { useUserStore } from '../store';

export const Wallet = (): ReactElement => {
  const { balance, setBalance, setUserId } = useUserStore();
  const { getUser } = useGetUser();
  const { getOrders } = useGetOrders();
  const navigate = useNavigate();

  const [showBalance, setShowBalance] = useState<boolean>(false);
  const [orderHistory, setOrderHistory] = useState<IOrder[]>([]);

  useEffect(() => {
    const handleGetUser = async (): Promise<void> => {
      const response = await getUser(1);

      if (response.eventData) {
        setBalance(response.eventData.balance);
        setUserId(response.eventData.id);
      }
    };

    const handleGetOrders = async (): Promise<void> => {
      const response = await getOrders();

      if (response.eventData) {
        console.log(response.eventData);
        setOrderHistory(response.eventData);
      }
    };

    handleGetUser();
    handleGetOrders();
  }, []);

  const toggleBalanceVisibility = (): void => {
    setShowBalance(!showBalance);
  };

  const handleNavigateMenu = (): void => {
    navigate('/menu');
  };

  return (
    <div className='flex flex-col min-h-screen bg-gray-800 p-4 text-white'>
      {/* Título */}
      <div className='flex justify-end mb-4'>
        <h1 className='text-2xl font-bold'>Carteira</h1>
      </div>

      {/* Saldo disponível */}
      <div className='bg-gray-9000 p-4 rounded-lg mb-6'>
        <div className='flex justify-between items-center mb-2'>
          <span className='text-sm text-gray-400'>Saldo disponível</span>
        </div>
        <div className='flex justify-between items-center'>
          <span className='text-2xl font-bold'>
            R$ {showBalance ? `${numberToCurrencyFormat(balance)}` : '****'}
          </span>
          <button
            onClick={toggleBalanceVisibility}
            className='focus:outline-none'
          >
            {showBalance ? (
              <FaEye size={20} className='text-gray-400' />
            ) : (
              <FaEyeSlash size={20} className='text-gray-400' />
            )}
          </button>
        </div>
      </div>

      {/* Histórico de pedidos */}
      <div className='bg-gray-900 p-4 rounded-lg mb-6'>
        <span className='text-sm text-gray-400 mb-2 block'>
          Histórico de pedidos
        </span>
        <ul>
          {orderHistory.length ? (
            orderHistory.map((order) =>
              order.items.map((item, index) => (
                <Order
                  key={order.id + index}
                  id={order.id}
                  name={item.name}
                  value={item.price * item.quantity}
                  date={order.createdAt}
                />
              ))
            )
          ) : (
            <p className='text-gray-400'>Nenhum pedido encontrado</p>
          )}
        </ul>
      </div>

      {/* Botão "Comprar produtos" fixado no rodapé */}
      <div onClick={handleNavigateMenu} className='mt-auto flex justify-center'>
        <button className='bg-[var(--green)] w-2/3 py-3 rounded-3xl text-center font-bold text-black'>
          Comprar produtos
        </button>
      </div>
    </div>
  );
};
