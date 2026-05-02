
'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function PlacementPartners() {
  // Filter for logos specifically from the placements folder
  const partners = PlaceHolderImages.filter(p => p.id.startsWith('partner-')).slice(0, 6);

  return (
    <section id="placements" className="w-full bg-secondary/50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">Our Recruitment Partners</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Partnering with global leaders to provide diverse career pathways for our students across Engineering, IT, Management, and Healthcare.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {partners.map(partner => (
            <div key={partner.id} className="relative h-16 w-40 grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src={partner.imageUrl as string}
                alt={partner.description}
                title={partner.description}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 160px, 200px"
                data-ai-hint={partner.imageHint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
