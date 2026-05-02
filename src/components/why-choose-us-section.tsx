'use client';

import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Trophy, ShieldCheck, Handshake, Briefcase, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const AchievementCard = ({ 
  icon: Icon, 
  value, 
  label, 
  subLabel, 
  className 
}: { 
  icon: React.ElementType; 
  value: string; 
  label: string; 
  subLabel: string;
  className?: string;
}) => (
  <div className={cn(
    "group relative p-8 rounded-2xl border bg-card transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden",
    className
  )}>
    <div className="absolute top-0 right-0 p-4 opacity-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
      <Icon size={120} />
    </div>
    <div className="relative z-10">
      <div className="mb-4 inline-flex items-center justify-center p-3 rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
        <Icon className="h-6 w-6" />
      </div>
      <div className="space-y-1">
        <h3 className="text-4xl font-bold font-headline tracking-tight text-primary">
          {value}
        </h3>
        <p className="text-sm font-bold uppercase tracking-wider text-accent">
          {label}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {subLabel}
        </p>
      </div>
    </div>
  </div>
);

export function WhyChooseUsSection() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Text Content */}
          <div className="lg:w-1/3 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-headline leading-[1.1] text-primary">
                Top-Ranked <span className="text-accent">Education.</span><br />
                Innovative <span className="text-accent">Research.</span><br />
                Exceptional <span className="text-accent">Careers.</span>
              </h2>
              <div className="w-20 h-1.5 bg-accent rounded-full" />
            </div>
            
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                The EGS Pillay Group of Institutions stands as a beacon of academic excellence in Tamil Nadu. Renowned for our NAAC A++ and NBA accredited programs, we offer a transformative educational experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a strong emphasis on research, innovation, and holistic development, we prepare our students to become future leaders. Our consistent high-ranking placement record is a testament to our commitment to student success.
              </p>
            </div>

            <Button asChild size="lg" className="group px-8 rounded-full shadow-lg shadow-primary/20">
              <Link href="/admissions">
                Know More 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Achievements Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <AchievementCard 
              icon={Trophy}
              value="A++"
              label="NAAC Accreditation"
              subLabel="Highest possible grade received, signifying excellence across all academic parameters."
              className="md:col-span-1"
            />
            <AchievementCard 
              icon={BarChart3}
              value="201-300"
              label="NIRF 2025 Band"
              subLabel="Ranked among the top engineering institutions in India by the Ministry of Education."
              className="md:col-span-1"
            />
            <AchievementCard 
              icon={ShieldCheck}
              value="Tier-1"
              label="NBA Accreditation"
              subLabel="Accredited under the Washington Accord, ensuring international quality standards."
              className="md:col-span-1"
            />
            <AchievementCard 
              icon={Handshake}
              value="150+"
              label="Industry MoU's"
              subLabel="Extensive corporate partnerships providing students with real-world exposure and internships."
              className="md:col-span-1"
            />
            <AchievementCard 
              icon={Briefcase}
              value="95%+"
              label="Placement Record"
              subLabel="Consistently achieving exceptional career outcomes with top-tier global recruiters."
              className="md:col-span-2 bg-primary/5 border-primary/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
