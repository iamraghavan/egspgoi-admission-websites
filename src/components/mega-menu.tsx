
'use client';

import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { ArrowRight, BookOpen, Briefcase, Code, Landmark, Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import coursesByCollege from '@/app/assets/docs/college-courses.json';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

type CollegeName = keyof typeof coursesByCollege;


const topNavItems = [
    'EGS Pillay Engineering College',
    'E.G.S.Pillay Arts and Science College', 
    'E.G.S.Pillay Polytechnic College', 
    'E.G.S. Pillay College of Pharmacy', 
    'E.G.S. Pillay College and School of Nursing',
    'E.G.S. Pillay Naturopathy and Yoga Medical College',
];

const categoryMap: Record<string, string> = {
    'Undergraduate': 'Undergraduate',
    'Postgraduate': 'Postgraduate',
    'Diploma': 'Diploma',
    'PhD - Doctoral': 'PhD - Doctoral',
    'Curriculum': 'Curriculum',
    'Courses': 'Courses'
};

const ProgramIcon = ({ name }: { name: string }) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('computer') || lowerName.includes('tech') || lowerName.includes('mca')) {
      return <Code className="h-8 w-8 text-blue-500" />;
    }
    if (lowerName.includes('b.a') || lowerName.includes('m.a') || lowerName.includes('b.com')) {
      return <BookOpen className="h-8 w-8 text-purple-500" />;
    }
    if (lowerName.includes('b.b.a') || lowerName.includes('mba')) {
        return <Briefcase className="h-8 w-8 text-green-500" />;
    }
    if (lowerName.includes('b.sc') || lowerName.includes('m.sc') || lowerName.includes('naturopathy')) {
        return <Landmark className="h-8 w-8 text-red-500" />;
    }
    return <BookOpen className="h-8 w-8 text-gray-500" />;
  };

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const [activeTopNav, setActiveTopNav] = React.useState<CollegeName>(topNavItems[0] as CollegeName);
  const [activeCategory, setActiveCategory] = React.useState('Undergraduate');
  const [searchQuery, setSearchQuery] = React.useState('');

  const collegePrograms = coursesByCollege[activeTopNav] || {};
  
  const availableCategories = Object.keys(collegePrograms)
    .sort((a, b) => {
        const order = ['Undergraduate', 'Postgraduate', 'Diploma', 'PhD - Doctoral', 'Curriculum', 'Courses'];
        const aIndex = order.indexOf(a) !== -1 ? order.indexOf(a) : order.length;
        const bIndex = order.indexOf(b) !== -1 ? order.indexOf(b) : order.length;
        return aIndex - bIndex;
    });

  // Set first available category as active if current is not available
  React.useEffect(() => {
    if (isOpen) {
        const firstCategory = availableCategories.length > 0 ? availableCategories[0] : '';
        if (!availableCategories.includes(activeCategory)) {
            setActiveCategory(firstCategory);
        }
    }
  }, [isOpen, activeTopNav, availableCategories, activeCategory]);

  if (!isOpen) {
    return null;
  }

  const selectedPrograms = (activeCategory && collegePrograms[activeCategory as keyof typeof collegePrograms]) ? (collegePrograms[activeCategory as keyof typeof collegePrograms] as string[]) : [];
  
  const filteredPrograms = selectedPrograms.filter(program =>
    program.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-black/50" onClick={onClose}>
      <div
        className="fixed top-24 left-0 right-0 z-50 bg-white shadow-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="container mx-auto max-w-screen-2xl">
          <div className="border-b">
            <div className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center space-x-6 text-sm font-medium overflow-x-auto pb-2">
                    {topNavItems.map((item) => (
                        <button
                          key={item}
                          onClick={() => {
                            setActiveTopNav(item as CollegeName);
                            setSearchQuery('');
                          }}
                          className={cn(
                            'whitespace-nowrap pb-1 border-b-2 transition-colors duration-200',
                            activeTopNav === item
                              ? 'text-primary border-primary'
                              : 'text-muted-foreground border-transparent hover:text-accent hover:border-accent'
                          )}
                        >
                          {item.replace('E.G.S.Pillay ', '').replace('EGS Pillay ', '').replace(' College', '').replace(' and', ' &')}
                        </button>
                    ))}
                </div>
                <div className="flex items-center space-x-4 pl-4">
                    <Link href="#" className="text-sm font-medium text-primary hover:underline whitespace-nowrap">ALL INSTITUTIONS <ArrowRight className="inline h-4 w-4" /></Link>
                    <Button variant="ghost" size="icon" onClick={onClose}>
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                    </Button>
                </div>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <aside className="col-span-3 border-r p-6">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="I'm looking for..." 
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <nav className="flex flex-col space-y-1">
                {availableCategories.map((category) => (
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
                    {categoryMap[category] || category}
                  </button>
                ))}
              </nav>
               <Button className="w-full mt-6">ALL PROGRAMS</Button>
            </aside>
            <main className="col-span-9 p-8 bg-gray-50/50 h-[calc(100vh-160px)] overflow-y-auto">
              <h2 className="text-xl font-semibold mb-6">{activeCategory} Programs in {activeTopNav.replace('E.G.S.Pillay ', '').replace('EGS Pillay ', '')}</h2>
              {filteredPrograms.length > 0 ? (
                <div className="grid grid-cols-2 gap-6">
                  {filteredPrograms.map((programName) => (
                    <Card key={programName} className="p-6 flex flex-col items-start gap-4 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-3">
                          <ProgramIcon name={programName} />
                          <h3 className="text-lg font-bold">{programName}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm flex-grow">Explore our comprehensive {programName} program, designed to equip you with industry-relevant skills.</p>
                      <Link href="#" className="text-sm font-semibold text-primary flex items-center gap-1">
                          LEARN MORE <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-muted-foreground">
                    {searchQuery ? `No programs found for "${searchQuery}".` : 'No programs available for this category yet.'}
                  </p>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
