
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const institutions = [
  'EGSPEC',
  'EGSPASC',
  'EGSPPC',
  'EGSPCP',
  'EGSPCE',
  'EGSPNYMC',
];

export function AnimatedHeading() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % institutions.length);
    }, 2500); // Change text every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline leading-tight mb-4">
      Join <span className="text-primary-foreground">EGSP</span>{' '}
      <AnimatePresence mode="wait">
        <motion.span
          key={institutions[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="inline-block text-accent"
          style={{
            background: 'linear-gradient(to right, #f87171, #fb923c, #fbbf24)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          {institutions[index]}
        </motion.span>
      </AnimatePresence>
    </h1>
  );
}
