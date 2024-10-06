import { FiCheckCircle } from 'react-icons/fi';
import { FaCircleXmark } from 'react-icons/fa6';

interface ModalProps {
  isOpen: boolean;
  success: boolean;
  title: string;
  message?: string;
  onClose: () => void;
}

export const Modal = ({
  isOpen,
  success,
  title,
  message,
  onClose,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end'>
      <div className='bg-white w-full max-w-md p-6 rounded-t-2xl text-center'>
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
        <div className='mt-4'>
          <button
            onClick={onClose}
            className='bg-[var(--green)] w-full py-3 rounded-3xl text-center font-bold text-black'
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};
