# 🚀 Quick Reference - Down Right Plumbing Components

## Common Imports

```tsx
// Section Components
import {
  Hero,
  TrustBar,
  ServicesGrid,
  TestimonialsCarousel,
  CityGrid,
  FAQSection,
  CTASection,
  WhyChooseUs,
  OurStoryTeaser,
  RelatedServices,
} from "@/components/sections";

// Shared Components
import {
  SectionHeader,
  ServiceCard,
  CityCard,
  TestimonialCard,
  PhoneButton,
} from "@/components/shared";

// Forms
import {
  ContactForm,
  QuickScheduleForm,
} from "@/components/forms";

// Sample Data
import {
  sampleServices,
  sampleTestimonials,
  sampleFAQs,
  sampleCities,
  sampleStats,
} from "@/data/sample-data";

// Icons (Lucide React)
import {
  Wrench,
  Droplet,
  Flame,
  Phone,
  ArrowRight,
} from "lucide-react";
```

---

## Common Patterns

### Homepage Layout

```tsx
export default function HomePage() {
  return (
    <main>
      <Hero variant="home" {...} />
      <TrustBar />
      <ServicesGrid services={sampleServices} />
      <WhyChooseUs />
      <TestimonialsCarousel testimonials={sampleTestimonials} />
      <OurStoryTeaser />
      <CTASection variant="standard" />
    </main>
  );
}
```

### Service Page Layout

```tsx
export default function ServicePage() {
  return (
    <main>
      <Hero variant="service" {...} />
      {/* Service content */}
      <RelatedServices services={[...]} />
      <FAQSection questions={[...]} />
      <CTASection variant="warm" />
    </main>
  );
}
```

### Location/City Page Layout

```tsx
export default function CityPage() {
  return (
    <main>
      <Hero variant="city" {...} />
      <ServicesGrid services={[...]} columns={4} />
      <TestimonialsCarousel testimonials={[...]} />
      <CTASection variant="emergency" />
    </main>
  );
}
```

### Contact Page Layout

```tsx
export default function ContactPage() {
  return (
    <main>
      <Hero variant="about" {...} />
      <section className="py-16">
        <div className="container max-w-2xl">
          <ContactForm />
        </div>
      </section>
      <CityGrid cities={sampleCities} />
    </main>
  );
}
```

---

## Quick Component Examples

### Hero (4 Variants)

```tsx
// Homepage Hero
<Hero
  variant="home"
  title="Professional Plumbing Services"
  subtitle="24/7 Emergency Service"
  description="Trusted experts serving Oklahoma"
  backgroundImage="/images/hero.jpg"
  showCTA={true}
/>

// Service Page Hero
<Hero variant="service" title="Drain Cleaning" />

// City Page Hero
<Hero variant="city" title="Services in OKC" />

// About Page Hero
<Hero variant="about" title="Our Story" />
```

### CTA Section (3 Variants)

```tsx
// Standard (Blue)
<CTASection variant="standard" />

// Emergency (Red)
<CTASection variant="emergency" />

// Warm (Light)
<CTASection variant="warm" />
```

### Services Grid

```tsx
<ServicesGrid
  services={[
    {
      title: "Drain Cleaning",
      description: "Professional drain cleaning",
      icon: Droplet,
      href: "/services/drain-cleaning",
    },
    // ... more services
  ]}
  columns={3}
/>
```

### Testimonials Carousel

```tsx
<TestimonialsCarousel
  testimonials={[
    {
      quote: "Excellent service!",
      author: "John Smith",
      role: "Homeowner",
      rating: 5,
    },
    // ... more testimonials
  ]}
/>
```

### FAQ Section

```tsx
<FAQSection
  questions={[
    {
      question: "Do you offer 24/7 service?",
      answer: "Yes, we're available 24/7...",
    },
    // ... more FAQs
  ]}
/>
```

### Contact Form

```tsx
<ContactForm
  onSuccess={() => {
    console.log("Form submitted!");
  }}
/>
```

### Phone Button

```tsx
<PhoneButton
  phoneNumber="(405) 555-0123"
  variant="default"
  size="lg"
  showText={true}
  text="Call Now"
/>
```

---

## Data Structure Examples

### Service Object

```tsx
{
  title: "Drain Cleaning",
  description: "Professional drain cleaning services",
  icon: Droplet, // Lucide React icon
  href: "/services/drain-cleaning",
}
```

### Testimonial Object

```tsx
{
  quote: "Excellent service! Very professional.",
  author: "John Smith",
  role: "Homeowner", // optional
  rating: 5,         // optional, defaults to 5
  avatar: "/images/avatar.jpg", // optional
}
```

### FAQ Object

```tsx
{
  question: "Do you offer 24/7 emergency service?",
  answer: "Yes, we provide round-the-clock emergency plumbing services.",
}
```

### City Object

```tsx
{
  name: "Oklahoma City",
  href: "/locations/oklahoma-city",
  serviceCount: 12, // optional
}
```

### Stat Object

```tsx
{
  value: 15,
  label: "Years in Business",
  suffix: "+",     // optional
  prefix: "",      // optional
}
```

---

## Styling Tips

### Custom Colors (from Tailwind config)

```tsx
className="text-brand-primary"        // Primary blue
className="bg-brand-secondary"        // Secondary color
className="text-brand-accent"         // Accent color
className="text-brand-text-primary"   // Primary text
className="text-brand-text-secondary" // Secondary text
```

### Custom Styling

```tsx
<Hero className="custom-styles" />
<CTASection className="mt-16" />
```

### Responsive Classes

```tsx
<div className="text-lg md:text-xl lg:text-2xl">
  Responsive Text
</div>
```

---

## Common Customizations

### Change Phone Number

Update in `PhoneButton` component or pass as prop:

```tsx
<PhoneButton phoneNumber="(405) 555-0123" />
```

### Change Grid Columns

```tsx
<ServicesGrid columns={3} />  // 2, 3, or 4
<CityGrid columns={4} />      // 3, 4, or 5
```

### Custom Section Headers

```tsx
<SectionHeader
  title="Our Services"
  subtitle="What We Offer"
  description="Comprehensive solutions"
  align="center" // "left", "center", "right"
/>
```

### Animation Delays

```tsx
<ServiceCard delay={0.1} />
<CityCard delay={0.05} />
```

---

## Form Validation

### Contact Form Fields

- First Name (required)
- Last Name (required)
- Email (required, validated)
- Phone (required, validated)
- Service Type (required, dropdown)
- Preferred Date (optional)
- Preferred Time (optional)
- Address (optional)
- City (optional)
- ZIP Code (optional)
- Message (required, min 10 chars)

### Quick Schedule Form Fields

- Full Name (required)
- Phone (required, validated)
- Email (required, validated)
- Service Type (required, dropdown)
- Urgency Level (required, dropdown)

---

## Icon Usage

```tsx
import { Wrench, Droplet, Flame, Zap } from "lucide-react";

// In component
icon={Wrench}

// Direct use
<Wrench className="w-6 h-6 text-brand-primary" />
```

Common icons for plumbing:
- `Wrench` - General plumbing
- `Droplet` - Water/drains
- `Flame` - Water heaters
- `Zap` - Emergency
- `Shield` - Licensed/Insured
- `Clock` - 24/7 Service
- `ThumbsUp` - Satisfaction
- `Users` - Local team

---

## Deployment Checklist

- [ ] Replace sample data with real content
- [ ] Add actual images to `/public/images/`
- [ ] Update phone numbers
- [ ] Implement form submission API
- [ ] Test on mobile devices
- [ ] Run accessibility audit
- [ ] Test all page variants
- [ ] Optimize images
- [ ] Test all forms
- [ ] Verify all links work

---

## File Locations

- **Components**: `src/components/`
- **Sample Data**: `src/data/sample-data.ts`
- **Documentation**: `src/components/README.md`
- **Example Page**: `src/app/example-page.tsx`
- **Public Images**: `public/images/`

---

## Need Help?

1. **Full Component Docs**: `src/components/README.md`
2. **Sample Data**: `src/data/sample-data.ts`
3. **Working Example**: `src/app/example-page.tsx`
4. **Component Guide**: `COMPONENTS_GUIDE.md`
5. **Summary**: `COMPONENTS_SUMMARY.md`

---

**Happy Building! 🎉**
