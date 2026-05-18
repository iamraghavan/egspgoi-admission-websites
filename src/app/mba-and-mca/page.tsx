'use client';

import { PageHeader } from '@/components/page-header';
import { SiteHeader } from '@/components/site-header';
import { AdmissionForm } from '@/components/admission-form';
import dynamic from 'next/dynamic';
import { Breadcrumb } from '@/components/breadcrumb';
import { useEffect } from 'react';
import { trackMetaEvent } from '@/lib/meta-pixel';

const SiteFooter = dynamic(() => import('@/components/site-footer').then(mod => mod.SiteFooter));

export default function MbaMcaPage() {
    useEffect(() => {
        trackMetaEvent('ViewContent', {
          content_name: 'MBA & MCA Admissions',
          content_category: 'Management & Computing',
        });
    }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <main>
            <PageHeader
                title="MBA & MCA Admissions 2026-27"
                description="Lead the future with professional Management and Computing degrees from EGS Pillay Engineering College."
                imageUrl="https://picsum.photos/seed/mba/1600/400"
                imageAlt="EGS Pillay Campus"
                data-ai-hint="business office"
            />
            <Breadcrumb />
            <div className="container mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold font-headline text-primary">Professional Growth and Innovation</h2>
                        <ul className="space-y-4 list-disc list-inside text-muted-foreground">
                            <li>Industry-aligned MBA and MCA curriculum</li>
                            <li>Specializations in trending technologies and domains</li>
                            <li>Expert faculty with corporate and academic experience</li>
                            <li>Top-tier placements in IT and Management firms</li>
                            <li>Rich exposure to seminars, workshops, and case studies</li>
                        </ul>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Elevate your career with our professional PG programs. We focus on developing leaders and innovators who can thrive in the competitive global business and technology landscape.
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
