
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
    'E.G.S. Pillay Engineering College',
    'Edayathangudy G. S. Pillay Arts & Science College',
    'EGS Pillay Polytechnic College',
    'EGS Pillay College of Pharmacy',
    'EGS Pillay School & College of Nursing',
    'EGS Pillay Naturopathy & Yoga Medical College',
];

const categoryMap: Record<string, string> = {
    'UG': 'Undergraduate',
    'PG': 'Postgraduate',
    'Diploma': 'Diploma',
    'Ph.D': 'Ph.D - Doctoral',
    'Doctorate': 'Doctorate',
    'School': 'School',
};

const ProgramIcon = ({ name }: { name: string }) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('computer') || lowerName.includes('tech') || lowerName.includes('mca') || lowerName.includes('b.c.a') || lowerName.includes('b.sc')) {
      return <Code className="h-8 w-8 text-blue-500" />;
    }
    if (lowerName.includes('b.a') || lowerName.includes('m.a') || lowerName.includes('b.com') || lowerName.includes('m.com')) {
      return <BookOpen className="h-8 w-8 text-purple-500" />;
    }
    if (lowerName.includes('b.b.a') || lowerName.includes('mba')) {
        return <Briefcase className="h-8 w-8 text-green-500" />;
    }
    if (lowerName.includes('naturopathy') || lowerName.includes('nursing') || lowerName.includes('pharmacy') || lowerName.includes('b.ed')) {
        return <Landmark className="h-8 w-8 text-red-500" />;
    }
    return <BookOpen className="h-8 w-8 text-gray-500" />;
  };

type SearchResult = {
    college: CollegeName;
    category: string;
    program: string;
};

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const [activeTopNav, setActiveTopNav] = React.useState<CollegeName>(topNavItems[0] as CollegeName);
  const [activeCategory, setActiveCategory] = React.useState('UG');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState<SearchResult[]>([]);

  const collegePrograms = coursesByCollege[activeTopNav] || {};
  
  const availableCategories = Object.keys(collegePrograms)
    .sort((a, b) => {
        const order = ['UG', 'PG', 'Diploma', 'Ph.D', 'Doctorate', 'School'];
        const aIndex = order.indexOf(a) !== -1 ? order.indexOf(a) : order.length;
        const bIndex = order.indexOf(b) !== -1 ? order.indexOf(b) : order.length;
        return aIndex - bIndex;
    });

  React.useEffect(() => {
    if (isOpen) {
        const firstCategory = availableCategories.length > 0 ? availableCategories[0] : '';
        if (!availableCategories.includes(activeCategory)) {
            setActiveCategory(firstCategory);
        }
    }
  }, [isOpen, activeTopNav, availableCategories, activeCategory]);

  React.useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const allPrograms: SearchResult[] = [];
    for (const collegeName in coursesByCollege) {
        const college = coursesByCollege[collegeName as CollegeName];
        for (const categoryName in college) {
            const programs = college[categoryName as keyof typeof college] as string[];
            programs.forEach(programName => {
                if (programName.toLowerCase().includes(searchQuery.toLowerCase()) || collegeName.toLowerCase().includes(searchQuery.toLowerCase())) {
                    allPrograms.push({
                        college: collegeName as CollegeName,
                        category: categoryName,
                        program: programName,
                    });
                }
            });
        }
    }
    setSearchResults(allPrograms);
  }, [searchQuery]);

  if (!isOpen) {
    return null;
  }

  const selectedPrograms = (activeCategory && collegePrograms[activeCategory as keyof typeof collegePrograms]) ? (collegePrograms[activeCategory as keyof typeof collegePrograms] as string[]) : [];
  
  const filteredPrograms = selectedPrograms.filter(program =>
    program.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const searchResultsByCollege = searchResults.reduce((acc, result) => {
    if (!acc[result.college]) {
      acc[result.college] = [];
    }
    acc[result.college].push(result);
    return acc;
  }, {} as Record<CollegeName, SearchResult[]>);

  const isSearching = searchQuery.trim() !== '';

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
                    {!isSearching && topNavItems.map((item) => (
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
                          {item.replace('E.G.S. Pillay ', '').replace('EGS Pillay ', '').replace('Edayathangudy G. S. Pillay ', '').replace(' College', '').replace(' and', ' &').replace('School &', '')}
                        </button>
                    ))}
                    {isSearching && (
                        <div className="text-primary font-medium">Search Results</div>
                    )}
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
                  placeholder="Search courses or colleges..." 
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              {!isSearching && (
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
              )}
               <Button className="w-full mt-6">ALL PROGRAMS</Button>
            </aside>
            <main className="col-span-9 p-8 bg-gray-50/50 h-[calc(100vh-160px)] overflow-y-auto">
              {isSearching ? (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Found {searchResults.length} results for "{searchQuery}"</h2>
                  {Object.keys(searchResultsByCollege).length > 0 ? (
                    <div className="space-y-8">
                      {Object.entries(searchResultsByCollege).map(([college, programs]) => (
                        <div key={college}>
                          <h3 className="text-lg font-bold mb-4 text-primary">{college.replace('E.G.S. Pillay ', '').replace('EGS Pillay ', '').replace('Edayathangudy G. S. Pillay ', '')}</h3>
                          <div className="grid grid-cols-2 gap-6">
                            {programs.map((result) => (
                              <Card key={`${result.college}-${result.program}`} className="p-6 flex flex-col items-start gap-4 hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-3">
                                    <ProgramIcon name={result.program} />
                                    <div>
                                        <h4 className="text-lg font-bold">{result.program}</h4>
                                        <p className="text-xs text-muted-foreground">{categoryMap[result.category] || result.category}</p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground text-sm flex-grow">Explore our comprehensive {result.program} program, designed to equip you with industry-relevant skills.</p>
                                <Link href="#" className="text-sm font-semibold text-primary flex items-center gap-1">
                                    LEARN MORE <ArrowRight className="h-4 w-4" />
                                </Link>
                              </Card>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <p className="text-muted-foreground">
                        No programs or colleges found for "{searchQuery}".
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-semibold mb-6">{categoryMap[activeCategory] || activeCategory} Programs in {activeTopNav.replace('E.G.S. Pillay ', '').replace('EGS Pillay ', '').replace('Edayathangudy G. S. Pillay ', '')}</h2>
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
                        No programs available for this category yet.
                      </p>
                    </div>
                  )}
                </>
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

    