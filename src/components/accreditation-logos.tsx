import Image from 'next/image';

const logos = [
  { src: '/assets/accreditation/NAAC.webp', alt: 'NAAC Logo' },
  { src: '/assets/accreditation/NBA.webp', alt: 'NBA Logo' },
  { src: '/assets/accreditation/AICTE.webp', alt: 'AICTE Logo' },
  { src: '/assets/accreditation/UGC.webp', alt: 'UGC Logo' },
  { src: '/assets/accreditation/NIRF.webp', alt: 'NIRF Logo' },
  { src: '/assets/accreditation/ABET.webp', alt: 'ABET Logo' },
  { src: '/assets/accreditation/AACSB.webp', alt: 'AACSB Logo' },
  { src: '/assets/accreditation/ISO.webp', alt: 'ISO Logo' },
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
