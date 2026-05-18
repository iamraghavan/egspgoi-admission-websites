'use client';

import { PageHeader } from '@/components/page-header';
import { SiteHeader } from '@/components/site-header';
import { AdmissionForm } from '@/components/admission-form';
import dynamic from 'next/dynamic';
import { Breadcrumb } from '@/components/breadcrumb';
import { useEffect } from 'react';
import { trackMetaEvent } from '@/lib/meta-pixel';

const SiteFooter = dynamic(() => import('@/components/site-footer').then(mod => mod.SiteFooter));

export default function NursingPage() {
    useEffect(() => {
        trackMetaEvent('ViewContent', {
          content_name: 'Nursing Admissions',
          content_category: 'Nursing',
        });
    }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <main>
            <PageHeader
                title="Nursing Admissions 2026-27"
                description="Begin your journey in compassionate healthcare with our B.Sc. Nursing and DGNM programs."
                imageUrl="https://picsum.photos/seed/nurse/1600/400"
                imageAlt="EGS Pillay Nursing Campus"
                data-ai-hint="hospital nursing"
            />
            <Breadcrumb />
            <div className="container mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold font-headline text-primary">Excellence in Nursing Education</h2>
                        <ul className="space-y-4 list-disc list-inside text-muted-foreground">
                            <li>Clinical training in reputed hospitals</li>
                            <li>Modern clinical laboratories and simulation kits</li>
                            <li>Experienced nursing faculty and mentorship</li>
                            <li>100% placement assistance in healthcare sector</li>
                            <li>Accredited by Indian Nursing Council (INC)</li>
                        </ul>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our nursing programs are designed to create healthcare professionals who combine clinical expertise with deep compassion. Join us to make a difference in people's lives.
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
