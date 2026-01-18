
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import Image from 'next/image';
import logo from '@/app/assets/logo/egspgoi_svg.svg';
import { motion, AnimatePresence, Transition } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import * as gtag from '@/lib/gtag';

const navLinks = [
  { text: 'Academics', href: '/academics' },
  { text: 'Admissions', href: '/admissions' },
  { text: 'Placements', href: '#placements' },
  { text: 'Scholarship', href: '#' },
  { text: 'Institutions', href: '#' },
  { text: 'FAQ', href: '#' },
  { text: 'About EGS', href: '#' },
];

const Path = (props: React.ComponentProps<typeof motion.path>) => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(var(--foreground))"
      strokeLinecap="round"
      {...props}
    />
  );

  const transition: Transition = {
    duration: 0.3,
    ease: [0.43, 0.13, 0.23, 0.96],
  };
  
  function AnimatedBurgerIcon({ isOpen }: { isOpen: boolean }) {
    return (
      <motion.div initial={false} animate={isOpen ? 'open' : 'closed'} className="relative h-10 w-10">
        <svg width="28" height="28" viewBox="0 0 24 24" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Path
            variants={{
              closed: { d: 'M 2 4.5 L 22 4.5', transition },
              open: { d: 'M 3 19.5 L 21 2.5', transition },
            }}
          />
          <Path
            d="M 2 12 L 22 12"
            variants={{
              closed: { opacity: 1, transition },
              open: { opacity: 0, transition },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: 'M 2 19.5 L 22 19.5', transition },
              open: { d: 'M 3 2.5 L 21 19.5', transition },
            }}
          />
        </svg>
      </motion.div>
    );
  }

const MobileNavLink = ({
  href,
  children,
  label,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  label: string;
  onClick: () => void;
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleClick = () => {
    gtag.event({
      action: 'navigation_click',
      category: 'Mobile Menu',
      label: label,
    });
    onClick();
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative block text-lg font-medium text-muted-foreground py-2 overflow-hidden"
    >
      <motion.span
        animate={{ color: isHovered ? 'hsl(var(--accent))' : 'hsl(var(--muted-foreground))' }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-2"
      >
        {children}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight className="h-5 w-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.span>
    </Link>
  );
};


function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="md:hidden p-2 flex items-center justify-center">
          <AnimatedBurgerIcon isOpen={isOpen} />
          <span className="sr-only">Open Menu</span>
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left p-0">
        <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-between border-b p-4 pr-2">
                <Link
                    href="/"
                    className="flex items-center space-x-2"
                    onClick={() => setIsOpen(false)}
                >
                    <Image src={logo} alt="EGS GOI Logo" className="h-12 w-auto" width={100} height={32}/>
                </Link>
                <SheetClose asChild>
                     <motion.button
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9, rotate: 0 }}
                        className="p-2 h-14 w-14 flex items-center justify-center"
                     >
                        <X className="h-8 w-8" />
                        <span className="sr-only">Close</span>
                    </motion.button>
                </SheetClose>
            </div>
            
            <nav className="flex flex-col space-y-2 mt-6 px-4">
                {navLinks.map((link) => (
                <MobileNavLink
                    key={link.text}
                    href={link.href || '#'}
                    label={link.text}
                    onClick={() => setIsOpen(false)}
                >
                    {link.text}
                </MobileNavLink>
                ))}
            </nav>
            <div className="mt-auto p-4 border-t space-y-4">
                <Button asChild className="w-full" variant="outline" onClick={() => setIsOpen(false)}>
                <Link href="#apply">Apply Now</Link>
                </Button>
            </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}


export function MobileNavWrapper() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a placeholder
  }

  return <MobileNav />;
}
