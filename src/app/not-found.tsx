'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Home,
  Phone,
  Search,
  Wrench,
  MapPin,
  Mail,
  ArrowRight,
  Droplet,
  Flame,
  AlertCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const popularPages = [
  {
    title: 'Plumbing Services',
    description: 'Professional plumbing solutions',
    href: '/services',
    icon: Wrench,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Water Heater Services',
    description: 'Installation, repair & replacement',
    href: '/services/water-heater',
    icon: Flame,
    bgColor: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    title: 'Drain Cleaning',
    description: 'Professional drain & sewer cleaning',
    href: '/services/drain-cleaning',
    icon: Droplet,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Service Areas',
    description: 'Areas we serve in DFW',
    href: '/service-areas',
    icon: MapPin,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    title: 'Contact Us',
    description: 'Get in touch with us',
    href: '/contact',
    icon: Mail,
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    title: 'All Services',
    description: 'View our complete service list',
    href: '/services',
    icon: Wrench,
    bgColor: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
];

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real implementation, this would redirect to a search results page
      // For now, we'll redirect to the services page
      window.location.href = '/services';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Animated 404 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="relative inline-block">
                {/* Decorative pipes around 404 */}
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-24 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full hidden md:block" />
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-24 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full hidden md:block" />
                
                <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-blue-700 to-amber-600 leading-none">
                  404
                </h1>
                
                {/* Dripping water animation */}
                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 -translate-x-1/2 -bottom-4"
                >
                  <Droplet className="w-8 h-8 text-blue-500 fill-blue-500" />
                </motion.div>
              </div>
            </motion.div>

            {/* Error Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Oops! This Pipe Leads Nowhere
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Looks like this page sprung a leak! The page you're looking for doesn't exist or has been moved.
              </p>
            </motion.div>

            {/* Search Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-xl mx-auto mb-12"
            >
              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search for plumbing services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-4 h-14 text-lg rounded-full border-2 border-gray-200 focus:border-blue-500"
                  />
                </div>
              </form>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                <Link href="/">
                  <Home className="mr-2 w-5 h-5" />
                  Back to Home
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                asChild
              >
                <a href="tel:2148023042">
                  <Phone className="mr-2 w-5 h-5" />
                  Call (214) 802-3042
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Pages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Looking for Something Else?
              </h2>
              <p className="text-xl text-gray-600">
                Here are some popular pages that might help
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularPages.map((page, index) => (
                <motion.div
                  key={page.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={page.href}>
                    <div className="bg-white rounded-xl border-2 border-gray-100 hover:border-amber-500 hover:shadow-lg transition-all p-6 h-full group">
                      <div className={`w-12 h-12 rounded-lg ${page.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <page.icon className={`w-6 h-6 ${page.iconColor}`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                        {page.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{page.description}</p>
                      <div className="flex items-center text-amber-600 font-semibold">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Phone className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Plumbing Service?
            </h2>
            <p className="text-xl text-white/90 mb-6">
              Call us during business hours: Monday-Friday, 8 AM - 5 PM
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-xl px-8 py-6"
              asChild
            >
              <a href="tel:2148023042">
                <Phone className="mr-2 w-6 h-6" />
                Call (214) 802-3042
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Still Can't Find What You Need?
                  </h2>
                  <p className="text-gray-600 mb-6">
                    No worries! Our friendly team is here to help you find the right plumbing solution.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                  <a href="tel:2148023042" className="text-blue-600 hover:text-blue-700 font-semibold">
                    (214) 802-3042
                  </a>
                </div>

                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Mail className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                  <a
                    href="mailto:dougw@downrightplumbingtx.com"
                    className="text-green-600 hover:text-green-700 font-semibold text-sm break-all"
                  >
                    dougw@downrightplumbingtx.com
                  </a>
                </div>

                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <MapPin className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-1">Visit Us</h3>
                  <p className="text-amber-600 font-semibold text-sm">
                    Rockwall, TX 75087
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
