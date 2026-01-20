'use client';

import React, { useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

type Story = {
    imageUrl: string | StaticImageData;
    title: string;
    description: string;
};

interface WebStoryProps {
    stories: Story[];
}

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0,
    }),
};

export function WebStory({ stories }: WebStoryProps) {
    const [[page, direction], setPage] = useState([0, 0]);

    const paginate = (newDirection: number) => {
        if (page + newDirection < 0 || page + newDirection >= stories.length) {
            return;
        }
        setPage([page + newDirection, newDirection]);
    };

    const currentStory = stories[page];

    return (
        <div className="relative h-full w-full overflow-hidden select-none">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={page}
                    className="absolute h-full w-full"
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                >
                    <Image
                        src={currentStory.imageUrl}
                        alt={currentStory.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Header */}
            <div className="absolute top-0 left-0 right-0 p-4 z-10">
                <div className="flex items-center gap-2 mb-2">
                    {stories.map((_, index) => (
                        <div key={index} className="h-1 flex-1 rounded-full bg-white/30 overflow-hidden">
                            <motion.div
                                className="h-1 rounded-full bg-white"
                                initial={{ width: '0%' }}
                                animate={{ width: index <= page ? '100%' : '0%' }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                            />
                        </div>
                    ))}
                </div>
                 <Link href="/" className="absolute top-6 right-4 text-white z-20">
                    <X size={32} />
                    <span className="sr-only">Close Story</span>
                </Link>
            </div>
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                 <motion.h1
                    key={`${page}-title`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-3xl font-bold font-headline mb-2"
                 >
                    {currentStory.title}
                </motion.h1>
                 <motion.p 
                    key={`${page}-desc`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-base font-body leading-relaxed max-w-md"
                 >
                    {currentStory.description}
                </motion.p>
            </div>

            {/* Navigation */}
            <div className="absolute inset-0 z-20 flex justify-between">
                <div className="w-1/3 h-full cursor-pointer" onClick={() => paginate(-1)} />
                <div className="w-1/3 h-full" />
                <div className="w-1/3 h-full cursor-pointer" onClick={() => paginate(1)} />
            </div>

            {/* Navigation Buttons for larger screens */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 z-30 hidden md:block">
                <button 
                    onClick={() => paginate(-1)} 
                    className="p-2 bg-black/30 text-white rounded-full transition-opacity hover:bg-black/50 disabled:opacity-30"
                    disabled={page === 0}
                    aria-label="Previous Story"
                >
                    <ChevronLeft size={24} />
                </button>
            </div>
             <div className="absolute top-1/2 -translate-y-1/2 right-4 z-30 hidden md:block">
                <button 
                    onClick={() => paginate(1)} 
                    className="p-2 bg-black/30 text-white rounded-full transition-opacity hover:bg-black/50 disabled:opacity-30"
                    disabled={page === stories.length - 1}
                    aria-label="Next Story"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
}
