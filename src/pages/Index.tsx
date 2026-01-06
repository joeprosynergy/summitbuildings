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
  );
};

export default Index;
