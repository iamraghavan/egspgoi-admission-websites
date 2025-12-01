
import Image from 'next/image';
import { AdmissionForm } from './admission-form';
import heroImage from '@/app/assets/engineering_college.webp';

export function HeroSection() {
  return (
    <section id="apply" className="relative w-full">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="EGS Engineering College Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80" />
      </div>
      <div className="relative container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline leading-tight mb-4">
              Join EGS Pillay Group of Institutions
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
              Empower your future with world-class education. Admissions open for undergraduate, postgraduate, and doctoral programs in Engineering, Management, and Science. Apply now to secure your spot!
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <AdmissionForm />
          </div>
        </div>
      </div>
    </section>
  );
}
