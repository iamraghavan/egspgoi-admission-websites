'use client';

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardDescription } from '@/components/ui/card';
import { CheckCircle, Mail, Phone, User, ExternalLink } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';
import { trackMetaEvent } from '@/lib/meta-pixel';
import * as gtag from '@/lib/gtag';

const SiteFooter = dynamic(() => import('@/components/site-footer').then(mod => mod.SiteFooter));

function SuccessContent() {
    const searchParams = useSearchParams();
    const leadId = searchParams.get('lead_id');
    const assignedUserName = searchParams.get('assigned_user_name');
    const assignedUserEmail = searchParams.get('assigned_user_email');
    const assignedUserPhone = searchParams.get('assigned_user_phone') || '9363087377';

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
            <main className="flex-grow flex items-center justify-center bg-secondary/30 py-16 md:py-24">
                <Card className="w-full max-w-2xl text-center shadow-2xl p-4 md:p-8 border-t-8 border-t-green-500">
                    <CardHeader>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 animate-pulse">
                            <CheckCircle className="h-12 w-12 text-green-600" />
                        </div>
                        <h1 className="mt-6 text-3xl font-bold font-headline text-primary leading-tight">Enquiry Submitted Successfully!</h1>
                        <CardDescription className="mt-2 text-lg text-muted-foreground">
                            Thank you for your interest in EGS Pillay Group. Your application for 2026-27 has been received.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                        <div className="bg-secondary/50 p-6 rounded-lg text-left border border-dashed border-gray-300">
                            {leadId && (
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Enquiry Reference ID:</span>
                                    <strong className="font-mono text-primary text-lg">{leadId}</strong>
                                </div>
                            )}
                            <p className="text-muted-foreground text-sm">
                                Please mention this ID for all future communications with our admissions office.
                            </p>
                        </div>

                        {assignedUserName && (
                             <div className="mt-8 text-left">
                                <h3 className="font-bold font-headline text-xl text-primary flex items-center gap-2 mb-4">
                                    <User className="h-6 w-6 text-accent" />
                                    Your Admission Executive
                                </h3>
                                <Card className="overflow-hidden border-none shadow-lg bg-white">
                                    <div className="flex flex-col sm:flex-row">
                                        <div className="bg-primary p-6 flex items-center justify-center sm:w-1/3">
                                            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center border-4 border-white/20">
                                                <User className="w-10 h-10 text-white" />
                                            </div>
                                        </div>
                                        <div className="p-6 sm:w-2/3 space-y-4">
                                            <div>
                                                <p className="font-bold text-2xl text-primary">{assignedUserName}</p>
                                                <p className="text-accent text-sm font-medium">Assigned Counselor</p>
                                            </div>
                                            
                                            <div className="space-y-3">
                                                {assignedUserEmail && (
                                                    <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                                                        <Mail className="h-4 w-4 shrink-0" />
                                                        <a href={`mailto:${assignedUserEmail}`} className="hover:underline">{assignedUserEmail}</a>
                                                    </div>
                                                )}
                                                {assignedUserPhone && (
                                                    <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                                                        <Phone className="h-4 w-4 shrink-0" />
                                                        <a href={`tel:+91${assignedUserPhone.replace(/\s/g, '')}`} className="hover:underline font-bold text-foreground" onClick={() => trackMetaEvent('Contact', { contact_method: 'phone' })}>
                                                            +91 {assignedUserPhone.replace(/(\d{5})(\d{5})/, '$1 $2')}
                                                        </a>
                                                    </div>
                                                )}
                                            </div>
                                            <Button variant="outline" size="sm" className="w-full mt-2 gap-2 text-xs" asChild>
                                                <a href={`https://wa.me/91${assignedUserPhone.replace(/\s/g, '')}`} target="_blank" rel="noopener noreferrer">
                                                    Chat on WhatsApp <ExternalLink size={12} />
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        )}
                        
                        <div className="pt-6 border-t">
                            <Button asChild className="w-full sm:w-auto px-12" size="lg">
                                <Link href="/">Explore More Programs</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </main>
            <SiteFooter />
        </div>
    );
}

export default function SuccessPage() {
    return (
        <Suspense fallback={<div className="flex h-screen items-center justify-center bg-secondary/30">
            <div className="text-center">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="font-medium text-muted-foreground">Verifying application status...</p>
            </div>
        </div>}>
            <SuccessContent />
        </Suspense>
    )
}
