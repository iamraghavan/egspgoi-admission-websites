'use client';

import React from 'react';
import Link from 'next/link';
import { GraduationCap, Menu, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { MegaMenu } from './mega-menu';

const navLinks = [
  { text: 'Academics' },
  { text: 'Admissions', href: '#apply' },
  { text: 'Placements', href: '#placements' },
  { text: 'Scholarship', href: '#' },
  { text: 'Institutions', href: '#' },
  { text: 'FAQ', href: '#' },
  { text: 'About EGS', href: '#' },
];

export function SiteHeader() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = React.useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
        <div className="container flex h-16 max-w-screen-2xl items-center">
          <div className="mr-4 flex items-center">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="font-bold text-lg font-headline sm:inline-block">
                EGS Admissions
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex flex-1 items-center space-x-1">
            {navLinks.map((link) =>
              link.text === 'Academics' ? (
                <Button
                  key={link.text}
                  variant="ghost"
                  className={cn(
                    'text-base font-medium',
                    isMegaMenuOpen && 'bg-accent text-accent-foreground'
                  )}
                  onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                >
                  {link.text}
                </Button>
              ) : (
                <Button key={link.text} variant="ghost" asChild>
                  <Link href={link.href!} className="text-base font-medium">
                    {link.text}
                  </Link>
                </Button>
              )
            )}
          </nav>

          <div className="flex flex-1 items-center justify-end space-x-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" className="hidden md:inline-flex">Sign In</Button>
            <Button className="hidden md:inline-flex" asChild>
              <Link href="#apply">Apply Now</Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>
      <MegaMenu
        isOpen={isMegaMenuOpen}
        onClose={() => setIsMegaMenuOpen(false)}
      />
    </>
  );
}

function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col h-full">
          <div className="border-b pb-4">
            <Link
              href="/"
              className="flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline">EGS Admissions</span>
            </Link>
          </div>
          <nav className="flex flex-col space-y-2 mt-6">
            {navLinks.map((link) => (
              <Link
                key={link.text}
                href={link.href || '#'}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-muted-foreground hover:text-foreground py-2"
              >
                {link.text}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pt-6 border-t space-y-4">
            <Button asChild className="w-full" onClick={() => setIsOpen(false)}>
              <Link href="#">Sign In</Link>
            </Button>
            <Button asChild className="w-full" variant="outline" onClick={() => setIsOpen(false)}>
              <Link href="#apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
