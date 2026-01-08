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
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { useEditablePageContent, PageContent } from '@/hooks/useEditablePageContent';
import { useEditableTestimonials } from '@/hooks/useEditableTestimonials';
import { AdminEditMode } from '@/components/admin/AdminEditMode';

const defaultContent: PageContent = {
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
  const { isAdmin } = useAdminAuth();
  const {
    content,
    editedContent,
    isLoading,
    isSaving,
    isEditMode,
    hasChanges,
    updateField,
    save,
    reset,
    startEditing,
  } = useEditablePageContent('home', defaultContent);

  const {
    testimonials,
    hasChanges: hasTestimonialChanges,
    updateTestimonial,
    save: saveTestimonials,
    reset: resetTestimonials,
  } = useEditableTestimonials();

  const handleSave = async () => {
    await save();
    if (hasTestimonialChanges) {
      await saveTestimonials();
    }
  };

  const handleReset = () => {
    reset();
    resetTestimonials();
  };

  return (
    <>
      <Helmet>
        <meta property="og:title" content={content.metaTitle} />
        <meta property="og:description" content={content.metaDescription} />
        <meta name="twitter:title" content={content.metaTitle} />
        <meta name="twitter:description" content={content.metaDescription} />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <AdminEditMode
          isAdmin={isAdmin}
          isEditMode={isEditMode}
          hasChanges={hasChanges || hasTestimonialChanges}
          isSaving={isSaving}
          onToggleEdit={startEditing}
          onSave={handleSave}
          onCancel={handleReset}
        />
        <main>
          <Hero 
            content={editedContent} 
            isEditMode={isEditMode} 
            onUpdateField={updateField}
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
  );
};

export default Index;
