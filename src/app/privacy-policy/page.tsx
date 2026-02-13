import { Metadata } from 'next';
import Link from 'next/link';
import {
  Shield,
  Lock,
  Eye,
  Cookie,
  FileText,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Privacy Policy | Down Right Plumbing',
  description: 'Privacy Policy for Down Right Plumbing. Learn how we collect, use, and protect your personal information when you use our plumbing services in Rockwall, TX.',
  openGraph: {
    title: 'Privacy Policy | Down Right Plumbing',
    description: 'Learn how Down Right Plumbing protects your privacy and personal information.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'February 12, 2026';

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-amber-900 text-white py-16 md:py-20">
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
              <Shield className="w-5 h-5" />
              <span className="font-semibold">Your Privacy Matters</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              We are committed to protecting your personal information and privacy
            </p>
            <p className="text-sm text-white/70">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <div className="flex gap-4">
                <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    Introduction
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Down Right Plumbing ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or contact us. Please read this policy carefully.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Information We Collect */}
            <div className="scroll-mt-20" id="information-we-collect">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    1. Information We Collect
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Personal Information
                      </h3>
                      <p className="mb-3">
                        When you contact us for plumbing services, we may collect:
                      </p>
                      <ul className="space-y-2">
                        {[
                          'Name and contact information (phone number, email address, mailing address)',
                          'Service address (where plumbing work is needed)',
                          'Payment information (credit card details, billing address)',
                          'Service history and preferences',
                          'Emergency contact information',
                          'Communication records (emails, phone calls, messages)',
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Automatically Collected Information
                      </h3>
                      <p className="mb-3">
                        When you visit our website, we automatically collect:
                      </p>
                      <ul className="space-y-2">
                        {[
                          'IP address and device information',
                          'Browser type and version',
                          'Pages visited and time spent on our site',
                          'Referring website addresses',
                          'Operating system information',
                          'Location data (with your permission)',
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="scroll-mt-20" id="how-we-use-information">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    2. How We Use Your Information
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>We use the collected information for the following purposes:</p>
                    <ul className="space-y-3">
                      {[
                        {
                          title: 'Service Delivery',
                          desc: 'To provide, maintain, and improve our plumbing services',
                        },
                        {
                          title: 'Communication',
                          desc: 'To respond to your inquiries, schedule appointments, and send service updates',
                        },
                        {
                          title: 'Payment Processing',
                          desc: 'To process payments and manage billing for our services',
                        },
                        {
                          title: 'Customer Support',
                          desc: 'To provide customer service and technical support',
                        },
                        {
                          title: 'Marketing',
                          desc: 'To send you promotional materials, special offers, and service reminders (with your consent)',
                        },
                        {
                          title: 'Legal Compliance',
                          desc: 'To comply with applicable laws, regulations, and legal processes',
                        },
                        {
                          title: 'Business Operations',
                          desc: 'To analyze trends, monitor service quality, and improve our operations',
                        },
                      ].map((item, index) => (
                        <li key={index} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold text-gray-900">{item.title}:</span>{' '}
                              <span>{item.desc}</span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="scroll-mt-20" id="data-security">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    3. Data Security
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
                    </p>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Our Security Measures Include:
                      </h3>
                      <ul className="space-y-2">
                        {[
                          'Encryption of sensitive data during transmission',
                          'Secure servers with restricted access',
                          'Regular security audits and updates',
                          'Employee training on data privacy and security',
                          'Access controls and authentication protocols',
                          'Regular backups and disaster recovery procedures',
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Lock className="w-4 h-4 text-amber-600 flex-shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-sm text-gray-600 italic">
                      Note: While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cookies and Tracking */}
            <div className="scroll-mt-20" id="cookies">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    4. Cookies and Tracking Technologies
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device.
                    </p>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        Types of Cookies We Use:
                      </h3>
                      <div className="space-y-3">
                        {[
                          {
                            name: 'Essential Cookies',
                            desc: 'Required for website functionality and cannot be disabled',
                          },
                          {
                            name: 'Performance Cookies',
                            desc: 'Help us understand how visitors interact with our website',
                          },
                          {
                            name: 'Functionality Cookies',
                            desc: 'Remember your preferences and personalize your experience',
                          },
                          {
                            name: 'Marketing Cookies',
                            desc: 'Track your activity to deliver relevant advertisements',
                          },
                        ].map((cookie, index) => (
                          <div key={index} className="bg-purple-50 rounded-lg p-4">
                            <span className="font-semibold text-gray-900">{cookie.name}:</span>{' '}
                            <span className="text-gray-700">{cookie.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <p>
                      You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our website.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Third-Party Services */}
            <div className="scroll-mt-20" id="third-party-services">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    5. Third-Party Services
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      We may use third-party service providers to help us operate our business and website. These providers have access to your information only to perform specific tasks on our behalf and are obligated to protect it.
                    </p>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        Third-Party Services Include:
                      </h3>
                      <ul className="space-y-2">
                        {[
                          'Payment processors (for secure payment handling)',
                          'Email service providers (for communication)',
                          'Analytics services (Google Analytics)',
                          'Scheduling and appointment systems',
                          'Customer relationship management (CRM) tools',
                          'Advertising and marketing platforms',
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-sm">
                      We do not sell your personal information to third parties. We may share aggregated, non-personally identifiable information with partners for business purposes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="scroll-mt-20" id="your-rights">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    6. Your Rights and Choices
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      You have certain rights regarding your personal information:
                    </p>
                    <div className="bg-indigo-50 rounded-lg p-6 space-y-3">
                      {[
                        {
                          right: 'Access',
                          desc: 'Request a copy of the personal information we hold about you',
                        },
                        {
                          right: 'Correction',
                          desc: 'Request corrections to inaccurate or incomplete information',
                        },
                        {
                          right: 'Deletion',
                          desc: 'Request deletion of your personal information (subject to legal obligations)',
                        },
                        {
                          right: 'Opt-Out',
                          desc: 'Unsubscribe from marketing communications at any time',
                        },
                        {
                          right: 'Portability',
                          desc: 'Request transfer of your data to another service provider',
                        },
                        {
                          right: 'Object',
                          desc: 'Object to processing of your information for certain purposes',
                        },
                      ].map((item, index) => (
                        <div key={index}>
                          <span className="font-semibold text-indigo-900">{item.right}:</span>{' '}
                          <span>{item.desc}</span>
                        </div>
                      ))}
                    </div>
                    <p>
                      To exercise any of these rights, please contact us using the information provided at the end of this policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Retention */}
            <div className="scroll-mt-20" id="data-retention">
              <div className="bg-gray-50 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Data Retention
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we securely delete or anonymize it.
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="scroll-mt-20" id="childrens-privacy">
              <div className="bg-gray-50 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. Children's Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately so we can delete it.
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div className="scroll-mt-20" id="changes">
              <div className="bg-gray-50 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. Changes to This Privacy Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting the updated policy on our website and updating the "Last Updated" date. We encourage you to review this policy periodically.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="scroll-mt-20" id="contact">
              <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-xl p-8 md:p-10 border-2 border-amber-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  10. Contact Us
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a
                        href="mailto:dougw@downrightplumbingtx.com"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        dougw@downrightplumbingtx.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a
                        href="tel:2148023042"
                        className="text-green-600 hover:text-green-700"
                      >
                        (214) 802-3042
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Mailing Address</p>
                      <p className="text-gray-700">
                        Down Right Plumbing
                        <br />
                        504 E Interstate 30 #424
                        <br />
                        Rockwall, TX 75087
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-gray-50 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700 mb-6">
              Need plumbing services? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
