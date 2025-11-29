'use client';

import Link from 'next/link';
import { GraduationCap, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import React from 'react';

const navLinks = [
  { href: '#about', text: 'About EGS' },
  {
    text: 'Academics',
    subLinks: [
      { href: '#programs', text: 'Programs' },
      { href: '#departments', text: 'Departments' },
    ],
  },
  {
    text: 'Admissions',
    subLinks: [
      { href: '#apply', text: 'Apply Online' },
      { href: '#process', text: 'Admission Process' },
      { href: '#requirements', text: 'Requirements' },
    ],
  },
  { href: '#alumni', text: 'Alumni' },
  { href: '#career-guidance', text: 'Career Guidance' },
  { href: '#contact', text: 'Contact Us' },
  { href: '#faq', text: 'FAQ' },
  { href: '#placements', text: 'Placements' },
  { href: '#scholarship', text: 'Scholarship' },
];


function NavMenu() {
  return (
    <>
      {navLinks.map((link) =>
        link.subLinks ? (
          <DropdownMenu key={link.text}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-sm font-medium transition-colors hover:bg-transparent hover:text-primary focus-visible:ring-0 focus-visible:ring-offset-0 px-3"
              >
                {link.text}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {link.subLinks.map((subLink) => (
                <DropdownMenuItem key={subLink.text} asChild>
                  <Link href={subLink.href}>{subLink.text}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            key={link.text}
            href={link.href}
            className="text-sm font-medium transition-colors hover:text-primary px-3"
          >
            {link.text}
          </Link>
        )
      )}
    </>
  );
}

function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col h-full">
            <div className="border-b pb-4">
              <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline">EGS Admissions Hub</span>
              </Link>
            </div>
            <nav className="flex flex-col space-y-4 mt-6">
            {navLinks.map((link) => (
              <React.Fragment key={link.text}>
                {link.subLinks ? (
                  <div className="flex flex-col space-y-2">
                    <span className="font-semibold text-muted-foreground px-4">{link.text}</span>
                    {link.subLinks.map(subLink => (
                       <Link
                        key={subLink.text}
                        href={subLink.href}
                        onClick={() => setIsOpen(false)}
                        className="text-muted-foreground hover:text-foreground pl-8"
                      >
                        {subLink.text}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-medium hover:text-primary px-4"
                  >
                    {link.text}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>
          <div className="mt-auto pt-6 border-t">
              <Button asChild className="w-full" onClick={() => setIsOpen(false)}>
                <Link href="#apply">Apply Now</Link>
              </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}


export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="font-bold text-lg font-headline sm:inline-block">
              EGS Admissions
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center justify-between flex-1">
          <NavMenu />
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-4 md:flex-none">
          <Button asChild className="hidden md:flex">
            <Link href="#apply">Apply Now</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
