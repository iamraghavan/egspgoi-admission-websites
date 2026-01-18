
import Image, { type StaticImageData } from 'next/image';

import aicteLogo from '@/app/assets/accreditation/aicte.webp';
import annaLogo from '@/app/assets/accreditation/anna-university.webp';
import bharathidasanLogo from '@/app/assets/accreditation/bharathidasan-university.webp';
import cfrAuLogo from '@/app/assets/accreditation/cfr_au.webp';
import incLogo from '@/app/assets/accreditation/inc.webp';
import naacLogo from '@/app/assets/accreditation/naac.webp';
import nbaLogo from '@/app/assets/accreditation/nba.webp';
import nirfLogo from '@/app/assets/accreditation/nirf.webp';
import pciLogo from '@/app/assets/accreditation/pci.webp';
import ttndrmgruLogo from '@/app/assets/accreditation/ttndrmgru.webp';
import ugcLogo from '@/app/assets/accreditation/ugc.webp';

type Logo = {
  src: StaticImageData;
  alt: string;
};

const logos: Logo[] = [
  { src: aicteLogo, alt: 'AICTE' },
  { src: annaLogo, alt: 'Anna University' },
  { src: bharathidasanLogo, alt: 'Bharathidasan University' },
  { src: cfrAuLogo, alt: 'CFR AU' },
  { src: incLogo, alt: 'INC' },
  { src: naacLogo, alt: 'NAAC' },
  { src: nbaLogo, alt: 'NBA' },
  { src: nirfLogo, alt: 'NIRF' },
  { src: pciLogo, alt: 'PCI' },
  { src: ttndrmgruLogo, alt: 'TTNDR MGRU' },
  { src: ugcLogo, alt: 'UGC' },
];

export function AccreditationLogos() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-bold font-headline mb-2 bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
          Recognized by the Best
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Our institution's accreditation and affiliation with leading educational and governmental bodies are a testament to our commitment to academic excellence.
        </p>
        <div className="relative flex w-full overflow-hidden">
          <div className="flex w-max animate-marquee-infinite motion-safe:hover:pause">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 px-6">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.src.width}
                  height={logo.src.height}
                  className="h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
