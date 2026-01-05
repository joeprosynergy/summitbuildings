import { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stakes from '@/components/Stakes';

// Lazy load below-fold components to reduce initial JS bundle
const Guide = lazy(() => import('@/components/Guide'));
const HowItWorks = lazy(() => import('@/components/HowItWorks'));
const Products = lazy(() => import('@/components/Products'));
const Imagine = lazy(() => import('@/components/Imagine'));
const CTABanner = lazy(() => import('@/components/CTABanner'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const Locations = lazy(() => import('@/components/Locations'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));

const SectionFallback = () => <div className="min-h-[200px]" />;

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Summit Portable Buildings | Get the Storage Space You Need Without the Hassle</title>
        <meta
          name="description"
          content="Custom storage buildings designed for your property, built by craftsmen, delivered to your door. Serving Missouri, Illinois, Kentucky & Arkansas since 2008."
        />
        <meta
          name="keywords"
          content="storage buildings, storage sheds, barns, garages, utility sheds, outdoor storage, Missouri, Illinois, Kentucky, Arkansas"
        />
        <meta property="og:title" content="Summit Portable Buildings | Custom Storage Solutions" />
        <meta
          property="og:description"
          content="Stop living with clutter. Design your perfect shed online in minutes and we'll handle the rest. Free delivery within 50 miles."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://summitbuildings.com" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          {/* 1. Hero - Clear headline with value proposition */}
          <Hero />
          
          {/* 2. Stakes - The problem (We Understand - pain points) */}
          <Stakes />
          
          {/* Below-fold components loaded lazily */}
          <Suspense fallback={<SectionFallback />}>
            {/* 3. Guide - Position as the guide (We've Helped Hundreds) */}
            <Guide />
          </Suspense>
          
          <Suspense fallback={<SectionFallback />}>
            {/* 4. Plan - Simple 3-step process (The Plan) */}
            <HowItWorks />
          </Suspense>
          
          <Suspense fallback={<SectionFallback />}>
            {/* 5. Products - Choose Your Style */}
            <Products />
          </Suspense>
          
          <Suspense fallback={<SectionFallback />}>
            {/* 6. Imagine - What Life Looks Like With the Right Storage */}
            <Imagine />
          </Suspense>
          
          <Suspense fallback={<SectionFallback />}>
            {/* 7. CTA Banner - Don't Let Clutter Take Over */}
            <CTABanner />
          </Suspense>
          
          <Suspense fallback={<SectionFallback />}>
            {/* 8. Social Proof - Success Stories */}
            <Testimonials />
          </Suspense>
          
          <Suspense fallback={<SectionFallback />}>
            {/* 9. Locations - Service Areas */}
            <Locations />
          </Suspense>
          
          <Suspense fallback={<SectionFallback />}>
            {/* 10. Contact - Get In Touch */}
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={<SectionFallback />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default Index;
