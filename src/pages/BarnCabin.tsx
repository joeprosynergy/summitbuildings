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

// Import images
import barnCabin1 from '@/assets/barn-cabin-1.jpg';
import barnCabin2 from '@/assets/barn-cabin-2.jpg';
import barnCabin3 from '@/assets/barn-cabin-3.jpg';
import barnCabin4 from '@/assets/barn-cabin-4.jpg';
import barnCabin5 from '@/assets/barn-cabin-5.jpg';

const galleryImages = [
  { src: barnCabin1, alt: 'Lofted Cabin - Exterior view with porch' },
  { src: barnCabin2, alt: 'Lofted Cabin - Blue exterior with porch' },
  { src: barnCabin3, alt: 'Lofted Cabin - Interior with loft space' },
  { src: barnCabin4, alt: 'Lofted Cabin - Interior view toward door' },
  { src: barnCabin5, alt: 'Lofted Cabin - Gray exterior front view' },
];

// Lofted Cabin features - based on Pro Lofted Barn specs with cabin-specific differences
const cabinFeatures = [
  "36\" 9-Lite Pre-Hung Door",
  "4' Deep Porch with Railing",
  "2 Lofts for Maximum Storage",
  "Loft Ladder Included",
  "3/4\" T & G Advantech Flooring",
  "Mesh Vented Ridge",
  "Moisture Barrier & Drip Edge on Roof",
  "6'6\" (78\") Wall Height",
  "16\" O.C. Wall Studs",
  "16\" O.C. Rafters",
  "Gambrel (Barn) Roof Style",
  "Metal Siding & Roofing",
  "50 Year Warranty on Siding",
  "40 Year Warranty on Roof",
];

// Color swatches - Metal siding options
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
};

const upgradeOptions = [
  {
    category: 'Doors',
    items: [
      'Single 36" Wood Door',
      'Double 36" Wood Doors',
      'Single/Double 36" 6 Panel Fiberglass Door',
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
      '4\' Treated Wood Porch',
      '6\' Treated Wood Porch',
      'Porch Railing (per foot)',
      'Porch Steps',
    ],
  },
  {
    category: 'Extras',
    items: [
      'Additional Lofts',
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

const BarnCabin = () => {
  const backPath = useBackPath({
    defaultPath: '/types/deluxe-storage-cabins#cabins-tiny-home',
    defaultLabel: '← Back to Deluxe Storage & Cabins',
    stylesPath: '/styles/barn',
    stylesLabel: '← Back to Barn Styles',
  });

  return (
    <>
      <Helmet>
        <title>Lofted Cabin | Barn Style | Summit Portable Buildings</title>
        <meta
          name="description"
          content="The Lofted Cabin features a classic gambrel roof design with two lofts for maximum storage. Perfect for lake lots, hunting cabins, or tiny homes. Free delivery within 50 miles."
        />
        <meta property="og:title" content="Lofted Cabin | Summit Portable Buildings" />
        <meta
          property="og:description"
          content="Classic barn-style cabin with gambrel roof, dual lofts, and covered porch. Ideal for lake retreats, hunting cabins, or guest houses."
        />
        <link rel="canonical" href="https://summitbuildings.com/types/deluxe-storage-cabins/barn-cabin" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main>
          <ProductHero
            backPath={backPath}
            title=""
            titleHighlight="LOFTED CABIN"
            titlePosition="only"
            description="The Lofted Cabin combines classic barn styling with cabin functionality. The iconic gambrel roof maximizes overhead space with two generous lofts, while the covered porch provides the perfect spot to relax and enjoy the outdoors."
            secondaryDescription="Perfect for lake lots, hunting properties, or as a backyard guest house. The barn-style roofline gives you more usable space than traditional cabins, and the included porch adds charm and functionality."
            image={barnCabin1}
            imageAlt="Lofted Cabin"
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
                  Classic Barn Style <span className="text-secondary">Living Space</span>
                </h2>
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                  The gambrel roof design provides maximum overhead storage with two large lofts. The included porch with railing creates the perfect outdoor living space.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <img
                      src={barnCabin5}
                      alt="Lofted Cabin - Details"
                      className="rounded-xl shadow-lg w-full"
                    />
                    <div className="absolute -bottom-3 -right-3 bg-secondary text-primary-foreground px-4 py-2 rounded-lg font-heading text-sm">
                      Two Lofts Included
                    </div>
                  </div>
                  
                  <div className="bg-card rounded-xl p-8 border border-border shadow-lg">
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                      Standard Features
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
                    'Home Office',
                    'She Shed / Man Cave',
                    'Backyard Retreat',
                    'Art Studio',
                    'Workshop with Storage',
                  ].map((use) => (
                    <div key={use} className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border/50">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-foreground font-medium">{use}</span>
                    </div>
                  ))}
                </div>
                <p className="text-center text-muted-foreground mt-8 text-sm">
                  The dual lofts provide excellent storage or sleeping space, while the covered porch is perfect for morning coffee or evening relaxation.
                </p>
              </div>
            </div>
          </section>

          {/* Color & Material Options */}
          <section className="section-padding bg-muted/30">
            <div className="container-custom">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-8">
                COLOR OPTIONS
              </h2>
              
              <div className="bg-card rounded-lg border border-border overflow-hidden">
                <Accordion type="single" collapsible defaultValue="metal" className="w-full">
                  <AccordionItem value="metal" className="border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <span className="font-heading text-lg font-bold text-secondary uppercase">
                        Metal Siding & Roof Options
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
                </Accordion>
              </div>
            </div>
          </section>

          {/* Upgrades Section */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-8">
                UPGRADE OPTIONS
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upgradeOptions.map((category) => (
                  <div key={category.category} className="bg-card rounded-lg border border-border p-6">
                    <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                      {category.category}
                    </h3>
                    <ul className="space-y-2">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-padding bg-primary">
            <div className="container-custom text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Build Your Lofted Cabin?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                Design your perfect barn-style cabin online in minutes, or browse our in-stock inventory for immediate availability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://summitbuildings.shedpro.co/" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="xl">
                    Build Your Own
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
                <a href="https://summitportablebuildings.shedsuite.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="heroOutline" size="xl">
                    Browse Inventory
                  </Button>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BarnCabin;
