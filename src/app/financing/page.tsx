import { Metadata } from 'next';
import Link from 'next/link';
import {
  DollarSign,
  CreditCard,
  FileText,
  CheckCircle2,
  Phone,
  Calendar,
  Shield,
  TrendingUp,
  Clock,
  Calculator,
  HandshakeIcon,
  Percent,
  Award,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FAQSection } from '@/components/sections/faq-section';

export const metadata: Metadata = {
  title: 'Flexible Financing Options for Plumbing Services | Downright Plumbing',
  description: 'Affordable financing options for your plumbing needs in Rockwall, TX. Flexible payment plans with competitive rates. No hidden fees. Apply today and get your plumbing fixed now.',
  openGraph: {
    title: 'Flexible Financing Options for Plumbing Services | Downright Plumbing',
    description: 'Affordable financing options for your plumbing needs in Rockwall, TX. Flexible payment plans with competitive rates.',
    type: 'website',
  },
};

const financingFAQs = [
  {
    question: 'What financing options do you offer?',
    answer: 'We offer flexible financing plans through our trusted lending partners with various terms to fit your budget. Options include 6, 12, 18, and 24-month plans, with some qualifying for 0% APR for a limited time. Our financing specialists will help you find the best plan for your situation.',
  },
  {
    question: 'How do I qualify for financing?',
    answer: 'Qualifying for financing is quick and easy. You must be 18 years or older, have a valid government-issued ID, and meet basic credit requirements. Most applications are approved instantly, and you can apply online or over the phone. Good to excellent credit typically gets the best rates, but we work with various credit profiles.',
  },
  {
    question: 'How long does the approval process take?',
    answer: 'Most financing applications are approved within minutes. You can complete the application online or over the phone, and in most cases, you\'ll receive an instant decision. Once approved, we can schedule your plumbing service right away.',
  },
  {
    question: 'What is the minimum and maximum amount I can finance?',
    answer: 'Financing is available for plumbing projects starting at $500 and up to $50,000, depending on your creditworthiness and the scope of work. Whether you need a simple repair or a major installation like repiping or water heater replacement, we have financing options to help.',
  },
  {
    question: 'Are there any hidden fees or prepayment penalties?',
    answer: 'No! We believe in complete transparency. There are no hidden fees, and many of our financing plans have no prepayment penalties. You can pay off your balance early without any extra charges. All terms, rates, and fees are clearly disclosed upfront before you commit.',
  },
  {
    question: 'Can I finance urgent plumbing repairs?',
    answer: 'Absolutely! We understand that plumbing issues happen when you least expect them. Our financing options are available for urgent repairs during our business hours (Monday-Friday, 8 AM - 5 PM), so you can get your plumbing fixed without worrying about upfront costs. Same-day approval is available for qualified applicants.',
  },
  {
    question: 'What types of plumbing services can I finance?',
    answer: 'You can finance virtually any plumbing service we offer, including water heater installation, repiping, sewer line repair, drain cleaning, bathroom remodeling, fixture installation, and more. Whether it\'s a repair, replacement, or installation, we can help you finance it.',
  },
  {
    question: 'Do you offer special financing promotions?',
    answer: 'Yes! We regularly offer special financing promotions, including 0% APR for qualified buyers for a limited time. Contact us or check our website for current promotional offers. These special rates can save you hundreds of dollars on larger plumbing projects.',
  },
];

export default function FinancingPage() {
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
              <CreditCard className="w-5 h-5" />
              <span className="font-semibold">Flexible Payment Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Flexible Financing Options for Your Plumbing Needs
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Don't let cost stand in the way of essential plumbing repairs. Get the service you need now with affordable payment plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  <Calendar className="mr-2 w-5 h-5" />
                  Apply for Financing
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white hover:text-blue-900"
                asChild
              >
                <a href="tel:2148023042">
                  <Phone className="mr-2 w-5 h-5" />
                  (214) 802-3042
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white border-b py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="font-bold text-gray-900">Instant Approval</div>
                <div className="text-sm text-gray-600">Get approved in minutes</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="font-bold text-gray-900">Secure Process</div>
                <div className="text-sm text-gray-600">Your information is protected</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                <Percent className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <div className="font-bold text-gray-900">Competitive Rates</div>
                <div className="text-sm text-gray-600">0% APR options available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Finance Your Plumbing Work?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Financing gives you the flexibility to get essential plumbing services without breaking the bank.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Clock,
                title: 'Get Service Now, Pay Later',
                description: 'Don\'t wait for plumbing problems to worsen. Get immediate service and spread payments over time.',
                bgColor: 'bg-blue-100',
                iconColor: 'text-blue-600',
              },
              {
                icon: DollarSign,
                title: 'Budget-Friendly Payments',
                description: 'Choose a payment plan that fits your budget with flexible terms from 6 to 24 months.',
                bgColor: 'bg-green-100',
                iconColor: 'text-green-600',
              },
              {
                icon: Shield,
                title: 'No Hidden Fees',
                description: 'Complete transparency with upfront pricing. What you see is what you pay—no surprises.',
                bgColor: 'bg-amber-100',
                iconColor: 'text-amber-600',
              },
              {
                icon: TrendingUp,
                title: 'Build Your Credit',
                description: 'On-time payments can help improve your credit score while fixing your plumbing.',
                bgColor: 'bg-purple-100',
                iconColor: 'text-purple-600',
              },
              {
                icon: HandshakeIcon,
                title: 'Trusted Partners',
                description: 'We work with reputable lending partners who offer competitive rates and excellent service.',
                bgColor: 'bg-indigo-100',
                iconColor: 'text-indigo-600',
              },
              {
                icon: Calculator,
                title: 'Affordable Solutions',
                description: 'Even major projects like repiping or water heater replacement become manageable.',
                bgColor: 'bg-red-100',
                iconColor: 'text-red-600',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className={`w-14 h-14 rounded-lg ${benefit.bgColor} flex items-center justify-center mb-6`}>
                  <benefit.icon className={`w-7 h-7 ${benefit.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How to Apply for Financing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting approved for financing is quick and easy. Follow these simple steps.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  icon: FileText,
                  title: 'Submit Application',
                  description: 'Fill out our simple online application or call us. It takes just a few minutes and requires basic information.',
                },
                {
                  step: '2',
                  icon: CheckCircle2,
                  title: 'Get Instant Decision',
                  description: 'Most applications receive instant approval. We\'ll let you know your financing options right away.',
                },
                {
                  step: '3',
                  icon: Calendar,
                  title: 'Schedule Your Service',
                  description: 'Once approved, we\'ll schedule your plumbing service at your convenience. It\'s that easy!',
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-xl p-8 h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-amber-500 text-white font-bold text-xl flex items-center justify-center flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-amber-500" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financing Features */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-amber-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Financing Features & Benefits
              </h2>
              <p className="text-xl text-white/90">
                Our financing options are designed with your needs in mind
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Flexible terms from 6 to 24 months',
                'Competitive interest rates',
                'Quick and easy application process',
                'Instant approval for qualified applicants',
                'No prepayment penalties on most plans',
                'Finance amounts from $500 to $50,000',
                'Available for all plumbing services',
                'Transparent terms with no hidden fees',
                'Build credit with on-time payments',
                'Special 0% APR promotions available',
                'Secure and confidential process',
                'Multiple financing partners for best rates',
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-amber-400" />
                  <span className="text-white/90 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection questions={financingFAQs} />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-16 h-16 text-amber-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Don't let cost prevent you from getting the plumbing service you need. Apply for financing today and get your plumbing fixed now with affordable monthly payments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                <Link href="/contact">
                  <FileText className="mr-2 w-5 h-5" />
                  Apply for Financing
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:2148023042">
                  <Phone className="mr-2 w-5 h-5" />
                  Call to Learn More
                </a>
              </Button>
            </div>
            <p className="text-sm text-gray-600 mt-6">
              Have questions? Call us at (214) 802-3042 and speak with a financing specialist.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
