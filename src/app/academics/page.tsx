'use client';

import { PageHeader } from '@/components/page-header';
import { SiteHeader } from '@/components/site-header';
import dynamicImport from 'next/dynamic';
import { Breadcrumb } from '@/components/breadcrumb';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useEffect } from 'react';
import { trackMetaEvent } from '@/lib/meta-pixel';

const FindProgram = dynamicImport(() => import('@/components/find-program').then(mod => mod.FindProgram));
const SiteFooter = dynamicImport(() => import('@/components/site-footer').then(mod => mod.SiteFooter));

export default function AcademicsPage() {
    const headerImage = PlaceHolderImages.find(p => p.id === 'academics-header');

    useEffect(() => {
        trackMetaEvent('ViewContent', {
          content_name: 'Academic Programs',
          content_category: 'Academics',
        });
    }, []);

  return (
    <>
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
