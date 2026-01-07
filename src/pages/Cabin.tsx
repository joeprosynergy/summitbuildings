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

// Import from Cloudinary
import { cloudinaryImages } from '@/lib/cloudinary';

const galleryImages = [
  { src: cloudinaryImages.cabin1, alt: 'Summit Cabin - Exterior view with porch' },
  { src: cloudinaryImages.cabin2, alt: 'Summit Cabin - Interior finished view' },
  { src: cloudinaryImages.cabin3, alt: 'Summit Cabin - Side view' },
  { src: cloudinaryImages.cabin4, alt: 'Summit Cabin - Interior details' },
];

// Summit Cabin features from website
const cabinFeatures = [
  "14' X 32' Base Size",
  "7/12 Pitch Roof",
  "3/4 Advantec Floor",
  "6 Interior LED Lighting & Electrical Package",
  "7 Extra Receptacles + 200 Amp Box Upgrade",
  "2 x 6 Truss",
  "7/16 OSB & Housewrap on Walls",
  "Moisture Barrier and Drip Edge on Roof",
  "6' Treated Wood Fold Up Lean To Porch",
  "D-Log on One 32' Side",
  "36\" 9 Lite Door",
  "6\" Overhang",
  "6 x 36 x 48 Double Pane Windows",
  "Mesh Vented Ridge",
  "Metal Siding",
  "Wall Studs/Rafters 16\" O.C.",
];

// Color swatches - Cabin uses Metal, Urethane, and Vinyl
const sidingOptions = {
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
      '6\'x5\' Treated Wood Ramp',
      '9\'x5\' Treated Wood Ramp',
    ],
  },
  {
    category: 'Porch Options',
    items: [
      '4\' Treated Wood Fold Up Lean To Porch',
      '6\' Treated Wood Fold Up Lean To Porch',
      'Porch Railing (per foot)',
      'Porch Steps',
    ],
  },
  {
    category: 'Extras',
    items: [
      'D-Log Siding Upgrade',
      'Wainscott (metal siding) (per foot)',
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

const Cabin = () => {
  const backPath = useBackPath({
    defaultPath: '/types/deluxe-storage-cabins#cabins-tiny-home',
    defaultLabel: '← Back to Deluxe Storage & Cabins',
    stylesPath: '/styles/utility',
    stylesLabel: '← Back to Styles',
  });

  return (
    <>
      <Helmet>
        <title>Summit Cabin | Summit Portable Buildings</title>
        <meta
          name="description"
          content="The Summit Cabin is perfect for your lake lot, hunting cabin, or tiny home. Features 7/12 pitch roof, 6' treated wood porch, LED lighting, electrical package, and double pane windows. Starting at $29,717.89. Free delivery within 50 miles."
        />
        <meta property="og:title" content="Summit Cabin | Summit Portable Buildings" />
        <meta
          property="og:description"
          content="A great building for your lake lot, hunting cabin or kid's play house! Windows let in extra light, porch is perfect for sunset views. Moveable and customizable."
        />
        <link rel="canonical" href="https://summitbuildings.com/types/deluxe-storage-cabins/cabin" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main>
          <ProductHero
            backPath={backPath}
            title="SUMMIT"
            titleHighlight="CABIN"
            description="The Summit Cabin is a great building for your lake lot, hunting cabin, or kid's play house! The windows let in extra light so that you don't need electricity during the daytime. The porch is the perfect place to sit and enjoy the sunset after a long day."
            secondaryDescription="Rather than taking the time to build something permanent, consider this building because it can be moved if necessary. There are so many sizing and siding options that you can find something to fit your hunting property or back yard!"
            subtitle="Starting at $29,717.89"
            image={cloudinaryImages.cabin1}
            imageAlt="Summit Cabin"
          />

          {/* Image Gallery */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <GallerySection images={galleryImages} />
            </div>
          </section>

          {/* Cabin Features */}
          <section className="section-padding bg-muted/30">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                  Built for <span className="text-secondary">Living & Relaxation</span>
                </h2>
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                  The possibilities are endless with a Summit Cabin. Whether it's a tiny home, hunting cabin, or lake retreat — every inch of space can be utilized to perfection. Fully customizable to your needs.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <img
                      src={cloudinaryImages.cabin2}
                      alt="Summit Cabin - Interior"
                      className="rounded-xl shadow-lg w-full"
                    />
                    <div className="absolute -bottom-3 -right-3 bg-secondary text-primary-foreground px-4 py-2 rounded-lg font-heading text-sm">
                      Fully Customizable
                    </div>
                  </div>
                  
                  <div className="bg-card rounded-xl p-8 border border-border shadow-lg">
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                      Summit Cabin Features
                    </h3>
                    <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                      {cabinFeatures.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-foreground">
                          <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
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
                  Perfect For
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    'Lake Lot Cabin',
                    'Hunting Cabin',
                    'Tiny Home',
                    'Guest House',
                    'Kids Play House',
                    'Home Office',
                    'Art Studio',
                    'She Shed / Man Cave',
                    'Backyard Retreat',
                  ].map((use) => (
                    <div key={use} className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border/50">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-foreground font-medium">{use}</span>
                    </div>
                  ))}
                </div>
                <p className="text-center text-muted-foreground mt-8 text-sm">
                  The built-in porch provides the perfect spot to relax and enjoy the outdoors. Large windows bring in natural light, reducing the need for electricity during the day.
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
                <Accordion type="single" collapsible defaultValue="metal" className="w-full">
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
                  *Free delivery within 50 miles. Prices subject to change without warning. Base price shown is for standard configuration.
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
                Design your perfect cabin online or contact us for a free quote.
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
  );
};

export default Cabin;
