
'use client';

import Image, { type StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';
import { Award, BarChart3, Handshake, Trophy } from 'lucide-react';

import naacLogo from '@/app/assets/accreditation/naac.webp';
import nbaLogo from '@/app/assets/accreditation/nba.webp';
import nirfLogo from '@/app/assets/accreditation/nirf.webp';

const achievements = [
  {
    title: 'NBA - Tier-1',
    description: 'Washington Accord Accredited',
    icon: <Image src={nbaLogo} alt="NBA Logo" className="h-12 w-auto object-contain" />,
  },
  {
    title: 'NIRF Ranking',
    description: 'All India Rank Band 201-300',
    icon: <Image src={nirfLogo} alt="NIRF Logo" className="h-12 w-auto object-contain" />,
  },
  {
    title: 'NAAC A++',
    description: 'Top-tier institutional accreditation',
    icon: <Image src={naacLogo} alt="NAAC Logo" className="h-12 w-auto object-contain" />,
  },
  {
    title: 'State Level Achievement',
    description: 'Awarded 3rd time for academics',
    icon: <Trophy className="h-12 w-12" />,
  },
  {
    title: '150+ Industrial Relationships',
    description: 'Strong network for student placements',
    icon: <Handshake className="h-12 w-12" />,
  },
];

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        'flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800',
        (index === 0 || index === 4) && 'lg:border-l dark:border-neutral-800',
        index < 4 && 'lg:border-b dark:border-neutral-800'
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-secondary to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-secondary to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-primary">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-border group-hover/feature:bg-accent transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export function AchievementsSection() {
  return (
    <section id="achievements" className="w-full bg-background py-16 md:py-24">
       <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">Our Achievements</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                Decades of commitment to excellence in education, recognized by prestigious bodies and industry leaders.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 relative z-10 max-w-7xl mx-auto border-t border-b">
        {achievements.map((achievement, index) => (
            <Feature key={achievement.title} {...achievement} index={index} />
        ))}
        </div>
      </div>
    </section>
  );
}
