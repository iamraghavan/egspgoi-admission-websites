
'use client';

import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { ArrowRight, Briefcase, Code, Landmark, Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  'Recent Launches',
  'Sales',
  'Marketing',
  'Commerce and POS',
  'Service',
  'Finance',
  'Human Resources',
  'Legal',
  'Security and IT Management',
  'BI and Analytics',
  'Project Management',
];

const recentLaunches = [
  {
    icon: <Code className="h-8 w-8 text-blue-500" />,
    name: 'Engineering',
    description:
      'Modern engineering programs to build, create, and join the digital revolution.',
  },
  {
    icon: <Briefcase className="h-8 w-8 text-green-500" />,
    name: 'Business',
    description:
      'Easy domain registration, transfer, and secured DNS management for your startup.',
  },
  {
    icon: <Landmark className="h-8 w-8 text-purple-500" />,
    name: 'Law',
    description:
      'Unified legal studies solution built for all aspiring professionals.',
  },
  {
    icon: <Briefcase className="h-8 w-8 text-red-500" />,
    name: 'Research Studio',
    description: 'Cloud-based qualitative data analysis tool for scholars.',
  },
];

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const [activeCategory, setActiveCategory] = React.useState('Recent Launches');

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-16 left-0 right-0 bottom-0 z-40 bg-black/50" onClick={onClose}>
      <div
        className="fixed top-16 left-0 right-0 z-50 bg-white shadow-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="container mx-auto max-w-screen-2xl">
          <div className="border-b">
            <div className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center space-x-8 text-sm font-medium">
                    <button className="text-primary border-b-2 border-primary pb-1">Apps</button>
                    <button className="text-muted-foreground hover:text-foreground">Suites</button>
                    <button className="text-muted-foreground hover:text-foreground">Zoho One</button>
                    <button className="text-muted-foreground hover:text-foreground">Marketplace</button>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="#" className="text-sm font-medium text-primary hover:underline">EXPLORE ALL PRODUCTS <ArrowRight className="inline h-4 w-4" /></Link>
                    <Button variant="ghost" size="icon" onClick={onClose}>
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close menu</span>
                    </Button>
                </div>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <aside className="col-span-3 border-r p-6">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="I'm looking for..." className="pl-9" />
              </div>
              <nav className="flex flex-col space-y-1">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      'w-full text-left p-2 rounded-md text-sm font-medium',
                      activeCategory === category
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:bg-gray-100'
                    )}
                  >
                    {category}
                  </button>
                ))}
              </nav>
               <Button className="w-full mt-6">EXPLORE ALL PRODUCTS</Button>
            </aside>
            <main className="col-span-9 p-8 bg-gray-50/50 h-[calc(100vh-129px)] overflow-y-auto">
              <h2 className="text-xl font-semibold mb-6">Recent Launches</h2>
              <div className="grid grid-cols-2 gap-6">
                {recentLaunches.map((item) => (
                  <Card key={item.name} className="p-6 flex flex-col items-start gap-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3">
                        {item.icon}
                        <h3 className="text-lg font-bold">{item.name}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm flex-grow">{item.description}</p>
                    <Link href="#" className="text-sm font-semibold text-primary flex items-center gap-1">
                        TRY NOW <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Card>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
