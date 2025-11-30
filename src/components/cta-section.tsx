'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export function CtaSection() {
  const ctaImage = PlaceHolderImages.find((p) => p.id === 'testimonial-2');

  return (
    <section className="bg-primary/95 dark:bg-slate-900 w-full">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline leading-tight mb-4">
              Get Your Free Admission Guide Today
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg mx-auto md:mx-0">
              Start unifying your journey towards a world-class education with our easy-to-use, AI-powered admission guide that works as hard as you do.
            </p>
            <a
              href="#apply"
              className="inline-block px-8 py-3 bg-white text-primary hover:bg-white/90 transition-all rounded-md font-bold uppercase text-sm mt-2"
            >
              Get The Guide
            </a>
          </div>
          <div className="relative flex justify-center md:justify-end h-80">
            <div className="absolute inset-0 bg-accent rounded-2xl transform -rotate-6 transition-transform group-hover:rotate-0 duration-300"></div>
            {ctaImage && (
              <Image
                src={ctaImage.imageUrl}
                alt="Student studying"
                width={400}
                height={400}
                className="relative object-cover rounded-2xl shadow-2xl w-full h-full"
                data-ai-hint={ctaImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
