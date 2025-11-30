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

const placementPartners = PlaceHolderImages.filter((p) =>
  p.id.startsWith('partner-')
);
const studentPlacements = [
  PlaceHolderImages.find((p) => p.id === 'testimonial-1'),
  PlaceHolderImages.find((p) => p.id === 'testimonial-2'),
  PlaceHolderImages.find((p) => p.id === 'testimonial-3'),
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
            <h3 className="text-2xl font-bold font-headline text-primary-foreground mb-4 text-center">Top Recruiters</h3>
            <Carousel
              opts={{ align: 'start', loop: true }}
              plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
              className="w-full"
            >
              <CarouselContent>
                {placementPartners.map((partner) => (
                  <CarouselItem key={partner.id} className="basis-1/2 md:basis-1/3">
                    <div className="p-2">
                      <div className="bg-white/10 rounded-lg p-4 flex items-center justify-center h-24">
                        <Image
                          src={partner.imageUrl}
                          alt={partner.description}
                          width={144}
                          height={48}
                          className="object-contain h-12 w-36 filter brightness-0 invert"
                           data-ai-hint={partner.imageHint}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          <div className="lg:col-span-6">
            <h3 className="text-2xl font-bold font-headline text-primary-foreground mb-4 text-center">Student Success Stories</h3>
             <Carousel
              opts={{ align: 'start', loop: true }}
              plugins={[Autoplay({ delay: 3500, stopOnInteraction: true })]}
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
