
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { AdmissionForm } from './admission-form';
import heroImage from '@/app/assets/engineering_college.webp';
import { Button } from './ui/button';
import { ArrowRight, Search } from 'lucide-react';
import { AnimatedHeading } from './animated-heading';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';

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

export function HeroSection() {
    const [index, setIndex] = useState(0);
    const [activeInstitution, setActiveInstitution] = useState(institutions[0]);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % institutions.length;
          setActiveInstitution(institutions[nextIndex]);
          return nextIndex;
        });
      }, 3500); // Change text every 3.5 seconds
  
      return () => clearInterval(interval);
    }, []);

  return (
    <section id="apply" className="relative w-full">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="EGS Engineering College Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80" />
      </div>
      <div className="relative container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-2">EGS Pillay Group of Institutions</p>
            <AnimatedHeading activeAbbr={activeInstitution.abbr} />
            <div className="h-8">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeInstitution.abbr}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="text-lg md:text-xl text-primary-foreground/80 font-medium"
                >
                  {activeInstitution.name}
                </motion.p>
              </AnimatePresence>
            </div>
            <p className="text-lg md:text-xl text-primary-foreground/80 my-8 max-w-xl">
              Empower your future with world-class education. Admissions open for undergraduate, postgraduate, and doctoral programs in Engineering, Management, and Science. Apply now to secure your spot!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
               >
                <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                    <Link href="#programs">
                        <Search className="mr-2 h-5 w-5" />
                        Explore Programs
                    </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-transparent border border-white text-white hover:bg-white/10 hover:text-white" asChild>
                    <Link href="#contact">
                        Contact Us
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
              </motion.div>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <AdmissionForm />
          </div>
        </div>
      </div>
    </section>
  );
}

