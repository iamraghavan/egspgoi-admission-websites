
'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const StatCard = ({ className, children }: { className: string; children: React.ReactNode }) => (
    <div className={cn('p-6 rounded-xl text-white flex flex-col justify-center text-center shadow-lg h-full', className)}>
        {children}
    </div>
);

const ImageCard = ({ id, alt, className, hint }: { id: string; alt: string; className?: string; hint: string }) => {
    const image = PlaceHolderImages.find(p => p.id === id);
    if (!image) return <div className={cn("bg-muted rounded-xl", className)}></div>;
    return (
        <div className={cn('relative rounded-xl overflow-hidden shadow-lg h-full min-h-[150px]', className)}>
            <Image 
                src={image.imageUrl as string} 
                alt={alt} 
                fill 
                className="object-cover transition-transform duration-500 hover:scale-105" 
                data-ai-hint={hint} 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw" 
            />
        </div>
    );
};

export function WhyChooseUsSection() {
    return (
        <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    <div className="lg:col-span-5 lg:sticky lg:top-32">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline leading-tight bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text uppercase">
                            Top-Ranked Education.<br/>
                            Innovative Research.<br/>
                            Exceptional Careers.
                        </h2>
                        <div className="w-20 h-1.5 bg-accent my-6 rounded-full"></div>
                        <p className="text-muted-foreground leading-relaxed font-body text-lg">
                            The EGS Pillay Group of Institutions stands as a beacon of academic excellence in Tamil Nadu. Renowned for our NAAC A++ and NBA accredited programs, we offer a transformative educational experience.
                        </p>
                        <p className="text-muted-foreground leading-relaxed font-body mt-4">
                            With a strong emphasis on research, innovation, and holistic development, we prepare our students to become future leaders. Our consistent high-ranking placement record is a testament to our commitment to student success.
                        </p>
                        <Button variant="outline" className="mt-8 group border-primary/20 text-primary hover:bg-primary/5 hover:text-primary font-semibold" asChild>
                            <a href="/admissions">
                                Know More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </Button>
                    </div>
                    <div className="lg:col-span-7 relative">
                        {/* Decorative Elements */}
                        <div className="hidden lg:block absolute -top-8 -left-8 w-24 h-24 bg-primary/10 rounded-full -z-10" />
                        <div className="hidden lg:block absolute -bottom-8 -right-8 w-24 h-24 bg-accent/10 rounded-full -z-10" />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Row 1 */}
                            <StatCard className="bg-accent text-accent-foreground">
                                <p className="text-4xl font-bold font-headline">A++</p>
                                <p className="font-semibold font-headline mt-1 uppercase text-sm">NAAC Accreditation</p>
                                <p className="text-xs opacity-90">Highest Grade Received</p>
                            </StatCard>
                            <StatCard className="bg-primary md:col-span-2">
                                <p className="text-xs font-body opacity-80 uppercase tracking-widest">Ranked in</p>
                                <p className="text-3xl font-bold font-headline">NIRF 2025</p>
                                <p className="font-semibold font-headline text-lg">201 - 300 BAND</p>
                                <p className="text-xs font-body opacity-80 italic">Under Engineering Category</p>
                            </StatCard>

                            {/* Row 2 - Local Images */}
                            <ImageCard id="why-choose-us-2" alt="EGS Pillay Cultural" hint="cultural event" />
                            <ImageCard id="why-choose-us-3" alt="EGS Pillay Cultural" className="md:row-span-2" hint="cultural event" />
                            <ImageCard id="why-choose-us-1" alt="EGS Pillay Cultural" hint="cultural event" />
                            
                            {/* Row 3 */}
                            <StatCard className="bg-primary">
                                <p className="text-4xl font-bold font-headline">Tier-1</p>
                                <p className="font-semibold font-headline mt-1 uppercase text-sm">NBA Accreditation</p>
                                <p className="text-xs opacity-80">Washington Accord Signatory</p>
                            </StatCard>
                            <StatCard className="bg-accent text-accent-foreground">
                                <p className="text-4xl font-bold font-headline">150+</p>
                                <p className="font-semibold font-headline mt-1 uppercase text-sm">Industry MoU's</p>
                                <p className="text-xs opacity-90">Strong Corporate Network</p>
                            </StatCard>

                            {/* Row 4 - Local Image */}
                            <ImageCard id="why-choose-us-4" alt="EGS Pillay Cultural" hint="cultural event" />
                            <StatCard className="bg-primary md:col-span-2">
                                <p className="text-3xl font-bold font-headline">95%+ </p>
                                <p className="font-semibold font-headline mt-1 uppercase text-sm">Placement Record</p>
                                <p className="text-xs opacity-80">Consistently achieving excellence in careers</p>
                            </StatCard>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
