
import { AccreditationLogos } from '@/components/accreditation-logos';
import { AchievementsSection } from '@/components/achievements-section';
import { HeroSection } from '@/components/hero-section';
import { PlacementPartners } from '@/components/placement-partners';
import { ProgramCategories } from '@/components/program-categories';
import { ProgramHighlights } from '@/components/program-highlights';
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
        <ProgramCategories />
        <ProgramHighlights />
        <TestimonialSlider />
        <PlacementPartners />
      </main>
      <SiteFooter />
    </div>
  );
}



