'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  AlertCircle,
  CheckCircle2,
  Calendar,
  User,
  MessageSquare,
  Wrench,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    city: '',
    preferredDate: '',
    message: '',
    isEmergency: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        city: '',
        preferredDate: '',
        message: '',
        isEmergency: false,
      });
      setSubmitStatus('idle');
    }, 3000);
  };

  const services = [
    'Drain Cleaning',
    'Water Heater Services',
    'Leak Detection',
    'Bathroom Plumbing',
    'Kitchen Plumbing',
    'Sewer Line Services',
    'Water Line Services',
    'Toilet Repair',
    'Faucet Services',
    'Garbage Disposal',
    'Gas Line Services',
    'Repiping',
    'General Repair',
    'Installation',
    'Other',
  ];

  const serviceAreas = [
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
    'Other',
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-amber-900 py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get in Touch with Down Right Plumbing
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Monday-Friday 8 AM - 5 PM. We're here to help with all your plumbing needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Hours Banner */}
      <section className="bg-blue-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 text-center"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-white" />
              <span className="text-white font-bold text-lg">NEED SERVICE?</span>
            </div>
            <span className="text-white/90">Call us during business hours:</span>
            <a
              href="tel:2148023042"
              className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-2 px-6 rounded-full transition-all inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              (214) 802-3042
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      Request Service
                    </h2>
                    <p className="text-gray-600">We'll get back to you within 1 hour</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <Label htmlFor="name" className="text-gray-900 font-semibold mb-2 block">
                      Full Name *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="name"
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="pl-10 h-12"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-gray-900 font-semibold mb-2 block">
                      Email Address *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="pl-10 h-12"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone" className="text-gray-900 font-semibold mb-2 block">
                      Phone Number *
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="phone"
                        type="tel"
                        required
                        placeholder="(972) 555-0123"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="pl-10 h-12"
                      />
                    </div>
                  </div>

                  {/* Service Type */}
                  <div>
                    <Label htmlFor="service" className="text-gray-900 font-semibold mb-2 block">
                      Service Needed
                    </Label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select a service" />
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

                  {/* City */}
                  <div>
                    <Label htmlFor="city" className="text-gray-900 font-semibold mb-2 block">
                      Your City
                    </Label>
                    <Select value={formData.city} onValueChange={(value) => setFormData({ ...formData, city: value })}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select your city" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceAreas.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <Label htmlFor="preferredDate" className="text-gray-900 font-semibold mb-2 block">
                      Preferred Date
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="pl-10 h-12"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-gray-900 font-semibold mb-2 block">
                      Describe Your Plumbing Issue
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about the plumbing issue you're experiencing..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  {/* Urgent Service Checkbox */}
                  <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <input
                      type="checkbox"
                      id="emergency"
                      checked={formData.isEmergency}
                      onChange={(e) => setFormData({ ...formData, isEmergency: e.target.checked })}
                      className="mt-1 w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <div>
                      <Label htmlFor="emergency" className="text-blue-900 font-semibold cursor-pointer">
                        This is urgent - need service ASAP
                      </Label>
                      <p className="text-sm text-blue-700 mt-1">
                        For fastest service, please call us at (214) 802-3042 during business hours
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || submitStatus === 'success'}
                    className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-lg text-lg transition-all inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 border border-green-200 rounded-lg p-4"
                    >
                      <div className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-green-900">Message sent successfully!</p>
                          <p className="text-sm text-green-700 mt-1">
                            We'll get back to you within 1 hour during business hours.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Contact Cards */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                      <a href="tel:2148023042" className="text-lg text-amber-600 hover:text-amber-700 font-semibold">
                        (214) 802-3042
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Monday-Friday 8 AM - 5 PM</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                      <a href="mailto:dougw@downrightplumbingtx.com" className="text-lg text-blue-600 hover:text-blue-700 font-semibold break-all">
                        dougw@downrightplumbingtx.com
                      </a>
                      <p className="text-sm text-gray-600 mt-1">We respond within 1 hour</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-700">
                        504 E Interstate 30 #424
                        <br />
                        Rockwall, TX 75087
                      </p>
                      <a
                        href="https://maps.google.com/?q=504+E+Interstate+30+424+Rockwall+TX+75087"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-green-600 hover:text-green-700 font-semibold mt-2 inline-block"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Business Hours</h4>
                      <p className="text-gray-700">
                        <span className="font-semibold">Monday-Friday</span>
                        <br />
                        <span className="text-sm">8:00 AM - 5:00 PM</span>
                        <br />
                        <span className="text-sm text-gray-500 mt-2 block">Closed Saturday & Sunday</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas Card */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Service Areas</h3>
                </div>
                <p className="text-blue-100 mb-4">
                  Proudly serving Rockwall and the entire DFW Metroplex
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {['Rockwall', 'Heath', 'Fate', 'Royse City', 'Rowlett', 'Garland', 'Wylie', 'Mesquite'].map((city) => (
                    <div key={city} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span>{city}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-blue-200 mt-4">
                  + Many more areas throughout DFW
                </p>
              </div>

              {/* Why Choose Us Card */}
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl shadow-xl p-8 text-white">
                <Wrench className="w-10 h-10 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Why Choose Down Right?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Licensed, insured & background-checked</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Upfront pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>100% satisfaction guarantee</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Family-owned & locally operated</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Find Us on the Map
            </h2>
            <div className="aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl bg-gray-200 flex items-center justify-center">
              {/* Google Maps Embed Placeholder */}
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg mb-4">
                  504 E Interstate 30 #424, Rockwall, TX 75087
                </p>
                <a
                  href="https://maps.google.com/?q=504+E+Interstate+30+424+Rockwall+TX+75087"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all"
                >
                  <MapPin className="w-5 h-5" />
                  Open in Google Maps
                </a>
              </div>
              {/* To add actual Google Maps embed, replace the above div with:
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              */}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
