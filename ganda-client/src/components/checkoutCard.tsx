import { ReactElement } from 'react';

import { FiPlus, FiMinus } from 'react-icons/fi';
import { FaTrash } from 'react-icons/fa';

import { numberToCurrencyFormat, OPERATIONS } from '../helpers';

import { useUserStore } from '../store';

interface ProductCardProps {
  id: number;
  name: string;
  value: number;
  estoque: number;
  quantity: number;
  image: string;
}

export const CheckoutCard = ({
  id,
  name,
  value,
  estoque,
  image,
  quantity,
}: ProductCardProps): ReactElement => {
  const { setPurchasedItems } = useUserStore();

  const showSumButton = quantity < estoque;

  const handleChangeQuantity = (operation: OPERATIONS): void => {
    if (operation === OPERATIONS.MINUS && quantity > 0) {
      setPurchasedItems(id, quantity - 1);
    } else if (operation === OPERATIONS.SUM && quantity < estoque) {
      setPurchasedItems(id, quantity + 1);
    }
  };

  return (
    <div
      key={id}
      className='flex items-center gap-4 p-4 mx-3 rounded-2xl bg-slate-900'
    >
      <div>
        <img
          src={image}
          alt='Product Image'
          className='rounded-xl border-2 border-[var(--green)] h-24 aspect-square object-cover'
        />
      </div>

      <div className='flex flex-col'>
        <span className='text-xs font-bold'>{name}</span>
        <span className='text-sm text-[var(--green)] font-medium'>
          R$ {numberToCurrencyFormat(value)}
        </span>
      </div>

      <div className='flex items-center ml-auto'>
        <button
          onClick={() => handleChangeQuantity(OPERATIONS.MINUS)}
          className='bg-[var(--green)] h-8 rounded-l-xl p-1 flex items-center'
        >
          {quantity > 1 ? (
            <FiMinus className='text-black' size={20} />
          ) : (
            <FaTrash className='text-black' size={20} />
          )}
        </button>
        <span
          className={`flex justify-center items-center w-8 h-8 bg-white text-black font-bold border-2 border-[var(--green)] ${
            !showSumButton && 'rounded-r-xl'
          }`}
        >
          {quantity}
        </span>
        {showSumButton && (
          <button
            onClick={() => handleChangeQuantity(OPERATIONS.SUM)}
            className='bg-[var(--green)] h-8 rounded-r-xl p-1 flex items-center'
          >
            <FiPlus className='text-black' size={20} />
          </button>
        )}
      </div>
    </div>
  );
};
