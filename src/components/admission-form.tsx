
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useRouter } from 'next/navigation';

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
import statesAndDistricts from '@/app/assets/docs/states-and-districts.json';
import coursesByCollege from '@/app/assets/docs/college-courses.json';
import { useSearchParams } from 'next/navigation';

type CollegeName = keyof typeof coursesByCollege;

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }).max(50, { message: 'Name must not exceed 50 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  college: z.string({ required_error: 'Please select a college.' }),
  course: z.string({ required_error: 'Please select a course.' }),
  state: z.string({ required_error: 'Please select a state.' }),
  district: z.string({ required_error: 'Please select a district.' }),
});

export function AdmissionForm() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [hostname, setHostname] = React.useState('');

  React.useEffect(() => {
    setHostname(window.location.hostname);
  }, []);


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  const selectedCollege = form.watch('college') as CollegeName | undefined;
  const selectedState = form.watch('state');

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const utm_source = searchParams.get('utm_source') || 'organic';
    const utm_medium = searchParams.get('utm_medium') || 'organic';

    // Ensure phone number is 10 digits by stripping country code if present
    let phoneNumber = values.phone;
    if (phoneNumber.startsWith('91') && phoneNumber.length > 10) {
      phoneNumber = phoneNumber.substring(2);
    }

    const apiPayload = {
      ...values,
      phone: phoneNumber,
      admission_year: "2026",
      source_website: hostname || "unknown",
      utm_source,
      utm_medium,
    };

    try {
      const response = await fetch('https://cms-egspgoi.vercel.app/api/v1/leads/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiPayload),
      });

        const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Something went wrong with the submission.');
      }
      
      const queryParams = new URLSearchParams({
        success: 'true',
        lead_id: result.data.lead_id,
        assigned_user_name: result.data.assigned_user.name,
        assigned_user_email: result.data.assigned_user.email,
        assigned_user_phone: '9363087377', // As provided in prompt
      });

      router.push(`/admission/enquiry/2026-2027?${queryParams.toString()}`);

    } catch (error: any) {
      console.error('Submission failed:', error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: error.message || 'Could not submit your application. Please try again later.',
      });
    }
  }

  const collegeNames = Object.keys(coursesByCollege) as CollegeName[];
  const availableCourses = selectedCollege ? coursesByCollege[selectedCollege] : {};
  
  const sortedStates = React.useMemo(() => {
    const tn = statesAndDistricts.states.find(s => s.state === 'Tamil Nadu');
    const otherStates = statesAndDistricts.states.filter(s => s.state !== 'Tamil Nadu').sort((a, b) => a.state.localeCompare(b.state));
    return tn ? [tn, ...otherStates] : otherStates;
  }, []);

  const availableDistricts = React.useMemo(() => {
    if (!selectedState) return [];
    const stateData = statesAndDistricts.states.find(s => s.state === selectedState);
    return stateData ? stateData.districts.sort((a, b) => a.localeCompare(b)) : [];
  }, [selectedState]);


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
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter your email" {...field} />
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
                    <FormLabel>Phone/WhatsApp</FormLabel>
                    <FormControl>
                      <PhoneInput
                        country={'in'}
                        value={field.value}
                        onChange={field.onChange}
                        inputProps={{
                          name: 'phone',
                          required: true,
                        }}
                        inputStyle={{ width: '100%' }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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
                  <Select onValueChange={field.onChange} value={field.value} disabled={!selectedCollege}>
                    <FormControl>
                      <SelectTrigger className={cn(!selectedCollege && "text-muted-foreground")}>
                        <SelectValue placeholder={selectedCollege ? "Select a course" : "Select a college first"} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.entries(availableCourses).map(([category, courses]) => (
                        <React.Fragment key={category}>
                          <FormLabel className="px-2 py-1.5 text-sm font-semibold">{category}</FormLabel>
                          {(courses as string[]).sort((a,b) => a.localeCompare(b)).map(course => (
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>State</FormLabel>
                    <Select onValueChange={(value) => {
                        field.onChange(value);
                        form.resetField('district');
                    }} value={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a state" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        {sortedStates.map((s) => (
                            <SelectItem key={s.state} value={s.state}>
                            {s.state}
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
                name="district"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>District</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value} disabled={!selectedState}>
                        <FormControl>
                        <SelectTrigger className={cn(!selectedState && "text-muted-foreground")}>
                            <SelectValue placeholder={selectedState ? "Select a district" : "Select a state first"} />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        {availableDistricts.map(district => (
                            <SelectItem key={district} value={district}>
                            {district}
                            </SelectItem>
                        ))}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
            <Button type="submit" className="w-full !mt-6" size="lg" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? 'Submitting...' : 'Apply Now'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

    