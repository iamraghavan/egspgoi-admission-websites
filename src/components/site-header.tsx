
'use client';

import React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { MegaMenu } from './mega-menu';
import Image from 'next/image';
import logo from '@/app/assets/logo/egspgoi_svg.svg';

const navLinks = [
  { text: 'Academics' },
  { text: 'Admissions', href: '#apply' },
  { text: 'Placements', href: '#placements' },
  { text: 'Scholarship', href: '#' },
  { text: 'Institutions', href: '#' },
  { text: 'FAQ', href: '#' },
  { text: 'About EGS', href: '#' },
];

const NavLink = ({
    children,
    className,
    ...props
  }: React.ComponentProps<typeof Button> & { children: React.ReactNode }) => {
    return (
      <Button
        variant="ghost"
        className={cn(
          'text-base font-medium',
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  };
  
  const NavLinkAsChild = ({
    children,
    className,
    ...props
  }: React.ComponentProps<typeof Button> & { children: React.ReactNode }) => {
    return (
      <Button
        variant="ghost"
        className={cn(
          'text-base font-medium',
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  };

export function SiteHeader() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = React.useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background h-24">
        <div className="container flex h-full max-w-screen-2xl items-center">
          <div className="mr-4 flex items-center">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Image src={logo} alt="EGS GOI Logo" className="h-16 md:h-20 w-auto" />
            </Link>
          </div>

          <nav className="hidden md:flex flex-1 items-center space-x-1">
            {navLinks.map((link) =>
              link.text === 'Academics' ? (
                <NavLink
                  key={link.text}
                  onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                >
                  {link.text}
                </NavLink>
              ) : (
                <NavLinkAsChild key={link.text} asChild>
                  <Link href={link.href!}>
                    {link.text}
                  </Link>
                </NavLinkAsChild>
              )
            )}
          </nav>

          <div className="flex flex-1 items-center justify-end space-x-2">
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
          <Menu className="h-9 w-9" />
          <span className="sr-only">Open Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left">
        <div className="flex flex-col h-full">
          <div className="border-b pb-4">
            <Link
              href="/"
              className="flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <Image src={logo} alt="EGS GOI Logo" className="h-12 w-auto" />
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
            <Button asChild className="w-full" variant="outline" onClick={() => setIsOpen(false)}>
              <Link href="#apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
