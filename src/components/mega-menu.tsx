
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

const coursesByCollege = {
    "EGS Pillay Engineering College": {
      "Undergraduate": [
        "B.E – Mechanical Engineering",
        "B.E – Electronics and Communication Engineering",
        "B.E – Electrical & Electronics Engineering",
        "B.E – Computer Science & Engineering",
        "B.Tech – Information Technology",
        "B.E – Civil Engineering",
        "B.E – Bio-Medical Engineering",
        "B.Tech – Computer Science & Business Systems",
        "B.Tech – Artificial Intelligence and Data Science",
      ],
      "Postgraduate": [
        "M.E (Computer Science and Engineering)",
        "M.E (Communication Systems)",
        "M.E (Manufacturing Engineering)",
        "M.E (Power Electronics and Drives)",
        "M.E (Environmental Engineering)",
        "MCA – Master of Computer Applications",
        "MBA – Master of Business Administration",
      ],
    },
    "E.G.S.Pillay Arts and Science College": {
      "Undergraduate": [
        "B.A – Tamil",
        "B.A – English",
        "B.A – Defence & Strategic Studies",
        "B.Com",
        "B.Com – Computer Application",
        "B.Com – Business Process Service",
        "B.B.A",
        "B.C.A",
        "B.Sc – Computer Science",
        "B.Sc- Computer Science Cognitive Systems",
        "B.Sc- Information Technology",
        "B.Sc – Visual Communication",
        "B.Sc – Fashion Tech. & Costume Designing",
        "B.Sc – Physics",
        "B.Sc – Maths",
        "B.Sc- Chemistry",
        "B.Sc – Bio Chemistry",
        "B.Sc – Bio Technology",
        "B.Sc – Nutrition & Dietetics",
        "B.Sc – Hospital Administration",
        "B.Sc- Artificial Intelligence and Machine Learning",
        "B.Sc – Data Science",
        "B.Sc – Microbiology",
        "B.Com – Professional Accounting",
      ],
      "Postgraduate": [
        "M.Com",
        "M.B.A",
        "M.A – English",
        "M.Sc – Computer Science",
        "M.Sc – Information Technology",
        "M.Sc – Physics",
        "M.Sc – Maths",
        "M.Sc – Chemistry",
        "M.Sc – Bio Chemistry",
        "M.Sc – Bio Technology",
        "M.Sc – Food Science & Nutrition",
      ],
    },
    "E.G.S.Pillay Polytechnic College": {
      "Diploma": [
        "Diploma in Mechanical Engineering",
        "Diploma in Civil Engineering",
        "Diploma in Electrical and Electronics Engineering",
        "Diploma in Electronics and Communication Engineering",
        "Diploma in Computer Engineering",
      ],
    },
    "E.G.S. Pillay College and School of Nursing": {
      "Courses": [
        "B.Sc – Nursing",
        "DGNM – (Diploma in General Nursing & Midwifery)",
      ],
    },
    "E.G.S.Pillay College of Education": { "Courses": ["All Subjects"] },
    "E.G.S. Pillay College of Pharmacy": {
      "Courses": ["D.Pharm", "B.Pharm", "M.Pharm", "Pharm.D"],
    },
};

type CollegeName = keyof typeof coursesByCollege;


const topNavItems = [
    'EGS Pillay Engineering College',
    'E.G.S.Pillay Arts and Science College', 
    'E.G.S.Pillay Polytechnic College', 
    'E.G.S. Pillay College of Pharmacy', 
    'E.G.S. Pillay College and School of Nursing', 
];

const categoryMap: Record<string, string> = {
    'Undergraduate': 'UG',
    'Postgraduate': 'PG',
    'Diploma': 'Diploma',
    'Doctoral': 'PhD - Doctoral',
    'Curriculum': 'Curriculum',
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
    if (lowerName.includes('b.sc') || lowerName.includes('m.sc')) {
        return <Landmark className="h-8 w-8 text-red-500" />;
    }
    return <BookOpen className="h-8 w-8 text-gray-500" />;
  };

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const [activeTopNav, setActiveTopNav] = React.useState<CollegeName>(topNavItems[0] as CollegeName);
  const [activeCategory, setActiveCategory] = React.useState('UG');

  if (!isOpen) {
    return null;
  }

  const collegePrograms = coursesByCollege[activeTopNav] || {};
  const availableCategories = Object.keys(collegePrograms)
    .map(cat => categoryMap[cat] || cat)
    .filter(Boolean)
    .sort((a, b) => {
        const order = ['UG', 'PG', 'Diploma', 'PhD - Doctoral', 'Curriculum', 'Courses'];
        return order.indexOf(a) - order.indexOf(b);
    });

  const invertedCategoryMap = Object.entries(categoryMap).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
  }, {} as Record<string, string>);

  const selectedOriginalCategory = invertedCategoryMap[activeCategory] || activeCategory;
  const activePrograms = (collegePrograms[selectedOriginalCategory as keyof typeof collegePrograms] || []) as string[];

  // Set first available category as active if current is not available
  React.useEffect(() => {
    if (availableCategories.length > 0 && !availableCategories.includes(activeCategory)) {
        setActiveCategory(availableCategories[0]);
    }
  }, [activeTopNav, availableCategories, activeCategory]);

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
                          onClick={() => setActiveTopNav(item as CollegeName)}
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
                    {category}
                  </button>
                ))}
              </nav>
               <Button className="w-full mt-6">ALL PROGRAMS</Button>
            </aside>
            <main className="col-span-9 p-8 bg-gray-50/50 h-[calc(100vh-160px)] overflow-y-auto">
              <h2 className="text-xl font-semibold mb-6">{selectedOriginalCategory} Programs in {activeTopNav.replace('E.G.S.Pillay ', '').replace('EGS Pillay ', '')}</h2>
              {activePrograms.length > 0 ? (
                <div className="grid grid-cols-2 gap-6">
                  {activePrograms.map((programName) => (
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
