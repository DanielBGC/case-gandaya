import { useMemo, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { numberToCurrencyFormat } from '../helpers';

import { CheckoutCard } from '../components/checkoutCard';

// Simulação de produtos
import { listProducts } from '../store/listProducts';
import { useUserStore } from '../store';

export const Checkout = (): ReactElement => {
  const { purchasedItems } = useUserStore();

  const navigate = useNavigate();

  const handleNavigateBack = (): void => {
    navigate('/menu');
  };

  const totalValue = useMemo(() => {
    let total = 0;
    Object.keys(purchasedItems).forEach((id) => {
      const product = listProducts.find((p) => p.id === parseInt(id));

      if (product) {
        total += purchasedItems[parseInt(id)] * product.value;
      }
    });
    return total;
  }, [purchasedItems]);

  return (
    <div className='flex flex-col min-h-screen bg-gray-800 pt-4 text-white'>
      {/* Título */}
      <div className='flex justify-between mb-4 px-4 '>
        <button
          onClick={handleNavigateBack}
          className='flex items-center justify-center bg-slate-200 rounded-full w-8'
        >
          <FiArrowLeft className='text-black' size={20} />
        </button>

        <h1 className='text-2xl font-bold'>Checkout</h1>
      </div>

      {/* Listagem de produtos */}
      <div className='flex flex-col overflow-auto pb-32 mt-6 gap-4'>
        {Object.keys(purchasedItems).map((id) => {
          const product = listProducts.find((p) => p.id === parseInt(id));
          const quantity = purchasedItems[parseInt(id)];

          // Verifica se o produto existe e tem quantidade maior que 0
          if (!product || quantity <= 0) return null;

          return (
            <CheckoutCard
              key={product.id}
              id={product.id}
              name={product.name}
              value={product.value}
              estoque={product.estoque}
              quantity={quantity}
              image={product.image}
            />
          );
        })}
      </div>

      {/* Valor total da compra */}
      <div className='mt-auto w-full fixed bottom-0 h-24 bg-slate-900 flex items-center'>
        <div className='flex justify-between items-center w-full px-5'>
          <div className='flex flex-col'>
            <span className='font-thin text-sm text-[#A2A2A2]'>
              Valor total
            </span>
            <span className='text-3xl text-[var(--green)] font-bold'>
              R$ {numberToCurrencyFormat(totalValue)}
            </span>
          </div>
          <button className='bg-[var(--green)] px-8 py-3 rounded-3xl text-center font-bold text-black'>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};
