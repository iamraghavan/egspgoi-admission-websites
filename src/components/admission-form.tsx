
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { cn } from '@/lib/utils';

const coursesByCollege = {
  "E.G.S.Pillay Arts and Science College": {
    "Undergraduate": [
      "B.A – Tamil",
      "B.A – English",
      "B.A – Defence & Strategic Studies",
      "B.Com",
      "B.Com – Computer Application",
      "B.Com – Business Process Service",
      "B.B.A",
      "B.C.A",
      "B.Sc – Computer Science",
      "B.Sc- Computer Science Cognitive Systems",
      "B.Sc- Information Technology",
      "B.Sc – Visual Communication",
      "B.Sc – Fashion Tech. & Costume Designing",
      "B.Sc – Physics",
      "B.Sc – Maths",
      "B.Sc- Chemistry",
      "B.Sc – Bio Chemistry",
      "B.Sc – Bio Technology",
      "B.Sc – Nutrition & Dietetics",
      "B.Sc – Hospital Administration",
      "B.Sc- Artificial Intelligence and Machine Learning",
      "B.Sc – Data Science",
      "B.Sc – Microbiology",
      "B.Com – Professional Accounting",
    ],
    "Postgraduate": [
      "M.Com",
      "M.B.A",
      "M.A – English",
      "M.Sc – Computer Science",
      "M.Sc – Information Technology",
      "M.Sc – Physics",
      "M.Sc – Maths",
      "M.Sc – Chemistry",
      "M.Sc – Bio Chemistry",
      "M.Sc – Bio Technology",
      "M.Sc – Food Science & Nutrition",
    ],
  },
  "E.G.S.Pillay Polytechnic College": {
    "Diploma": [
      "Diploma in Mechanical Engineering",
      "Diploma in Civil Engineering",
      "Diploma in Electrical and Electronics Engineering",
      "Diploma in Electronics and Communication Engineering",
      "Diploma in Computer Engineering",
    ],
  },
  "E.G.S. Pillay College and School of Nursing": {
    "Courses": [
      "B.Sc – Nursing",
      "DGNM – (Diploma in General Nursing & Midwifery)",
    ],
  },
  "E.G.S.Pillay College of Education": { "Courses": ["All Subjects"] },
  "E.G.S. Pillay College of Pharmacy": {
    "Courses": ["D.Pharm", "B.Pharm", "M.Pharm", "Pharm.D"],
  },
  "EGS Pillay Engineering College": {
    "Undergraduate": [
      "B.E – Mechanical Engineering",
      "B.E – Electronics and Communication Engineering",
      "B.E – Electrical & Electronics Engineering",
      "B.E – Computer Science & Engineering",
      "B.Tech – Information Technology",
      "B.E – Civil Engineering",
      "B.E – Bio-Medical Engineering",
      "B.Tech – Computer Science & Business Systems",
      "B.Tech – Artificial Intelligence and Data Science",
    ],
    "Postgraduate": [
      "M.E (Computer Science and Engineering)",
      "M.E (Communication Systems)",
      "M.E (Manufacturing Engineering)",
      "M.E (Power Electronics and Drives)",
      "M.E (Environmental Engineering)",
      "MCA – Master of Computer Applications",
      "MBA – Master of Business Administration",
    ],
  },
};

type CollegeName = keyof typeof coursesByCollege;

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits.' }),
  college: z.string({ required_error: 'Please select a college.' }),
  course: z.string({ required_error: 'Please select a course.' }),
  state: z.string().min(2, { message: 'State must be at least 2 characters.' }),
  district: z.string().min(2, { message: 'District must be at least 2 characters.' }),
});

export function AdmissionForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      phone: '',
      state: '',
      district: '',
    },
  });

  const selectedCollege = form.watch('college') as CollegeName | undefined;

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Application Submitted!',
      description: "We've received your application and will be in touch shortly.",
    });
    form.reset();
  }

  const collegeNames = Object.keys(
    coursesByCollege
  ) as CollegeName[];

  const availableCourses = selectedCollege ? coursesByCollege[selectedCollege] : {};

  return (
    <Card className="w-full max-w-lg shadow-2xl">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-2xl">Admissions Open 2026 - 2027</CardTitle>
        <CardDescription>Fill out the form below to start your application.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john.doe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone/WhatsApp Number</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+91 123-456-7890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="college"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>College</FormLabel>
                  <Select onValueChange={(value) => {
                    field.onChange(value);
                    form.resetField('course');
                  }} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a college" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {collegeNames.map((college) => (
                        <SelectItem key={college} value={college}>
                          {college}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="course"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value} disabled={!selectedCollege}>
                    <FormControl>
                      <SelectTrigger className={cn(!selectedCollege && "text-muted-foreground")}>
                        <SelectValue placeholder={selectedCollege ? "Select a course" : "Select a college first"} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.entries(availableCourses).map(([category, courses]) => (
                        <React.Fragment key={category}>
                          <FormLabel className="px-2 py-1.5 text-sm font-semibold">{category}</FormLabel>
                          {(courses as string[]).map(course => (
                            <SelectItem key={course} value={course}>
                              {course}
                            </SelectItem>
                          ))}
                        </React.Fragment>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State / Province</FormLabel>
                  <FormControl>
                    <Input placeholder="Tamil Nadu" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="district"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>District / City</FormLabel>
                  <FormControl>
                    <Input placeholder="Nagapattinam" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full !mt-6" size="lg">
              Apply Now
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
