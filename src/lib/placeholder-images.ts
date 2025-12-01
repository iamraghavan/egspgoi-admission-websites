import data from './placeholder-images.json';
import { StaticImageData } from 'next/image';

import partner1 from '@/app/assets/partners/logo-1.webp';
import partner2 from '@/app/assets/partners/logo-2.webp';
import partner3 from '@/app/assets/partners/logo-3.webp';
import partner4 from '@/app/assets/partners/logo-4.webp';
import partner5 from '@/app/assets/partners/logo-5.webp';
import partner6 from '@/app/assets/partners/logo-6.webp';
import partner7 from '@/app/assets/partners/logo-7.webp';
import partner8 from '@/app/assets/partners/logo-8.webp';
import partner9 from '@/app/assets/partners/logo-9.webp';
import partner10 from '@/app/assets/partners/logo-10.webp';
import partner11 from '@/app/assets/partners/logo-11.webp';
import partner12 from '@/app/assets/partners/logo-12.webp';
import partner13 from '@/app/assets/partners/logo-13.webp';
import partner14 from '@/app/assets/partners/logo-14.webp';
import partner15 from '@/app/assets/partners/logo-15.webp';
import partner16 from '@/app/assets/partners/logo-16.webp';
import partner17 from '@/app/assets/partners/logo-17.webp';
import partner18 from '@/app/assets/partners/logo-18.webp';
import partner19 from '@/app/assets/partners/logo-19.webp';
import partner20 from '@/app/assets/partners/logo-20.webp';
import partner21 from '@/app/assets/partners/logo-21.webp';
import partner22 from '@/app/assets/partners/logo-22.webp';
import partner23 from '@/app/assets/partners/logo-23.webp';
import partner24 from '@/app/assets/partners/logo-24.webp';
import partner25 from '@/app/assets/partners/logo-25.webp';
import partner26 from '@/app/assets/partners/logo-26.webp';
import partner27 from '@/app/assets/partners/logo-27.webp';
import partner28 from '@/app/assets/partners/logo-28.webp';
import partner29 from '@/app/assets/partners/logo-29.webp';
import partner30 from '@/app/assets/partners/logo-30.webp';
import partner31 from '@/app/assets/partners/logo-31.webp';

import heroImage from '@/app/assets/placeholders/hero.webp';
import studentFemale1 from '@/app/assets/placeholders/student-female-1.webp';
import studentMale1 from '@/app/assets/placeholders/student-male-1.webp';
import facultyMale1 from '@/app/assets/placeholders/faculty-male-1.webp';


const imageMap: Record<string, StaticImageData> = {
    '/assets/partners/logo-1.webp': partner1,
    '/assets/partners/logo-2.webp': partner2,
    '/assets/partners/logo-3.webp': partner3,
    '/assets/partners/logo-4.webp': partner4,
    '/assets/partners/logo-5.webp': partner5,
    '/assets/partners/logo-6.webp': partner6,
    '/assets/partners/logo-7.webp': partner7,
    '/assets/partners/logo-8.webp': partner8,
    '/assets/partners/logo-9.webp': partner9,
    '/assets/partners/logo-10.webp': partner10,
    '/assets/partners/logo-11.webp': partner11,
    '/assets/partners/logo-12.webp': partner12,
    '/assets/partners/logo-13.webp': partner13,
    '/assets/partners/logo-14.webp': partner14,
    '/assets/partners/logo-15.webp': partner15,
    '/assets/partners/logo-16.webp': partner16,
    '/assets/partners/logo-17.webp': partner17,
    '/assets/partners/logo-18.webp': partner18,
    '/assets/partners/logo-19.webp': partner19,
    '/assets/partners/logo-20.webp': partner20,
    '/assets/partners/logo-21.webp': partner21,
    '/assets/partners/logo-22.webp': partner22,
    '/assets/partners/logo-23.webp': partner23,
    '/assets/partners/logo-24.webp': partner24,
    '/assets/partners/logo-25.webp': partner25,
    '/assets/partners/logo-26.webp': partner26,
    '/assets/partners/logo-27.webp': partner27,
    '/assets/partners/logo-28.webp': partner28,
    '/assets/partners/logo-29.webp': partner29,
    '/assets/partners/logo-30.webp': partner30,
    '/assets/partners/logo-31.webp': partner31,
    '/assets/placeholders/hero.webp': heroImage,
    '/assets/placeholders/student-female-1.webp': studentFemale1,
    '/assets/placeholders/student-male-1.webp': studentMale1,
    '/assets/placeholders/faculty-male-1.webp': facultyMale1,
};


export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string | StaticImageData;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages.map(p => ({
    ...p,
    imageUrl: imageMap[p.imageUrl] || p.imageUrl,
}));
