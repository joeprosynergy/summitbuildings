import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
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
          <Hero />
          <Products />
          <Features />
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
