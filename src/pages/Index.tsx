import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stakes from '@/components/Stakes';
import Guide from '@/components/Guide';
import HowItWorks from '@/components/HowItWorks';
import Products from '@/components/Products';
import Imagine from '@/components/Imagine';
import CTABanner from '@/components/CTABanner';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Locations from '@/components/Locations';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Summit Portable Buildings | Get the Storage Space You Need Without the Hassle</title>
        <meta
          name="description"
          content="Custom portable buildings designed for your property, built by craftsmen, delivered to your door. Serving Missouri, Illinois, Kentucky & Arkansas since 2008."
        />
        <meta
          name="keywords"
          content="portable buildings, storage sheds, barns, garages, utility sheds, outdoor storage, Missouri, Illinois, Kentucky, Arkansas"
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
          
          {/* 2. Stakes - The problem (pain points) */}
          <Stakes />
          
          {/* 3. Guide - Position as the guide with empathy + authority */}
          <Guide />
          
          {/* 4. Plan - Simple 3-step process */}
          <HowItWorks />
          
          {/* 5. Products - Our solutions */}
          <Products />
          
          {/* 6. Imagine - Future pacing (what life looks like) */}
          <Imagine />
          
          {/* 7. CTA Banner - Urgency call to action */}
          <CTABanner />
          
          {/* 8. Social Proof - Testimonials */}
          <Testimonials />
          
          {/* 9. FAQ - Handle objections */}
          <FAQ />
          
          {/* 10. Locations */}
          <Locations />
          
          {/* 11. Contact Form */}
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
