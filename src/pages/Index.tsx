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
        <meta property="og:title" content="Summit Portable Buildings | Built The Old Fashioned Way" />
        <meta property="og:description" content="Affordable, high quality, hand crafted, storage buildings built in the USA. Serving Missouri, Illinois, Kentucky, and Arkansas." />
        <meta name="twitter:title" content="Summit Portable Buildings | Built The Old Fashioned Way" />
        <meta name="twitter:description" content="Affordable, high quality, hand crafted, storage buildings built in the USA. Serving Missouri, Illinois, Kentucky, and Arkansas." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Stakes />
          <Guide />
          <HowItWorks />
          <Products />
          <Imagine />
          <CTABanner />
          <Testimonials />
          <Locations />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
