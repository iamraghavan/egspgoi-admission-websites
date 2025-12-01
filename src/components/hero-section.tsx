
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { AdmissionForm } from './admission-form';
import heroImage from '@/app/assets/engineering_college.webp';
import { Button } from './ui/button';
import { ArrowRight, Search } from 'lucide-react';
import { AnimatedHeading } from './animated-heading';
import { motion } from 'framer-motion';

export function HeroSection() {
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
            <AnimatedHeading />
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl">
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
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5" />
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
