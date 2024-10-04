import React, { useState, ReactElement } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import { Order } from '../components/order';
import { IOrder } from '../types/order';

import { numberToCurrencyFormat } from '../helpers/formatCurrency';

export const Wallet = (): ReactElement => {
  const [showBalance, setShowBalance] = useState<boolean>(false);
  const [currentBalance, setCurrentBalance] = useState<number>(12);

  const toggleBalanceVisibility = (): void => {
    setShowBalance(!showBalance);
  };

  // Simulação de pedidos
  const orderHistory: IOrder[] = [
    {
      id: 1,
      name: 'Caipirinha de uva',
      value: 27.5,
      date: '2024-11-04T07:18:00.000-05:00',
    },
    {
      id: 2,
      name: 'Cerveja Heineken',
      value: 45,
      date: '2024-11-03T18:23:00.000-05:00',
    },
    {
      id: 3,
      name: 'Gin Tônica',
      value: 54.2,
      date: '2024-11-01T23:48:00.000-05:00',
    },
    {
      id: 4,
      name: 'Porção de fritas',
      value: 29.9,
      date: '2024-11-01T23:48:00.000-05:00',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen bg-gray-900 p-4 text-white'>
      {/* Título */}
      <div className='flex justify-end mb-4'>
        <h1 className='text-2xl font-bold'>Carteira</h1>
      </div>

      {/* Saldo disponível */}
      <div className='bg-gray-800 p-4 rounded-lg mb-6'>
        <div className='flex justify-between items-center mb-2'>
          <span className='text-sm text-gray-400'>Saldo disponível</span>
        </div>
        <div className='flex justify-between items-center'>
          <span className='text-2xl font-bold'>
            R${' '}
            {showBalance ? `${numberToCurrencyFormat(currentBalance)}` : '****'}
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
      <div className='bg-gray-800 p-4 rounded-lg mb-6'>
        <span className='text-sm text-gray-400 mb-2 block'>
          Histórico de pedidos
        </span>
        <ul>
          {orderHistory.length ? (
            orderHistory.map((order) => (
              <Order
                key={order.id}
                id={order.id}
                name={order.name}
                value={order.value}
                date={order.date}
              />
            ))
          ) : (
            <p className='text-gray-400'>Nenhum pedido encontrado</p>
          )}
        </ul>
      </div>

      {/* Botão "Comprar produtos" fixado no rodapé */}
      <div className='mt-auto flex justify-center'>
        <button className='bg-[var(--green)] w-2/3 py-3 rounded-3xl text-center font-bold text-black'>
          Comprar produtos
        </button>
      </div>
    </div>
  );
};
