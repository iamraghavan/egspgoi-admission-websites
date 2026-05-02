
'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function PlacementShowcase() {
  // Ensure we are only grabbing banners specifically tagged for placements
  const placementBanners = PlaceHolderImages.filter((p) => p.id.startsWith('placement-banner-'));

  return (
    <section
      id="placement-showcase"
      className="w-full bg-gradient-to-r from-primary to-accent py-16 md:py-24"
      aria-labelledby="placement-heading"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 id="placement-heading" className="text-3xl md:text-4xl font-bold font-headline text-primary-foreground">
            Our Placement Ecosystem
          </h2>
          <p className="text-lg text-primary-foreground/80 mt-4 max-w-3xl mx-auto">
            Our strong industry connections and dedicated placement training lead to exceptional career outcomes for every graduate of the EGS Pillay Group.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {placementBanners.length > 0 ? (
            <Carousel
              opts={{ align: 'start', loop: true }}
              plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
              className="w-full"
            >
              <CarouselContent>
                {placementBanners.map((banner) => (
                  <CarouselItem key={banner.id}>
                    <div className="p-1">
                      <div className="relative aspect-[21/9] rounded-xl overflow-hidden shadow-2xl border border-white/10">
                        <Image
                          src={banner.imageUrl as string}
                          alt={banner.description}
                          title={banner.description}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1200px) 100vw, 1152px"
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
          ) : (
            <div className="flex items-center justify-center h-64 bg-white/5 rounded-xl border border-dashed border-white/20">
              <p className="text-primary-foreground/50 italic">Loading placement achievements...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
