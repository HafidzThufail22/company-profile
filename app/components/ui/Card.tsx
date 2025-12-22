'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      className={`
        bg-brand-white rounded-2xl p-6 
        shadow-[0_4px_20px_rgba(0,0,0,0.08)]
        ${hover ? 'transition-all duration-300 hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)] hover:scale-[1.02]' : ''}
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
