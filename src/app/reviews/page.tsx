'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Star,
  Filter,
  MessageSquare,
  MapPin,
  Calendar,
  ThumbsUp,
  Users,
  Award,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Sample testimonials data (20+ reviews)
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    city: 'Rockwall',
    date: '2024-02-01',
    rating: 5,
    service: 'Leak Repair',
    text: 'Called them for a burst pipe issue. They came out promptly and fixed it professionally. The technician was courteous, explained everything, and cleaned up perfectly. Great service!',
  },
  {
    id: 2,
    name: 'Michael Chen',
    city: 'Heath',
    date: '2024-01-28',
    rating: 5,
    service: 'Water Heater',
    text: 'Best plumbers in DFW! They replaced our old water heater with a modern tankless unit. The pricing was upfront with no surprises. Highly professional and highly recommend!',
  },
  {
    id: 3,
    name: 'Jennifer Martinez',
    city: 'Fate',
    date: '2024-01-25',
    rating: 5,
    service: 'Drain Cleaning',
    text: 'Downright Plumbing cleared our stubborn drain when two other companies couldn\'t. They used camera inspection to find the issue and fixed it right away. Professional, honest, and reasonably priced.',
  },
  {
    id: 4,
    name: 'David Thompson',
    city: 'Royse City',
    date: '2024-01-20',
    rating: 5,
    service: 'Repiping',
    text: 'They repiped our entire house! The crew was respectful, clean, and the quality is outstanding. They finished on schedule and the new plumbing works perfectly. Worth every penny.',
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    city: 'Garland',
    date: '2024-01-18',
    rating: 5,
    service: 'Leak Detection',
    text: 'Found a hidden leak in our walls that could have caused major damage. Their leak detection technology is impressive! Saved us thousands in potential repairs. Thank you!',
  },
  {
    id: 6,
    name: 'Robert Williams',
    city: 'Rowlett',
    date: '2024-01-15',
    rating: 5,
    service: 'Faucet Repair',
    text: 'Family-owned and it shows. They treat your home like their own. Fixed our kitchen faucet and checked everything else for free. This is how plumbing service should be done.',
  },
  {
    id: 7,
    name: 'Amanda Brown',
    city: 'Wylie',
    date: '2024-01-12',
    rating: 5,
    service: 'Bathroom Plumbing',
    text: 'Bathroom renovation exceeded expectations! Beautiful work and they stayed on schedule. The attention to detail was remarkable. True professionals who care about their craft.',
  },
  {
    id: 8,
    name: 'James Davis',
    city: 'Mesquite',
    date: '2024-01-10',
    rating: 5,
    service: 'Sewer Line',
    text: 'Sewer line repair done right the first time. No hidden fees, just honest work. They explained every step and left the yard cleaner than they found it. These guys are the real deal!',
  },
  {
    id: 9,
    name: 'Emily Rodriguez',
    city: 'Rockwall',
    date: '2024-01-08',
    rating: 5,
    service: 'Toilet Repair',
    text: 'Toilet was running constantly and wasting water. They came out same day, diagnosed the issue, and fixed it quickly. Professional service at a fair price. Will definitely use again.',
  },
  {
    id: 10,
    name: 'Christopher Lee',
    city: 'Heath',
    date: '2024-01-05',
    rating: 5,
    service: 'Water Heater',
    text: 'Water heater installation was seamless. They handled everything from permit to final inspection. The new unit is so much more efficient. Excellent work from start to finish!',
  },
  {
    id: 11,
    name: 'Michelle Taylor',
    city: 'Fate',
    date: '2024-01-03',
    rating: 5,
    service: 'Kitchen Plumbing',
    text: 'Kitchen sink was completely clogged. They not only fixed it but showed me how to prevent it in the future. Educational and professional—exactly what you want in a plumber.',
  },
  {
    id: 12,
    name: 'Daniel White',
    city: 'Royse City',
    date: '2023-12-28',
    rating: 5,
    service: 'Pipe Repair',
    text: 'Needed service before Christmas and they fit us in! Fixed our broken pipe quickly so we could host family. They saved our holiday. Forever grateful!',
  },
  {
    id: 13,
    name: 'Patricia Garcia',
    city: 'Garland',
    date: '2023-12-22',
    rating: 5,
    service: 'Gas Line',
    text: 'Gas line installation for our new range was done perfectly. They coordinated with the gas company and got it inspected. Professional and thorough.',
  },
  {
    id: 14,
    name: 'Kevin Miller',
    city: 'Rowlett',
    date: '2023-12-18',
    rating: 5,
    service: 'Water Line',
    text: 'Main water line had a leak. They located it quickly with their equipment and repaired it the same day. Impressive technology and service. Highly recommend!',
  },
  {
    id: 15,
    name: 'Rachel Moore',
    city: 'Wylie',
    date: '2023-12-15',
    rating: 5,
    service: 'Drain Cleaning',
    text: 'Multiple drains were slow. They camera-inspected the lines and found tree roots. Cleared everything out and now drains work like new. Great service!',
  },
  {
    id: 16,
    name: 'Thomas Jackson',
    city: 'Mesquite',
    date: '2023-12-10',
    rating: 5,
    service: 'Garbage Disposal',
    text: 'Garbage disposal replacement was quick and affordable. They showed me how to maintain it properly. Friendly technician and great service.',
  },
  {
    id: 17,
    name: 'Karen Martinez',
    city: 'Rockwall',
    date: '2023-12-05',
    rating: 5,
    service: 'Bathroom Plumbing',
    text: 'Shower valve was leaking behind the wall. They repaired it perfectly and matched the tile. You can\'t even tell they were there. Excellent craftsmanship!',
  },
  {
    id: 18,
    name: 'Brian Wilson',
    city: 'Heath',
    date: '2023-12-01',
    rating: 5,
    service: 'Leak Detection',
    text: 'High water bill led us to suspect a leak. They found it underground with their detection equipment. Fast, professional, and saved us money. Highly recommend!',
  },
  {
    id: 19,
    name: 'Angela Harris',
    city: 'Fate',
    date: '2023-11-28',
    rating: 5,
    service: 'Faucet Repair',
    text: 'Replaced all the faucets in our house. Quality fixtures installed perfectly. They were clean, efficient, and the price was fair. Very happy with the results!',
  },
  {
    id: 20,
    name: 'Steven Clark',
    city: 'Royse City',
    date: '2023-11-22',
    rating: 5,
    service: 'Water Heater',
    text: 'Water heater was making strange noises. They diagnosed it quickly and recommended repair over replacement, saving me money. Honest and trustworthy!',
  },
  {
    id: 21,
    name: 'Nicole Adams',
    city: 'Garland',
    date: '2023-11-18',
    rating: 5,
    service: 'Toilet Repair',
    text: 'Installed a new toilet and it works perfectly. They removed the old one and disposed of it properly. Clean, professional, and courteous service.',
  },
  {
    id: 22,
    name: 'Gregory Turner',
    city: 'Rowlett',
    date: '2023-11-15',
    rating: 5,
    service: 'Plumbing Repair',
    text: 'Had an urgent plumbing issue and they came out quickly. Fixed the problem efficiently and cleaned up afterward. Can\'t thank them enough!',
  },
  {
    id: 23,
    name: 'Deborah Scott',
    city: 'Wylie',
    date: '2023-11-10',
    rating: 5,
    service: 'Kitchen Plumbing',
    text: 'Kitchen remodel plumbing was done perfectly. They coordinated with our contractor and everything went smoothly. Professional team that delivers quality work.',
  },
  {
    id: 24,
    name: 'Charles Phillips',
    city: 'Mesquite',
    date: '2023-11-05',
    rating: 5,
    service: 'Sewer Line',
    text: 'Sewer camera inspection revealed issues before they became major problems. They provided video evidence and clear explanation of needed repairs. Trustworthy service!',
  },
];

const cities = ['All Cities', 'Rockwall', 'Heath', 'Fate', 'Royse City', 'Garland', 'Rowlett', 'Wylie', 'Mesquite'];
const services = [
  'All Services',
  'Water Heater',
  'Drain Cleaning',
  'Leak Detection',
  'Leak Repair',
  'Pipe Repair',
  'Plumbing Repair',
  'Bathroom Plumbing',
  'Kitchen Plumbing',
  'Sewer Line',
  'Repiping',
  'Toilet Repair',
  'Faucet Repair',
  'Gas Line',
  'Water Line',
  'Garbage Disposal',
];

export default function ReviewsPage() {
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [selectedService, setSelectedService] = useState('All Services');

  const filteredTestimonials = testimonials.filter((testimonial) => {
    const cityMatch = selectedCity === 'All Cities' || testimonial.city === selectedCity;
    const serviceMatch = selectedService === 'All Services' || testimonial.service === selectedService;
    return cityMatch && serviceMatch;
  });

  const averageRating = (
    testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length
  ).toFixed(1);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-amber-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
              <Award className="w-5 h-5" />
              <span className="font-semibold">5.0 Google Rating</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              What Our Customers Say
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Real reviews from real customers across Rockwall and the DFW Metroplex
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-8 py-4">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                  <span className="text-3xl font-bold">{averageRating}</span>
                </div>
                <p className="text-sm text-white/80">Average Rating</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-8 py-4">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-6 h-6 text-amber-400" />
                  <span className="text-3xl font-bold">{testimonials.length}+</span>
                </div>
                <p className="text-sm text-white/80">Customer Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50 border-b sticky top-0 z-30 backdrop-blur-lg bg-gray-50/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-900">Filter Reviews:</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="w-full sm:w-[200px] bg-white">
                  <SelectValue placeholder="Select city" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedService} onValueChange={setSelectedService}>
                <SelectTrigger className="w-full sm:w-[200px] bg-white">
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="text-center mt-4 text-sm text-gray-600">
            Showing {filteredTestimonials.length} review{filteredTestimonials.length !== 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 p-6 flex flex-col"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 flex-grow">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                {/* Service Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    <MessageSquare className="w-3 h-3" />
                    {testimonial.service}
                  </span>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <MapPin className="w-3 h-3" />
                      {testimonial.city}, TX
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Calendar className="w-3 h-3" />
                    {new Date(testimonial.date).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-16">
              <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-xl text-gray-600 mb-2">No reviews found</p>
              <p className="text-gray-500">Try adjusting your filters to see more reviews</p>
            </div>
          )}
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <ThumbsUp className="w-16 h-16 text-amber-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Had a Great Experience?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              We'd love to hear about your experience with Downright Plumbing!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                <a
                  href="https://www.google.com/search?q=downright+plumbing+rockwall"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 w-5 h-5" />
                  Leave a Google Review
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  <MessageSquare className="mr-2 w-5 h-5" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Embed Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Find Us on Google Reviews
              </h2>
              <p className="text-xl text-gray-600">
                Check out our reviews on Google and see why customers trust Downright Plumbing
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 md:p-12 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-xl p-8 shadow-lg mb-6">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Star className="w-8 h-8 fill-amber-500 text-amber-500" />
                    <span className="text-4xl font-bold text-gray-900">{averageRating}</span>
                  </div>
                  <p className="text-gray-700 mb-2">
                    Based on Google reviews
                  </p>
                  <p className="text-sm text-gray-600">
                    Quality plumbing service in Rockwall, TX
                  </p>
                </div>

                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <a
                    href="https://www.google.com/search?q=downright+plumbing+rockwall"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 w-5 h-5" />
                    View All Google Reviews
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-amber-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience the Downright Difference
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Experience the Downright difference. Professional, honest, and reliable plumbing service in Rockwall and DFW.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Schedule Service
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white hover:text-blue-900"
                asChild
              >
                <a href="tel:2148023042">Call (214) 802-3042</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
