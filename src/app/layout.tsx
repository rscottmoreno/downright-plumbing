import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/layout/header";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Footer } from "@/components/layout/footer";
import { StickyCTABar } from "@/components/layout/sticky-cta-bar";
import { FloatingCTA } from "@/components/shared/floating-cta";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://downrightplumbingtx.com"),
  title: {
    default: "Down Right Plumbing | Professional Plumbing Services in Rockwall, TX",
    template: "%s | Down Right Plumbing",
  },
  description:
    "Professional plumbing services in Rockwall, TX and surrounding areas. Licensed & insured. Expert repairs, installations, and maintenance with heart. Call (214) 802-3042.",
  keywords: [
    "plumbing",
    "plumber",
    "Rockwall TX",
    "emergency plumbing",
    "drain cleaning",
    "water heater",
    "leak detection",
    "pipe repair",
    "plumbing services",
  ],
  authors: [{ name: "Down Right Plumbing" }],
  creator: "Down Right Plumbing",
  publisher: "Down Right Plumbing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://downrightplumbingtx.com",
    siteName: "Down Right Plumbing",
    title: "Down Right Plumbing | Professional Plumbing Services in Rockwall, TX",
    description:
      "Professional plumbing services in Rockwall, TX and surrounding areas. Licensed & insured. Call (214) 802-3042.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Down Right Plumbing - Professional Plumbing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Down Right Plumbing | Professional Plumbing Services in Rockwall, TX",
    description:
      "Professional plumbing services in Rockwall, TX and surrounding areas. Licensed & insured. Call (214) 802-3042.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Down Right Plumbing",
  image: "https://downrightplumbingtx.com/logo.jpg",
  "@id": "https://downrightplumbingtx.com",
  url: "https://downrightplumbingtx.com",
  telephone: "(214) 802-3042",
  email: "dougw@downrightplumbingtx.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rockwall",
    addressRegion: "TX",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.9312,
    longitude: -96.4597,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
  areaServed: [
    {
      "@type": "City",
      name: "Rockwall",
      "@id": "https://en.wikipedia.org/wiki/Rockwall,_Texas",
    },
    {
      "@type": "City",
      name: "Heath",
      "@id": "https://en.wikipedia.org/wiki/Heath,_Texas",
    },
    {
      "@type": "City",
      name: "Royse City",
      "@id": "https://en.wikipedia.org/wiki/Royse_City,_Texas",
    },
    {
      "@type": "City",
      name: "Fate",
      "@id": "https://en.wikipedia.org/wiki/Fate,_Texas",
    },
    {
      "@type": "City",
      name: "Rowlett",
      "@id": "https://en.wikipedia.org/wiki/Rowlett,_Texas",
    },
  ],
  sameAs: [
    "https://www.facebook.com/downrightplumbing",
    "https://www.instagram.com/downrightplumbing",
  ],
  serviceType: [
    "Plumbing Repairs",
    "Drain Cleaning",
    "Water Heater Repair",
    "Water Heater Installation",
    "Leak Detection",
    "Pipe Repair",
    "Fixture Installation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <a href="#main-content" className="skip-to-content">
              Skip to main content
            </a>
            <AnnouncementBar />
            <Header />
            <main id="main-content" className="flex-1">{children}</main>
            <Footer />
            <StickyCTABar />
            <FloatingCTA />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
