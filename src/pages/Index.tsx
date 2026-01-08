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
import { useEditableTestimonials } from '@/hooks/useEditableTestimonials';
import { EditablePageWrapper } from '@/components/admin/EditablePageWrapper';

interface HomeContent {
  heading: string;
  tagline: string;
  subheading: string;
  ctaHeading: string;
  ctaDescription: string;
  ctaButton: string;
  metaTitle: string;
  metaDescription: string;
  [key: string]: string; // Index signature for SectionContent compatibility
}

const defaultContent: HomeContent = {
  heading: "Get the Storage Space You Need Without the Hassle",
  tagline: "Summit Portable Buildings",
  subheading: "Custom storage buildings designed for your property, built by craftsmen, delivered to your door.",
  ctaHeading: "Stop living with clutter",
  ctaDescription: "Design your perfect shed online in minutes and we'll handle the rest.",
  ctaButton: "Design Your Shed Now",
  metaTitle: "Summit Portable Buildings | Built The Old Fashioned Way",
  metaDescription: "Affordable, high quality, hand crafted, storage buildings built in the USA. Serving Missouri, Illinois, Kentucky, and Arkansas.",
};

const Index = () => {
  const {
    testimonials,
    hasChanges: hasTestimonialChanges,
    updateTestimonial,
    save: saveTestimonials,
    reset: resetTestimonials,
  } = useEditableTestimonials();

  return (
    <EditablePageWrapper<HomeContent> slug="home" defaultContent={defaultContent}>
      {({ content, isEditMode, updateField }) => (
        <>
          <Helmet>
            <meta property="og:title" content={content.metaTitle} />
            <meta property="og:description" content={content.metaDescription} />
            <meta name="twitter:title" content={content.metaTitle} />
            <meta name="twitter:description" content={content.metaDescription} />
          </Helmet>
          
          <div className="min-h-screen">
            <Header />
            <main>
              <Hero 
                content={content} 
                isEditMode={isEditMode} 
                onUpdateField={(field, value) => updateField(field as keyof HomeContent, value)}
              />
              <Stakes isEditMode={isEditMode} />
              <Guide />
              <HowItWorks />
              <Products />
              <Imagine isEditMode={isEditMode} />
              <CTABanner isEditMode={isEditMode} />
              <Testimonials 
                testimonials={testimonials}
                isEditMode={isEditMode}
                onUpdateTestimonial={updateTestimonial}
              />
              <Locations />
              <Contact />
            </main>
            <Footer />
          </div>
        </>
      )}
    </EditablePageWrapper>
  );
};

export default Index;
