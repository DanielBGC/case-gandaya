import { ReactElement } from 'react';

import { formatDate, formatTime } from '../helpers/formatDateTime';
import { numberToCurrencyFormat } from '../helpers/formatCurrency';

interface OrderCardProps {
  id: number;
  name: string;
  value: number;
  date: string;
}

export const Order = ({
  id,
  name,
  value,
  date,
}: OrderCardProps): ReactElement => {
  return (
    <li key={id} className='mt-2 flex gap-2 items-center'>
      <div className='flex items-center justify-center border-2 border-[#E3E3E3] rounded-md aspect-square h-16'>
        <span className='font-extrabold text-2xl'>{id}</span>
      </div>

      <div className='flex flex-col gap-0'>
        <span className='font-bold text-lg'>{name}</span>
        <div>
          <span className='text-sm font-extrabold text-[#A3A3A3]'>
            {formatDate(date)}{' '}
          </span>
          <span className='text-sm text-[#A3A3A3]'>{formatTime(date)} </span>
        </div>
        <span className='text-sm text-[var(--green)] font-bold'>
          R$ {numberToCurrencyFormat(value)}
        </span>
      </div>
    </li>
  );
};
