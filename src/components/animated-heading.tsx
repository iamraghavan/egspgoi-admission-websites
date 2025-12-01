'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const institutions = [
  'EC',
  'ASC',
  'PC',
  'CP',
  'CE',
  'NYMC',
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
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline leading-tight">
      EGSP<AnimatePresence mode="wait">
        <motion.span
          key={institutions[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="inline-block"
        >
          {institutions[index]}
        </motion.span>
      </AnimatePresence>
    </h1>
  );
}
