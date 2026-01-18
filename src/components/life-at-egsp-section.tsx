
'use client';

import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const imageLayout = [
  { className: 'md:row-span-1 md:col-span-1', id: 'life-1', hint: 'cultural event' },
  { className: 'md:row-span-1 md:col-span-1', id: 'life-2', hint: 'guest lecture' },
  { className: 'md:row-span-2 md:col-span-2', id: 'life-3', hint: 'dance performance' },
  { className: 'md:row-span-2 md:col-span-1', id: 'life-4', hint: 'student festival' },
  { className: 'md:row-span-1 md:col-span-1', id: 'life-5', hint: 'singer concert' },
  { className: 'md:row-span-1 md:col-span-1', id: 'life-6', hint: 'student band' },
  { className: 'md:row-span-1 md:col-span-1', id: 'life-7', hint: 'traditional dance' },
  { className: 'md:row-span-1 md:col-span-1', id: 'life-8', hint: 'campus crowd' },
];

const GalleryImage = ({ layout }: { layout: typeof imageLayout[0] }) => {
    const image = PlaceHolderImages.find(p => p.id === layout.id);
    if (!image) return <div className={cn("bg-muted rounded-lg", layout.className)}></div>;

    return (
        <div className={cn('relative rounded-lg overflow-hidden group', layout.className)}>
             <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                data-ai-hint={layout.hint}
                sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
        </div>
    )
}

export function LifeAtEgspSection() {
    return (
        <section className="bg-background py-16 md:py-24">
            <div className="container mx-auto px-6">
                 <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
                        Life @ EGSP
                    </h2>
                     <Link href="#" className="group flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
                        View More
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-4">
                    {imageLayout.map((layout) => (
                       <GalleryImage key={layout.id} layout={layout} />
                    ))}
                </div>
            </div>
        </section>
    );
}
