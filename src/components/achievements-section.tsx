'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Handshake, Trophy } from 'lucide-react';

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
    icon: <Trophy className="h-12 w-12 text-primary-foreground/80" />,
  },
  {
    title: '150+ Industrial Relationships',
    description: 'Strong network for student placements',
    icon: <Handshake className="h-12 w-12 text-primary-foreground/80" />,
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
        'flex flex-col lg:border-r py-10 relative group/feature border-primary-foreground/20',
        (index === 0 || index === 4) && 'lg:border-l',
        index < 4 && 'lg:border-b'
      )}
    >
      <div className="mb-4 relative z-10 px-10">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-primary-foreground/20 group-hover/feature:bg-primary-foreground/50 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-primary-foreground">
          {title}
        </span>
      </div>
      <p className="text-sm text-primary-foreground/80 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export function AchievementsSection() {
  return (
    <section id="achievements" className="w-full bg-gradient-to-r from-primary to-accent py-16 md:py-24">
       <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary-foreground">Our Achievements</h2>
            <p className="text-lg text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
                Decades of commitment to excellence in education, recognized by prestigious bodies and industry leaders.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 relative z-10 max-w-7xl mx-auto border-t border-b border-primary-foreground/20">
        {achievements.map((achievement, index) => (
            <Feature key={achievement.title} {...achievement} index={index} />
        ))}
        </div>
      </div>
    </section>
  );
}
