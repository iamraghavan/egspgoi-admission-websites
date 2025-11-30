import Link from 'next/link';
import Image from 'next/image';
import logo from '@/app/assets/logo/egspgoi_svg_white.svg';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
];

const institutions = [
    { name: 'EGS Pillay Engineering College', href: '#' },
    { name: 'EGS Pillay Arts & Science College', href: '#' },
    { name: 'EGS Pillay Polytechnic College', href: '#' },
    { name: 'EGS Pillay College of Education', href: '#' },
    { name: 'EGS Pillay College and School of Nursing', href: '#' },
    { name: 'EGS Pillay College of Pharmacy', href: '#' },
    { name: 'EGS Pillay Naturopathy and Yoga Medical College', href: '#' },
    { name: 'EGS Pillay International School', href: '#' },
];

const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Academics', href: '#programs' },
    { name: 'Admissions', href: '#apply' },
    { name: 'Placements', href: '#placements' },
    { name: 'Scholarships', href: '#' },
    { name: 'Research', href: '#' },
    { name: 'Student Life', href: '#' },
    { name: 'Alumni', href: '#' },
];


export function SiteFooter() {
  return (
    <footer className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
            <div className="md:col-span-3">
                <Link href="/" className="flex items-center space-x-2">
                    <Image src={logo} alt="EGS GOI Logo" className="h-20 w-auto" />
                </Link>
                <p className="mt-4 max-w-sm text-sm text-primary-foreground/80">
                    Building the future, one student at a time through excellence in education, research, and innovation.
                </p>
            </div>

            <div className="md:col-span-3">
                <h3 className="font-semibold font-headline text-lg">Institutions</h3>
                <ul className="mt-4 space-y-2 text-sm">
                    {institutions.map(item => (
                        <li key={item.name}>
                            <Link href={item.href} className="text-primary-foreground/80 hover:text-white hover:underline transition-colors">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="md:col-span-2">
                <h3 className="font-semibold font-headline text-lg">Quick Links</h3>
                 <ul className="mt-4 space-y-2 text-sm">
                    {quickLinks.map(item => (
                        <li key={item.name}>
                            <Link href={item.href} className="text-primary-foreground/80 hover:text-white hover:underline transition-colors">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="md:col-span-4">
                <h3 className="font-semibold font-headline text-lg">Admissions</h3>
                <div className="mt-4 space-y-2 text-sm text-primary-foreground/80">
                    <p><a href="tel:+919976888999" className="hover:text-white hover:underline">+91 99768 88999</a></p>
                    <p><a href="tel:+918680954537" className="hover:text-white hover:underline">+91 86809 54537</a></p>
                    <p><a href="mailto:admission@egspec.org" className="hover:text-white hover:underline">admission@egspec.org</a></p>
                </div>
                <h3 className="font-semibold font-headline text-lg mt-6">Contact Us</h3>
                <address className="mt-4 space-y-2 text-sm text-primary-foreground/80 not-italic">
                    <p>Old, Nagore Main Rd, Thethi village, Nagore, Nagapattinam, Tamil Nadu 611002</p>
                    <p><a href="mailto:enquiry@egspec.org" className="hover:text-white hover:underline">enquiry@egspec.org</a></p>
                </address>
            </div>
        </div>

        <hr className="my-8 border-primary-foreground/20" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <p className="text-primary-foreground/60 mb-4 sm:mb-0">
                &copy; {new Date().getFullYear()} EGS Institutions. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-4">
                <p className="text-primary-foreground/80 font-medium">Follow Us</p>
                {socialLinks.map(link => (
                    <Link key={link.name} href={link.href} aria-label={link.name} className="text-primary-foreground/80 hover:text-white transition-colors">
                        <link.icon className="h-5 w-5" />
                    </Link>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
}
