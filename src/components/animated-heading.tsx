
'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedHeadingProps {
  activeAbbr: string;
}

export function AnimatedHeading({ activeAbbr }: AnimatedHeadingProps) {
  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline leading-tight text-white">
      EGSP<AnimatePresence mode="wait">
        <motion.span
          key={activeAbbr}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="inline-block"
        >
          {activeAbbr}
        </motion.span>
      </AnimatePresence>
    </h1>
  );
}
