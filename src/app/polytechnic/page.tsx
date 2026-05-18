'use client';

import { PageHeader } from '@/components/page-header';
import { SiteHeader } from '@/components/site-header';
import { AdmissionForm } from '@/components/admission-form';
import dynamic from 'next/dynamic';
import { Breadcrumb } from '@/components/breadcrumb';
import { useEffect } from 'react';
import { trackMetaEvent } from '@/lib/meta-pixel';

const SiteFooter = dynamic(() => import('@/components/site-footer').then(mod => mod.SiteFooter));

export default function PolytechnicPage() {
    useEffect(() => {
        trackMetaEvent('ViewContent', {
          content_name: 'Polytechnic Admissions',
          content_category: 'Diploma',
        });
    }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <main>
            <PageHeader
                title="Diploma Admissions 2026-27"
                description="Get industry-ready with practical, skill-based Diploma programs at EGS Pillay Polytechnic College."
                imageUrl="https://picsum.photos/seed/poly/1600/400"
                imageAlt="EGS Pillay Polytechnic Campus"
                data-ai-hint="technical college"
            />
            <Breadcrumb />
            <div className="container mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold font-headline text-primary">Practical Skills for a Bright Future</h2>
                        <ul className="space-y-4 list-disc list-inside text-muted-foreground">
                            <li>Hands-on technical training</li>
                            <li>Modern workshops and laboratory facilities</li>
                            <li>Direct Lateral Entry options to B.E. programs</li>
                            <li>Strong placement support for diploma holders</li>
                            <li>Affiliated to DOTE, Tamil Nadu</li>
                        </ul>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Start your technical career early. Our polytechnic college focuses on providing real-world skills that make you immediately employable in the engineering and technology sectors.
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
