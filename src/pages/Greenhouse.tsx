import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
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

// Import images
import greenhouse1 from '@/assets/greenhouse-1.jpg';
import greenhouse2 from '@/assets/greenhouse-2.jpg';
import greenhouse3 from '@/assets/greenhouse-3.jpg';
import greenhouse4 from '@/assets/greenhouse-4.jpg';

const galleryImages = [
  { src: greenhouse1, alt: 'Summit Greenhouse - Interior view with plants' },
  { src: greenhouse2, alt: 'Summit Greenhouse - Exterior front view' },
  { src: greenhouse3, alt: 'Summit Greenhouse - Side angle view' },
  { src: greenhouse4, alt: 'Summit Greenhouse - Full exterior view' },
];

const greenhouseFeatures = [
  "Treated 5/4\" Decking Floor",
  "12\" Shutter w/ Exhaust Fan & Cord (Up to 300 sq. ft)",
  "12\" Intake Shutter & Motor Kit for up to 300 sq. ft",
  "Shutter / Fan Thermostat Controller plus connection",
  "24\" Wide Shelving w/ Wire Mesh",
  "24\" Wide Potting Soil Bench",
  "36\" x 72\" Greenhouse Door w/ T Handle Lock",
  "Electrical Package (Includes 100 amp box w/ 2 outlets & two Standard Light Sockets w/ Switch)",
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
};

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

const Greenhouse = () => {
  return (
    <>
      <Helmet>
        <title>Greenhouse | Summit Portable Buildings</title>
        <meta
          name="description"
          content="Summit Buildings Greenhouses feature treated decking floors, exhaust fans, thermostat controllers, shelving, potting benches, and electrical packages. Perfect for year-round growing."
        />
        <meta property="og:title" content="Greenhouse | Summit Portable Buildings" />
        <meta
          property="og:description"
          content="Purpose-built greenhouses with ventilation, electrical packages, and durable construction for serious gardeners. Free delivery within 50 miles."
        />
        <link rel="canonical" href="https://summitbuildings.com/types/greenhouse" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main>
          <ProductHero
            backPath={{ 
              defaultPath: '/types', 
              defaultLabel: '← Back to All Models' 
            }}
            title=""
            titleHighlight="GREENHOUSE"
            titlePosition="only"
            description="Purpose-built for serious gardeners. Our greenhouses come equipped with ventilation systems, electrical packages, and durable construction for year-round growing success."
            subtitle="Custom Sizes Available"
            image={greenhouse1}
            imageAlt="Summit Greenhouse"
          />

          {/* Image Gallery */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <GallerySection images={galleryImages} />
            </div>
          </section>

          {/* Greenhouse Features */}
          <section className="section-padding bg-muted/30">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                  Built for <span className="text-secondary">Year-Round Growing</span>
                </h2>
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                  Our greenhouses come fully equipped with everything you need for successful growing, from ventilation systems to electrical packages and durable flooring.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <img
                      src={greenhouse2}
                      alt="Greenhouse Interior with Shelving"
                      className="rounded-xl shadow-lg w-full"
                    />
                    <div className="absolute -bottom-3 -right-3 bg-secondary text-primary-foreground px-4 py-2 rounded-lg font-heading text-sm">
                      Fully Equipped
                    </div>
                  </div>
                  
                  <div className="bg-card rounded-xl p-8 border border-border shadow-lg">
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                      Standard Features
                    </h3>
                    <div className="space-y-3">
                      {greenhouseFeatures.map((feature) => (
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
                  Perfect For Any Growing Need
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    'Year-Round Vegetable Growing',
                    'Flower & Plant Nursery',
                    'Seed Starting',
                    'Tropical Plant Storage',
                    'Herb Garden',
                    'Hobby Greenhouse',
                    'Commercial Growing',
                    'Plant Propagation',
                    'Winter Plant Protection',
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
                  
                  <AccordionItem value="metal" className="border-b-0">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <span className="font-heading text-lg font-bold text-secondary uppercase">
                        Metal Siding / Roof Options
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

          {/* Final CTA */}
          <section className="section-padding bg-navy text-center">
            <div className="container-custom max-w-3xl">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Start Growing?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Design your perfect greenhouse today or call us to discuss your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://summitbuildings.shedpro.co/" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="xl">
                    Design Your Greenhouse
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
                <a href="tel:5747474700">
                  <Button variant="heroOutline" size="xl">
                    Call (574) 747-4700
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

export default Greenhouse;
