import Image from 'next/image';

import aicteLogo from '@/app/assets/accreditation/aicte.webp';
import annaLogo from '@/app/assets/accreditation/anna-university.webp';
import bharathidasanLogo from '@/app/assets/accreditation/bharathidasan-university.webp';
import cfrAuLogo from '@/app/assets/accreditation/cfr_au.webp';
import doteLogo from '@/app/assets/accreditation/dote.webp';
import incLogo from '@/app/assets/accreditation/inc.webp';
import naacLogo from '@/app/assets/accreditation/naac.webp';
import nbaLogo from '@/app/assets/accreditation/nba.webp';
import nirfLogo from '@/app/assets/accreditation/nirf.webp';
import pciLogo from '@/app/assets/accreditation/pci.webp';
import ttndrmgruLogo from '@/app/assets/accreditation/ttndrmgru.webp';
import ugcLogo from '@/app/assets/accreditation/ugc.webp';


const logos = [
  { src: aicteLogo, alt: 'AICTE Logo' },
  { src: annaLogo, alt: 'Anna University Logo' },
  { src: bharathidasanLogo, alt: 'Bharathidasan University Logo' },
  { src: cfrAuLogo, alt: 'CFR AU Logo' },
  { src: doteLogo, alt: 'DOTE Logo' },
  { src: incLogo, alt: 'INC Logo' },
  { src: naacLogo, alt: 'NAAC Logo' },
  { src: nbaLogo, alt: 'NBA Logo' },
  { src: nirfLogo, alt: 'NIRF Logo' },
  { src: pciLogo, alt: 'PCI Logo' },
  { src: ttndrmgruLogo, alt: 'TTNDR MGRU Logo' },
  { src: ugcLogo, alt: 'UGC Logo' },
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
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
