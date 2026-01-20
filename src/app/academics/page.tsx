
import { PageHeader } from '@/components/page-header';
import { SiteHeader } from '@/components/site-header';
import dynamicImport from 'next/dynamic';
import type { Metadata } from 'next';
import { Breadcrumb, generateBreadcrumbs } from '@/components/breadcrumb';
import Script from 'next/script';
import { siteConfig } from '@/lib/config';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const dynamic = 'force-dynamic';

const FindProgram = dynamicImport(() => import('@/components/find-program').then(mod => mod.FindProgram));
const SiteFooter = dynamicImport(() => import('@/components/site-footer').then(mod => mod.SiteFooter));

export const metadata: Metadata = {
    title: 'Academic Programs',
    description: "Explore a wide range of undergraduate, postgraduate, and doctoral programs offered by the EGS Pillay Group of Institutions. Find the perfect course for your career path.",
};

export default function AcademicsPage() {
    const siteUrl = siteConfig.baseUrl;
    const pathname = '/academics';

    const breadcrumbItems = generateBreadcrumbs(pathname);
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": `${siteUrl}${item.href}`
        }))
    };
    
    const headerImage = PlaceHolderImages.find(p => p.id === 'academics-header');

  return (
    <>
        <Script
            id="breadcrumb-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(breadcrumbSchema),
            }}
        />
        <div className="flex min-h-screen flex-col bg-background">
            <SiteHeader />
            <main>
                <PageHeader
                    title="Our Academic Programs"
                    description="Explore a wide range of programs and find the one that's right for you."
                    imageUrl={headerImage?.imageUrl || "https://picsum.photos/seed/academics/1600/400"}
                    imageAlt={headerImage?.description}
                    data-ai-hint={headerImage?.imageHint || "students library"}
                />
                <Breadcrumb />
                <div className="container mx-auto px-6 py-16">
                    <FindProgram />
                </div>
            </main>
            <SiteFooter />
        </div>
    </>
  );
}
