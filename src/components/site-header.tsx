
'use client';

import React from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  Menu,
  BookOpen,
  Building,
  School,
  ArrowRight,
  FlaskConical,
  Briefcase,
  PenSquare,
  Landmark,
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

const navLinks = [
  { text: 'About EGS', href: '#about' },
  {
    text: 'Academics',
    subLinks: {
      categories: [
        {
          title: 'Undergraduate',
          courses: [
            { title: 'B.E. Computer Science', href: '#', icon: <PenSquare /> },
            { title: 'B.Tech Information Tech', href: '#', icon: <PenSquare /> },
            { title: 'B.Sc. Data Science', href: '#', icon: <PenSquare /> },
            { title: 'B.A. English Literature', href: '#', icon: <PenSquare /> },
            { title: 'B.Com. General', href: '#', icon: <PenSquare /> },
          ],
        },
        {
          title: 'Postgraduate',
          courses: [
            { title: 'M.E. Computer Science', href: '#', icon: <PenSquare /> },
            { title: 'M.Tech Information Tech', href: '#', icon: <PenSquare /> },
            { title: 'M.Sc. Data Science', href: '#', icon: <PenSquare /> },
            { title: 'M.A. English Literature', href: '#', icon: <PenSquare /> },
            { title: 'M.Com. Finance', href: '#', icon: <PenSquare /> },
          ],
        },
      ],
      featured: [
        {
          title: 'Doctoral Programs (Ph.D)',
          description: 'Pursue the highest level of academic achievement with our doctoral programs.',
          href: '#',
          icon: <FlaskConical />,
        },
        {
          title: 'Business Administration',
          description: 'Shape the future of business with our MBA and BBA programs.',
          href: '#',
          icon: <Briefcase />,
        },
      ],
    },
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

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navLinks.map((link) => (
          <NavigationMenuItem key={link.text}>
            {link.subLinks ? (
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
                              activeInstitution?.id === subLink.id ? 'bg-accent/20' : 'hover:bg-accent/10'
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
                  ) : link.text === 'Academics' && typeof link.subLinks === 'object' && !Array.isArray(link.subLinks) ? (
                    <div className="grid grid-cols-3 gap-x-8 p-6 w-[60rem]">
                      {link.subLinks.categories.map(category => (
                        <div key={category.title}>
                          <h3 className="text-sm font-semibold font-headline text-primary mb-4">{category.title}</h3>
                          <ul className="grid gap-3">
                            {category.courses.map(course => (
                              <li key={course.title}>
                                <NavigationMenuLink asChild>
                                  <a href={course.href} className="flex items-center gap-3 rounded-md p-2 text-sm hover:bg-accent/10 transition-colors">
                                     <div className="text-primary">{React.cloneElement(course.icon, { className: "h-4 w-4" })}</div>
                                     <span className="font-medium text-foreground">{course.title}</span>
                                  </a>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                       <div>
                          <h3 className="text-sm font-semibold font-headline text-primary mb-4">Research & Specialization</h3>
                          <ul className="grid gap-3">
                           {link.subLinks.featured.map(item => (
                             <li key={item.title}>
                               <NavigationMenuLink asChild>
                                <a href={item.href} className="flex flex-col p-3 rounded-lg hover:bg-accent/10 transition-colors">
                                    <div className="flex items-center gap-3 mb-1">
                                      <div className="text-primary">{React.cloneElement(item.icon, { className: "h-4 w-4" })}</div>
                                      <span className="font-semibold text-foreground">{item.title}</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground ml-7">{item.description}</p>
                                </a>
                               </NavigationMenuLink>
                             </li>
                           ))}
                          </ul>
                       </div>
                    </div>
                  ) : null}
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href={link.href}>{link.text}</Link>
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
            {navLinks.map((link) => (
              <React.Fragment key={link.text}>
                {link.subLinks ? (
                  <div className="flex flex-col space-y-2">
                    <span className="font-semibold text-muted-foreground px-4">{link.text}</span>
                     {Array.isArray(link.subLinks) ? link.subLinks.map(subLink => (
                       <Link
                        key={subLink.title}
                        href={subLink.href}
                        onClick={() => setIsOpen(false)}
                        className="text-muted-foreground hover:text-foreground pl-8"
                      >
                        {subLink.title}
                      </Link>
                    )) : (
                      <>
                        {link.subLinks.categories.flatMap(cat => cat.courses).map(course => (
                           <Link
                            key={course.title}
                            href={course.href}
                            onClick={() => setIsOpen(false)}
                            className="text-muted-foreground hover:text-foreground pl-8"
                          >
                            {course.title}
                          </Link>
                        ))}
                      </>
                    )}
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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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

    