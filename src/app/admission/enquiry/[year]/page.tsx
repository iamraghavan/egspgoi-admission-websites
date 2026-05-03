'use client';

import { Suspense, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardDescription } from '@/components/ui/card';
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
            <main className="flex-grow bg-slate-50 py-16 md:py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <Card className="w-full shadow-lg border-t-4 border-t-primary overflow-hidden">
                        <CardHeader className="text-center pt-12 pb-8 border-b bg-white">
                            <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">Application Received Successfully</h1>
                            <CardDescription className="text-lg text-slate-600 max-w-xl mx-auto">
                                Thank you for choosing the EGS Pillay Group of Institutions. Your enquiry for the academic year 2026-27 has been registered. Our admissions team will contact you shortly.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="grid md:grid-cols-2">
                                {/* Contact Information */}
                                <div className="p-8 md:p-12 space-y-8 bg-white">
                                    <div className="space-y-6">
                                        <div>
                                            <h2 className="text-xl font-bold font-headline text-primary mb-4 uppercase tracking-wider">Admission Office</h2>
                                            <div className="space-y-3 text-slate-700 font-medium">
                                                <p className="block text-lg">(+91) 86089 54537</p>
                                                <p className="block text-lg">(+91) 99768 88999</p>
                                                <p className="block text-lg">+91 93630 87377</p>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Email Support</h3>
                                            <a href="mailto:admission@egspec.org" className="text-accent hover:underline font-bold text-lg">
                                                admission@egspec.org
                                            </a>
                                        </div>

                                        <div className="pt-4 flex flex-col gap-4">
                                            <Button asChild className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold h-12">
                                                <a href="https://wa.me/919363087377" target="_blank" rel="noopener noreferrer">
                                                    Chat on WhatsApp
                                                </a>
                                            </Button>
                                            <Button variant="outline" asChild className="h-12 font-semibold">
                                                <Link href="/">Return to Homepage</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                {/* Map Section */}
                                <div className="h-[400px] md:h-auto bg-slate-200">
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7838.198188875626!2d79.833264!3d10.803722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a556ca2018f1961%3A0xa99f9848f54a5c9!2sEGS%20Pillay%20Engineering%20College(Autonomous)!5e0!3m2!1sen!2sin!4v1777808954124!5m2!1sen!2sin" 
                                        width="100%" 
                                        height="100%" 
                                        style={{ border: 0 }} 
                                        allowFullScreen={true} 
                                        loading="lazy" 
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="EGS Pillay Campus Map"
                                        className="grayscale contrast-[1.1]"
                                    ></iframe>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <SiteFooter />
        </div>
    );
}

export default function SuccessPage() {
    return (
        <Suspense fallback={<div className="flex h-screen items-center justify-center bg-slate-50">
            <div className="text-center">
                <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="font-medium text-slate-500">Confirming application...</p>
            </div>
        </div>}>
            <SuccessContent />
        </Suspense>
    )
}
