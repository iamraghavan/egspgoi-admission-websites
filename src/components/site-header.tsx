
'use client';

import React from 'react';
import Link from 'next/link';
import { GraduationCap, Menu, BookOpen, Building, School } from 'lucide-react';
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
        icon: Building
      },
      {
        title: "EGS Arts & Science College",
        href: "#",
        description: "A center for excellence in arts, humanities, and sciences.",
        icon: School
      },
      {
        title: "EGS Business School",
        href: "#",
        description: "Fostering the next generation of business leaders and entrepreneurs.",
        icon: BookOpen
      },
    ],
  },
  { text: 'Placements', href: '#placements' },
  { text: 'Scholarship', href: '#scholarship' },
];

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


const IconListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ElementType }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "flex select-none items-start space-x-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <Icon className="h-6 w-6 mt-1 text-primary"/>
          <div className="space-y-1">
            <div className="text-base font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
IconListItem.displayName = "IconListItem";


function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navLinks.map((link) => (
          <NavigationMenuItem key={link.text}>
            {link.subLinks ? (
              <>
                <NavigationMenuTrigger>{link.text}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className={cn(
                    "grid gap-3 p-4",
                    link.text === 'Institutions' ? "md:w-[550px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]" : "md:w-[400px] lg:w-[500px]"
                  )}>
                    {link.text === 'Institutions' && (
                       <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="#"
                          >
                            <GraduationCap className="h-8 w-8 text-primary" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Our Institutions
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              A family of colleges dedicated to academic excellence and student success.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    )}
                    {link.text === 'Institutions' 
                      ? (link.subLinks as (typeof navLinks[7]['subLinks'])).map((subLink) => (
                          subLink.icon && <IconListItem key={subLink.title} title={subLink.title} href={subLink.href} icon={subLink.icon}>{subLink.description}</IconListItem>
                        ))
                      : (link.subLinks as (typeof navLinks[1]['subLinks'])).map((subLink) => (
                          <ListItem key={subLink.title} title={subLink.title} href={subLink.href}>{subLink.description}</ListItem>
                        ))
                    }
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={link.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {link.text}
                </NavigationMenuLink>
              </Link>
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
