'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { generateTestimonial } from '@/ai/flows/generate-testimonial-flow';

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
  image: string;
  imageHint: string;
};

const imageMap = new Map(PlaceHolderImages.map((p) => [p.id, p]));

const TestimonialCard = ({
  quote,
  name,
  role,
  image,
  imageHint,
}: {
  quote: string;
  name: string;
  role: string;
  image: string;
  imageHint: string;
}) => {
  return (
    <div className="p-10 rounded-3xl border bg-card text-card-foreground shadow-lg shadow-primary/10 max-w-xs w-full">
      <div className="flex-grow">"{quote}"</div>
      <div className="flex items-center gap-2 mt-5">
        <img
          width={40}
          height={40}
          src={image}
          alt={name}
          className="h-10 w-10 rounded-full object-cover"
          data-ai-hint={imageHint}
        />
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
                image={testimonial.image}
                imageHint={testimonial.imageHint}
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
        const data = await response.json();
        const alumniData: Alumni[] = data.data.slice(0, 9); // Limit to 9 for 3 columns

        const generatedTestimonials = await Promise.all(
          alumniData.map(async (alumnus, index) => {
            const quote = await generateTestimonial({
              name: alumnus.name,
              department: alumnus.department,
              institution: alumnus.institution,
            });

            // Use placeholder images as profile images are null
            const placeholderId = `testimonial-${(index % 3) + 1}`;
            const placeholder = imageMap.get(placeholderId);

            return {
              id: alumnus.profile_id,
              name: alumnus.name,
              role: `${alumnus.department}, ${alumnus.institution.replace('E.G.S.Pillay ', '')}`,
              quote,
              image: placeholder?.imageUrl || 'https://picsum.photos/seed/1/40/40',
              imageHint: placeholder?.imageHint || 'student avatar'
            };
          })
        );
        setTestimonials(generatedTestimonials);
      } catch (error) {
        console.error('Failed to fetch or generate testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlumniAndGenerateTestimonials();
  }, []);

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

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
