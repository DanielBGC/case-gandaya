import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { FaCircleXmark } from 'react-icons/fa6';

import { MainButton } from './button';

interface ModalProps {
  isOpen: boolean;
  success: boolean;
  title: string;
  message?: string;
  onClose: () => void;
}

const modalVariants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
  exit: { y: '100%', opacity: 0, transition: { duration: 0.5 } },
};

export const Modal = ({
  isOpen,
  success,
  title,
  message,
  onClose,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end z-50'>
      <motion.div
        initial='hidden'
        animate='visible'
        exit='exit'
        variants={modalVariants}
        className='bg-white w-full max-w-md p-6 rounded-t-2xl text-center'
      >
        {/* Ícone e título */}
        <div className='flex flex-col items-center'>
          {success ? (
            <FiCheckCircle className='text-green-500' size={48} />
          ) : (
            <FaCircleXmark className='text-red-500' size={48} />
          )}
          <h2 className='mt-2 text-xl font-extrabold text-black'>{title}</h2>
        </div>

        {/* Mensagem */}
        <div className='my-4 text-black'>
          <p>{message}</p>
        </div>

        {/* Botão */}
        <MainButton handleOnClick={onClose} className='w-full mt-4'>
          Confirmar
        </MainButton>
      </motion.div>
    </div>
  );
};
