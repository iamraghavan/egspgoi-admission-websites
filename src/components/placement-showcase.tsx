
'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const placementBanners = PlaceHolderImages.filter((p) => p.id.startsWith('placement-banner-'));

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
            Our strong industry connections and dedicated placement training lead to exceptional career outcomes for every graduate.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{ align: 'start', loop: true }}
            plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
            className="w-full"
          >
            <CarouselContent>
              {placementBanners.map((banner) => (
                <CarouselItem key={banner.id}>
                  <div className="p-1">
                    <div className="relative aspect-[21/9] rounded-xl overflow-hidden shadow-2xl">
                      <Image
                        src={banner.imageUrl as string}
                        alt={banner.description}
                        title={banner.description}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                        data-ai-hint={banner.imageHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
