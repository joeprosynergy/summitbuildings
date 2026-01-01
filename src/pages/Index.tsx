import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stakes from '@/components/Stakes';
import ValueProps from '@/components/ValueProps';
import Guide from '@/components/Guide';
import HowItWorks from '@/components/HowItWorks';
import Products from '@/components/Products';
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
        <title>Summit Portable Buildings | Built The Old Fashioned Way</title>
        <meta
          name="description"
          content="Attractive, affordable, high quality, hand crafted, and durable portable buildings built right here in the USA. Serving Missouri, Illinois, Kentucky, and Arkansas."
        />
        <meta
          name="keywords"
          content="portable buildings, storage sheds, barns, garages, utility sheds, outdoor storage, Missouri, Illinois, Kentucky, Arkansas"
        />
        <meta property="og:title" content="Summit Portable Buildings | Built The Old Fashioned Way" />
        <meta
          property="og:description"
          content="Attractive, affordable, high quality, hand crafted, and durable portable buildings built right here in the USA."
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
          
          {/* 2. Stakes - The problem (what's at risk) */}
          <Stakes />
          
          {/* 3. Value Props - Key benefits */}
          <ValueProps />
          
          {/* 4. Guide - Position as the guide with empathy + authority */}
          <Guide />
          
          {/* 5. Plan - Simple 3-step process */}
          <HowItWorks />
          
          {/* 6. Products - Our solutions */}
          <Products />
          
          {/* 7. CTA Banner - Call to action */}
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
