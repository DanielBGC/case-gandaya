import { useState, ReactElement } from 'react';
import { SlOptionsVertical } from 'react-icons/sl';
import { FiPlus, FiMinus } from 'react-icons/fi';

import { numberToCurrencyFormat } from '../helpers/formatCurrency';

interface ProductCardProps {
  id: number;
  name: string;
  value: number;
  estoque: number;
  image: string;
  onQuantityChange: (id: number, quantity: number) => void;
}

enum OPERATIONS {
  MINUS = 0,
  SUM = 1,
}

export const ProductCard = ({
  id,
  name,
  value,
  estoque,
  image,
  onQuantityChange,
}: ProductCardProps): ReactElement => {
  const [showQuantitySelector, setShowQuantitySelector] =
    useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(0);

  const toggleQuantitySelector = (): void => {
    if (quantity === 0) {
      setShowQuantitySelector(!showQuantitySelector);
    }
  };

  const handleChangeQuantity = (operation: OPERATIONS): void => {
    console.log('estoque: ', estoque);
    if (operation === OPERATIONS.MINUS) {
      if (quantity > 0) {
        setQuantity((prev) => {
          const newQuantity = prev - 1;
          // setTimeout para garantir que a mudança de quantidade ocorra após a renderização
          setTimeout(() => onQuantityChange(id, newQuantity), 0);
          return newQuantity;
        });
      }
    } else {
      if (quantity < estoque) {
        setQuantity((prev) => {
          const newQuantity = prev + 1;
          // setTimeout para garantir que a mudança de quantidade ocorra após a renderização
          setTimeout(() => onQuantityChange(id, newQuantity), 0);
          return newQuantity;
        });
      }
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

        <div className='absolute top-2 right-1'>
          <SlOptionsVertical className='text-black' size={18} />
        </div>

        {showQuantitySelector && (
          <div className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center'>
            <button
              onClick={() => handleChangeQuantity(OPERATIONS.MINUS)}
              className='bg-[var(--green)] h-6 rounded-l-xl p-1 flex items-center'
            >
              <FiMinus className='text-black' size={18} />
            </button>
            <span className='bg-white flex justify-center items-center w-8 h-6 text-black font-bold border-2 border-[var(--green)]'>
              {quantity}
            </span>
            <button
              onClick={() => handleChangeQuantity(OPERATIONS.SUM)}
              className='bg-[var(--green)] h-6 rounded-r-xl p-1 flex items-center'
            >
              <FiPlus className='text-black' size={18} />
            </button>
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
