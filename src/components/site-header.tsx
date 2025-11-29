import Link from 'next/link';
import { GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline sm:inline-block">
              EGS Admissions Hub
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#programs" className="transition-colors hover:text-foreground/80">
              Programs
            </Link>
            <Link href="#testimonials" className="transition-colors hover:text-foreground/80">
              Testimonials
            </Link>
            <Link href="#placements" className="transition-colors hover:text-foreground/80">
              Placements
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild>
            <Link href="#apply">Apply Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
