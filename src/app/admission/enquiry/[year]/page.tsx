'use client';

import { Suspense, useEffect } from 'react';
import { SiteHeader } from '@/components/site-header';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';
import { trackMetaEvent } from '@/lib/meta-pixel';
import * as gtag from '@/lib/gtag';

const SiteFooter = dynamic(() => import('@/components/site-footer').then(mod => mod.SiteFooter));

function SuccessContent() {
    useEffect(() => {
        // Track Google Ads Conversion on Page Load (Label: 0-vOCKKSuaYcENLgv5RC)
        gtag.reportConversion('0-vOCKKSuaYcENLgv5RC');
        
        // Track ViewContent for the success page
        trackMetaEvent('ViewContent', { 
            content_name: 'Enquiry Success',
            content_category: 'Admissions'
        });
    }, []);
    
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <SiteHeader />
            <main className="flex-grow flex flex-col">
                {/* Hero Status Section */}
                <section className="bg-primary py-20 px-6 text-center border-b-8 border-accent">
                    <div className="container mx-auto max-w-4xl">
                        <div className="mb-8 flex justify-center">
                            <div className="h-2 w-24 bg-accent"></div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold font-headline text-white mb-6 uppercase tracking-tighter">
                            Enquiry Received Successfully
                        </h1>
                        <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed font-body">
                            Thank you for your interest in the EGS Pillay Group of Institutions. Your enquiry for the academic year 2026-27 has been processed. Our admissions team will reach out to you shortly to provide further assistance.
                        </p>
                    </div>
                </section>

                {/* Information Grid */}
                <section className="flex-grow grid lg:grid-cols-2 bg-white">
                    {/* Contact Column */}
                    <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center">
                        <div className="max-w-xl">
                            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-10 border-l-4 border-accent pl-4">
                                Contact Information
                            </h2>
                            
                            <div className="space-y-12">
                                <div className="space-y-4">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Admission Office Numbers</p>
                                    <div className="text-2xl md:text-3xl font-bold font-headline text-primary leading-tight">
                                        <p className="block">(+91) 86089 54537</p>
                                        <p className="block">(+91) 99768 88999</p>
                                        <p className="block text-accent">+91 93630 87377</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Support</p>
                                    <a href="mailto:admission@egspec.org" className="text-xl md:text-2xl font-bold text-primary hover:text-accent transition-colors border-b-2 border-slate-100 pb-1">
                                        admission@egspec.org
                                    </a>
                                </div>

                                <div className="pt-6 flex flex-col sm:flex-row gap-4">
                                    <Button asChild className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold h-16 px-10 text-lg rounded-none shadow-xl shadow-green-500/10">
                                        <a href="https://wa.me/919363087377" target="_blank" rel="noopener noreferrer">
                                            WHATSAPP US
                                        </a>
                                    </Button>
                                    <Button variant="outline" asChild className="h-16 px-10 font-bold text-primary rounded-none border-2 border-primary hover:bg-primary hover:text-white transition-all">
                                        <Link href="/">RETURN TO HOME</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Column */}
                    <div className="relative min-h-[450px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-slate-100">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7838.198188875626!2d79.833264!3d10.803722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a556ca2018f1961%3A0xa99f9848f54a5c9!2sEGS%20Pillay%20Engineering%20College(Autonomous)!5e0!3m2!1sen!2sin!4v1777808954124!5m2!1sen!2sin" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen={true} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="EGS Pillay Campus Map"
                            className="absolute inset-0 grayscale opacity-90 contrast-125 saturate-0"
                        ></iframe>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div>
    );
}

export default function SuccessPage() {
    return (
        <Suspense fallback={
            <div className="flex h-screen items-center justify-center bg-slate-50">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-primary border-t-accent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="font-bold text-slate-400 uppercase tracking-widest text-sm">Validating Submission...</p>
                </div>
            </div>
        }>
            <SuccessContent />
        </Suspense>
    )
}
