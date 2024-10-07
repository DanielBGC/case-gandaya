import React, { ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface MainButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  handleOnClick?: () => void;
}

export const MainButton = ({
  children,
  className,
  handleOnClick,
}: MainButtonProps) => {
  return (
    <motion.button
      onClick={handleOnClick}
      className={`bg-[var(--green)] py-3 rounded-3xl text-center font-bold text-black ${className}`}
      whileHover={{
        backgroundColor: '#a2ed09',
      }}
      whileTap={{ scale: 0.8 }}
      transition={{
        type: 'spring',
        duration: 0.3,
      }}
    >
      {children}
    </motion.button>
  );
};
