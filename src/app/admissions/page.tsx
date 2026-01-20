
import { PageHeader } from '@/components/page-header';
import { SiteHeader } from '@/components/site-header';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, Mail, Phone } from 'lucide-react';
import React from 'react';
import admissionImage from '@/app/assets/engineering_college.webp';
import dynamicImport from 'next/dynamic';
import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import Script from 'next/script';
import { siteConfig } from '@/lib/config';

export const dynamic = 'force-dynamic';

const SiteFooter = dynamicImport(() => import('@/components/site-footer').then(mod => mod.SiteFooter));

export const metadata: Metadata = {
    title: 'Admission Procedures',
    description: "Find detailed information on how to apply for our diverse range of programs. Get insights into eligibility, application steps, and contact details for our admissions team.",
};


const collegeAdmissionsData = [
  {
    collegeName: "E.G.S. Pillay Engineering College",
    contact: {
      phone: ["+91 99768 88999", "+91 86809 54537"],
      email: "admission@egspec.org",
    },
    procedures: {
      "Undergraduate (UG)": [
        "Candidates must have passed 10+2 with Physics, Chemistry, and Mathematics.",
        "Admission is based on TNEA counseling for government quota seats.",
        "Management quota seats are filled based on merit in the 10+2 examination and entrance exam scores (if applicable).",
        "Apply online via the college portal with all required documents.",
      ],
      "Postgraduate (PG)": [
        "Candidates require a relevant B.E./B.Tech degree with minimum required marks.",
        "Admission for M.E./M.Tech is through TANCET scores for government quota.",
        "For management quota, admission is based on merit in the qualifying UG degree and performance in an interview.",
        "For MBA/MCA, a valid TANCET score is mandatory.",
      ],
      "Ph.D.": [
        "A Master's degree in a relevant engineering discipline is required.",
        "Selection is based on a written test and interview conducted by Anna University/the institution.",
        "Candidates with NET/SET/JRF qualifications may be exempted from the written test.",
      ]
    }
  },
  {
    collegeName: "Edayathangudy G. S. Pillay Arts & Science College",
    contact: {
      phone: ["+91 98765 43210"],
      email: "admissions.asc@egspgoi.ac.in",
    },
    procedures: {
      "Undergraduate (UG)": [
        "Candidates must have passed 10+2 or an equivalent examination from a recognized board.",
        "Admission is based on merit in the 10+2 examination.",
        "A rank list will be published, and candidates will be called for counseling based on their rank.",
        "Submit the application form online along with 10th and 12th mark sheets.",
      ],
      "Postgraduate (PG)": [
        "A relevant undergraduate degree from a recognized university is required.",
        "Admission is based on the marks obtained in the undergraduate program.",
        "For MBA, TANCET scores may be considered along with UG performance.",
        "Apply online and upload all semester mark sheets and degree certificate.",
      ],
      "Ph.D.": [
          "A Master's degree in the relevant subject is required.",
          "Admission is based on a written test and interview conducted by the university/college.",
      ]
    }
  },
  {
    collegeName: "EGS Pillay Polytechnic College",
    contact: {
      phone: ["+91 91234 56789"],
      email: "admissions.poly@egspgoi.ac.in",
    },
    procedures: {
      "Diploma": [
        "Candidates must have passed the 10th standard (SSLC) or equivalent.",
        "Admissions are managed by the Directorate of Technical Education (DoTE), Tamil Nadu.",
        "Selection is through a centralized online counseling process based on 10th standard marks.",
      ],
      "Lateral Entry (to B.E.)": [
        "Diploma holders can apply for direct second-year entry into B.E./B.Tech programs.",
        "Admissions are processed through the TNEA Lateral Entry counseling.",
      ]
    }
  },
  {
    collegeName: "EGS Pillay College of Pharmacy",
    contact: {
      phone: ["+91 99887 76655"],
      email: "admissions.pharm@egspgoi.ac.in",
    },
    procedures: {
      "Diploma (D.Pharm)": [
        "Candidates must have passed 10+2 with Physics, Chemistry, and Biology/Mathematics.",
        "Admission is based on merit in the qualifying examination.",
      ],
      "Undergraduate (B.Pharm)": [
        "Candidates must have passed 10+2 with a science stream.",
        "Admission is based on merit and may involve state-level counseling.",
      ],
      "Doctorate (Pharm.D)": [
          "Requires 10+2 with a science background. It's a 6-year program.",
          "Admission is based on merit in qualifying exams.",
      ],
      "Postgraduate (M.Pharm)": [
          "Requires a B.Pharm degree.",
          "Admission may be based on GPAT scores or university entrance exams.",
      ]
    }
  }
];


const ProcedureStep = ({ text }: { text: string }) => (
    <li className="flex items-start gap-3">
        <CheckCircle className="h-5 w-5 text-accent mt-1 shrink-0" />
        <span className="text-muted-foreground">{text}</span>
    </li>
);

const CollegeAdmissionCard = ({ collegeData }: { collegeData: typeof collegeAdmissionsData[0] }) => (
  <Card className="w-full shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <CardHeader>
      <h3 className="font-headline text-3xl text-primary font-semibold leading-none tracking-tight">{collegeData.collegeName}</h3>
      <CardDescription>Detailed admission procedures and contact information.</CardDescription>
    </CardHeader>
    <CardContent className="grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="md:col-span-4">
        <div className="bg-secondary/30 p-6 rounded-lg h-full">
            <h4 className="font-headline font-semibold mb-4 text-xl text-primary">Admissions Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-muted-foreground mt-1" />
                <div className="text-sm">
                  {collegeData.contact.phone.map(num => (
                    <a key={num} href={`tel:${num.replace(/\s/g, '')}`} className="block hover:underline font-medium text-foreground">{num}</a>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-muted-foreground mt-1" />
                <a href={`mailto:${collegeData.contact.email}`} className="text-sm hover:underline font-medium text-foreground">{collegeData.contact.email}</a>
              </div>
            </div>
        </div>
      </div>
       <div className="md:col-span-8">
        <Accordion type="single" collapsible className="w-full">
            {Object.entries(collegeData.procedures).map(([programType, steps], index) => (
            <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-xl font-headline font-semibold text-primary hover:no-underline">
                {programType}
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                <ul className="space-y-4">
                    {steps.map((step, i) => (
                    <ProcedureStep key={i} text={step} />
                    ))}
                </ul>
                </AccordionContent>
            </AccordionItem>
            ))}
        </Accordion>
       </div>
    </CardContent>
  </Card>
);

export default function AdmissionsPage() {
    const siteUrl = siteConfig.baseUrl;

    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Apply for Admission at EGS Pillay Group of Institutions",
        "description": "Find detailed information on how to apply for our diverse range of programs. Get insights into eligibility, application steps, and contact details for our admissions team.",
        "step": collegeAdmissionsData.flatMap(college =>
            Object.entries(college.procedures).map(([programType, steps]) => ({
                "@type": "HowToStep",
                "name": `${programType} Admissions at ${college.collegeName}`,
                "text": `General procedure for ${programType} programs at ${college.collegeName}.`,
                "itemListElement": steps.map(stepText => ({
                    "@type": "HowToDirection",
                    "text": stepText
                }))
            }))
        )
    };

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Admission Procedures for EGS Pillay Group of Institutions",
        "description": "Find detailed information on how to apply for our diverse range of programs. Get insights into eligibility, application steps, and contact details for our admissions team.",
        "image": `${siteUrl}/og-image.webp`,
        "author": {
            "@type": "Organization",
            "name": "EGS Pillay Group of Institutions"
        },
        "publisher": {
            "@type": "Organization",
            "name": "EGS Pillay Group of Institutions",
            "logo": {
              "@type": "ImageObject",
              "url": `${siteUrl}/Icon.png`
            }
        },
        "datePublished": "2024-01-01T08:00:00+05:30",
        "dateModified": new Date().toISOString()
    };

  return (
    <>
        <Script
            id="howto-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(howToSchema),
            }}
        />
        <Script
            id="article-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(articleSchema),
            }}
        />
        <div className="flex min-h-screen flex-col bg-background">
            <SiteHeader />
            <main>
                <PageHeader
                title="Admission Procedures"
                description="Find detailed information on how to apply for our diverse range of programs."
                imageUrl={admissionImage}
                imageAlt="A wide shot of the EGS Pillay Engineering College building on a sunny day."
                data-ai-hint="students applications"
                />
                <Breadcrumb />
                <section className="py-16 md:py-24 bg-secondary/30">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-headline bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
                                How to Apply
                            </h2>
                            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                                Select an institution below to view the specific admission process for your desired program category.
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-12">
                            {collegeAdmissionsData.map(college => (
                                <CollegeAdmissionCard key={college.collegeName} collegeData={college} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div>
    </>
  );
}
