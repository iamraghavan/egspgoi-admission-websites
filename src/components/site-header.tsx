'use client';

import React from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  Menu,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Separator } from './ui/separator';

const academicLevels = [
    { title: 'Undergraduate', href: '#' },
    { title: 'Integrated Degree', href: '#' },
    { title: 'Postgraduate', href: '#' },
    { title: 'Doctoral', href: '#' },
    { title: 'Fellowship', href: '#' },
    { title: 'Certificate', href: '#' },
    { title: 'Online Programs', href: '#' },
    { title: 'Curriculum', href: '#' },
];

const courseDomains = [
    { title: 'Arts, Humanities & Commerce', href: '#', description: "Explore the vibrant world of arts, humanities, and commerce.", imageId: 'campus-illustration'},
    { title: 'Ayurveda', href: '#', description: "Discover ancient healing traditions with our Ayurveda programs.", imageId: 'campus-illustration' },
    { title: 'Agriculture', href: '#', description: "Cultivate a sustainable future with our agricultural sciences.", imageId: 'campus-illustration' },
    { title: 'Architecture', href: '#', description: "Design the world of tomorrow with our architecture courses.", imageId: 'campus-illustration' },
    { title: 'Business / Management', href: '#', description: "Lead the industry with our business and management degrees.", imageId: 'campus-illustration' },
    { title: 'Biotechnology', href: '#', description: "Innovate at the intersection of biology and technology.", imageId: 'campus-illustration' },
    { title: 'Computing', href: '#', description: "Master the digital landscape with our computing programs.", imageId: 'campus-illustration' },
    { title: 'Dentistry', href: '#', description: "Shape smiles and improve health with our dentistry school.", imageId: 'campus-illustration' },
    { title: 'Engineering', href: '#', description: "Build the future with our comprehensive engineering disciplines.", imageId: 'campus-illustration' },
    { title: 'Medicine', href: '#', description: "Embark on a journey to heal and serve humanity.", imageId: 'campus-illustration' },
    { title: 'Mass Communication', href: '#', description: "Tell compelling stories and shape public discourse.", imageId: 'campus-illustration' },
    { title: 'Nursing', href: '#', description: "Provide compassionate care with our expert nursing programs.", imageId: 'campus-illustration' },
    { title: 'Pharmacy', href: '#', description: "Advance healthcare with our pharmaceutical sciences.", imageId: 'campus-illustration' },
]

const navLinks = [
  { text: 'About EGS', href: '#about' },
  {
    text: 'Academics',
    isMega: true,
  },
  { text: 'Admissions', href: '#apply' },
  { text: 'Placements', href: '#placements' },
  {
    text: 'Institutions',
    subLinks: [
      {
        title: 'EGS Engineering College',
        href: '#',
        description:
          'Our flagship institution for engineering and technology, fostering innovation and excellence.',
        id: 'institution-eng',
      },
      {
        title: 'EGS Arts & Science College',
        href: '#',
        description:
          'A center for excellence in arts, humanities, and sciences, encouraging creative and critical thought.',
        id: 'institution-as',
      },
      {
        title: 'EGS Business School',
        href: '#',
        description:
          'Fostering the next generation of business leaders and entrepreneurs through a dynamic curriculum.',
        id: 'institution-biz',
      },
       {
        title: 'EGS Law College',
        href: '#',
        description:
          'Nurturing legal minds with a strong foundation in ethics and justice.',
        id: 'institution-law',
      },
    ],
  },
  { text: 'Contact Us', href: '#contact' },
];

const campusIllustration = PlaceHolderImages.find(p => p.id === 'campus-illustration');

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-base font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

function NavMenu() {
  const [activeInstitution, setActiveInstitution] = React.useState(navLinks.find(l => l.text === 'Institutions')?.subLinks?.[0]);
  const [activeDomain, setActiveDomain] = React.useState(courseDomains[0]);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navLinks.map((link) => (
          <NavigationMenuItem key={link.text} value={link.text}>
            {link.subLinks || link.isMega ? (
              <>
                <NavigationMenuTrigger>{link.text}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  {link.text === 'Institutions' && Array.isArray(link.subLinks) ? (
                     <div className="grid grid-cols-3 gap-6 p-6 w-[60rem]">
                       <div className="col-span-1 flex flex-col space-y-2">
                        {link.subLinks.map((subLink) => (
                          <button
                            key={subLink.title}
                            onMouseEnter={() => setActiveInstitution(subLink)}
                            className={cn(
                              'text-left p-3 rounded-md transition-colors text-foreground',
                              activeInstitution?.id === subLink.id ? 'bg-accent/10' : 'hover:bg-accent/10'
                            )}
                          >
                             <span className={cn("font-semibold", activeInstitution?.id === subLink.id ? "text-primary" : "")}>
                              {subLink.title}
                            </span>
                          </button>
                        ))}
                       </div>
                       <div className="col-span-2 flex items-center bg-accent/5 rounded-lg p-6">
                          {activeInstitution && (
                            <div className="grid grid-cols-2 gap-6 items-center w-full">
                              <div>
                                <h3 className="text-xl font-bold font-headline text-primary mb-2">{activeInstitution.title}</h3>
                                <p className="text-muted-foreground mb-4">{activeInstitution.description}</p>
                                <Link href={activeInstitution.href} className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
                                  EXPLORE <ArrowRight className="h-4 w-4" />
                                </Link>
                              </div>
                              <div>
                                {campusIllustration && (
                                   <Image
                                    src={campusIllustration.imageUrl}
                                    alt="Campus illustration"
                                    width={250}
                                    height={150}
                                    className="object-contain rounded-md"
                                    data-ai-hint={campusIllustration.imageHint}
                                  />
                                )}
                              </div>
                            </div>
                          )}
                       </div>
                     </div>
                  ) : link.text === 'Academics' ? (
                     <div className="grid grid-cols-3 gap-8 p-8 w-screen max-w-7xl -translate-x-1/2 left-1/2">
                        {/* Column 1: Academic Levels */}
                        <div className="flex flex-col space-y-2">
                            {academicLevels.map((level, index) => (
                                <React.Fragment key={level.title}>
                                    <Link
                                        href={level.href}
                                        className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2 px-3 rounded-md"
                                    >
                                        {level.title}
                                    </Link>
                                    {index < academicLevels.length - 1 && <Separator className="bg-border/50" />}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Column 2: Course Domains */}
                        <div className="flex flex-col space-y-2">
                            {courseDomains.map((domain) => (
                                <Link
                                    key={domain.title}
                                    href={domain.href}
                                    onMouseEnter={() => setActiveDomain(domain)}
                                    className={cn(
                                        "text-base text-foreground/80 hover:text-primary transition-colors py-2 px-3 rounded-md",
                                        activeDomain.title === domain.title && "bg-accent/10 text-primary"
                                    )}
                                >
                                    {domain.title}
                                </Link>
                            ))}
                        </div>

                        {/* Column 3: Dynamic Content Block */}
                        <div className="bg-accent/5 rounded-lg p-6 flex flex-col justify-center">
                            {activeDomain && (
                                <div className="flex flex-col items-start gap-4">
                                     {campusIllustration && (
                                        <Image
                                            src={campusIllustration.imageUrl}
                                            alt={activeDomain.title}
                                            width={500}
                                            height={200}
                                            className="object-cover rounded-md w-full h-40"
                                            data-ai-hint={campusIllustration.imageHint}
                                        />
                                    )}
                                    <h3 className="text-xl font-bold font-headline text-primary">{activeDomain.title}</h3>
                                    <p className="text-muted-foreground text-sm">{activeDomain.description}</p>
                                    <Link href={activeDomain.href} className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
                                        Explore <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                  ) : null}
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href={link.href!}>{link.text}</Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  // A simplified representation for mobile view
  const mobileNavLinks = navLinks.flatMap(link => {
    if (link.isMega) {
      return [{ text: 'Academics', sub: academicLevels.map(l => ({ title: l.title, href: l.href })) }];
    }
    if (link.subLinks) {
       return [{ text: link.text, sub: link.subLinks.map(s => ({ title: s.title, href: s.href })) }];
    }
    return { text: link.text, href: link.href };
  });

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
                <span className="font-bold font-headline">EGS Admissions</span>
              </Link>
            </div>
            <nav className="flex flex-col space-y-4 mt-6">
            {mobileNavLinks.map((link) => (
              <React.Fragment key={link.text}>
                {link.sub ? (
                  <div className="flex flex-col space-y-2">
                    <span className="font-semibold text-muted-foreground px-4">{link.text}</span>
                     {link.sub.map(subLink => (
                       <Link
                        key={subLink.title}
                        href={subLink.href}
                        onClick={() => setIsOpen(false)}
                        className="text-muted-foreground hover:text-foreground pl-8 py-1"
                      >
                        {subLink.title}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    href={link.href!}
                    onClick={() => setIsOpen(false)}
                    className="font-medium hover:text-primary px-4 py-1"
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
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-20 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="font-bold text-lg font-headline sm:inline-block">
              EGS Admissions
            </span>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 justify-center">
          <NavMenu />
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4 md:flex-initial">
          <Button asChild className="hidden md:flex">
            <Link href="#apply">Apply Now</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
