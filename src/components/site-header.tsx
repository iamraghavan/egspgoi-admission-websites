
'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MegaMenu } from './mega-menu';
import Image from 'next/image';
import logo from '@/app/assets/logo/egspgoi_svg.svg';
import { MobileNavWrapper } from './mobile-nav-wrapper';

const navLinks = [
  { text: 'Academics', href: '/academics' },
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
        asChild
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
              <Image src={logo} alt="EGS GOI Logo" className="h-12 md:h-16 w-auto" priority width={128} height={40} />
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
                <NavLinkAsChild key={link.text}>
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
            <MobileNavWrapper />
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
