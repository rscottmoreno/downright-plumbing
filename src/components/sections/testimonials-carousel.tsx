"use client";

import { TestimonialCard } from "@/components/shared/testimonial-card";
import { SectionHeader } from "@/components/shared/section-header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  rating?: number;
  avatar?: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export function TestimonialsCarousel({
  testimonials,
  title = "What Our Customers Say",
  subtitle = "Testimonials",
  description,
  className,
}: TestimonialsCarouselProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24 bg-gradient-to-b from-brand-background to-brand-primary/5",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          description={description}
          align="center"
        />

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  rating={testimonial.rating}
                  avatar={testimonial.avatar}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious className="relative left-0 translate-x-0" />
            <CarouselNext className="relative right-0 translate-x-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
