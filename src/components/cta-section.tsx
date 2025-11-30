
'use client';

import { Mail, MapPin, Phone } from 'lucide-react';

const contactInfo = {
  call: [
    {
      label: 'Admissions',
      number: '(+1) 234 - 4567 - 789',
    },
    {
      label: 'General',
      number: '(+1) 987 - 6543 - 210',
    },
  ],
  email: [
    {
      label: 'Support',
      address: 'support@egs.edu',
    },
    {
      label: 'Admissions',
      address: 'admissions@egs.edu',
    },
  ],
  visit: {
    address: '123 University Ave, Knowledge City',
  },
};

export function CtaSection() {
  return (
    <section className="bg-gradient-to-r from-primary to-accent w-full">
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
              Contact Us
            </a>
          </div>

          <div className="space-y-8 text-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4 items-start">
                <div className="bg-accent/80 p-3 rounded-full shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-headline">Call Us</h3>
                  <p className="text-primary-foreground/80 mb-2">Available during working hours.</p>
                  <div className="space-y-1">
                    {contactInfo.call.map((item) => (
                      <p key={item.number} className="font-semibold">
                         {item.label}: {item.number}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
               <div className="flex gap-4 items-start">
                <div className="bg-accent/80 p-3 rounded-full shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-headline">Email Us</h3>
                  <p className="text-primary-foreground/80 mb-2">Our team will get back to you.</p>
                  <div className="space-y-1">
                    {contactInfo.email.map((item) => (
                        <a key={item.address} href={`mailto:${item.address}`} className="block font-semibold hover:underline">
                            {item.label}: {item.address}
                        </a>
                    ))}
                    </div>
                </div>
              </div>
            </div>
             <div className="flex gap-4 items-start justify-center text-center sm:text-left sm:justify-start pt-8 border-t border-primary-foreground/20">
                <div className="bg-accent/80 p-3 rounded-full shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                </div>
              <div>
                <h3 className="text-xl font-bold font-headline">Visit Our Office</h3>
                <p className="text-primary-foreground/80 mb-2">123 University Ave, Knowledge City</p>
                <a href="#" className="font-semibold hover:underline text-white">Get Directions</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
