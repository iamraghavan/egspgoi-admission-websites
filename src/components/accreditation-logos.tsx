import Image, { type StaticImageData } from 'next/image';

import { cn } from '@/lib/utils';

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

type Logo = {
  src: StaticImageData;
  alt: string;
};

const logos: Logo[] = [
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

type LogoCardProps = React.ComponentProps<'div'> & {
  logo: Logo;
};

function LogoCard({ logo, className, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        'flex h-32 items-center justify-center p-6 sm:h-36',
        className
      )}
      {...props}
    >
      <Image
        alt={logo.alt}
        className="h-auto w-full max-w-32 object-contain"
        src={logo.src}
      />
    </div>
  );
}


export function AccreditationLogos() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-bold font-headline mb-2">
          Recognized by the Best
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Our institutions are accredited and recognized by leading educational and governmental bodies, a testament to our commitment to academic excellence.
        </p>
        <div
          className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-gray-200 shadow-sm sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {logos.map((logo, index) => (
            <LogoCard key={index} logo={logo} className="bg-background" />
          ))}
        </div>
      </div>
    </section>
  );
}
