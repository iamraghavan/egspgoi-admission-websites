
import { PageHeader } from '@/components/page-header';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle } from 'lucide-react';

const admissionProcedures = [
  {
    title: 'Undergraduate (UG) Programmes',
    content: [
      'Candidates must have passed 10+2 or equivalent examination from a recognized board.',
      'For Engineering (B.E./B.Tech), selection is based on TNEA counseling (for government quota) and merit in qualifying exams (for management quota).',
      'For Arts & Science (B.A./B.Sc./B.Com), admission is based on merit in the 10+2 examination.',
      'Visit the respective college website to fill out the online application form.',
      'Submit required documents including 10th and 12th mark sheets, transfer certificate, and community certificate.',
      'Shortlisted candidates will be contacted for confirmation and fee payment.'
    ]
  },
  {
    title: 'Postgraduate (PG) Programmes',
    content: [
      'Candidates must hold a relevant undergraduate degree from a recognized university with the minimum required percentage.',
      'For M.E./M.Tech, a valid TANCET score is required for government quota seats. Management quota seats are filled based on merit in the qualifying UG degree.',
      'For M.B.A./M.C.A., a valid TANCET score is mandatory for admission through both government and management quotas.',
      'For M.A./M.Sc./M.Com, admission is based on the marks obtained in the relevant undergraduate program.',
      'Apply online through the specific institution\'s portal and upload all semester mark sheets, degree certificate, and other required documents.'
    ]
  },
  {
    title: 'Ph.D. Programmes',
    content: [
      'Candidates must have a Master\'s degree in a relevant discipline with a consistent academic record.',
      'Admission requires qualifying in the written test and interview conducted by Anna University or the respective institution.',
      'Candidates who have cleared UGC-NET/CSIR/SLET are often exempted from the written test.',
      'A research proposal is typically required at the time of the interview.',
      'Visit the research section of the respective college website for available guides, specializations, and application deadlines.'
    ]
  },
  {
    title: 'Diploma Programmes',
    content: [
      'Candidates must have passed the 10th standard (SSLC) or equivalent examination.',
      'Admissions are handled by the Directorate of Technical Education (DoTE), Tamil Nadu.',
      'Application can be made online through the DoTE portal during the specified admission window.',
      'Selection is based on the marks obtained in the 10th standard examination.',
      'Both government and management quota seats are filled through the centralized counseling process.'
    ]
  },
  {
    title: 'Lateral Entry Admissions',
    content: [
      'For direct second-year entry into B.E./B.Tech programs, candidates must have completed a relevant Diploma in Engineering/Technology with the prescribed minimum marks.',
      'For direct second-year entry into certain B.Sc programs, candidates must have a relevant diploma or equivalent qualification.',
      'Admissions are processed through the TNEA Lateral Entry counseling for government quota seats.',
      'Management quota seats are filled directly by the institution based on diploma marks and eligibility criteria.',
      'Candidates need to submit their diploma mark sheets, transfer certificate, and other necessary documents.'
    ]
  },
];

const ProcedureStep = ({ text }: { text: string }) => (
    <li className="flex items-start gap-3">
        <CheckCircle className="h-5 w-5 text-accent mt-1 shrink-0" />
        <span className="text-muted-foreground">{text}</span>
    </li>
);

export default function AdmissionsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main>
        <PageHeader
          title="Admission Procedures"
          description="Find detailed information on how to apply for our diverse range of programs."
          imageUrl="https://picsum.photos/seed/admissions/1600/400"
          data-ai-hint="library students"
        />
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-6 max-w-4xl">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
                        How to Apply
                    </h2>
                    <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                        Follow the streamlined process below for your desired program category to join the EGS Pillay Group of Institutions.
                    </p>
                </div>
                <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
                    {admissionProcedures.map((procedure, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-b">
                            <AccordionTrigger className="text-left text-xl font-headline font-semibold text-primary hover:no-underline">
                                {procedure.title}
                            </AccordionTrigger>
                            <AccordionContent className="pt-4">
                                <ul className="space-y-4">
                                    {procedure.content.map((step, i) => (
                                        <ProcedureStep key={i} text={step} />
                                    ))}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
