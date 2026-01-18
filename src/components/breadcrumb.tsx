
'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import Script from 'next/script';

type BreadcrumbItem = {
  name: string;
  href: string;
};

const generateBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
  const pathSegments = pathname.split('/').filter(segment => segment);
  const breadcrumbs: BreadcrumbItem[] = [{ name: 'Home', href: '/' }];

  let currentPath = '';
  pathSegments.forEach(segment => {
    currentPath += `/${segment}`;
    breadcrumbs.push({
      name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      href: currentPath,
    });
  });

  return breadcrumbs;
};

export function Breadcrumb({ className }: { className?: string }) {
  const pathname = usePathname();
  const items = generateBreadcrumbs(pathname);

  if (items.length <= 1) {
    return null;
  }
  
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://egs-admissions-hub.vercel.app${item.href}`
    }))
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <nav aria-label="Breadcrumb" className={cn('bg-secondary/30', className)}>
        <div className="container mx-auto px-6">
          <ol className="flex items-center space-x-2 py-3 text-sm">
            {items.map((item, index) => (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 text-muted-foreground mr-2" />
                )}
                {index === 0 ? (
                   <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                     <Home className="h-4 w-4" />
                     <span className="sr-only">Home</span>
                   </Link>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'font-medium',
                      index === items.length - 1
                        ? 'text-foreground pointer-events-none'
                        : 'text-muted-foreground hover:text-primary transition-colors'
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
