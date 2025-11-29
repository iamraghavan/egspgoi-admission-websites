
import { Card, CardContent } from '@/components/ui/card';
import { Code, Atom, Landmark, Briefcase } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Category {
  name: string;
  icon: LucideIcon;
}

const categories: Category[] = [
  { name: 'Engineering', icon: Code },
  { name: 'Arts & Science', icon: Atom },
  { name: 'Law', icon: Landmark },
  { name: 'Business', icon: Briefcase },
];

export function ProgramCategories() {
  return (
    <section id="programs" className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">Explore Our Program Categories</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Find the perfect path for your passion across a diverse range of disciplines.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category) => (
            <Card
              key={category.name}
              className="group transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-xl"
            >
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <div className="mb-4 p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                  <category.icon className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-lg font-semibold font-headline">{category.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
