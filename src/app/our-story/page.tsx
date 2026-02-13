'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Heart,
  Sparkles,
  Users,
  HandHeart,
  Quote,
  Award,
  Calendar,
  CheckCircle2,
  Phone,
  CalendarCheck,
  Star,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Full Width */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900 via-purple-900 to-amber-900" />

        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-white/30">
              <Heart className="w-6 h-6 text-amber-400 fill-amber-400" />
              <span className="font-semibold text-white">Our Story</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Why We're Called
              <br />
              <span className="text-amber-400">Down Right</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed">
              It's not just a business name. It's a promise. A tribute. 
              And a reminder of what truly matters.
            </p>
          </motion.div>
        </div>

        {/* Decorative scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-white/80 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* The Story - Narrative Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Sparkles className="w-12 h-12 text-amber-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              A Name Born from Love
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg md:prose-xl max-w-none"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
                I&apos;ve been a plumber for over 20 years. I&apos;ve fixed thousands of pipes, 
                unclogged countless drains, and crawled under more houses than I can count. 
                But none of that shaped me the way my daughter did.
              </p>

              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
                In 2006, our daughter was born with Down syndrome. From the moment we held her, 
                we knew she was perfect. She changed everything for us—our perspective, our 
                priorities, and ultimately, what we wanted our life&apos;s work to stand for.
              </p>

              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
                For two decades I worked for other companies, learning the trade inside and out. 
                But I always knew that one day I&apos;d build something of my own—something that 
                reflected who I really am and what our family stands for. In January 2026, 
                I finally took that leap and started Down Right Plumbing.
              </p>

              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
                The name was never in question. We chose <span className="font-bold text-amber-600">&quot;Down Right&quot;</span> to 
                honor our daughter and everything she&apos;s taught us about heart, honesty, 
                and showing up with your whole self. She reminds us every day that what 
                matters most isn&apos;t perfection—it&apos;s being genuine.
              </p>

              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
                &quot;Down Right&quot; means even more than that. It&apos;s a word that describes 
                who I strive to be every single day:
              </p>

              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 my-8">
                <ul className="space-y-4 text-lg md:text-xl text-gray-900">
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <span><strong className="text-amber-900">Down Right honest</strong> — No hidden fees. No upselling. Just transparent, truthful service.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <span><strong className="text-amber-900">Down Right reliable</strong> — We show up when we say we will and do the job right, every time.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <span><strong className="text-amber-900">Down Right caring</strong> — We treat your home and family with respect, compassion, and genuine concern.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <span><strong className="text-amber-900">Down Right excellent</strong> — We go above and beyond because that's the only way we know how to work.</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
                This company is brand new, but the experience behind it isn&apos;t. Twenty years 
                of turning wrenches, solving problems, and taking care of people&apos;s homes 
                went into building something I&apos;m truly proud of.
              </p>

              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                Every time you see our logo, every time you call, and every time I walk 
                through your door, you&apos;re experiencing a business built on love, 
                inspired by a young woman who changed my world—and 20 years of doing 
                the work the right way.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Callout */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-amber-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Quote className="w-16 h-16 text-amber-400 mx-auto mb-8 opacity-50" />
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-white mb-8 leading-relaxed">
              &quot;She didn&apos;t just inspire our name. She inspired our mission: 
              to serve with heart, integrity, and an unwavering commitment 
              to doing things the right way—the Down Right way.&quot;
            </blockquote>
            <div className="text-amber-400 text-xl font-semibold">
              — Doug White, Owner
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline / Milestones */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Calendar className="w-12 h-12 text-amber-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              The Road to Down Right
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              20 years of experience. One daughter&apos;s inspiration. A brand new chapter.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 via-orange-500 to-amber-600 -translate-x-1/2" />

            <div className="space-y-12 md:space-y-16">
              {[
                {
                  title: 'Learning the Trade',
                  description: 'Doug began his plumbing career over 20 years ago, learning from the best and mastering every aspect of residential and commercial plumbing.',
                },
                {
                  title: 'Our Daughter Is Born',
                  description: 'In 2006, our daughter was born with Down syndrome. She changed our lives forever—teaching us about heart, resilience, and what truly matters.',
                },
                {
                  title: 'Two Decades of Experience',
                  description: 'Thousands of jobs. Countless homes. Doug built a reputation for honest, quality work while dreaming of building something of his own.',
                },
                {
                  title: 'The Dream Takes Shape',
                  description: 'The name was always clear: "Down Right"—a tribute to our daughter and a commitment to doing everything the downright best way.',
                },
                {
                  title: 'Down Right Plumbing Is Born — January 2026',
                  description: 'After 20 years in the industry, Doug launched Down Right Plumbing in Fate, TX. New company, veteran experience, and a mission rooted in family.',
                },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`md:flex md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="hidden md:flex items-center justify-center w-16 flex-shrink-0 relative z-10">
                    <div className="w-6 h-6 bg-amber-600 rounded-full border-4 border-white shadow-lg" />
                  </div>
                  
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Down Right Means Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What "Down Right" Means to Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These aren't just values on a wall. They're the principles we live by every day.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: CheckCircle2,
                title: 'Down Right Honest',
                description: 'We give you the truth, even if it means less profit for us. Upfront pricing. No hidden fees. No unnecessary upsells. Just honest advice you can trust.',
                color: 'from-blue-500 to-blue-600',
              },
              {
                icon: Award,
                title: 'Down Right Reliable',
                description: 'When we say we\'ll be there at 2 PM, we\'re there at 2 PM. When we quote a price, that\'s the price. We do what we say and stand behind every job with a guarantee.',
                color: 'from-amber-500 to-orange-600',
              },
              {
                icon: Heart,
                title: 'Down Right Caring',
                description: 'Your home is sacred. We wear booties, lay down protection, and treat every space with respect. We listen, we care, and we go the extra mile because that\'s who we are.',
                color: 'from-pink-500 to-rose-600',
              },
              {
                icon: Star,
                title: 'Down Right Excellent',
                description: 'Good enough isn\'t in our vocabulary. We use the best materials, stay current with training, and take pride in workmanship that lasts. Excellence is our baseline.',
                color: 'from-purple-500 to-indigo-600',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${value.color}`} />
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community & Advocacy Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <HandHeart className="w-12 h-12 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Making a Difference Beyond Plumbing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to Down syndrome awareness and community support
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-8">
                <HandHeart className="w-20 h-20 text-white/95 mb-4" />
                <span className="text-white font-bold text-xl md:text-2xl text-center">
                  Down Syndrome Awareness
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Down Syndrome Awareness & Support
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Giving Back</h4>
                    <p className="text-gray-700">We&apos;re committed to donating a portion of our proceeds to Down syndrome organizations and research initiatives.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Advocacy & Awareness</h4>
                    <p className="text-gray-700">Participating in walks, events, and campaigns that promote inclusion and celebrate differences.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Community Education</h4>
                    <p className="text-gray-700">Sharing our story to break down stigmas and spread awareness about Down syndrome.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HandHeart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Local Family Support</h4>
                    <p className="text-gray-700">Connecting with and supporting local families navigating their own Down syndrome journey.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Resources Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Down Syndrome Awareness Resources
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              If you or someone you know has been touched by Down syndrome, you're not alone. 
              We're proud supporters of these wonderful organizations:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
                National Down Syndrome Society
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
                Down Syndrome Association of Dallas
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
                Local Support Groups
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Soft CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Heart className="w-16 h-16 text-amber-500 mx-auto mb-8" />
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              When You Choose Down Right Plumbing, 
              <br className="hidden md:block" />
              You're Supporting a Family That Believes in Making a Difference
            </h2>
            
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              Every service call, every repair, every customer we serve helps us continue 
              our mission of excellence, integrity, and giving back to the community we love.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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

            <div className="inline-flex flex-col md:flex-row gap-6 items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50 px-8 py-6 rounded-2xl">
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900 text-lg">5-Star Rated on Google</div>
                <div className="text-gray-600">20+ Years of Plumbing Experience • New Company, Veteran Plumber</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
