import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';


const StatCard = ({ className, children }: { className: string; children: React.ReactNode }) => (
    <div className={cn('p-6 rounded-xl text-white flex flex-col justify-center text-center shadow-lg', className)}>
        {children}
    </div>
);

const ImageCard = ({ id, alt, className, hint }: { id: string; alt: string; className?: string; hint: string }) => {
    const image = PlaceHolderImages.find(p => p.id === id);
    if (!image) return <div className={cn("bg-muted rounded-xl", className)}></div>;
    return (
        <div className={cn('relative rounded-xl overflow-hidden shadow-lg', className)}>
            <Image src={image.imageUrl} alt={alt} fill className="object-cover" data-ai-hint={hint} sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw" />
        </div>
    );
};

export function WhyChooseUsSection() {
    return (
        <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-5">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline leading-tight">
                            <span className="text-primary">EXCELLENCE IN EDUCATION.</span><br/>
                            <span className="text-primary">PIONEERING IN RESEARCH.</span><br/>
                            <span className="text-accent">A LEGACY OF SUCCESS.</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-accent my-6 rounded-full"></div>
                        <p className="text-muted-foreground leading-relaxed">
                            The EGS Pillay Group of Institutions stands as a beacon of academic excellence in Tamil Nadu. Renowned for our NAAC A++ and NBA accredited programs, we offer a transformative educational experience. With a strong emphasis on research, innovation, and holistic development, we prepare our students to become future leaders. Our consistent high-ranking placement record is a testament to our commitment.
                        </p>
                        <Button variant="outline" className="mt-8 group border-primary/20 text-primary hover:bg-primary/5 hover:text-primary font-semibold">
                            Know More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                    <div className="lg:col-span-7 relative">
                        {/* Decorative Elements */}
                        <div className="hidden lg:block absolute -top-8 -left-8 w-24 h-24 bg-primary/10 rounded-full -z-10" />
                        <div className="hidden lg:block absolute -bottom-8 -right-8 w-24 h-24 bg-accent/10 rounded-full -z-10" />

                        <div className="grid grid-cols-3 gap-4 auto-rows-fr">
                            <StatCard className="bg-accent text-accent-foreground">
                                <p className="text-4xl font-bold">A++</p>
                                <p className="font-semibold mt-1">NAAC ACCREDITATION</p>
                                <p className="text-sm font-medium">Highest Grade</p>
                            </StatCard>
                            <StatCard className="bg-primary col-span-2">
                                <p className="text-sm">RANKED IN</p>
                                <p className="text-3xl font-bold">NIRF 2025</p>
                                <p className="font-semibold">201 - 300 BAND</p>
                                <p className="text-xs">UNDER ENGINEERING CATEGORY</p>
                            </StatCard>

                            <ImageCard id="why-choose-us-2" alt="Campus aerial view" className="aspect-[4/3]" hint="campus aerial" />
                            <ImageCard id="why-choose-us-3" alt="Smiling students" className="col-span-1 row-span-2 h-full min-h-[300px]" hint="students smiling" />
                            <ImageCard id="why-choose-us-1" alt="Students in makerspace" className="aspect-[4/3]" hint="students learning" />
                            
                            <StatCard className="bg-primary">
                                <p className="text-4xl font-bold">Tier-1</p>
                                <p className="font-semibold mt-1">NBA ACCREDITATION</p>
                                <p className="text-sm font-medium">Washington Accord</p>
                            </StatCard>
                             <StatCard className="bg-secondary text-secondary-foreground">
                                <p className="text-4xl font-bold">150+</p>
                                <p className="font-semibold mt-1">INDUSTRY MoU's</p>
                            </StatCard>

                            <ImageCard id="why-choose-us-4" alt="Students in a lab" className="aspect-[4/3]" hint="students lab" />
                            <StatCard className="bg-secondary text-secondary-foreground col-span-2">
                                <p className="text-3xl font-bold">95%+ </p>
                                <p className="font-semibold mt-1">PLACEMENT RECORD</p>
                            </StatCard>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
