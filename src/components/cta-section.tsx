
'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export function CtaSection() {
  const testimonialImages = [
    PlaceHolderImages.find((p) => p.id === 'testimonial-1'),
    PlaceHolderImages.find((p) => p.id === 'testimonial-2'),
    PlaceHolderImages.find((p) => p.id === 'testimonial-3'),
  ].filter(Boolean);

  return (
    <section className="py-16 md:py-24">
        <div className="container mx-auto">
            <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center bg-gradient-to-br from-primary to-accent rounded-2xl p-10 text-white shadow-2xl">
                <div className="flex flex-wrap items-center justify-center p-1 rounded-full bg-primary/30 backdrop-blur border border-primary-foreground/20 text-sm">
                    <div className="flex items-center">
                        {testimonialImages.map((img, index) => (
                            <Image
                                key={img!.id}
                                className={`size-7 rounded-full border-2 border-white ${index > 0 ? '-translate-x-' + index * 2 : ''}`}
                                src={img!.imageUrl}
                                alt={img!.description}
                                width={28}
                                height={28}
                                data-ai-hint={img!.imageHint}
                            />
                        ))}
                    </div>
                    <p className="-translate-x-2 font-medium ml-4">Join our community of 25k+ students</p>
                </div>
                <h2 className="text-4xl md:text-5xl md:leading-[60px] font-semibold font-headline max-w-xl mt-5 bg-gradient-to-r from-white to-primary-foreground/70 text-transparent bg-clip-text">
                    Ready to Start Your Journey?
                </h2>
                <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl">
                    Your future begins here. Apply now to become part of a legacy of excellence and innovation.
                </p>
                <a href="#apply" className="px-8 py-3 bg-white text-primary hover:bg-white/90 transition-all rounded-full font-bold uppercase text-sm mt-8">
                    Apply Now
                </a>
            </div>
        </div>
    </section>
  );
}
