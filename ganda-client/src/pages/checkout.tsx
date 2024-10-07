import { useCallback, useMemo, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { numberToCurrencyFormat } from '../helpers';

import { CheckoutCard } from '../components/checkoutCard';
import { MainButton } from '../components/button';
import { PageHeader } from '../components/pageHeader';

import { useUserStore } from '../store';
import { useCreateCart, IEventReturn } from '../hooks/cart';

export const Checkout = (): ReactElement => {
  const { createCart } = useCreateCart();
  const navigate = useNavigate();

  const {
    userId,
    balance,
    purchasedItems,
    products,
    setProducts,
    clearPurchasedItems,
    setModalOpen,
    setModalInfo,
  } = useUserStore();

  const totalValue = useMemo(() => {
    let total = 0;
    Object.keys(purchasedItems).forEach((id) => {
      const product = products.find((p) => p.id === parseInt(id));

      if (product) {
        total += purchasedItems[parseInt(id)] * product.price;
      }
    });
    return total;
  }, [purchasedItems, products]);

  const handleCreateCart = useCallback(
    async ({ isAbandoned }: { isAbandoned: boolean }) => {
      try {
        const response = await createCart({
          userId,
          items: purchasedItems,
          abandoned: isAbandoned,
        });

        if (!isAbandoned) {
          handleResponseCheckout(response);
        } else {
          console.log('Carrinho abandonado com sucesso');
        }
      } catch (error) {
        console.error(
          isAbandoned
            ? 'Erro ao abandonar carrinho:'
            : 'Erro ao realizar checkout:',
          error
        );
      }
    },
    [purchasedItems, userId]
  );

  const handleResponseCheckout = (response: IEventReturn) => {
    if (response.status === 200) {
      handleSuccessResponse();
    } else if (response.error) {
      handleErrorResponse(response.error);
    }

    setModalOpen(true);
  };

  const handleSuccessResponse = () => {
    const newBalance = balance - totalValue;
    setModalInfo({
      success: true,
      title: 'Compra realizada!',
      message: `O seu saldo é de R$ ${numberToCurrencyFormat(newBalance)}`,
      onClose: () => {
        setProducts([]);
        clearPurchasedItems();
        setModalOpen(false);
        navigate('/wallet');
      },
    });
  };

  const handleErrorResponse = (error: string) => {
    const isInsufficientBalance = error.includes('Insufficient Balance');
    const errorMessage = isInsufficientBalance
      ? 'Saldo insuficiente!'
      : 'Ocorreu um erro ao processar a compra.';

    setModalInfo({
      success: false,
      title: errorMessage,
      message: '',
      onClose: () => setModalOpen(false),
    });
  };

  const handleCheckoutButton = (): void => {
    if (totalValue <= 0) {
      console.log('CARRINHO VAZIO');
      setModalInfo({
        success: false,
        title: 'Carrinho vazio!',
        message: `Atenção! Você ainda não selecionou nenhum produto.`,
        onClose: () => {
          setModalOpen(false);
        },
      });
      setModalOpen(true);
      return;
    }

    handleCreateCart({ isAbandoned: false });
  };

  const handleNavigateBack = (): void => {
    if (totalValue > 0) {
      console.log('CARRINHO ABANDONADO');
      handleCreateCart({ isAbandoned: true });
    }

    navigate('/menu');
  };

  return (
    <div className='flex flex-col min-h-screen bg-gray-800 pt-6 text-white'>
      {/* Header */}
      <PageHeader
        title='Checkout'
        showBackButton={true}
        handleClickBackButton={handleNavigateBack}
      />

      {/* Listagem de produtos */}
      <div className='flex flex-col overflow-auto pb-8 mt-6 gap-4'>
        <AnimatePresence>
          {Object.keys(purchasedItems).map((id) => {
            const product = products.find((p) => p.id === parseInt(id));
            const quantity = purchasedItems[parseInt(id)];

            // Verifica se o produto existe e tem quantidade maior que 0
            if (!product || quantity <= 0) return null;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <CheckoutCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  value={product.price}
                  estoque={product.stock}
                  quantity={quantity}
                  image={product.image}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Valor total da compra */}
      <div className='mt-auto w-full h-24 pt-4 pb-6 bg-slate-900 flex items-center'>
        <div className='flex justify-between items-center w-full px-5'>
          <div className='flex flex-col'>
            <span className='font-thin text-sm text-[#A2A2A2]'>
              Valor total
            </span>
            <span className='text-3xl text-[var(--green)] font-bold'>
              R$ {numberToCurrencyFormat(totalValue)}
            </span>
          </div>

          <MainButton handleOnClick={handleCheckoutButton} className='px-10'>
            Confirmar
          </MainButton>
        </div>
      </div>
    </div>
  );
};
