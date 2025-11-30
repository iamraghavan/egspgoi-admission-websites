
'use client';

import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { ArrowRight, BookOpen, Briefcase, Code, Landmark, Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const topNavItems = [
    'Engineering', 
    'Arts & Science', 
    'Polytechnic', 
    'Pharmacy', 
    'Nursing', 
    'BNYS', 
    'International School', 
    'Metriculation School',
];

const categories = [
  'Undergraduate',
  'Integrated Degree',
  'Postgraduate',
  'Doctoral',
  'Fellowship',
  'Certificate',
  'Online Programs',
  'Curriculum',
];

const programsByCategory = {
    'Undergraduate': [
      {
        icon: <Code className="h-8 w-8 text-blue-500" />,
        name: 'B.E. Computer Science',
        description:
          'Master the art of software development, AI, and cybersecurity with our cutting-edge curriculum.',
      },
      {
        icon: <Briefcase className="h-8 w-8 text-green-500" />,
        name: 'B.Tech Information Technology',
        description:
          'Bridge the gap between technology and business, focusing on data management and network solutions.',
      },
      {
        icon: <BookOpen className="h-8 w-8 text-purple-500" />,
        name: 'B.Sc. Data Science',
        description:
          'Unlock insights from data. Learn machine learning, statistical modeling, and big data analytics.',
      },
      {
        icon: <Landmark className="h-8 w-8 text-red-500" />,
        name: 'B.A. English Literature',
        description: 'Explore the world of literature, from classic to contemporary works.',
      },
    ],
    'Integrated Degree': [
        {
            icon: <Code className="h-8 w-8 text-blue-500" />,
            name: 'Integrated M.Sc. Software Systems',
            description: 'A 5-year course combining undergraduate and postgraduate studies in software systems.',
        },
    ],
    'Postgraduate': [
      {
        icon: <Code className="h-8 w-8 text-blue-500" />,
        name: 'M.E. Software Engineering',
        description: 'Advanced studies in software design, development, and project management.',
      },
      {
        icon: <BookOpen className="h-8 w-8 text-purple-500" />,
        name: 'M.Sc. Artificial Intelligence',
        description: 'Specialize in AI, machine learning, and neural networks with this postgraduate degree.',
      },
    ],
    'Doctoral': [
        {
            icon: <BookOpen className="h-8 w-8 text-purple-500" />,
            name: 'Ph.D. in Computer Science',
            description: 'Conduct cutting-edge research in various areas of computer science.',
        },
    ],
    'Fellowship': [],
    'Certificate': [],
    'Online Programs': [],
    'Curriculum': [],
};


export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const [activeCategory, setActiveCategory] = React.useState(categories[0]);
  const [activeTopNav, setActiveTopNav] = React.useState(topNavItems[0]);

  if (!isOpen) {
    return null;
  }

  const activePrograms = programsByCategory[activeCategory as keyof typeof programsByCategory] || [];

  return (
    <div className="fixed top-16 left-0 right-0 bottom-0 z-40 bg-black/50" onClick={onClose}>
      <div
        className="fixed top-16 left-0 right-0 z-50 bg-white shadow-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="container mx-auto max-w-screen-2xl">
          <div className="border-b">
            <div className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center space-x-6 text-sm font-medium overflow-x-auto pb-2">
                    {topNavItems.map((item) => (
                        <button
                          key={item}
                          onClick={() => setActiveTopNav(item)}
                          className={cn(
                            'whitespace-nowrap pb-1 border-b-2 transition-colors duration-200',
                            activeTopNav === item
                              ? 'text-primary border-primary'
                              : 'text-muted-foreground border-transparent hover:text-accent hover:border-accent'
                          )}
                        >
                          {item}
                        </button>
                    ))}
                </div>
                <div className="flex items-center space-x-4 pl-4">
                    <Link href="#" className="text-sm font-medium text-primary hover:underline whitespace-nowrap">ALL INSTITUTIONS <ArrowRight className="inline h-4 w-4" /></Link>
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
               <Button className="w-full mt-6">ALL INSTITUTIONS</Button>
            </aside>
            <main className="col-span-9 p-8 bg-gray-50/50 h-[calc(100vh-129px)] overflow-y-auto">
              <h2 className="text-xl font-semibold mb-6">{activeCategory} Programs</h2>
              {activePrograms.length > 0 ? (
                <div className="grid grid-cols-2 gap-6">
                  {activePrograms.map((item) => (
                    <Card key={item.name} className="p-6 flex flex-col items-start gap-4 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-3">
                          {item.icon}
                          <h3 className="text-lg font-bold">{item.name}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm flex-grow">{item.description}</p>
                      <Link href="#" className="text-sm font-semibold text-primary flex items-center gap-1">
                          LEARN MORE <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-muted-foreground">No programs available for this category yet.</p>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
