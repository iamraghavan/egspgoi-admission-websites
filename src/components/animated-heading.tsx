
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export type Institution = {
  abbr: string;
  name: string;
};

const institutions: Institution[] = [
    { abbr: 'EC', name: 'EGS Pillay Engineering College' },
    { abbr: 'ASC', name: 'EGS Pillay Arts & Science College' },
    { abbr: 'PC', name: 'EGS Pillay Polytechnic College' },
    { abbr: 'CE', name: 'EGS Pillay College of Education' },
    { abbr: 'CN', name: 'EGS Pillay College and School of Nursing' },
    { abbr: 'CP', name: 'EGS Pillay College of Pharmacy' },
    { abbr: 'NYMC', name: 'EGS Pillay Naturopathy and Yoga Medical College' },
    { abbr: 'IS', name: 'EGS Pillay International School' },
];

interface AnimatedHeadingProps {
  onInstitutionChange: (institution: Institution) => void;
}


export function AnimatedHeading({ onInstitutionChange }: AnimatedHeadingProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % institutions.length;
        onInstitutionChange(institutions[nextIndex]);
        return nextIndex;
      });
    }, 3500); // Change text every 3.5 seconds

    // Set initial institution
    onInstitutionChange(institutions[0]);

    return () => clearInterval(interval);
  }, [onInstitutionChange]);

  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline leading-tight text-white">
      EGSP<AnimatePresence mode="wait">
        <motion.span
          key={institutions[index].abbr}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="inline-block"
        >
          {institutions[index].abbr}
        </motion.span>
      </AnimatePresence>
    </h1>
  );
}
