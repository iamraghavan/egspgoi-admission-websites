
'use client';

import { Mail, MapPin, Phone } from 'lucide-react';

const contactInfo = {
  call: [
    {
      label: 'Admissions',
      number: '+91 99768 88999',
    },
    {
      label: 'Admissions',
      number: '+91 86809 54537',
    },
  ],
  email: [
    {
      label: 'Admissions',
      address: 'admission@egspec.org',
    },
    {
      label: 'Enquiry',
      address: 'enquiry@egspec.org',
    },
  ],
  visit: {
    address: 'Old, Nagore Main Rd, Thethi village, Nagore, Nagapattinam, Tamil Nadu 611002',
  },
};

export function CtaSection() {
  return (
    <section id="contact" className="bg-gradient-to-r from-primary to-accent w-full">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline leading-tight mb-4">
              We'd love to Hear From You.
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg mx-auto md:mx-0">
              Reach out to us with any questions. Or just reach out manually to{' '}
              <a
                href="mailto:enquiry@egspec.org"
                className="font-semibold underline hover:text-white"
              >
                enquiry@egspec.org
              </a>
            </p>
            <a
              href="#apply"
              className="inline-block px-8 py-3 bg-white text-primary hover:bg-white/90 transition-all rounded-md font-bold uppercase text-sm mt-2"
            >
              Apply Now
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
                       <a key={item.number} href={`tel:${item.number.replace(/\s/g, '')}`} className="block font-semibold hover:underline">
                         {item.number}
                       </a>
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
             <div className="flex gap-4 items-start pt-8 border-t border-primary-foreground/20">
                <div className="bg-accent/80 p-3 rounded-full shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                </div>
              <div>
                <h3 className="text-xl font-bold font-headline">Visit Our Office</h3>
                <p className="text-primary-foreground/80 mb-2 max-w-xs">{contactInfo.visit.address}</p>
                <a href="https://www.google.com/maps/search/?api=1&query=E.G.S.+Pillay+Engineering+College" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline text-white">Get Directions</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
