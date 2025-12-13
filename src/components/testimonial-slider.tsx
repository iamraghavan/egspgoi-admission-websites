
'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { generateTestimonials } from '@/ai/flows/generate-testimonial-flow';

type Alumni = {
  profile_id: string;
  name: string;
  department: string;
  institution: string;
  profile_image: string | null;
};

type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
};

const fallbackTestimonials: Testimonial[] = [
    { id: '1', name: 'Priya Kumar', role: 'Computer Science, EGS Pillay Engineering College', quote: 'A truly transformative experience that prepared me for my career. The faculty support was outstanding.' },
    { id: '2', name: 'Arjun Reddy', role: 'Mechanical Engineering, EGS Pillay Engineering College', quote: 'The hands-on projects and state-of-the-art labs gave me the confidence to excel in the industry.' },
    { id: '3', name: 'Sneha Sharma', role: 'B.Com, EGS Pillay Arts and Science College', quote: 'I am grateful for the holistic education I received. It was a perfect blend of academics and extracurriculars.' },
    { id: '4', name: 'Vikram Singh', role: 'M.B.A, EGS Pillay Arts and Science College', quote: 'The MBA program sharpened my leadership skills and provided me with an invaluable network of peers and mentors.' },
    { id: '5', name: 'Ananya Gupta', role: 'Civil Engineering, EGS Pillay Polytechnic College', quote: 'The practical skills I learned here were instrumental in securing my first job even before I graduated.' },
    { id: '6', name: 'Rohan Mehta', role: 'B.Sc Nursing, EGS Pillay College of Nursing', quote: 'The clinical exposure and compassionate mentorship from the faculty were second to none. I feel well-prepared for my nursing career.' },
];

const TestimonialCard = ({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) => {
  return (
    <div className="p-10 rounded-3xl border bg-card text-card-foreground shadow-lg shadow-primary/10 max-w-xs w-full">
      <div className="flex-grow">"{quote}"</div>
      <div className="flex items-center gap-2 mt-5">
        <div className="flex flex-col">
          <div className="font-medium tracking-tight leading-5 text-foreground">
            {name}
          </div>
          <div className="leading-5 opacity-60 tracking-tight text-muted-foreground">
            {role}
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
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
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map((testimonial, i) => (
              <TestimonialCard
                key={i}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
              />
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export function TestimonialSlider() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlumniAndGenerateTestimonials = async () => {
      try {
        const response = await fetch(
          'https://alumni.egspgroup.in/api/alumni?auth=raghavan&key=1407'
        );
        if (!response.ok) {
            throw new Error('Failed to fetch alumni data.');
        }
        const data = await response.json();
        const alumniData: Alumni[] = data.data.slice(0, 6); // Limit to 6 for 3 columns of 2

        const alumniForGeneration = alumniData.map(alumnus => ({
            id: alumnus.profile_id,
            name: alumnus.name,
            department: alumnus.department,
            institution: alumnus.institution,
        }));
        
        const result = await generateTestimonials({ alumni: alumniForGeneration });
        
        if (!result || !result.testimonials || result.testimonials.length === 0) {
            throw new Error("Testimonial generation returned no results.");
        }

        const generatedQuotesMap = new Map(result.testimonials.map(t => [t.id, t.quote]));

        const combinedTestimonials = alumniData.map(alumnus => ({
            id: alumnus.profile_id,
            name: alumnus.name,
            role: `${alumnus.department}, ${alumnus.institution.replace('E.G.S.Pillay ', '')}`,
            quote: generatedQuotesMap.get(alumnus.profile_id) || 'A truly transformative experience that prepared me for my career.',
        }));

        setTestimonials(combinedTestimonials);
      } catch (error) {
        console.error('Failed to fetch or generate testimonials:', error);
        // Fallback for testimonials if API fails or rate limit is exceeded
        setTestimonials(fallbackTestimonials);
      } finally {
        setLoading(false);
      }
    };

    fetchAlumniAndGenerateTestimonials();
  }, []);

  const firstColumn = testimonials.slice(0, 2);
  const secondColumn = testimonials.slice(2, 4);
  const thirdColumn = testimonials.slice(4, 6);

  return (
    <section
      id="testimonials"
      className="bg-background py-16 md:py-24 relative"
    >
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-headline bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
            Voices of EGSP&apos;ians
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            See what our students and faculty have to say about us.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center mt-10">
            <p>Loading testimonials...</p>
          </div>
        ) : (
          <div className="relative flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn
              testimonials={secondColumn}
              className="hidden md:block"
              duration={19}
            />
            <TestimonialsColumn
              testimonials={thirdColumn}
              className="hidden lg:block"
              duration={17}
            />
          </div>
        )}
      </div>
    </section>
  );
}
