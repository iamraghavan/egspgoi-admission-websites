import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Priya Sharma',
    role: 'B.Tech Graduate, 2023',
    quote: 'The faculty and infrastructure at EGS are second to none. I felt supported throughout my journey and landed my dream job right after graduation.',
  },
  {
    id: 'testimonial-3', // using testimonial-3 for image mapping
    name: 'Dr. Arjun Mehta',
    role: 'Professor, Dept. of Computer Science',
    quote: "Our curriculum is designed to be industry-relevant, empowering students with practical skills. It's a joy to see them succeed.",
  },
  {
    id: 'testimonial-2', // using testimonial-2 for image mapping
    name: 'Rahul Verma',
    role: 'Final Year, B.Sc. Data Science',
    quote: 'The hands-on projects and internship opportunities have been invaluable. I feel confident and prepared for my career in data analytics.',
  },
];

export function TestimonialSlider() {
  const imageMap = new Map(PlaceHolderImages.map(p => [p.id, p]));

  return (
    <section id="testimonials" className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Voices of EGS</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Hear from our students and faculty about their experience.
          </p>
        </div>
        <Carousel
          opts={{ align: 'start', loop: true }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => {
              const image = imageMap.get(testimonial.id);
              return (
                <CarouselItem key={testimonial.id} className="md:basis-1/2">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col shadow-lg">
                      <CardContent className="flex flex-col flex-grow items-center justify-center p-6 text-center">
                        <blockquote className="text-muted-foreground italic mb-6 flex-grow">"{testimonial.quote}"</blockquote>
                        <div className="flex items-center justify-center gap-4">
                          {image && (
                            <Avatar>
                              <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint} />
                              <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                          )}
                          <div>
                            <p className="font-semibold font-headline">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
