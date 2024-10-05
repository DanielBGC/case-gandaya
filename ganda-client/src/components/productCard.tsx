import { useEffect, useState, ReactElement } from 'react';

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

export const ProductCard = ({
  id,
  name,
  value,
  estoque,
  quantity,
  image,
}: ProductCardProps): ReactElement => {
  const { setPurchasedItems } = useUserStore();
  const [showQuantitySelector, setShowQuantitySelector] = useState<boolean>(
    () => {
      return quantity > 0;
    }
  );

  const toggleQuantitySelector = (): void => {
    if (quantity === 0) {
      setShowQuantitySelector(!showQuantitySelector);
    }
  };

  const showSumButton = quantity < estoque;
  const showMinusButton = quantity > 1;

  useEffect(() => {
    setShowQuantitySelector(quantity > 0);
  }, [quantity]);

  const handleChangeQuantity = (operation: OPERATIONS): void => {
    if (operation === OPERATIONS.MINUS && quantity > 0) {
      setPurchasedItems(id, quantity - 1);
    } else if (operation === OPERATIONS.SUM && quantity < estoque) {
      setPurchasedItems(id, quantity + 1);
    }
  };

  return (
    <div key={id} className='mb-8 flex flex-col gap-3 items-center'>
      <div className='relative'>
        <img
          onClick={toggleQuantitySelector}
          src={image}
          alt='Product Image'
          className='rounded-xl border-2 border-[var(--green)] h-24 aspect-square object-cover'
        />

        {showQuantitySelector && (
          <div className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center'>
            <button
              onClick={() => handleChangeQuantity(OPERATIONS.MINUS)}
              className='bg-[var(--green)] h-6 rounded-l-xl pl-2 pr-1 flex items-center'
            >
              {showMinusButton ? (
                <FiMinus className='text-black' size={16} />
              ) : (
                <FaTrash className='text-black' size={16} />
              )}
            </button>
            <span
              className={`bg-white flex justify-center items-center w-8 h-6 text-black font-bold border-2 border-[var(--green)] ${
                !showSumButton && 'rounded-r-xl'
              }`}
            >
              {quantity}
            </span>
            {showSumButton && (
              <button
                onClick={() => handleChangeQuantity(OPERATIONS.SUM)}
                className='bg-[var(--green)] h-6 rounded-r-xl pl-1 pr-2 flex items-center'
              >
                <FiPlus className='text-black' size={16} />
              </button>
            )}
          </div>
        )}
      </div>

      <div className='flex flex-col self-start ml-4'>
        <span className='text-xs font-bold'>{name}</span>
        <span className='text-sm text-[var(--green)] font-medium'>
          R$ {numberToCurrencyFormat(value)}
        </span>
      </div>
    </div>
  );
};
