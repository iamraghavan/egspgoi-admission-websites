import Image from 'next/image';

const logos = [
  { src: '/assets/accreditation/naac.webp', alt: 'NAAC Logo' },
  { src: '/assets/accreditation/nba.webp', alt: 'NBA Logo' },
  { src: '/assets/accreditation/aicte.webp', alt: 'AICTE Logo' },
  { src: '/assets/accreditation/ugc.webp', alt: 'UGC Logo' },
  { src: '/assets/accreditation/nirf.webp', alt: 'NIRF Logo' },
  { src: '/assets/accreditation/anna-university.webp', alt: 'Anna University Logo' },
  { src: '/assets/accreditation/bharathidasan-university.webp', alt: 'Bharathidasan University Logo' },
  { src: '/assets/accreditation/pci.webp', alt: 'PCI Logo' },
  { src: '/assets/accreditation/inc.webp', alt: 'INC Logo' },
  { src: '/assets/accreditation/dote.webp', alt: 'DOTE Logo' },
  { src: '/assets/accreditation/ttndrmgru.webp', alt: 'TTNDR MGRU Logo' },
  { src: '/assets/accreditation/cfr_au.webp', alt: 'CFR AU Logo' },
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
