"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

type FAQItem = {
  question: string;
  answer: string;
};

interface FAQSectionProps {
  title?: string;
  description?: string;
  faqsLeft: FAQItem[];
  faqsRight: FAQItem[];
  className?: string;
}

export function FaqSection({
  title = "Frequently Asked Questions",
  description = "Everything you need to know about our institutions, from admissions and academics to campus life and career opportunities.",
  faqsLeft,
  faqsRight,
  className,
}: FAQSectionProps) {
  return (
    <section className={cn("w-full bg-gradient-to-r from-primary to-accent py-16 md:py-24", className)}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary-foreground">
                {title}
            </h2>
            <p className="text-lg text-primary-foreground/80 mt-4 max-w-3xl mx-auto">
                {description}
            </p>
        </div>

        {/* FAQs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-4 max-w-5xl mx-auto">
          {[faqsLeft, faqsRight].map((faqColumn, columnIndex) => (
            <Accordion
              key={columnIndex}
              type="single"
              collapsible
              className="w-full"
            >
              {faqColumn.map((faq, i) => (
                <AccordionItem key={i} value={`item-${columnIndex}-${i}`} className="border-primary-foreground/20">
                  <AccordionTrigger className="text-left text-base font-semibold text-primary-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-primary-foreground/80 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
