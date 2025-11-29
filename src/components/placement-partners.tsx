import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function PlacementPartners() {
  const partners = PlaceHolderImages.filter(p => p.id.startsWith('partner-'));

  return (
    <section id="placements" className="w-full bg-secondary/50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Placement Partners</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            We are proud to partner with leading companies to provide exceptional career opportunities for our students.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map(partner => (
            <div key={partner.id} className="relative h-12 w-36">
              <Image
                src={partner.imageUrl}
                alt={partner.description}
                fill
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                data-ai-hint={partner.imageHint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
