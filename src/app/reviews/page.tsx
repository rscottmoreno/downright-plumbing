'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Star,
  MessageSquare,
  ThumbsUp,
  Award,
  ExternalLink,
  ChevronRight,
  Quote,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => { setHydrated(true); }, []);
  return hydrated;
}

// Real Google Reviews - copy-pasted from actual Google page
const googleReviews = [
  {
    id: 1,
    name: 'Mark Harper',
    rating: 5,
    timeAgo: '4 weeks ago',
    text: 'My water heater broke late in the afternoon. I called Down Right Plumbing and they were able to get to me very quickly. I had both my tanks replaced (One was bad and the other was not far from failing) and was back up in running the same day. Doug was very professional and did a great job leaving my home in great shape.',
    ownerReply: 'Thank you Mark!',
  },
  {
    id: 2,
    name: 'Alex Hernandez',
    rating: 5,
    timeAgo: '3 weeks ago',
    text: 'We thought we had a burst pipe. Over the phone, he asked some questions and knew exactly what was wrong. He came quickly and fixed the issue within 30 minutes. He charged less than half of what another plumber was going to charge. Highly recommend!',
    ownerReply: 'Thank you Alex!',
  },
  {
    id: 3,
    name: 'Joe & Chantelle Marchant',
    rating: 5,
    timeAgo: '2 weeks ago',
    text: 'Quick to answer & communicate, realistic expectations, trustworthy, affordable - THANK YOU Doug for saving us before the winter storm recently.',
    ownerReply: "I'm glad to help! Thank you for the review.",
  },
  {
    id: 4,
    name: 'Jason Erwin',
    rating: 5,
    timeAgo: '3 weeks ago',
    text: 'Doug was amazing, very good value. Prompt and efficient.',
    ownerReply: 'Thank you Jason!',
  },
  {
    id: 5,
    name: 'Morgan',
    rating: 5,
    timeAgo: '3 weeks ago',
    text: "You can trust him completely, he's as honest as they come.",
    ownerReply: 'Thank you Morgan!',
  },
];

export default function ReviewsPage() {
  const hydrated = useHydrated();
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
              Real reviews from real customers — straight from our Google Business page
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-8 py-4">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                  <span className="text-3xl font-bold">5.0</span>
                </div>
                <p className="text-sm text-white/80">Google Rating</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-8 py-4">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-white/80">All 5-Star Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Verified Google Reviews
              </h2>
              <p className="text-lg text-gray-600">
                Every review below is from a real customer on our Google Business profile
              </p>
            </div>

            <div className="space-y-8">
              {googleReviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={hydrated ? { opacity: 0, y: 40, scale: 0.95 } : false}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 12,
                    delay: index * 0.15,
                  }}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden"
                >
                  {/* Review Content */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        {/* Avatar Initial */}
                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg shrink-0">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">{review.name}</h3>
                          <p className="text-sm text-gray-500">{review.timeAgo}</p>
                        </div>
                      </div>
                      {/* Google G icon */}
                      <div className="shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="text-sm font-bold text-gray-500">G</span>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                      {review.text}
                    </p>
                  </div>

                  {/* Owner Reply */}
                  {review.ownerReply && (
                    <div className="bg-blue-50 border-t border-blue-100 px-6 md:px-8 py-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs shrink-0 mt-0.5">
                          DR
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-blue-900 mb-1">
                            Down Right Plumbing (Owner)
                          </p>
                          <p className="text-sm text-blue-800">{review.ownerReply}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
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
              We&apos;d love to hear about your experience with Down Right Plumbing!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                <a
                  href="https://www.google.com/search?q=down+right+plumbing+rockwall+tx"
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

      {/* Highlighted Quotes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Customers Choose Down Right Plumbing
              </h2>
              <p className="text-xl text-gray-600">
                Hear it in their words
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <Quote className="w-10 h-10 text-amber-500 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-800 italic mb-4">
                  &ldquo;He charged less than half of what another plumber was going to charge.&rdquo;
                </p>
                <p className="text-sm font-semibold text-blue-600">— Alex Hernandez</p>
              </div>
              <div className="text-center p-6">
                <Quote className="w-10 h-10 text-amber-500 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-800 italic mb-4">
                  &ldquo;Quick to answer & communicate, realistic expectations, trustworthy, affordable.&rdquo;
                </p>
                <p className="text-sm font-semibold text-blue-600">— Joe & Chantelle Marchant</p>
              </div>
              <div className="text-center p-6">
                <Quote className="w-10 h-10 text-amber-500 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-800 italic mb-4">
                  &ldquo;You can trust him completely, he&apos;s as honest as they come.&rdquo;
                </p>
                <p className="text-sm font-semibold text-blue-600">— Morgan</p>
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
              Experience the Down Right Difference
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Professional, honest, and reliable plumbing service in Rockwall and DFW.
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
