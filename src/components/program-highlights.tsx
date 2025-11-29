
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

const programs = [
  {
    title: 'B.E. Computer Science',
    description: 'Master the art of software development, AI, and cybersecurity with our cutting-edge curriculum.',
  },
  {
    title: 'B.Tech Information Tech',
    description: 'Bridge the gap between technology and business, focusing on data management and network solutions.',
  },
  {
    title: 'B.Sc. Data Science',
    description: 'Unlock insights from data. Learn machine learning, statistical modeling, and big data analytics.',
  },
];

export function ProgramHighlights() {
  return (
    <section className="w-full bg-secondary/50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">Flagship Programs</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            A glimpse into some of our most sought-after degree programs designed for industry success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card key={program.title} className="flex flex-col shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{program.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Know More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
