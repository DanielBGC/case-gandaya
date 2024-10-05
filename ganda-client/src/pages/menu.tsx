import { useEffect, useState, useMemo, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';

import { ProductCard } from '../components/productCard';
import { numberToCurrencyFormat } from '../helpers/formatCurrency';

// Simulação de produtos
const listProducts = [
  {
    id: 1,
    name: 'Gin Tanqueray',
    value: 40,
    estoque: 8,
    image:
      'https://s3-alpha-sig.figma.com/img/518b/69fc/94f1f919cd8c2500bb4571829a9ae76a?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jSeLLlpHXVMMH9MgNPwwSLM16VOoGXfcJGNwN9a-gM717py1OvflJ8DlMhd635JIBM6inSMABceAEuhU0bnqE-OYMCaYhOONSbMe7g0JSC1JDb9hVazzH7J7nOYI3zXHAhJV-qikJuaP6jOLi2uYAZFnUiWFjAhUcd6fhjfh2ibw-IgDTWNQm91dldoORqNvdy2X3hIf9U53l4yV9eRP9UDTema6HeNrHWihWcTPq74eBK9bDTbg8nFz0QdFOFT60SGMyt7P8SInbUYAfrSMMULKyLe4Il-1nuHA~Pz9ZE-Yqbu0Y-RRPz0cJH6ynxPimCAfzjapa5EGD~x6gz7Odg__',
  },
  {
    id: 2,
    name: 'Bear Mate',
    value: 18,
    estoque: 10,
    image:
      'https://s3-alpha-sig.figma.com/img/b12e/d228/2cdb9d86d48a73e39ab16dd98b515aac?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LG43VkACMmuRtAaDAIwkokBZctOSJJDkoy8yRxugL3i5v5RloBf-RlpK3WnkPb72Tw2-XjlYAJ8M7i823Gwat5F1nzQ1z3EOa-thC8hSBNy6y5IvjbIFN6eYiYW9PGxUZYkJ5sev3keqGebu8fd7pMxlwWK-sggRQEjHskyTny60L9byRhhnQ-Ww6mHQnXeLrcGce0QP8dqsj1nmk6RlxJoo026aH0I9j2orwOkqga79UytXxQ8Y7HjMYPEOWT0ExoebZa-Gf8TxpdHJ2qZ1vk9c~ZsaqnO9hq7N-5a5aw6LCDwc5HhMq1dB~rMAVyW~hBUBEWMWJNXMHdzjG5jivg__',
  },
  {
    id: 3,
    name: 'Caipirinha de limão',
    value: 28,
    estoque: 3,
    image:
      'https://s3-alpha-sig.figma.com/img/65fe/f2ba/564d91ef2112ab5a599ea60e3efc87fc?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qaVljB6bE-WA5fZlaTMSYuoEgC3FZu28Bs6sbwaueTEl~MHDr4W7wTKbZrghzRVO6xDTjjTkEfVshYfAS1A3pGrJZdbabLo2Cbrnrre4IXltg3vof6i2q0UURxZEjoB1IjZ6DJZCZBAm7KDKWre4isVlzTYKDTlDJ8QHMb3JyEuwX4WsvoBvMQR8o2szINRAjmbWl~E2CNCucyF1N~nkVRAtIZnqE7oGBifiD4xxpOV6MsCsGXPfc2srbgouwrT7fWUkipElt8PgG7MUkV1HDxd3I1nNDDK0QHqYRJgzOyGWqmkh3Irr1hEUaRhhRa~gH5zWMr1GF7CE0DUWd0u0zg__',
  },
  {
    id: 4,
    name: 'Caipirinha de limão',
    value: 28,
    estoque: 5,
    image:
      'https://s3-alpha-sig.figma.com/img/65fe/f2ba/564d91ef2112ab5a599ea60e3efc87fc?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qaVljB6bE-WA5fZlaTMSYuoEgC3FZu28Bs6sbwaueTEl~MHDr4W7wTKbZrghzRVO6xDTjjTkEfVshYfAS1A3pGrJZdbabLo2Cbrnrre4IXltg3vof6i2q0UURxZEjoB1IjZ6DJZCZBAm7KDKWre4isVlzTYKDTlDJ8QHMb3JyEuwX4WsvoBvMQR8o2szINRAjmbWl~E2CNCucyF1N~nkVRAtIZnqE7oGBifiD4xxpOV6MsCsGXPfc2srbgouwrT7fWUkipElt8PgG7MUkV1HDxd3I1nNDDK0QHqYRJgzOyGWqmkh3Irr1hEUaRhhRa~gH5zWMr1GF7CE0DUWd0u0zg__',
  },
  {
    id: 5,
    name: 'Caipirinha de limão',
    value: 28,
    estoque: 5,
    image:
      'https://s3-alpha-sig.figma.com/img/65fe/f2ba/564d91ef2112ab5a599ea60e3efc87fc?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qaVljB6bE-WA5fZlaTMSYuoEgC3FZu28Bs6sbwaueTEl~MHDr4W7wTKbZrghzRVO6xDTjjTkEfVshYfAS1A3pGrJZdbabLo2Cbrnrre4IXltg3vof6i2q0UURxZEjoB1IjZ6DJZCZBAm7KDKWre4isVlzTYKDTlDJ8QHMb3JyEuwX4WsvoBvMQR8o2szINRAjmbWl~E2CNCucyF1N~nkVRAtIZnqE7oGBifiD4xxpOV6MsCsGXPfc2srbgouwrT7fWUkipElt8PgG7MUkV1HDxd3I1nNDDK0QHqYRJgzOyGWqmkh3Irr1hEUaRhhRa~gH5zWMr1GF7CE0DUWd0u0zg__',
  },
  {
    id: 6,
    name: 'Caipirinha de limão',
    value: 28,
    estoque: 8,
    image:
      'https://s3-alpha-sig.figma.com/img/65fe/f2ba/564d91ef2112ab5a599ea60e3efc87fc?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qaVljB6bE-WA5fZlaTMSYuoEgC3FZu28Bs6sbwaueTEl~MHDr4W7wTKbZrghzRVO6xDTjjTkEfVshYfAS1A3pGrJZdbabLo2Cbrnrre4IXltg3vof6i2q0UURxZEjoB1IjZ6DJZCZBAm7KDKWre4isVlzTYKDTlDJ8QHMb3JyEuwX4WsvoBvMQR8o2szINRAjmbWl~E2CNCucyF1N~nkVRAtIZnqE7oGBifiD4xxpOV6MsCsGXPfc2srbgouwrT7fWUkipElt8PgG7MUkV1HDxd3I1nNDDK0QHqYRJgzOyGWqmkh3Irr1hEUaRhhRa~gH5zWMr1GF7CE0DUWd0u0zg__',
  },
];

export const Menu = (): ReactElement => {
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(listProducts);

  const navigate = useNavigate();

  const handleNavigateBack = (): void => {
    navigate('/wallet');
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

  const handleQuantityChange = (id: number, quantity: number): void => {
    setQuantities((prev) => ({
      ...prev,
      [id]: quantity, // Atualiza a quantidade do produto com base no id
    }));
  };

  const totalValue = useMemo(() => {
    let total = 0;
    Object.keys(quantities).forEach((id) => {
      const product = listProducts.find((p) => p.id === parseInt(id));

      if (product) {
        total += quantities[parseInt(id)] * product.value;
      }
    });
    return total;
  }, [quantities]);

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
            onQuantityChange={handleQuantityChange}
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
          <button className='bg-[var(--green)] px-8 py-3 rounded-3xl text-center font-bold text-black'>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};
