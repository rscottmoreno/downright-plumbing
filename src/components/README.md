# Down Right Plumbing - Reusable Components

This document provides an overview of all reusable components in the project and how to use them.

## 📁 Directory Structure

```
src/components/
├── sections/        # Full-width page sections
├── shared/          # Small reusable components
├── forms/           # Form components
├── layout/          # Layout components (header, footer)
├── seo/             # SEO components
└── ui/              # shadcn/ui base components
```

---

## 🎨 Sections Components

### Hero

Flexible hero section with multiple variants for different page types.

```tsx
import { Hero } from "@/components/sections";

<Hero
  variant="home" // "home" | "service" | "city" | "about"
  title="Professional Plumbing Services in Oklahoma"
  subtitle="24/7 Emergency Service"
  description="Trusted plumbing experts serving your community"
  backgroundImage="/images/hero-plumbing.jpg"
  showCTA={true}
  ctaText="Schedule Service"
  ctaHref="/contact"
/>
```

**Props:**
- `variant`: Visual style variant
- `title`: Main heading
- `subtitle`: Optional eyebrow text
- `description`: Supporting text
- `backgroundImage`: Hero background image
- `showCTA`: Whether to show call-to-action buttons
- `ctaText`: Primary CTA button text
- `ctaHref`: Primary CTA button link

---

### TrustBar

Animated statistics bar with counter animations.

```tsx
import { TrustBar } from "@/components/sections";

<TrustBar
  stats={[
    { value: 20, label: "Years Experience", suffix: "+" },
    { value: 5, label: "Star Google Rating" },
    { value: 5, label: "Days a Week Service" },
    { value: 0, label: "Hidden Fees", suffix: "" },
  ]}
/>
```

**Props:**
- `stats`: Array of stat objects with `value`, `label`, `suffix`, and optional `prefix`

---

### ServicesGrid

Grid layout for displaying service cards.

```tsx
import { ServicesGrid } from "@/components/sections";
import { Wrench, Droplet, Flame } from "lucide-react";

<ServicesGrid
  title="Our Services"
  subtitle="What We Offer"
  description="Comprehensive plumbing solutions"
  columns={3} // 2, 3, or 4
  services={[
    {
      title: "Drain Cleaning",
      description: "Professional drain cleaning services",
      icon: Droplet,
      href: "/services/drain-cleaning",
    },
    // ... more services
  ]}
/>
```

**Props:**
- `services`: Array of service objects
- `title`, `subtitle`, `description`: Section header content
- `columns`: Number of columns (2, 3, or 4)

---

### TestimonialsCarousel

Carousel component for customer testimonials.

```tsx
import { TestimonialsCarousel } from "@/components/sections";

<TestimonialsCarousel
  title="What Our Customers Say"
  subtitle="Testimonials"
  testimonials={[
    {
      quote: "Excellent service! Very professional.",
      author: "John Smith",
      role: "Homeowner",
      rating: 5,
      avatar: "/images/avatar.jpg", // optional
    },
    // ... more testimonials
  ]}
/>
```

**Props:**
- `testimonials`: Array of testimonial objects
- `title`, `subtitle`, `description`: Section header content

---

### CityGrid

Grid of city badges with links to location pages.

```tsx
import { CityGrid } from "@/components/sections";

<CityGrid
  title="Areas We Serve"
  subtitle="Service Locations"
  columns={4} // 3, 4, or 5
  cities={[
    { name: "Oklahoma City", href: "/locations/oklahoma-city", serviceCount: 12 },
    { name: "Edmond", href: "/locations/edmond", serviceCount: 10 },
    // ... more cities
  ]}
/>
```

**Props:**
- `cities`: Array of city objects
- `columns`: Number of columns (3, 4, or 5)
- `title`, `subtitle`, `description`: Section header content

---

### FAQSection

Accordion-style FAQ section.

```tsx
import { FAQSection } from "@/components/sections";

<FAQSection
  title="Frequently Asked Questions"
  subtitle="FAQs"
  questions={[
    {
      question: "Do you offer 24/7 emergency service?",
      answer: "Yes, we provide round-the-clock emergency plumbing services.",
    },
    // ... more FAQs
  ]}
/>
```

**Props:**
- `questions`: Array of FAQ objects with `question` and `answer`
- `title`, `subtitle`, `description`: Section header content

---

### CTASection

Call-to-action section with multiple variants.

```tsx
import { CTASection } from "@/components/sections";

<CTASection
  variant="standard" // "standard" | "emergency" | "warm"
  title="Ready to Get Started?"
  description="Contact us today for reliable plumbing services"
  primaryButtonText="Schedule Service"
  primaryButtonHref="/contact"
  showPhoneButton={true}
/>
```

**Variants:**
- `standard`: Blue gradient background
- `emergency`: Red/orange gradient for urgent messaging
- `warm`: Light background with dark text

---

### WhyChooseUs

Features grid showcasing business advantages.

```tsx
import { WhyChooseUs } from "@/components/sections";

<WhyChooseUs
  title="Why Choose Us?"
  subtitle="Our Commitment"
  reasons={[
    {
      title: "Licensed & Insured",
      description: "Fully licensed for your protection",
      icon: Shield,
    },
    // ... more reasons (uses default reasons if not provided)
  ]}
/>
```

**Props:**
- `reasons`: Array of reason objects (optional, uses defaults)
- `title`, `subtitle`, `description`: Section header content

---

### OurStoryTeaser

Story/about section with image and content.

```tsx
import { OurStoryTeaser } from "@/components/sections";

<OurStoryTeaser
  title="Our Story"
  description="Family-owned business serving Oklahoma for 15+ years..."
  image="/images/team-photo.jpg"
  buttonText="Learn More About Us"
  buttonHref="/our-story"
/>
```

**Props:**
- `title`, `description`: Content
- `image`: Team or company photo
- `buttonText`, `buttonHref`: CTA button

---

### RelatedServices

Grid of related service cards (similar to ServicesGrid).

```tsx
import { RelatedServices } from "@/components/sections";

<RelatedServices
  title="Related Services"
  subtitle="You May Also Need"
  services={[
    {
      title: "Water Heater Repair",
      description: "Expert water heater services",
      icon: Flame,
      href: "/services/water-heater",
    },
    // ... more services
  ]}
/>
```

---

## 🧩 Shared Components

### SectionHeader

Reusable section title/subtitle component.

```tsx
import { SectionHeader } from "@/components/shared";

<SectionHeader
  title="Our Services"
  subtitle="What We Offer"
  description="Comprehensive plumbing solutions"
  align="center" // "left" | "center" | "right"
  animate={true}
/>
```

---

### ServiceCard

Individual service card component.

```tsx
import { ServiceCard } from "@/components/shared";
import { Wrench } from "lucide-react";

<ServiceCard
  title="Drain Cleaning"
  description="Professional drain cleaning services"
  icon={Wrench}
  href="/services/drain-cleaning"
  delay={0.1} // animation delay
/>
```

---

### CityCard

Individual city badge/link component.

```tsx
import { CityCard } from "@/components/shared";

<CityCard
  name="Oklahoma City"
  href="/locations/oklahoma-city"
  serviceCount={12}
  delay={0.05}
/>
```

---

### TestimonialCard

Individual testimonial card.

```tsx
import { TestimonialCard } from "@/components/shared";

<TestimonialCard
  quote="Excellent service!"
  author="John Smith"
  role="Homeowner"
  rating={5}
  avatar="/images/avatar.jpg"
/>
```

---

### PhoneButton

Reusable click-to-call button.

```tsx
import { PhoneButton } from "@/components/shared";

<PhoneButton
  phoneNumber="(405) 555-0123"
  variant="default" // any Button variant
  size="lg"
  showText={true}
  text="Call Now"
/>
```

---

## 📝 Forms

### ContactForm

Full contact form with validation.

```tsx
import { ContactForm } from "@/components/forms";

<ContactForm
  onSuccess={() => console.log("Form submitted!")}
/>
```

**Features:**
- Full form validation with Zod
- First/Last name fields
- Email and phone validation
- Service type selection
- Preferred date/time
- Address fields (optional)
- Message textarea
- Loading states
- Toast notifications

---

### QuickScheduleForm

Simplified scheduling form for modals/popups.

```tsx
import { QuickScheduleForm } from "@/components/forms";

<QuickScheduleForm
  onSuccess={() => {
    // Close modal or perform action
  }}
/>
```

**Features:**
- Streamlined fields (name, phone, email, service, urgency)
- Quick validation
- Perfect for modals or floating CTAs
- Toast notifications

---

## 🎯 Usage Examples

### Homepage Example

```tsx
import {
  Hero,
  TrustBar,
  ServicesGrid,
  WhyChooseUs,
  TestimonialsCarousel,
  OurStoryTeaser,
  CTASection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero variant="home" title="..." />
      <TrustBar />
      <ServicesGrid services={services} />
      <WhyChooseUs />
      <TestimonialsCarousel testimonials={testimonials} />
      <OurStoryTeaser />
      <CTASection variant="standard" />
    </>
  );
}
```

### Service Page Example

```tsx
import {
  Hero,
  RelatedServices,
  FAQSection,
  CTASection,
} from "@/components/sections";

export default function ServicePage() {
  return (
    <>
      <Hero variant="service" title="Drain Cleaning Services" />
      {/* Service content */}
      <RelatedServices services={relatedServices} />
      <FAQSection questions={faqs} />
      <CTASection variant="warm" />
    </>
  );
}
```

### City/Location Page Example

```tsx
import {
  Hero,
  ServicesGrid,
  TestimonialsCarousel,
  CTASection,
} from "@/components/sections";

export default function CityPage() {
  return (
    <>
      <Hero variant="city" title="Plumbing Services in Oklahoma City" />
      <ServicesGrid services={services} columns={4} />
      <TestimonialsCarousel testimonials={localTestimonials} />
      <CTASection variant="emergency" />
    </>
  );
}
```

---

## 🎨 Styling & Customization

All components use:
- **Tailwind CSS** for styling
- **Custom brand colors** from `tailwind.config.ts`
- **Framer Motion** for animations
- **shadcn/ui** components as base

### Brand Colors Available

```tsx
className="text-brand-primary"        // Primary blue
className="bg-brand-secondary"        // Secondary color
className="text-brand-accent"         // Accent color
className="text-brand-text-primary"   // Primary text color
className="text-brand-text-secondary" // Secondary text color
```

### Custom Styling

All components accept a `className` prop for additional customization:

```tsx
<Hero
  className="custom-hero-styles"
  title="..."
/>
```

---

## ♿ Accessibility

All components include:
- Proper ARIA labels
- Semantic HTML
- Keyboard navigation support
- Screen reader friendly
- Focus management

---

## 📱 Responsive Design

All components are fully responsive with breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

---

## 🚀 Performance

Components are optimized with:
- Lazy loading where appropriate
- Optimized animations (GPU-accelerated)
- Efficient re-renders
- Image optimization with Next.js Image

---

## 📦 Import Patterns

```tsx
// Import multiple components from sections
import { Hero, TrustBar, CTASection } from "@/components/sections";

// Import shared components
import { SectionHeader, PhoneButton } from "@/components/shared";

// Import forms
import { ContactForm, QuickScheduleForm } from "@/components/forms";

// Import individual component
import { Hero } from "@/components/sections/hero";
```

---

## 🔧 TypeScript Support

All components are fully typed with TypeScript interfaces. Hover over props in your IDE for documentation.

---

## 📝 Notes

1. **Phone Number**: Update the default phone number in `PhoneButton` component
2. **Images**: Ensure all image paths exist in your `/public/images` directory
3. **Forms**: Implement actual API endpoints in form submission handlers
4. **Colors**: Customize brand colors in `tailwind.config.ts`
5. **Icons**: All icons use Lucide React (already installed)

---

## 🆘 Support

For questions or issues, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
