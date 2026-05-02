
'use client';

import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// This layout defines the grid spans for a masonry-like effect
const layoutConfig = [
  { className: 'md:row-span-1 md:col-span-1' },
  { className: 'md:row-span-1 md:col-span-1' },
  { className: 'md:row-span-2 md:col-span-2' },
  { className: 'md:row-span-2 md:col-span-1' },
  { className: 'md:row-span-1 md:col-span-1' },
  { className: 'md:row-span-1 md:col-span-1' },
  { className: 'md:row-span-1 md:col-span-1' },
  { className: 'md:row-span-1 md:col-span-1' },
];

export function LifeAtEgspSection() {
    // Filter and map images specifically for the 'life' (culturals) section
    // These IDs are mapped to /culturals/*.webp in placeholder-images.json
    const lifeImages = PlaceHolderImages.filter(img => img.id.startsWith('life-')).slice(0, 8);

    return (
        <section className="bg-background py-16 md:py-24">
            <div className="container mx-auto px-6">
                 <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
                        Life @ EGSP
                    </h2>
                     <Link href="/stories/campus-tour" className="group flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
                        View Campus Stories
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-4">
                    {lifeImages.map((image, index) => {
                        const layout = layoutConfig[index] || { className: 'md:col-span-1' };
                        return (
                            <div key={image.id} className={cn('relative rounded-xl overflow-hidden group shadow-md', layout.className)}>
                                <Image
                                    src={image.imageUrl as string}
                                    alt={image.description}
                                    fill
                                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                    data-ai-hint={image.imageHint}
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <p className="text-white text-xs font-medium uppercase tracking-wider">{image.description}</p>
                                </div>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
