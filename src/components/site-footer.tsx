
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/app/assets/logo/egspgoi_svg_white.svg';
import { Facebook, Instagram, Linkedin, Radio, Twitter, Video, View } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

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

const aboutEgspLinks = [
    { name: 'Rankings', href: '#' },
    { name: 'Accreditation', href: '#' },
    { name: 'Leadership', href: '#' },
    { name: 'Press Media', href: '#' },
    { name: 'Governance', href: '#' },
];


const mediaLinks = [
    { name: 'Virtual Tour', href: '#', icon: View },
    { name: 'Videos', href: '#', icon: Video },
    { name: 'Community Radio', href: '#', icon: Radio },
]

export function SiteFooter() {
  return (
    <footer className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
      <div className="container mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-3">
                <Link href="/" className="flex items-center space-x-2">
                    <Image src={logo} alt="EGS GOI Logo" className="h-20 w-auto" />
                </Link>
                <p className="mt-4 max-w-sm text-sm text-primary-foreground/80">
                    Building the future, one student at a time through excellence in education, research, and innovation.
                </p>
            </div>

            <div className="lg:col-span-9">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                     <div className="md:col-span-2">
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
                     <div>
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
                    <div>
                        <h3 className="font-semibold font-headline text-lg">About EGSP</h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            {aboutEgspLinks.map(item => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-primary-foreground/80 hover:text-white hover:underline transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                         <h3 className="font-semibold font-headline text-lg mt-6">Media</h3>
                        <ul className="mt-4 space-y-4 text-sm">
                            {mediaLinks.map(item => (
                                <li key={item.name}>
                                    <Link href={item.href} className="flex items-center gap-3 text-primary-foreground/80 hover:text-white hover:underline transition-colors">
                                        <item.icon className="h-5 w-5" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <hr className="my-8 border-primary-foreground/20" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-3">
                <h3 className="font-semibold font-headline text-lg">Follow Us</h3>
                 <div className="flex items-center space-x-4 mt-4">
                    {socialLinks.map(link => (
                        <Link key={link.name} href={link.href} aria-label={link.name} className="text-primary-foreground/80 hover:text-white transition-colors">
                            <link.icon className="h-5 w-5" />
                        </Link>
                    ))}
                </div>
            </div>
             <div className="lg:col-span-4">
                <h3 className="font-semibold font-headline text-lg">Stay Updated</h3>
                <p className="text-sm text-primary-foreground/80 mt-2 mb-4">Subscribe to our newsletter for the latest updates.</p>
                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input type="email" placeholder="Email" className="bg-primary/50 border-primary-foreground/30 text-white placeholder:text-primary-foreground/70" />
                    <Button type="submit" variant="secondary" className='bg-white/90 text-primary hover:bg-white'>Subscribe</Button>
                </div>
            </div>
            <div className="lg:col-span-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                     <div>
                        <h3 className="font-semibold font-headline text-lg">Admissions</h3>
                        <div className="mt-4 space-y-2 text-sm text-primary-foreground/80">
                            <p><a href="tel:+919976888999" className="hover:text-white hover:underline">+91 99768 88999</a></p>
                            <p><a href="tel:+918680954537" className="hover:text-white hover:underline">+91 86809 54537</a></p>
                            <p><a href="mailto:admission@egspec.org" className="hover:text-white hover:underline">admission@egspec.org</a></p>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold font-headline text-lg">Contact Us</h3>
                        <address className="mt-4 space-y-2 text-sm text-primary-foreground/80 not-italic">
                            <p>Old, Nagore Main Rd, Thethi village, Nagore, Nagapattinam, Tamil Nadu 611002</p>
                            <p><a href="mailto:enquiry@egspec.org" className="hover:text-white hover:underline">enquiry@egspec.org</a></p>
                        </address>
                    </div>
                </div>
            </div>
        </div>
      </div>
       <div style={{ backgroundColor: '#181818' }}>
        <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left text-xs text-primary-foreground/70">
                <p className="mb-2 sm:mb-0">
                    Copyright &copy; {new Date().getFullYear()} All Rights Reserved by EGS Pillay Group of Institutions
                </p>
                <p>
                    <span className='mr-2'>Developed By <a href="#" className="font-semibold hover:text-white">Raghavan Jeeva</a></span> | 
                    <a href="#" className="ml-2 font-semibold hover:text-white">Status Page</a>
                </p>
            </div>
        </div>
      </div>
    </footer>
  );
}

    