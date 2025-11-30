'use client';

import { Mail, MapPin, Phone } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="bg-primary/95 dark:bg-slate-900 w-full">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline leading-tight mb-4">
              We'd love to Hear From You.
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg mx-auto md:mx-0">
              Reach out to us with any questions. Or just reach out manually to{' '}
              <a
                href="mailto:contact@egs.edu"
                className="font-semibold underline hover:text-white"
              >
                contact@egs.edu
              </a>
            </p>
            <a
              href="#apply"
              className="inline-block px-8 py-3 bg-white text-primary hover:bg-white/90 transition-all rounded-md font-bold uppercase text-sm mt-2"
            >
              Get The Guide
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-white">
            <div className="flex gap-4 items-start">
                 <div className="bg-accent/80 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                </div>
              <div>
                <h3 className="text-xl font-bold font-headline">Call Us Directly</h3>
                <p className="text-primary-foreground/80 mb-2">Available during working hours.</p>
                <p className="font-semibold">(+1) 234 - 4567 - 789</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
                <div className="bg-accent/80 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                </div>
              <div>
                <h3 className="text-xl font-bold font-headline">Email Support</h3>
                <p className="text-primary-foreground/80 mb-2">Our team can respond in real time.</p>
                <a href="mailto:support@egs.edu" className="font-semibold hover:underline">
                  support@egs.edu
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-start sm:col-span-2 justify-center">
                <div className="bg-accent/80 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                </div>
              <div>
                <h3 className="text-xl font-bold font-headline">Visit Our Office</h3>
                <p className="text-primary-foreground/80 mb-2">Visit our location in real life.</p>
                <p className="font-semibold">
                  123 University Ave, Knowledge City
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
