
'use client';

import { Button } from '@/components/ui/button';
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

const programData = [
  {
    title: '4-Days Certificate Course on Building Disaster Resilience and Social Responsibility through Experiential Learning',
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
    details: '5 YEARS - INTEGRATED DEGREE | ARTS AND SCIENCE, ARTS, HUMANITIES & COMMERCE, MASS COMMUNICATION, MEDIA, SCIENCES',
    campuses: ['Mysuru'],
  },
  {
    title: '5 Year Integrated M. Sc. Chemistry with Specialisation in Chemical Biology / Applied Electrochemistry',
    details: 'INTEGRATED DEGREE | PHYSICAL SCIENCES',
    campuses: ['Coimbatore'],
  },
];

export function FindProgram() {
  return (
    <section id="programs" className="w-full bg-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12 bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
            Find Your Program
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 p-6 border rounded-lg shadow-sm bg-secondary/30">
            <div className="w-full md:w-auto">
              <span className="text-xs font-semibold text-muted-foreground">DEGREE</span>
              <Select>
                <SelectTrigger className="w-full md:w-[200px] bg-background">
                  <SelectValue placeholder="Select Degree" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ug">Undergraduate</SelectItem>
                  <SelectItem value="pg">Postgraduate</SelectItem>
                  <SelectItem value="integrated">Integrated Degree</SelectItem>
                  <SelectItem value="certificate">Certificate</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full md:w-auto">
              <span className="text-xs font-semibold text-muted-foreground">INTEREST</span>
              <Select>
                <SelectTrigger className="w-full md:w-[200px] bg-background">
                  <SelectValue placeholder="Select Interest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="arts">Arts & Science</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="medicine">Medicine</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full md:w-auto">
              <span className="text-xs font-semibold text-muted-foreground">CAMPUS</span>
              <Select>
                <SelectTrigger className="w-full md:w-[200px] bg-background">
                  <SelectValue placeholder="Select Campus" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="amritapuri">Amritapuri</SelectItem>
                  <SelectItem value="mysuru">Mysuru</SelectItem>
                  <SelectItem value="coimbatore">Coimbatore</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="font-semibold">OR</span>
            </div>
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search" className="pl-9 w-full md:w-[240px] bg-background" />
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {programData.map((program, index) => (
            <div key={index} className="grid md:grid-cols-[1fr_auto] gap-4 items-center border-b pb-8">
              <div className="flex gap-4">
                <span className="w-1.5 bg-yellow-400 rounded-full"></span>
                <div>
                  <h3 className="text-xl font-bold text-accent mb-1">{program.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{program.details}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-muted-foreground">COURSES OFFERED IN</span>
                    <div className="flex gap-2">
                      {program.campuses.map(campus => (
                        <span key={campus} className="bg-muted text-muted-foreground text-xs font-medium px-2.5 py-1 rounded-full">{campus}</span>
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
