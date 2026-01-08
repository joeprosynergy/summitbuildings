import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cloudinaryImages } from '@/lib/cloudinary';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { useEditablePageContent, PageContent } from '@/hooks/useEditablePageContent';
import { InlineEditable } from '@/components/admin/InlineEditable';
import { AdminEditMode } from '@/components/admin/AdminEditMode';

const roofStyles = [
  {
    id: 'utility',
    name: 'Utility',
    subtitle: 'Traditional A-Frame Roof',
    image: cloudinaryImages.utilityShed3,
    link: '/styles/utility'
  },
  {
    id: 'barn',
    name: 'Barn',
    subtitle: 'Gambrel Roof',
    image: cloudinaryImages.sideLoftedBarn4,
    link: '/styles/barn'
  },
  {
    id: 'modern',
    name: 'Modern',
    subtitle: 'Single Slope Roof',
    image: cloudinaryImages.modernShed,
    link: '/styles/modern'
  },
];

const specialtyStyles = [
  {
    id: 'greenhouse',
    name: 'Greenhouse',
    subtitle: 'Grow Year-Round',
    image: cloudinaryImages.greenhouse1,
    link: '/styles/greenhouse'
  },
  {
    id: 'animal-shelters',
    name: 'Animal Shelters',
    subtitle: 'Kennels & Coops',
    image: cloudinaryImages.animalShelter1,
    link: '/styles/animal-shelters'
  },
];

const defaultContent: PageContent = {
  heading: "Building Styles",
  tagline: "Find Your Perfect Style",
  subheading: "Select a roof style to explore available options",
  ctaHeading: "Ready to Get Started?",
  ctaDescription: "Design your perfect building online in minutes",
  ctaButton: "Design Your Building",
  metaTitle: "Building Styles | Summit Portable Buildings",
  metaDescription: "Choose your preferred building style - Utility with traditional A-frame roof, Barn with gambrel roof, Modern with single slope roof, plus Greenhouses and Animal Shelters.",
};

const Styles = () => {
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
  } = useEditablePageContent('styles', defaultContent);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
        <link rel="canonical" href="https://summitbuildings.com/styles" />
      </Helmet>

      <Header />

      <AdminEditMode
        isAdmin={isAdmin}
        isEditMode={isEditMode}
        hasChanges={hasChanges}
        isSaving={isSaving}
        onToggleEdit={startEditing}
        onSave={save}
        onCancel={reset}
      />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container-custom text-center">
            <InlineEditable
              value={editedContent.tagline}
              fieldName="tagline"
              onChange={(v) => updateField('tagline', v)}
              isEditMode={isEditMode}
              className="text-secondary font-semibold tracking-wider uppercase mb-4"
              as="p"
            />
            <div className="mb-6">
              <InlineEditable
                value={editedContent.heading}
                fieldName="heading"
                onChange={(v) => updateField('heading', v)}
                isEditMode={isEditMode}
                className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground"
                as="h1"
              />
            </div>
            <InlineEditable
              value={editedContent.subheading}
              fieldName="subheading"
              onChange={(v) => updateField('subheading', v)}
              isEditMode={isEditMode}
              className="text-xl text-primary-foreground/80 max-w-2xl mx-auto"
              as="p"
            />
          </div>
        </section>

        {/* Roof Styles Grid */}
        <section className="bg-background py-16 md:py-24">
          <div className="container-custom">
            <div className="bg-card rounded-lg shadow-lg overflow-hidden">
              <div className="bg-primary py-5 px-6">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground text-center uppercase tracking-wide">
                  Choose Your Style
                </h2>
              </div>

              <div className="p-6 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  {roofStyles.map((style) => (
                    <Link
                      key={style.id}
                      to={style.link}
                      className="group text-center"
                    >
                      <div className="aspect-square mb-4 overflow-hidden rounded-lg shadow-sm bg-muted">
                        <img
                          src={style.image}
                          alt={style.name}
                          className="w-full h-full transition-transform duration-300 group-hover:scale-105 object-cover"
                        />
                      </div>
                      <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-secondary transition-colors uppercase tracking-wide">
                        {style.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {style.subtitle}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialty Structures Grid */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container-custom">
            <div className="bg-card rounded-lg shadow-lg overflow-hidden">
              <div className="bg-primary py-5 px-6">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground text-center uppercase tracking-wide">
                  Specialty Structures
                </h2>
              </div>

              <div className="p-6 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                  {specialtyStyles.map((style) => (
                    <Link
                      key={style.id}
                      to={style.link}
                      state={{ from: '/styles' }}
                      className="group text-center"
                    >
                      <div className="aspect-[4/3] mb-4 overflow-hidden rounded-lg shadow-sm bg-muted">
                        <img
                          src={style.image}
                          alt={style.name}
                          className="w-full h-full transition-transform duration-300 group-hover:scale-105 object-contain"
                        />
                      </div>
                      <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-secondary transition-colors uppercase tracking-wide">
                        {style.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {style.subtitle}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="container-custom text-center">
            <InlineEditable
              value={editedContent.ctaHeading}
              fieldName="CTA heading"
              onChange={(v) => updateField('ctaHeading', v)}
              isEditMode={isEditMode}
              className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6"
              as="h2"
            />
            <InlineEditable
              value={editedContent.ctaDescription}
              fieldName="CTA description"
              type="textarea"
              onChange={(v) => updateField('ctaDescription', v)}
              isEditMode={isEditMode}
              className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto"
              as="p"
            />
            <a
              href="https://summitbuildings.shedpro.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary text-secondary-foreground font-bold px-8 py-4 rounded-md hover:brightness-110 transition-all"
            >
              <InlineEditable
                value={editedContent.ctaButton}
                fieldName="CTA button"
                onChange={(v) => updateField('ctaButton', v)}
                isEditMode={isEditMode}
                as="span"
              />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Styles;
