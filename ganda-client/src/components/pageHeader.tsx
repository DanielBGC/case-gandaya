import { FiArrowLeft } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  showBackButton: boolean;
  handleClickBackButton?: () => void;
}

export const PageHeader = ({
  title,
  showBackButton,
  handleClickBackButton,
}: PageHeaderProps) => {
  return (
    <div className='flex mb-4 px-4 '>
      {showBackButton && (
        <motion.button
          whileTap={{ scale: 0.8 }}
          transition={{
            type: 'spring',
            duration: 0.3,
          }}
          onClick={handleClickBackButton}
          className='flex items-center justify-center bg-slate-200 rounded-full w-8'
        >
          <FiArrowLeft className='text-black' size={20} />
        </motion.button>
      )}

      <h1 className='text-2xl font-bold ml-auto'>{title}</h1>
    </div>
  );
};
