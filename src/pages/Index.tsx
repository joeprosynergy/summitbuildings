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
          
          {/* 3. Guide - Position as the guide (We've Helped Hundreds) */}
          <Guide />
          
          {/* 4. Plan - Simple 3-step process (The Plan) */}
          <HowItWorks />
          
          {/* 5. Products - Choose Your Style */}
          <Products />
          
          {/* 6. Imagine - What Life Looks Like With the Right Storage */}
          <Imagine />
          
          {/* 7. CTA Banner - Don't Let Clutter Take Over */}
          <CTABanner />
          
          {/* 8. Social Proof - Success Stories */}
          <Testimonials />
          
          {/* 9. Locations - Service Areas */}
          <Locations />
          
          {/* 10. Contact - Get In Touch */}
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
