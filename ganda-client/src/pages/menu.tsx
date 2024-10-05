import { useEffect, useState, useMemo, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';

import { ProductCard } from '../components/productCard';
import { numberToCurrencyFormat } from '../helpers';

// Simulação de produtos
import { listProducts } from '../store/listProducts';
import { useUserStore } from '../store';

export const Menu = (): ReactElement => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(listProducts);

  const { purchasedItems } = useUserStore();

  const navigate = useNavigate();

  const handleNavigateBack = (): void => {
    navigate('/wallet');
  };

  const handleNavigateCheckout = (): void => {
    navigate('/checkout');
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredProducts(listProducts); // Se a busca estiver vazia, mostra todos os produtos
    } else {
      const filtered = listProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) // Filtra por nome, ignorando letras maiúsculas e minúsculas
      );
      setFilteredProducts(filtered); // Atualiza o estado com os produtos filtrados
    }
  }, [searchTerm]);

  useEffect(() => {
    console.log('purchasedItems: ', purchasedItems);
  }, [purchasedItems]);

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

        <h1 className='text-2xl font-bold'>Cardápio</h1>
      </div>

      {/* Buscar produto */}
      <div className='relative w-full mt-6 mb-6 px-4'>
        <input
          type='text'
          className='w-full py-3 pl-4 pr-10 border-2 border-[var(--green)] bg-slate-900 rounded-xl focus:outline-none focus:ring-2'
          placeholder='Buscar produto'
          onChange={handleSearchChange}
        />
        <div className='absolute inset-y-0 right-8 flex items-center pointer-events-none'>
          <FaSearch className='text-white' size={22} />
        </div>
      </div>

      {/* Listagem de produtos */}
      <div className='grid grid-cols-3'>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            value={product.value}
            estoque={product.estoque}
            image={product.image}
            quantity={purchasedItems[product.id] || 0}
          />
        ))}
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
          <button
            onClick={handleNavigateCheckout}
            className='bg-[var(--green)] px-8 py-3 rounded-3xl text-center font-bold text-black'
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};
