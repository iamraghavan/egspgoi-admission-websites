'use client';

import { PageHeader } from '@/components/page-header';
import { SiteHeader } from '@/components/site-header';
import { AdmissionForm } from '@/components/admission-form';
import dynamic from 'next/dynamic';
import { Breadcrumb } from '@/components/breadcrumb';
import { useEffect } from 'react';
import { trackMetaEvent } from '@/lib/meta-pixel';

const SiteFooter = dynamic(() => import('@/components/site-footer').then(mod => mod.SiteFooter));

export default function ArtsSciencePage() {
    useEffect(() => {
        trackMetaEvent('ViewContent', {
          content_name: 'Arts & Science Admissions',
          content_category: 'Arts & Science',
        });
    }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <main>
            <PageHeader
                title="Arts & Science Admissions 2026-27"
                description="Explore diverse courses in Arts, Commerce, and Science at Edayathangudy G. S. Pillay Arts & Science College."
                imageUrl="https://picsum.photos/seed/arts/1600/400"
                imageAlt="EGS Pillay Arts and Science Campus"
                data-ai-hint="college campus"
            />
            <Breadcrumb />
            <div className="container mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold font-headline text-primary">Academic Excellence in Arts & Science</h2>
                        <ul className="space-y-4 list-disc list-inside text-muted-foreground">
                            <li>Wide range of UG and PG programs</li>
                            <li>Experienced and dedicated faculty members</li>
                            <li>Modern library and digital learning resources</li>
                            <li>Active placement cell with 90%+ record</li>
                            <li>Focus on holistic student development</li>
                        </ul>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Discover your potential in a vibrant academic environment. Our Arts & Science college provides the perfect platform for students to excel in their chosen fields and build successful careers.
                        </p>
                    </div>
                    <div className="bg-secondary/20 p-8 rounded-2xl shadow-sm border border-border/50">
                        <AdmissionForm />
                    </div>
                </div>
            </div>
        </main>
        <SiteFooter />
    </div>
  );
}
