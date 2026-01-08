import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Check,
  ArrowRight,
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
  { src: cloudinaryImages.utilityShed1, alt: 'Summit Utility Shed - Gray with white trim' },
  { src: cloudinaryImages.utilityShed2, alt: 'Summit Utility Shed - Tan with brown trim' },
  { src: cloudinaryImages.utilityShed3, alt: 'Summit Utility Shed - White exterior' },
  { src: cloudinaryImages.utilityShed4, alt: 'Summit Utility Shed - Brown rustic style' },
  { src: cloudinaryImages.sideUtility1, alt: 'Summit Side Utility - Gray with side door' },
  { src: cloudinaryImages.sideUtility2, alt: 'Summit Side Utility - White with windows' },
  { src: cloudinaryImages.sideUtility3, alt: 'Summit Side Utility - Tan with shutters' },
  { src: cloudinaryImages.sideUtility4, alt: 'Summit Side Utility - Dark brown finish' },
  { src: cloudinaryImages.treatedGardenShed, alt: 'Treated garden shed with black shutters' },
];

// Combined features for Pro - Utility Shed
const proUtilityFeatures = [
  "Double 36\" Doors w/ T-Handle Lock & Key",
  "3/4\" T & G Advantech Flooring",
  "Mesh Vented Ridge",
  "Moisture Barrier & Drip Edge on Roof",
  "7'9\" (93\") Wall Height",
  "16\" O.C. Wall Studs",
  "16\" O.C. Rafters",
  "Set of 2 Door Holders (Keep the Doors Open)",
  "Side or Front Door Entry Options",
  "Additional Doors & Windows Available",
  "Customizable Layout for Any Use",
];

// Color swatches with approximate hex colors
const sidingOptions = {
  paint: [
    { name: 'Barn Red', color: '#6B2C2C' },
    { name: 'Black', color: '#2D2D2D' },
    { name: 'Buckskin', color: '#B89B6A' },
    { name: 'Burnished Slate', color: '#5A6165' },
    { name: 'Clay', color: '#A69B8C' },
    { name: 'Dark Brown', color: '#4A3728' },
    { name: 'GP Gray', color: '#8B8B8B' },
    { name: 'GP Tan', color: '#9B8B6B' },
    { name: 'Gray', color: '#7A7A7A' },
    { name: 'Shadow', color: '#C4BBA8' },
    { name: 'Martin Creme', color: '#D4C9A8' },
    { name: 'Mountain Red', color: '#8B3A3A' },
    { name: 'Navy Blue', color: '#2C4A6B' },
    { name: 'Quaker Tan', color: '#8B7355' },
    { name: 'Riehl Blue', color: '#4A6B7A' },
    { name: 'Riehl Green', color: '#3A5A3A' },
    { name: 'Wedgwood Blue', color: '#6A8A9A' },
    { name: 'White', color: '#E8E8E0' },
  ],
  metal: [
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
  ],
  urethane: [
    { name: 'Barnwood', color: '#6B5B4F' },
    { name: 'Butternut', color: '#C49B5F' },
    { name: 'Charcoal', color: '#36454F' },
    { name: 'Chestnut Brown', color: '#5C3317' },
    { name: 'Golden Wheat', color: '#C9A86C' },
    { name: 'Mahogany', color: '#4A2C2A' },
    { name: 'Natural Cedar', color: '#A87B5B' },
    { name: 'Natural Teak', color: '#8B7355' },
    { name: 'Redwood', color: '#8B4513' },
    { name: 'Sage', color: '#87AE73' },
  ],
  vinyl: [
    { name: 'Beige', color: '#C8B89A' },
    { name: 'Cactus', color: '#5F7355' },
    { name: 'Champagne', color: '#E8DCC4' },
    { name: 'Cream', color: '#FFFDD0' },
    { name: 'Deep Water', color: '#354B5E' },
    { name: 'Fern', color: '#4F7942' },
    { name: 'Firebrick', color: '#B22222' },
    { name: 'Granite', color: '#676767' },
    { name: 'Graphite', color: '#383838' },
    { name: 'Khaki', color: '#C3B091' },
    { name: 'Maverick Brown', color: '#6B4423' },
    { name: 'Mocha', color: '#6F4E37' },
    { name: 'Myrtle', color: '#21421E' },
    { name: 'Olive', color: '#556B2F' },
    { name: 'Russet', color: '#80461B' },
    { name: 'Sandstone', color: '#786D5F' },
    { name: 'Seaport', color: '#3A5F7B' },
    { name: 'Sierra', color: '#A0785A' },
    { name: 'Silver', color: '#C0C0C0' },
    { name: 'Smoke', color: '#738276' },
    { name: 'Steel Blue', color: '#4682B4' },
    { name: 'Wheat', color: '#D4C4A8' },
    { name: 'White', color: '#F5F5F5' },
    { name: 'Yellow', color: '#F0D060' },
  ],
};

const upgradeOptions = [
  {
    category: 'Doors',
    items: [
      'Single 36" Wood Door',
      'Double 36" Wood Doors',
      'Single/Double 36" 6 Panel Fiberglass Door',
      'Single/Double 36" 6 Panel Fiberglass 11 Lite Door',
      'Single/Double 36" Solid Pre-Hung Door',
      'Single/Double 36" 9 Lite Pre-Hung Door',
      'Dead Bolt for Steel Door(s)',
      'Loft Door',
      '6\'x6\' Roll up Door',
      '6\'x7\' Roll up Door',
      '9\'x7\' Roll up Door',
      '9\'x7\' Insulated Garage Door (W/ T-Handle Lock/Key)',
    ],
  },
  {
    category: 'Windows',
    items: [
      '24"x36" Window (Single Pane)',
      '36"x36" Window (Single Pane)',
      '24"x36" Vinyl Insulated Window w/ grid',
      '36"x36" Vinyl Insulated Window w/ grid',
      '9" Vinyl Shutters (set)',
      '12" Vinyl Shutters (set)',
    ],
  },
  {
    category: 'Flooring & Ramps',
    items: [
      'Pressure Treated Floor',
      '12"x48" Adjustable Ramp (Aluminum)',
      'Brackets & 2 – 12"x48" Ramps',
      'Additional 12"x48" Ramp',
      '6\'x5\' Treated Wood Ramp',
      '9\'x5\' Treated Wood Ramp',
    ],
  },
  {
    category: 'Storage & Interior',
    items: [
      '22" Workbench w/ 3/4" Top (per foot)',
      '22" Double Shelves w/ 1/2" Top (per foot)',
      'Extra Loft Area (sq. foot)',
      'Extra Loft Ladder',
      'Interior 2"x4" Framed Walls (16" o.c. per foot)',
    ],
  },
  {
    category: 'Extras',
    items: [
      'Wainscott (metal siding) (per foot)',
      'Wainscott (wood siding) (per foot)',
      '16" Tall 2"x4" Loft Railing W/ 30" Opening',
      'Porch Railing (per foot)',
      'Anchors (each)',
      'Ridge Vent (per foot)',
      'Moisture Barrier / Single Bubble Insulation',
      'Electrical Package (100 Amp Box, 2 receptacles, 2 lights/switch)',
      'Additional Light or Receptacle (each)',
      'Build on Site Available',
    ],
  },
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

interface UtilityShedContent {
  metaTitle: string;
  metaDescription: string;
  [key: string]: string;
}

const defaultContent: UtilityShedContent = {
  metaTitle: 'Pro - Utility Shed | Summit Portable Buildings',
  metaDescription: 'The Pro Utility Shed is a classy, yet simple addition to your property. Perfect for outdoor power equipment, tack rooms, hay sheds, workshops, or even a lake cabin. Available with standard or side door entry. Sizes 8×8 to 14×40. Free delivery within 50 miles.',
};

const UtilityShed = () => {
  const backPath = useBackPath({
    defaultPath: '/types/deluxe-storage-cabins#pro-utility',
    defaultLabel: '← Back to Deluxe Storage & Cabins',
    stylesPath: '/styles/utility',
    stylesLabel: '← Back to Styles',
  });

  return (
    <EditablePageWrapper slug="utility-shed" defaultContent={defaultContent}>
      {({ content }) => (
        <>
          <Helmet>
            <title>{content.metaTitle}</title>
            <meta name="description" content={content.metaDescription} />
            <meta property="og:title" content={content.metaTitle} />
            <meta property="og:description" content={content.metaDescription} />
            <link rel="canonical" href="https://summitbuildings.com/types/deluxe-storage-cabins/pro-utility-shed" />
          </Helmet>

          <div className="min-h-screen">
            <Header />
        
        <main>
          <ProductHero
            backPath={backPath}
            title="PRO -"
            titleHighlight="UTILITY SHED"
            description="A classy, yet simple addition to your property. The superior workmanship makes it an aesthetically pleasing and obvious choice for your storage needs. Available in standard utility or side utility configurations."
            subtitle="Sizes: 8×8 to 14×40"
            image={cloudinaryImages.utilityShed1}
            imageAlt="Summit Pro Utility Shed"
          />

          {/* Image Gallery */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <GallerySection images={galleryImages} />
            </div>
          </section>

          {/* Pro - Utility Shed Features */}
          <section className="section-padding bg-muted/30">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                  Built for <span className="text-secondary">Any Configuration</span>
                </h2>
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                  The Pro - Utility Shed adapts to your needs. Whether you need front entry, side entry, windows for natural light, or a completely custom layout — design it exactly how you want with our 3D configurator.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <img
                      src={cloudinaryImages.sideUtility1}
                      alt="Pro Utility Shed - Customizable Configuration"
                      className="rounded-xl shadow-lg w-full"
                    />
                    <div className="absolute -bottom-3 -right-3 bg-secondary text-primary-foreground px-4 py-2 rounded-lg font-heading text-sm">
                      Infinitely Customizable
                    </div>
                  </div>
                  
                  <div className="bg-card rounded-xl p-8 border border-border shadow-lg">
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                      Pro - Utility Shed Features
                    </h3>
                    <div className="space-y-3">
                      {proUtilityFeatures.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-foreground">
                          <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground italic mt-6">
                      *8 foot wide models feature adjusted door sizing
                    </p>
                    <div className="mt-6">
                      <a href="https://summitbuildings.shedpro.co/" target="_blank" rel="noopener noreferrer">
                        <Button variant="hero" className="w-full">
                          Design Yours Now
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Ideal Uses Section */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                  Perfect For Any Use
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    'Outdoor Power Equipment Storage',
                    'Portable Tack Room',
                    'Small Hay Shed',
                    'Workshop (Mechanic/Woodworking)',
                    'Lake or Hunting Cabin',
                    'Garden Shed',
                    'Tool Storage',
                    'Hobby Space',
                    'Home Office',
                  ].map((use) => (
                    <div key={use} className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border/50">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-foreground font-medium">{use}</span>
                    </div>
                  ))}
                </div>
                <p className="text-center text-muted-foreground mt-8 text-sm">
                  Add windows and a 36" 9 Lite Door to create the perfect shop. With so many sizes and styles available, you can find just the right fit for your property!
                </p>
              </div>
            </div>
          </section>

          {/* Color & Material Options */}
          <section className="section-padding bg-muted/30">
            <div className="container-custom">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-8">
                COLOR AND MATERIAL OPTIONS
              </h2>
              
              <div className="bg-card rounded-lg border border-border overflow-hidden">
                <Accordion type="single" collapsible defaultValue="paint" className="w-full">
                  <AccordionItem value="paint" className="border-b border-border">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <span className="font-heading text-lg font-bold text-secondary uppercase">
                        Paint Siding Options
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="flex flex-wrap gap-6 pt-4">
                        {sidingOptions.paint.map((swatch) => (
                          <ColorSwatch key={swatch.name} name={swatch.name} color={swatch.color} />
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="metal" className="border-b border-border">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <span className="font-heading text-lg font-bold text-secondary uppercase">
                        Metal Siding Options
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="flex flex-wrap gap-6 pt-4">
                        {sidingOptions.metal.map((swatch) => (
                          <ColorSwatch key={swatch.name} name={swatch.name} color={swatch.color} />
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="urethane" className="border-b border-border">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <span className="font-heading text-lg font-bold text-secondary uppercase">
                        Urethane Siding Options
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="flex flex-wrap gap-6 pt-4">
                        {sidingOptions.urethane.map((swatch) => (
                          <ColorSwatch key={swatch.name} name={swatch.name} color={swatch.color} />
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="vinyl" className="border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <span className="font-heading text-lg font-bold text-secondary uppercase">
                        Vinyl Siding Options
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="flex flex-wrap gap-6 pt-4">
                        {sidingOptions.vinyl.map((swatch) => (
                          <ColorSwatch key={swatch.name} name={swatch.name} color={swatch.color} />
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>

          {/* Upgrade Options */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
                Available Upgrades
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upgradeOptions.map((group) => (
                  <div key={group.category} className="bg-card rounded-xl p-6 border border-border/50">
                    <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                      {group.category}
                    </h3>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                          <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Important Notes */}
          <section className="py-8 bg-muted/30">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-sm text-muted-foreground">
                  *Free delivery within 50 miles. Transom windows come at an up-charge. Prices subject to change without warning.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="section-padding bg-gradient-to-r from-secondary to-primary">
            <div className="container-custom text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                Design your perfect utility shed online or contact us for a free quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://summitbuildings.shedpro.co/" target="_blank" rel="noopener noreferrer">
                  <Button variant="heroOutline" size="xl" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
                    Build Your Own
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
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

export default UtilityShed;
