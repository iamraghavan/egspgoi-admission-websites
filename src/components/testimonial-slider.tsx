'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Priya Sharma',
    role: 'B.Tech Graduate, 2023',
    quote:
      'The faculty and infrastructure at EGS are second to none. I felt supported throughout my journey and landed my dream job right after graduation.',
  },
  {
    id: 'testimonial-3',
    name: 'Dr. Arjun Mehta',
    role: 'Professor, Dept. of Computer Science',
    quote:
      "Our curriculum is designed to be industry-relevant, empowering students with practical skills. It's a joy to see them succeed.",
  },
  {
    id: 'testimonial-2',
    name: 'Rahul Verma',
    role: 'Final Year, B.Sc. Data Science',
    quote:
      'The hands-on projects and internship opportunities have been invaluable. I feel confident and prepared for my career in data analytics.',
  },
  {
    id: 'testimonial-2',
    name: 'Sana Sheikh',
    role: 'Sales Manager',
    quote: 'They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.',
  },
  {
    id: 'testimonial-1',
    name: 'Hassan Ali',
    role: 'E-commerce Manager',
    quote: 'Using this ERP, our online presence and conversions significantly improved, boosting business performance.',
   },
   {
    id: 'testimonial-3',
    name: 'Aliza Khan',
    role: 'Business Analyst',
    quote: 'The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.',
   },
];

const imageMap = new Map(PlaceHolderImages.map((p) => [p.id, p]));

const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 4);
const thirdColumn = testimonials.slice(4, 6);

const TestimonialCard = ({
  quote,
  name,
  role,
  id,
}: {
  quote: string;
  name: string;
  role: string;
  id: string;
}) => {
  const image = imageMap.get(id);
  return (
    <div className="p-10 rounded-3xl border bg-card text-card-foreground shadow-lg shadow-primary/10 max-w-xs w-full">
      <div className='flex-grow'>"'{quote}'"</div>
      <div className="flex items-center gap-2 mt-5">
        {image && (
            <img
                width={40}
                height={40}
                src={image.imageUrl}
                alt={name}
                className="h-10 w-10 rounded-full object-cover"
                data-ai-hint={image.imageHint}
            />
        )}
        <div className="flex flex-col">
          <div className="font-medium tracking-tight leading-5 text-foreground">{name}</div>
          <div className="leading-5 opacity-60 tracking-tight text-muted-foreground">{role}</div>
        </div>
      </div>
    </div>
  );
};


const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: '-50%',
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2).fill(0)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map((testimonial, i) => (
              <TestimonialCard {...testimonial} key={i} />
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};


export function TestimonialSlider() {
  return (
    <section id="testimonials" className="bg-background py-16 md:py-24 relative">
       <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center"
        >
            <h2 className="text-3xl md:text-4xl font-bold font-headline bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
                Voices of EGSpians
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                See what our students and faculty have to say about us.
            </p>
        </motion.div>

         <div className="relative flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};
