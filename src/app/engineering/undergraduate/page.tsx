'use client';

import { PageHeader } from '@/components/page-header';
import { SiteHeader } from '@/components/site-header';
import { AdmissionForm } from '@/components/admission-form';
import dynamic from 'next/dynamic';
import { Breadcrumb } from '@/components/breadcrumb';
import { useEffect } from 'react';
import { trackMetaEvent } from '@/lib/meta-pixel';

const SiteFooter = dynamic(() => import('@/components/site-footer').then(mod => mod.SiteFooter));

export default function EngineeringUndergraduatePage() {
    useEffect(() => {
        trackMetaEvent('ViewContent', {
          content_name: 'Engineering Undergraduate Admissions',
          content_category: 'Engineering',
        });
    }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <main>
            <PageHeader
                title="B.E. / B.Tech Admissions 2026-27"
                description="Secure your future with Top-Ranked Engineering programs at EGS Pillay Engineering College (NAAC A++)."
                imageUrl="https://picsum.photos/seed/eng/1600/400"
                imageAlt="EGS Pillay Engineering College Campus"
                data-ai-hint="engineering college"
            />
            <Breadcrumb />
            <div className="container mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold font-headline text-primary">Why Study Engineering at EGSP?</h2>
                        <ul className="space-y-4 list-disc list-inside text-muted-foreground">
                            <li>NAAC A++ Accredited Institution</li>
                            <li>NBA Tier-1 Accredited Departments (Washington Accord)</li>
                            <li>NIRF Ranked Innovation and Excellence</li>
                            <li>150+ Industry Partnerships for Placements</li>
                            <li>State-of-the-art Labs and Research Centers</li>
                        </ul>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Join a legacy of engineering excellence. Our undergraduate programs are designed to meet global standards, ensuring our graduates are industry-ready from day one.
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
