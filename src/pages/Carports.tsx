import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import InventoryLink from '@/components/InventoryLink';
import { 
  Check,
  ArrowRight,
  Shield,
  Sun,
  Cloud,
  Wind,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GallerySection from '@/components/GallerySection';
import ProductHero from '@/components/ProductHero';
import { useBackPath } from '@/hooks/useBackPath';
import { EditablePageWrapper } from '@/components/admin/EditablePageWrapper';

// Import from Cloudinary
import { cloudinaryImages } from '@/lib/cloudinary';

const galleryImages = [
  { src: cloudinaryImages.carport1, alt: 'Steel carport with red and white roof' },
  { src: cloudinaryImages.carport2, alt: 'Steel carport structure - side view' },
  { src: cloudinaryImages.carport3, alt: 'Steel carport with gray finish' },
  { src: cloudinaryImages.rvCover1, alt: 'RV Cover protecting recreational vehicle' },
  { src: cloudinaryImages.rvCover2, alt: 'Metal RV carport with enclosed sides' },
  { src: cloudinaryImages.rvCover3, alt: 'Large RV cover structure' },
];

// Carport features
const carportFeatures = [
  "Heavy-duty steel frame construction",
  "Protection from sun, rain, wind, and snow",
  "Withstands tornadoes and hurricanes",
  "Multiple size options available",
  "Customizable roof styles",
  "Optional enclosed sides",
  "Commercial, industrial, or residential use",
  "Long-lasting galvanized steel",
];

// RV Cover features
const rvCoverFeatures = [
  "Extra tall clearance for RVs",
  "Protects your investment from the elements",
  "Keep your 'get-away' vehicle in tip-top shape",
  "Available in various widths and lengths",
  "Optional full or partial enclosure",
  "Sturdy construction for all weather",
];

// Metal color options for steel carports
const metalColors = [
  { name: 'Alamo White', color: '#E5E5DC' },
  { name: 'Ash Gray', color: '#8B8B8B' },
  { name: 'Brilliant White', color: '#FFFFFF' },
  { name: 'Black', color: '#1A1A1A' },
  { name: 'Brite Red', color: '#C41E3A' },
  { name: 'Brown', color: '#5C4033' },
  { name: 'Buckskin Desert', color: '#C4A76C' },
  { name: 'Burgundy', color: '#722F37' },
  { name: 'Burnished Slate', color: '#5A6165' },
  { name: 'Charcoal', color: '#36454F' },
  { name: 'Forest Green', color: '#228B22' },
  { name: 'Galvalume', color: '#B8B8B0' },
  { name: 'Gallery Blue', color: '#4169E1' },
  { name: 'Hunter Green', color: '#355E3B' },
  { name: 'Ivory', color: '#FFFFF0' },
  { name: 'Light Stone', color: '#D4CFC4' },
  { name: 'Ocean', color: '#006994' },
  { name: 'Rustic', color: '#8B4513' },
  { name: 'Pewter', color: '#96A8A1' },
  { name: 'Tan', color: '#D2B48C' },
  { name: 'Taupe', color: '#483C32' },
];

const ColorSwatch = ({ name, color }: { name: string; color: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div 
      className="w-16 h-16 rounded-full border-4 border-card shadow-md"
      style={{ backgroundColor: color }}
    />
    <span className="text-xs text-muted-foreground text-center leading-tight max-w-[70px]">
      {name}
    </span>
  </div>
);

interface CarportsContent {
  metaTitle: string;
  metaDescription: string;
  [key: string]: string;
}

const defaultContent: CarportsContent = {
  metaTitle: 'Carports & RV Covers | Summit Portable Buildings',
  metaDescription: 'Steel carports and RV covers provide the best protection against cold, rain, sun, and wind – even tornadoes and hurricanes. Available for commercial, industrial, or residential use.',
};

const Carports = () => {
  const backPath = useBackPath({
    defaultPath: '/types/garages-carports#carports',
    defaultLabel: '← Back to Garages & Carports',
    stylesPath: '/styles/utility',
    stylesLabel: '← Back to Styles',
  });

  return (
    <EditablePageWrapper slug="carports" defaultContent={defaultContent}>
      {({ content }) => (
        <>
          <Helmet>
            <title>{content.metaTitle}</title>
            <meta name="description" content={content.metaDescription} />
            <meta property="og:title" content={content.metaTitle} />
            <meta property="og:description" content={content.metaDescription} />
            <link rel="canonical" href="https://summitbuildings.com/types/garages-carports/carports" />
          </Helmet>

          <div className="min-h-screen">
            <Header />
        
        <main>
          <ProductHero
            backPath={backPath}
            title="CARPORTS &"
            titleHighlight="RV COVERS"
            description="Steel carports are the best option for protecting your vehicles against the cold, rain, sun, and wind – even tornadoes and hurricanes. As good if not better than traditional stick frame or concrete buildings for commercial, industrial, or residential use."
            image={cloudinaryImages.carport1}
            imageAlt="Steel Carport"
            extraContent={
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-primary-foreground/80">
                  <Shield className="w-5 h-5 text-secondary" />
                  <span>Hurricane Rated</span>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/80">
                  <Sun className="w-5 h-5 text-secondary" />
                  <span>UV Protection</span>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/80">
                  <Cloud className="w-5 h-5 text-secondary" />
                  <span>Weather Resistant</span>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/80">
                  <Wind className="w-5 h-5 text-secondary" />
                  <span>Wind Certified</span>
                </div>
              </div>
            }
            ctaButtons={[
              { text: 'Browse Our Inventory', href: '/inventory', variant: 'hero', external: false },
              { text: 'View All Models', href: '/types', variant: 'heroOutline', external: false },
            ]}
          />

          {/* Image Gallery */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <GallerySection images={galleryImages} />
            </div>
          </section>

          {/* Carport Features */}
          <section className="section-padding bg-muted/30">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                  Built to <span className="text-secondary">Protect</span>
                </h2>
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                  Our steel carports provide superior protection for your vehicles, equipment, and outdoor spaces. Engineered to withstand extreme weather conditions.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <img
                      src={cloudinaryImages.carport2}
                      alt="Steel Carport Structure"
                      className="rounded-xl shadow-lg w-full"
                    />
                    <div className="absolute -bottom-3 -right-3 bg-secondary text-primary-foreground px-4 py-2 rounded-lg font-heading text-sm">
                      Heavy-Duty Steel
                    </div>
                  </div>
                  
                  <div className="bg-card rounded-xl p-8 border border-border shadow-lg">
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                      Carport Features
                    </h3>
                    <div className="space-y-3">
                      {carportFeatures.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-foreground">
                          <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* RV Covers Section */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                  RV <span className="text-secondary">Covers</span>
                </h2>
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                  Owning a recreational vehicle requires a huge investment and it's one worth protecting. Our metal RV carports provide the best protection to keep your "get-away" vehicle in tip-top shape.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="bg-card rounded-xl p-8 border border-border shadow-lg order-2 md:order-1">
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                      RV Cover Features
                    </h3>
                    <div className="space-y-3">
                      {rvCoverFeatures.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-foreground">
                          <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative order-1 md:order-2">
                    <img
                      src={cloudinaryImages.rvCover1}
                      alt="RV Cover protecting recreational vehicle"
                      className="rounded-xl shadow-lg w-full"
                    />
                    <div className="absolute -bottom-3 -left-3 bg-secondary text-primary-foreground px-4 py-2 rounded-lg font-heading text-sm">
                      Protect Your Investment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Ideal Uses Section */}
          <section className="section-padding bg-muted/30">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                  Perfect For Any Application
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    'Vehicle Protection',
                    'RV & Camper Storage',
                    'Boat Covers',
                    'Farm Equipment',
                    'Outdoor Workspace',
                    'Commercial Parking',
                    'Event Shelters',
                    'Industrial Storage',
                    'Picnic Areas',
                  ].map((use) => (
                    <div key={use} className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border/50">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-foreground font-medium">{use}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Color Options */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-8">
                COLOR OPTIONS
              </h2>
              
              <div className="bg-card rounded-lg border border-border overflow-hidden">
                <Accordion type="single" collapsible defaultValue="metal" className="w-full">
                  <AccordionItem value="metal" className="border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <span className="font-heading text-lg font-bold text-secondary uppercase">
                        Metal Color Options
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="flex flex-wrap gap-6 pt-4">
                        {metalColors.map((swatch) => (
                          <ColorSwatch key={swatch.name} name={swatch.name} color={swatch.color} />
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>

          {/* Important Notes */}
          <section className="py-8 bg-muted/30">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-sm text-muted-foreground">
                  *Free delivery within 50 miles. Prices subject to change without warning. Custom sizes and configurations available upon request.
                </p>
              </div>
            </div>
          </section>

          {/* CTA - Modified without Build Your Own */}
          <section className="section-padding bg-gradient-to-r from-secondary to-primary">
            <div className="container-custom text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                Contact us today for a free quote on your carport or RV cover.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <InventoryLink>
                  <Button variant="heroOutline" size="xl" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
                    Browse Our Inventory
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </InventoryLink>
                <Link to="/types">
                  <Button variant="heroOutline" size="xl">
                    See More Models
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>

            <Footer />
          </div>
        </>
      )}
    </EditablePageWrapper>
  );
};

export default Carports;
