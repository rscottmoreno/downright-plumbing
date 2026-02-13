'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Shield,
  Award,
  Users,
  Heart,
  CheckCircle2,
  Clock,
  DollarSign,
  Star,
  TrendingUp,
  Wrench,
  GraduationCap,
  BadgeCheck,
  Target,
  Lightbulb,
  Handshake,
  MapPin,
  Phone,
  CalendarCheck,
} from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Animated Counter Component
function AnimatedCounter({ end, duration = 2, suffix = '', prefix = '' }: { end: number; duration?: number; suffix?: string; prefix?: string }) {
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
      {prefix}{count}{suffix}
    </span>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900 via-blue-800 to-amber-900" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              About Downright Plumbing
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Family-owned plumbing excellence serving Rockwall & DFW. 
              Built on integrity, driven by compassion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-6">
                <Heart className="w-5 h-5 text-amber-600" />
                <span className="font-semibold text-amber-900">Our Company</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Plumbing with Purpose & Heart
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Downright Plumbing is a brand new company built on 20+ years of hands-on 
                plumbing experience. Owner Doug White spent two decades mastering the trade 
                before launching his own business in January 2026—right here in Rockwall, TX.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We&apos;re not your typical plumbing company. We understand 
                that when you call us, you&apos;re inviting us into your home during a stressful 
                time. We take that responsibility seriously, treating every customer with 
                respect, honesty, and care.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our name &quot;Downright&quot; isn&apos;t just a name—it&apos;s a tribute to 
                our daughter and a commitment to being downright honest, downright reliable, 
                and downright excellent in everything we do.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-900 via-blue-800 to-amber-600 flex flex-col items-center justify-center p-8 text-white">
                <Wrench className="w-24 h-24 text-white/90 mb-6" />
                <p className="text-3xl md:text-4xl font-bold mb-2">20+ Years Experience</p>
                <p className="text-xl text-white/90">Est. 2026</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <AnimatedCounter end={20} suffix="+" />
              <p className="text-white/90 mt-2 text-lg">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-400">2026</div>
              <p className="text-white/90 mt-2 text-lg">Est. Rockwall, TX</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-400">100%</div>
              <p className="text-white/90 mt-2 text-lg">Satisfaction Guarantee</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-400">5.0★</div>
              <p className="text-white/90 mt-2 text-lg">Google Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
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
              The Downright Way
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our mission is simple: Do things the right way, every time. No shortcuts, 
              no surprises, just honest plumbing done right.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Handshake,
                title: 'Downright Honest',
                description: 'Upfront pricing, transparent communication, and honest recommendations. We never upsell services you don\'t need.',
              },
              {
                icon: Shield,
                title: 'Downright Reliable',
                description: 'Monday-Friday 8 AM - 5 PM service, on-time arrivals, and repairs done right the first time. You can count on us.',
              },
              {
                icon: Heart,
                title: 'Downright Caring',
                description: 'We treat your home like our own and your family like ours. Respect, cleanliness, and care in every job.',
              },
              {
                icon: Star,
                title: 'Downright Excellence',
                description: 'Licensed professionals using top-quality materials and advanced techniques. Excellence is our standard.',
              },
              {
                icon: Users,
                title: 'Downright Local',
                description: 'Family-owned and operated right here in Rockwall. We\'re your neighbors, serving our community.',
              },
              {
                icon: Target,
                title: 'Downright Committed',
                description: '100% satisfaction guarantee on every job. We stand behind our work and our word.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-8"
              >
                <div className="bg-amber-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner Section */}
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
              Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Locally owned and operated with over 20 years of experience in the plumbing industry
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 md:p-12 text-center shadow-lg">
              <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Doug White</h3>
              <p className="text-amber-600 font-semibold text-lg mb-4">Owner</p>
              <p className="text-gray-700 leading-relaxed">
                With over 20 years of experience in the plumbing industry, Doug leads 
                Downright Plumbing with a hands-on approach and a commitment to doing 
                things the right way. His dedication to honest service and quality 
                workmanship is the foundation of everything we do.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <Users className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Our Commitment to Quality
              </h3>
              <p className="text-gray-700 max-w-2xl mx-auto">
                When you invite us into your home, you deserve peace of mind. Doug brings 
                20+ years of verified expertise, proper licensing, and ongoing training to every job.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <BadgeCheck className="w-10 h-10 text-amber-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-900">Background Checked</p>
              </div>
              <div className="text-center">
                <GraduationCap className="w-10 h-10 text-amber-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-900">Ongoing Training</p>
              </div>
              <div className="text-center">
                <Shield className="w-10 h-10 text-amber-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-900">Licensed & Insured</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Licenses & Certifications */}
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
              Licenses, Certifications & Credentials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fully licensed, insured, and certified to serve you with excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BadgeCheck,
                title: 'Texas Master Plumber License',
                description: 'State-certified master plumber with years of experience and expertise.',
              },
              {
                icon: Shield,
                title: 'Fully Insured',
                description: 'Comprehensive liability and workers compensation insurance for your protection.',
              },
              {
                icon: Award,
                title: 'BBB Accredited',
                description: 'A+ rating with the Better Business Bureau for trust and reliability.',
              },
              {
                icon: CheckCircle2,
                title: 'EPA Certified',
                description: 'Environmental Protection Agency certification for safe practices.',
              },
              {
                icon: GraduationCap,
                title: 'Ongoing Education',
                description: 'Continuous training on latest techniques, codes, and technologies.',
              },
              {
                icon: Star,
                title: 'Manufacturer Certified',
                description: 'Authorized installer for major brands and warranty compliance.',
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all"
              >
                <cert.icon className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 flex flex-col items-center justify-center p-8 text-white">
                <Heart className="w-24 h-24 text-white/90 mb-6" />
                <p className="text-2xl md:text-3xl font-bold mb-2 text-center">Down Syndrome Awareness</p>
                <p className="text-lg text-white/90 text-center">Active supporters of inclusion programs in our community</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
                <Heart className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-900">Giving Back</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Proud to Serve Our Community
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Being a local business means more than just serving customers—it means being 
                part of the Rockwall community. We&apos;re committed to giving back from day one.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Down Syndrome Awareness</h3>
                    <p className="text-gray-600">Active supporters of Down syndrome awareness and inclusion programs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Local Schools Support</h3>
                    <p className="text-gray-600">Sponsoring local schools, sports teams, and educational programs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Community Service</h3>
                    <p className="text-gray-600">Free plumbing services for seniors, veterans, and families in need.</p>
                  </div>
                </div>
              </div>
              <Link
                href="/our-story"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-full mt-8 transition-all"
              >
                Read Our Story
                <Heart className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Recap */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Rockwall Trusts Downright Plumbing
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              New company, veteran plumber—here&apos;s what sets us apart
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: DollarSign, text: 'Upfront, Transparent Pricing' },
              { icon: Clock, text: 'Monday-Friday 8 AM - 5 PM' },
              { icon: Shield, text: 'Licensed & Insured' },
              { icon: Star, text: '5-Star Average Rating' },
              { icon: CheckCircle2, text: '100% Satisfaction Guarantee' },
              { icon: TrendingUp, text: '20+ Years Experience' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
              >
                <item.icon className="w-10 h-10 text-amber-400 mb-3" />
                <p className="text-white font-semibold text-lg">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Experience the Downright Difference
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Experience 20+ years of plumbing expertise with the personal touch of a local, family-owned business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-xl inline-flex items-center gap-2"
              >
                <CalendarCheck className="w-6 h-6" />
                Schedule Service
              </Link>
              <a
                href="tel:2148023042"
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-xl inline-flex items-center gap-2"
              >
                <Phone className="w-6 h-6" />
                Call (214) 802-3042
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
