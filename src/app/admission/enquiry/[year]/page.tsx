
'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, Mail, Phone, User } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function SuccessContent() {
    const searchParams = useSearchParams();
    const leadId = searchParams.get('lead_id');
    const assignedUserName = searchParams.get('assigned_user_name');
    const assignedUserEmail = searchParams.get('assigned_user_email');
    const assignedUserPhone = searchParams.get('assigned_user_phone');
    
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <SiteHeader />
            <main className="flex-grow flex items-center justify-center bg-secondary/30 py-16 md:py-24">
                <Card className="w-full max-w-2xl text-center shadow-xl p-4 md:p-8">
                    <CardHeader>
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                            <CheckCircle className="h-10 w-10 text-green-600" />
                        </div>
                        <CardTitle className="mt-6 text-3xl font-bold font-headline text-primary">Application Submitted Successfully!</CardTitle>
                        <CardDescription className="mt-2 text-lg text-muted-foreground">
                            Thank you for your interest. Your enquiry has been received.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-left mt-6">
                            <p className="text-muted-foreground">Your Enquiry ID is: <strong className="font-mono text-foreground">{leadId}</strong>. Please save this for future reference.</p>
                            <p className="text-muted-foreground mt-2">
                                One of our admission executives will contact you shortly to guide you through the next steps.
                            </p>
                        </div>

                        {assignedUserName && (
                             <div className="mt-8 text-left border-t pt-6">
                                <h3 className="font-semibold font-headline text-lg text-primary">Your Assigned Admission Executive</h3>
                                <Card className="mt-4 text-left p-6 bg-secondary/50">
                                    <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                                <User className="w-8 h-8" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="font-bold text-xl">{assignedUserName}</p>
                                            <div className="flex items-center gap-3 text-muted-foreground">
                                                <Mail className="h-4 w-4" />
                                                <a href={`mailto:${assignedUserEmail}`} className="hover:underline text-foreground">{assignedUserEmail}</a>
                                            </div>
                                            <div className="flex items-center gap-3 text-muted-foreground">
                                                <Phone className="h-4 w-4" />
                                                <a href={`tel:+91${assignedUserPhone}`} className="hover:underline text-foreground">+91 {assignedUserPhone}</a>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        )}
                        <Button asChild className="mt-8 w-full sm:w-auto" size="lg">
                            <Link href="/">Return to Homepage</Link>
                        </Button>
                    </CardContent>
                </Card>
            </main>
            <SiteFooter />
        </div>
    );
}


export default function SuccessPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SuccessContent />
        </Suspense>
    )
}

    