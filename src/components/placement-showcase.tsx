'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const studentPlacements = [
  PlaceHolderImages.find((p) => p.id === 'testimonial-1'),
  PlaceHolderImages.find((p) => p.id === 'testimonial-2'),
  PlaceHolderImages.find((p) => p.id === 'testimonial-3'),
].filter(Boolean);

const studentFeatures = [
    PlaceHolderImages.find((p) => p.id === 'testimonial-3'),
    PlaceHolderImages.find((p) => p.id === 'testimonial-1'),
    PlaceHolderImages.find((p) => p.id === 'testimonial-2'),
  ].filter(Boolean);

export function PlacementShowcase() {
  return (
    <section
      id="placement-showcase"
      className="w-full bg-gradient-to-r from-primary to-accent py-16 md:py-24"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary-foreground">
            Our Placement Ecosystem
          </h2>
          <p className="text-lg text-primary-foreground/80 mt-4 max-w-3xl mx-auto">
            We've cultivated a robust network of industry leaders and provided unparalleled opportunities, resulting in exceptional career outcomes for our graduates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
             <Carousel
              opts={{ align: 'start', loop: true }}
              plugins={[Autoplay({ delay: 3500, stopOnInteraction: true })]}
              className="w-full"
            >
              <CarouselContent>
                {studentFeatures.map((student) => (
                  <CarouselItem key={student!.id}>
                    <div className="p-2">
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={student!.imageUrl}
                          alt={student!.description}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          data-ai-hint={student!.imageHint}
                        />
                         <div className="absolute inset-0 bg-black/30" />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          <div className="lg:col-span-6">
             <Carousel
              opts={{ align: 'start', loop: true }}
              plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
              className="w-full"
            >
              <CarouselContent>
                {studentPlacements.map((student) => (
                  <CarouselItem key={student!.id}>
                    <div className="p-2">
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={student!.imageUrl}
                          alt={student!.description}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          data-ai-hint={student!.imageHint}
                        />
                         <div className="absolute inset-0 bg-black/30" />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
