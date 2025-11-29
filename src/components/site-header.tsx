
'use client';

import React from 'react';
import Link from 'next/link';
import { GraduationCap, Menu, BookOpen, Building, School, ArrowRight } from 'lucide-react';
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
    subLinks: [
      {
        title: "Engineering",
        href: "#programs",
        description: "Explore our world-class engineering programs, from computer science to mechanical."
      },
      {
        title: "Arts & Science",
        href: "#programs",
        description: "Dive into the humanities, social sciences, and natural sciences."
      },
      {
        title: "Business",
        href: "#programs",
        description: "Develop leadership skills and business acumen in our competitive business programs."
      },
    ],
  },
  {
    text: 'Admissions',
    subLinks: [
      {
        title: "Apply Online",
        href: "#apply",
        description: "Start your application process here and join the EGS family."
      },
      {
        title: "Admission Process",
        href: "#process",
        description: "Learn about the steps and timelines for our admission process."
      },
      {
        title: "Requirements",
        href: "#requirements",
        description: "Find out the specific requirements for your chosen program."
      },
    ],
  },
  { text: 'Alumni', href: '#alumni' },
  { text: 'Career Guidance', href: '#career-guidance' },
  { text: 'Contact Us', href: '#contact' },
  { text: 'FAQ', href: '#faq' },
  {
    text: 'Institutions',
    subLinks: [
      {
        title: "EGS Engineering College",
        href: "#",
        description: "Our flagship institution for engineering and technology.",
        id: "institution-eng"
      },
      {
        title: "EGS Arts & Science College",
        href: "#",
        description: "A center for excellence in arts, humanities, and sciences.",
        id: "institution-as"
      },
      {
        title: "EGS Business School",
        href: "#",
        description: "Fostering the next generation of business leaders and entrepreneurs.",
        id: "institution-biz"
      },
    ],
  },
  { text: 'Placements', href: '#placements' },
  { text: 'Scholarship', href: '#scholarship' },
];

const campusIllustration = PlaceHolderImages.find(p => p.id === "campus-illustration");

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
ListItem.displayName = "ListItem";

function NavMenu() {
  const sortedNavLinks = [...navLinks].sort((a, b) => a.text.localeCompare(b.text));
  const [activeInstitution, setActiveInstitution] = React.useState(navLinks.find(l => l.text === 'Institutions')?.subLinks?.[0]);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {sortedNavLinks.map((link) => (
          <NavigationMenuItem key={link.text}>
            {link.subLinks ? (
              <>
                <NavigationMenuTrigger>{link.text}</NavigationMenuTrigger>
                <NavigationMenuContent>
                   {link.text === 'Institutions' ? (
                     <div className="grid grid-cols-3 gap-6 p-6 w-[60rem]">
                       <div className="col-span-1 flex flex-col space-y-2">
                        {link.subLinks.map((subLink) => (
                          <button
                            key={subLink.title}
                            onMouseEnter={() => setActiveInstitution(subLink)}
                            className={cn(
                              "text-left p-3 rounded-md transition-colors",
                              activeInstitution?.id === subLink.id ? "bg-accent/50 text-accent-foreground" : "hover:bg-accent/30"
                            )}
                          >
                             <span className={cn("font-medium", activeInstitution?.id === subLink.id ? "text-accent" : "")}>
                              {subLink.title}
                            </span>
                          </button>
                        ))}
                       </div>
                       <div className="col-span-2 flex items-center">
                          {activeInstitution && (
                            <div className="grid grid-cols-2 gap-6 items-center w-full">
                              <div>
                                <h3 className="text-xl font-semibold text-accent mb-2">{activeInstitution.title}</h3>
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
                                    className="object-contain"
                                    data-ai-hint={campusIllustration.imageHint}
                                  />
                                )}
                              </div>
                            </div>
                          )}
                       </div>
                     </div>
                   ) : (
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {link.subLinks.map((subLink) => (
                        <ListItem
                          key={subLink.title}
                          title={subLink.title}
                          href={subLink.href}
                        >
                          {subLink.description}
                        </ListItem>
                      ))}
                    </ul>
                   )}
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href={link.href}>
                  {link.text}
                </Link>
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
  const sortedNavLinks = [...navLinks].sort((a, b) => a.text.localeCompare(b.text));

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
            {sortedNavLinks.map((link) => (
              <React.Fragment key={link.text}>
                {link.subLinks ? (
                  <div className="flex flex-col space-y-2">
                    <span className="font-semibold text-muted-foreground px-4">{link.text}</span>
                    {link.subLinks.map(subLink => (
                       <Link
                        key={subLink.title}
                        href={subLink.href}
                        onClick={() => setIsOpen(false)}
                        className="text-muted-foreground hover:text-foreground pl-8"
                      >
                        {subLink.title}
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
