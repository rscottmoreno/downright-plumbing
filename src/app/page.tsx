'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Phone,
  Clock,
  Shield,
  Star,
  Wrench,
  Droplets,
  Flame,
  Search,
  Bath,
  CookingPot,
  Grip,
  Gauge,
  Toilet,
  Droplet,
  Wind,
  CheckCircle2,
  Users,
  DollarSign,
  CalendarCheck,
  Award,
  Heart,
  MapPin,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

// Animated Counter Component
function AnimatedCounter({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration, hasAnimated]);

  return (
    <span ref={ref} className="font-bold text-4xl md:text-5xl text-amber-600">
      {count}
      {suffix}
    </span>
  );
}

// Testimonial Carousel Component
function TestimonialCarousel() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      city: 'Rockwall, TX',
      rating: 5,
      text: 'Called them for a burst pipe issue. They arrived quickly the same day and fixed it professionally. Excellent service and communication!',
    },
    {
      name: 'Michael Chen',
      city: 'Heath, TX',
      rating: 5,
      text: 'Best plumbers in DFW! They replaced our old water heater with upfront pricing - no surprises. Highly recommend!',
    },
    {
      name: 'Jennifer Martinez',
      city: 'Fate, TX',
      rating: 5,
      text: 'Downright Plumbing cleared our stubborn drain when others couldn\'t. Professional, honest, and reasonably priced.',
    },
    {
      name: 'David Thompson',
      city: 'Royse City, TX',
      rating: 5,
      text: 'They repiped our entire house! The crew was respectful, clean, and the quality is outstanding. Worth every penny.',
    },
    {
      name: 'Lisa Anderson',
      city: 'Garland, TX',
      rating: 5,
      text: 'Found a hidden leak in our walls that could have caused major damage. Their leak detection technology is impressive!',
    },
    {
      name: 'Robert Williams',
      city: 'Rowlett, TX',
      rating: 5,
      text: 'Family-owned and it shows. They treat your home like their own. Fixed our kitchen faucet and checked everything else for free.',
    },
    {
      name: 'Amanda Brown',
      city: 'Wylie, TX',
      rating: 5,
      text: 'Bathroom renovation exceeded expectations! Beautiful work and they stayed on schedule. True professionals.',
    },
    {
      name: 'James Davis',
      city: 'Mesquite, TX',
      rating: 5,
      text: 'Sewer line repair done right the first time. No hidden fees, just honest work. These guys are the real deal!',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
      >
        <div className="flex gap-1 mb-4">
          {[...Array(current.rating)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-amber-500 text-amber-500" />
          ))}
        </div>
        <p className="text-xl md:text-2xl text-gray-700 mb-6 italic leading-relaxed">
          &quot;{current.text}&quot;
        </p>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-lg text-gray-900">{current.name}</p>
            <p className="text-gray-500">{current.city}</p>
          </div>
        </div>
      </motion.div>

      {/* Navigation arrows - hidden on very small screens, use dots instead */}
      <button
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-16 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-amber-50 transition-colors hidden sm:block"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-16 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-amber-50 transition-colors hidden sm:block"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
      </button>

      {/* Dots navigation + mobile prev/next */}
      <div className="flex items-center justify-center gap-3 mt-8">
        <button
          onClick={prevTestimonial}
          className="sm:hidden p-2 rounded-full bg-white shadow hover:bg-amber-50 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5 text-amber-600" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === currentIndex ? 'bg-amber-600 w-8' : 'bg-gray-300 w-2'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextTestimonial}
          className="sm:hidden p-2 rounded-full bg-white shadow hover:bg-amber-50 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5 text-amber-600" />
        </button>
      </div>
    </div>
  );
}

// FAQ Accordion Component
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What are your business hours?',
      answer: 'We are open Monday through Friday, 8 AM to 5 PM. We provide upfront pricing before we start any work, and we\'ll give you a detailed quote for the repair. Most service calls in Rockwall range from $150-$500 depending on complexity. We never surprise you with hidden fees.',
    },
    {
      question: 'Do you offer same-day service?',
      answer: 'Yes! We offer same-day service for urgent plumbing issues throughout Rockwall and the DFW Metroplex whenever possible. When you call us during business hours (Monday-Friday, 8 AM - 5 PM) at (214) 802-3042, we\'ll work to get a licensed plumber to your location as quickly as we can.',
    },
    {
      question: 'How do I know if I need drain cleaning or pipe replacement?',
      answer: 'Our licensed plumbers use advanced camera inspection technology to diagnose drain issues accurately. If you have recurring clogs, slow drains, or foul odors, we\'ll inspect the line and provide honest recommendations. Many issues can be resolved with professional drain cleaning, but we\'ll let you know if pipe replacement is necessary.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, checks, and all major credit cards including Visa, MasterCard, American Express, and Discover. We provide upfront pricing before starting any work so there are never any surprises.',
    },
    {
      question: 'Are you licensed and insured plumbers?',
      answer: 'Absolutely. All our plumbers are fully licensed, insured, and background-checked. We maintain all required Texas plumbing licenses and carry comprehensive liability insurance for your protection. You can trust that your home is in professional, qualified hands.',
    },
    {
      question: 'What areas do you service besides Rockwall?',
      answer: 'We proudly serve Rockwall and the surrounding DFW Metroplex including Heath, Fate, Royse City, Rowlett, Garland, Wylie, Mesquite, Greenville, Forney, Terrell, and more. If you\'re in the DFW area, give us a call - we likely service your location!',
    },
    {
      question: 'How quickly can you respond to service calls?',
      answer: 'For urgent issues during business hours (Monday-Friday, 8 AM - 5 PM), we strive to arrive as quickly as possible, often within 1-2 hours in the Rockwall area. We also offer same-day and next-day scheduled appointments in most cases. We respect your time and always provide accurate arrival windows.',
    },
    {
      question: 'Do you offer free estimates?',
      answer: 'Yes! We provide free, no-obligation estimates for most plumbing projects. For service calls, we charge a diagnostic fee that is waived when you proceed with the repair. We believe in transparent, upfront pricing with no hidden fees or surprises.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-lg text-gray-900 pr-4">{faq.question}</span>
            {openIndex === index ? (
              <Minus className="w-5 h-5 text-amber-600 flex-shrink-0" />
            ) : (
              <Plus className="w-5 h-5 text-amber-600 flex-shrink-0" />
            )}
          </button>
          {openIndex === index && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="px-6 pb-5"
            >
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default function HomePage() {
  // Hero scroll indicator animation
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Section 1: Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-amber-900" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Downright Honest.
              <br />
              <span className="text-amber-400">Downright Reliable.</span>
              <br />
              Downright the Best Plumbers in Rockwall.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto"
          >
            Family-owned plumbing excellence serving Rockwall & DFW. 
            Honest, reliable service you can trust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link
              href="/contact"
              className="bg-brand-red hover:bg-brand-red-light text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-2xl shadow-brand-red/40 inline-flex items-center gap-2"
            >
              <CalendarCheck className="w-6 h-6" />
              Schedule Service
            </Link>
            <a
              href="tel:2148023042"
              className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-2xl inline-flex items-center gap-2"
            >
              <Phone className="w-6 h-6" />
              Call Now: (214) 802-3042
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-3 border border-white/20">
              <div className="flex items-center gap-2 text-white">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                <span className="font-bold">5.0 Stars</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-3 border border-white/20">
              <div className="flex items-center gap-2 text-white">
                <Shield className="w-5 h-5 text-amber-400" />
                <span className="font-bold">Licensed & Insured</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        {showScrollIndicator && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-white"
            >
              <span className="text-sm">Scroll to explore</span>
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        )}
      </section>

      {/* Section 2: Trust Bar */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <AnimatedCounter end={20} suffix="+" />
              <p className="text-white/90 mt-2 text-lg">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 flex items-center justify-center gap-2">
                5.0<Star className="w-10 h-10 fill-amber-400 text-amber-400" />
              </div>
              <p className="text-white/90 mt-2 text-lg">Google Rating</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-400">100%</div>
              <p className="text-white/90 mt-2 text-lg">Satisfaction Guarantee</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-400">Fast</div>
              <p className="text-white/90 mt-2 text-lg">Same-Day Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Plumbing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive plumbing solutions for your home or business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                icon: Wrench,
                title: 'Plumbing Repairs',
                description: 'Fast, reliable repairs for burst pipes, leaks, and urgent issues',
                link: '/services/plumbing-repairs',
              },
              {
                icon: Droplets,
                title: 'Drain Cleaning',
                description: 'Professional drain and sewer cleaning using advanced equipment',
                link: '/services/drain-cleaning',
              },
              {
                icon: Flame,
                title: 'Water Heater Services',
                description: 'Installation, repair, and replacement of all water heater types',
                link: '/services/water-heater-repair',
              },
              {
                icon: Search,
                title: 'Leak Detection',
                description: 'Advanced technology to find hidden leaks and prevent damage',
                link: '/services/leak-detection',
              },
              {
                icon: Bath,
                title: 'Bathroom Plumbing',
                description: 'Complete bathroom remodeling and fixture installation',
                link: '/services/bathroom-plumbing',
              },
              {
                icon: CookingPot,
                title: 'Kitchen Plumbing',
                description: 'Kitchen sink, faucet, and appliance installation & repair',
                link: '/services/kitchen-plumbing',
              },
              {
                icon: Grip,
                title: 'Sewer Line Services',
                description: 'Sewer line repair, replacement, and camera inspection',
                link: '/services/sewer-line-repair',
              },
              {
                icon: Droplet,
                title: 'Water Line Services',
                description: 'Water line repair, replacement, and installation',
                link: '/services/water-line-repair',
              },
              {
                icon: Gauge,
                title: 'Garbage Disposal',
                description: 'Installation, repair, and replacement of garbage disposals',
                link: '/services/garbage-disposal',
              },
              {
                icon: Toilet,
                title: 'Toilet Repair',
                description: 'Toilet installation, repair, and replacement services',
                link: '/services/toilet-repair',
              },
              {
                icon: Droplets,
                title: 'Faucet Services',
                description: 'Faucet installation, repair, and leak fixes',
                link: '/services/faucet-installation',
              },
              {
                icon: Wind,
                title: 'Gas Line Services',
                description: 'Safe gas line installation, repair, and leak detection',
                link: '/services/gas-line-services',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 group"
              >
                <div className="bg-amber-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500 transition-colors">
                  <service.icon className="w-7 h-7 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="text-amber-600 font-semibold hover:text-amber-700 inline-flex items-center gap-1 group/link"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Why Downright Plumbing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Downright Plumbing?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We're not just plumbers—we're your neighbors, committed to delivering 
                honest, reliable service every time.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: DollarSign,
                    title: 'Upfront Pricing',
                    description: 'No hidden fees or surprises. You know the cost before we start.',
                  },
                  {
                    icon: Shield,
                    title: 'Licensed & Insured',
                    description: 'Fully licensed master plumber with 20+ years of verified experience.',
                  },
                  {
                    icon: Clock,
                    title: 'Same-Day Service',
                    description: 'Most repairs completed the same day you call.',
                  },
                  {
                    icon: CheckCircle2,
                    title: '100% Satisfaction Guarantee',
                    description: 'We stand behind our work with a comprehensive warranty.',
                  },
                  {
                    icon: Heart,
                    title: 'Family-Owned & Operated',
                    description: 'Local business that treats you like family.',
                  },
                  {
                    icon: Award,
                    title: '20+ Years of Expertise',
                    description: 'Two decades of hands-on plumbing experience you can rely on.',
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-amber-900 rounded-2xl shadow-2xl p-8 md:p-10 text-white">
                <div className="text-center mb-8">
                  <Wrench className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">The Downright Promise</h3>
                  <p className="text-white/80 text-sm">New company. Veteran plumber.</p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-400">20+</div>
                    <div className="text-xs text-white/70 mt-1">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-400">5.0★</div>
                    <div className="text-xs text-white/70 mt-1">Google Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-400">100%</div>
                    <div className="text-xs text-white/70 mt-1">Satisfaction Guarantee</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-400">TX</div>
                    <div className="text-xs text-white/70 mt-1">Licensed Master Plumber</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold">5.0★</div>
                <div className="text-sm">Google Rating</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Our Story Teaser */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 mb-6 bg-white px-6 py-3 rounded-full shadow-md">
              <Heart className="w-6 h-6 text-amber-600" />
              <span className="font-semibold text-gray-900">Our Story</span>
            </div>

            <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-800 mb-8 leading-relaxed">
              &quot;Our daughter was born with Down syndrome in 2006. She inspired 
              the name &apos;Downright&apos;—and after 20 years as a plumber, she 
              inspired me to finally build something of my own.&quot;
            </blockquote>

            <p className="text-lg text-gray-700 mb-4 leading-relaxed max-w-2xl mx-auto">
              Downright Plumbing is more than a business—it&apos;s a family mission. 
              After two decades of plumbing experience, Doug White launched Downright 
              Plumbing in January 2026, naming it after the daughter who taught him 
              what truly matters: integrity, heart, and doing things the right way.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              New company, veteran plumber. Every service call is an opportunity to 
              prove that honest, quality plumbing still exists.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-xl"
            >
              Read Our Full Story
              <ChevronRight className="w-5 h-5" />
            </Link>

            <div className="mt-8 inline-flex items-center gap-3 bg-blue-100 px-6 py-3 rounded-lg">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <div className="text-left">
                <div className="font-bold text-blue-900">Down Syndrome Awareness</div>
                <div className="text-sm text-blue-700">Proud supporters of inclusion</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real reviews from real customers across DFW
            </p>
          </motion.div>

          <TestimonialCarousel />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold text-lg"
            >
              Read More Reviews
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Proudly Serving Rockwall & DFW Metroplex
            </h2>
            <p className="text-xl text-gray-600">
              Professional plumbing services throughout the Dallas-Fort Worth area
            </p>
          </motion.div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
            {[
              'Rockwall',
              'Heath',
              'Fate',
              'Royse City',
              'Rowlett',
              'Garland',
              'Wylie',
              'Mesquite',
              'Greenville',
              'Forney',
              'Terrell',
              'Sunnyvale',
              'McLendon-Chisholm',
              'Mobile City',
              'Sachse',
              'Murphy',
              'Plano',
              'Richardson',
              'Dallas',
              'Balch Springs',
              'Seagoville',
              'Kaufman',
            ].map((city, index) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <Link
                  href={`/service-areas/${city.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block bg-gradient-to-br from-blue-50 to-amber-50 hover:from-amber-100 hover:to-orange-100 rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-all group"
                >
                  <MapPin className="w-5 h-5 text-amber-600 mx-auto mb-1 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-gray-900 text-sm">{city}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">
              Don't see your city? Give us a call! We serve many more areas throughout DFW.
            </p>
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-full transition-all"
            >
              View All Service Areas
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 8: FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common plumbing questions
            </p>
          </motion.div>

          <FAQAccordion />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">
              Have more questions? We're here to help!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold text-lg"
            >
              Contact Us
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 9: Final CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-red via-red-800 to-brand-red" />

        {/* Decorative floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-20 left-10 w-20 h-20 bg-amber-500/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [0, 30, 0],
              rotate: [0, -5, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [0, -25, 0],
              rotate: [0, 10, 0],
            }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute top-1/2 right-10 w-24 h-24 bg-amber-400/20 rounded-full blur-xl"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Experience the
              <br />
              <span className="text-amber-400">Downright Difference?</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
              20+ years of experience. Brand new company. Same commitment 
              to honest, reliable plumbing service in Rockwall &amp; DFW.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-100 text-brand-red font-bold py-5 px-10 rounded-full text-xl transition-all transform hover:scale-105 shadow-2xl inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <CalendarCheck className="w-6 h-6" />
                Schedule Service Now
              </Link>
              <a
                href="tel:2148023042"
                className="bg-transparent hover:bg-white/10 text-white font-bold py-5 px-10 rounded-full text-xl transition-all transform hover:scale-105 shadow-2xl border-2 border-white inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Phone className="w-6 h-6" />
                Call (214) 802-3042
              </a>
            </div>

            <p className="text-white/80 mt-8 text-sm">
              Monday-Friday, 8 AM - 5 PM &bull; Licensed & Insured &bull; 100% Satisfaction Guaranteed
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
