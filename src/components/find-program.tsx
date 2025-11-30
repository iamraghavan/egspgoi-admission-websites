'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';

const programData = [
  {
    title:
      '4-Days Certificate Course on Building Disaster Resilience and Social Responsibility through Experiential Learning',
    details: 'CERTIFICATE | INTERDISCIPLINARY STUDIES',
    campuses: ['Amritapuri'],
  },
  {
    title: '5 Year Integrated B.C.A - M.C.A',
    details: '5 YEARS - INTEGRATED DEGREE | COMPUTER APPLICATIONS, COMPUTING',
    campuses: ['Mysuru'],
  },
  {
    title: '5 Year Integrated B.Sc. - M.Sc. Visual Communication',
    details:
      '5 YEARS - INTEGRATED DEGREE | ARTS AND SCIENCE, ARTS, HUMANITIES & COMMERCE, MASS COMMUNICATION, MEDIA, SCIENCES',
    campuses: ['Mysuru'],
  },
  {
    title:
      '5 Year Integrated M. Sc. Chemistry with Specialisation in Chemical Biology / Applied Electrochemistry',
    details: 'INTEGRATED DEGREE | PHYSICAL SCIENCES',
    campuses: ['Coimbatore'],
  },
];

const FilterSelect = ({
  label,
  placeholder,
  items,
}: {
  label: string;
  placeholder: string;
  items: { value: string; label: string }[];
}) => (
  <div className="relative">
    <span className="absolute top-0 left-3 text-[10px] font-bold uppercase text-muted-foreground tracking-wider">
      {label}
    </span>
    <Select>
      <SelectTrigger className="w-full md:w-[200px] bg-transparent border-none text-accent text-base font-semibold pt-5 focus:ring-0 focus:ring-offset-0">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

export function FindProgram() {
  return (
    <section id="programs" className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              Discover Your Path to Excellence
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              Our comprehensive program finder allows you to tailor your search and discover the perfect academic journey.
            </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 bg-secondary/30 p-4 rounded-lg shadow-sm">
          <FilterSelect
            label="Degree"
            placeholder="Select Degree"
            items={[
              { value: 'ug', label: 'Undergraduate' },
              { value: 'pg', label: 'Postgraduate' },
              { value: 'integrated', label: 'Integrated Degree' },
              { value: 'certificate', label: 'Certificate' },
            ]}
          />
          <div className="h-10 w-px bg-border/70 mx-4 hidden md:block" />
          <FilterSelect
            label="Interest"
            placeholder="Select Interest"
            items={[
              { value: 'engineering', label: 'Engineering' },
              { value: 'arts', label: 'Arts & Science' },
              { value: 'business', label: 'Business' },
              { value: 'medicine', label: 'Medicine' },
            ]}
          />
          <div className="h-10 w-px bg-border/70 mx-4 hidden md:block" />
          <FilterSelect
            label="Campus"
            placeholder="Select Campus"
            items={[
              { value: 'amritapuri', label: 'Amritapuri' },
              { value: 'mysuru', label: 'Mysuru' },
              { value: 'coimbatore', label: 'Coimbatore' },
            ]}
          />
          <div className="flex items-center gap-4 text-muted-foreground mx-4">
            <span className="font-semibold text-sm">OR</span>
          </div>
          <div className="relative w-full md:w-auto">
            <Input
              placeholder="Search"
              className="pl-4 pr-10 w-full md:w-[240px] bg-background rounded-full focus-visible:ring-accent"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-accent" />
          </div>
        </div>

        <div className="mt-16 space-y-8">
          {programData.map((program, index) => (
            <div
              key={index}
              className="grid md:grid-cols-[1fr_auto] gap-4 items-center border-b pb-8"
            >
              <div className="flex gap-4">
                <span className="w-1.5 bg-yellow-400 rounded-full"></span>
                <div>
                  <h3 className="text-xl font-bold text-accent mb-1">
                    {program.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {program.details}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-muted-foreground">
                      COURSES OFFERED IN
                    </span>
                    <div className="flex gap-2">
                      {program.campuses.map((campus) => (
                        <span
                          key={campus}
                          className="bg-muted text-muted-foreground text-xs font-medium px-2.5 py-1 rounded-full"
                        >
                          {campus}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button variant="outline">VIEW DETAILS</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
