import Image from 'next/image';

const logos = [
  { src: 'https://picsum.photos/seed/naac/120/60', alt: 'NAAC Logo' },
  { src: 'https://picsum.photos/seed/nba/120/60', alt: 'NBA Logo' },
  { src: 'https://picsum.photos/seed/aicte/120/60', alt: 'AICTE Logo' },
  { src: 'https://picsum.photos/seed/ugc/120/60', alt: 'UGC Logo' },
  { src: 'https://picsum.photos/seed/nirf/120/60', alt: 'NIRF Logo' },
  { src: 'https://picsum.photos/seed/anna/120/60', alt: 'Anna University Logo' },
  { src: 'https://picsum.photos/seed/bharathidasan/120/60', alt: 'Bharathidasan University Logo' },
  { src: 'https://picsum.photos/seed/pci/120/60', alt: 'PCI Logo' },
  { src: 'https://picsum.photos/seed/inc/120/60', alt: 'INC Logo' },
  { src: 'https://picsum.photos/seed/dote/120/60', alt: 'DOTE Logo' },
  { src: 'https://picsum.photos/seed/ttndrmgru/120/60', alt: 'TTNDR MGRU Logo' },
  { src: 'https://picsum.photos/seed/cfrau/120/60', alt: 'CFR AU Logo' },
];

export function AccreditationLogos() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-2xl font-semibold text-muted-foreground tracking-tight mb-8">
          Recognized by the Best
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee-infinite items-center">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-48 h-24 mx-8 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="object-contain filter grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
