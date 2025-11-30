

import { AccreditationLogos } from '@/components/accreditation-logos';
import { AchievementsSection } from '@/components/achievements-section';
import { CtaSection } from '@/components/cta-section';
import { FindProgram } from '@/components/find-program';
import { HeroSection } from '@/components/hero-section';
import { LogoCloud } from '@/components/logo-cloud';
import { PlacementShowcase } from '@/components/placement-showcase';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { TestimonialSlider } from '@/components/testimonial-slider';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AccreditationLogos />
        <AchievementsSection />
        <FindProgram />
        <PlacementShowcase />
        <LogoCloud />
        <TestimonialSlider />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
