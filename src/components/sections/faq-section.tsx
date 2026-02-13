"use client";

import { SectionHeader } from "@/components/shared/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  questions: FAQ[];
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export function FAQSection({
  questions,
  title = "Frequently Asked Questions",
  subtitle = "FAQs",
  description = "Find answers to common questions about our plumbing services.",
  className,
}: FAQSectionProps) {
  return (
    <section className={cn("py-16 md:py-24 bg-white", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          description={description}
          align="center"
        />

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {questions.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-brand-text-primary hover:text-brand-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-brand-text-secondary leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
