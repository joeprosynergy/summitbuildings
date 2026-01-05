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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Import all images
import economyShed1 from '@/assets/economy-shed-1.jpg';
import economyShed2 from '@/assets/economy-shed-2.jpg';
import economyShed3 from '@/assets/economy-shed-3.jpg';
import economyShed4 from '@/assets/economy-shed-4.jpg';
import economyShed6 from '@/assets/economy-shed-6.jpg';
import economyShed7 from '@/assets/economy-shed-7.jpg';
import economyShed8 from '@/assets/economy-shed-8.jpg';
import economyShed9 from '@/assets/economy-shed-9.jpg';

const galleryImages = [
  { src: economyShed1, alt: 'Economy Shed - Red with white trim' },
  { src: economyShed2, alt: 'Economy Shed - Dark brown metal siding' },
  { src: economyShed3, alt: 'Lofted Economy Shed - Gray metal siding' },
  { src: economyShed4, alt: 'Lofted Economy Shed - Light gray with white trim' },
  { src: economyShed6, alt: 'Economy Shed - Gray with dark trim' },
  { src: economyShed7, alt: 'Economy Shed - Tan with white trim' },
  { src: economyShed8, alt: 'Economy Shed - Tan side view' },
  { src: economyShed9, alt: 'Economy Shed - Blue with white trim' },
];

// Economy Shed features (standard)
const economyShedFeatures = [
  "6' 6\" Walls",
  "Double 36\" Doors or Single 48\" Door",
  "Metal Siding Only",
  "Budget-Friendly Storage Solution",
];

// Lofted Economy Shed features
const loftedEconomyFeatures = [
  "5' Walls",
  "Double 36\" Doors",
  "2 Lofts for Extra Storage",
  "Loft Ladder Included",
];

// Color swatches - Metal siding only for Economy
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

const EconomyShed = () => {
  return (
    <>
      <Helmet>
        <title>Economy Shed | Summit Portable Buildings</title>
        <meta
          name="description"
          content="The Economy Shed is our most economical storage building available. Lowest cost per square foot of floor space. Available in standard or lofted configurations with metal siding. Free delivery within 50 miles."
        />
        <meta property="og:title" content="Economy Shed | Summit Portable Buildings" />
        <meta
          property="og:description"
          content="Our most economical storage building. Lowest cost per square foot. Built simply for storage purposes with metal siding. Available in standard or lofted styles."
        />
        <link rel="canonical" href="https://summitbuildings.com/economy-shed" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-16 min-h-[600px] lg:min-h-[700px] bg-gradient-to-br from-navy via-navy-dark to-navy flex items-center">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Link 
                    to="/types/basic-storage#economy" 
                    className="inline-flex items-center gap-2 text-secondary/80 hover:text-secondary mb-4 transition-colors"
                  >
                    ← Back to Basic Storage
                  </Link>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary-foreground leading-tight mb-6">
                    <span className="text-secondary">ECONOMY</span> SHED
                  </h1>
                  <p className="text-lg text-primary-foreground/80 mb-6">
                    Our most economical storage building available. It is the lowest cost per square foot of floor space. Built simply for storage purposes. This series is only available with the metal siding option.
                  </p>
                  
                  <p className="text-secondary font-heading text-xl mb-6">Available in Utility or Lofted Barn Styles</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://summitbuildings.shedpro.co/" target="_blank" rel="noopener noreferrer">
                      <Button variant="hero" size="xl">
                        Build Your Own
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </a>
                    <Link to="/#contact">
                      <Button variant="heroOutline" size="xl">
                        Request a Quote
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div className="relative">
                  <img
                    src={economyShed1}
                    alt="Summit Economy Shed"
                    className="rounded-2xl shadow-2xl w-full"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-secondary text-primary-foreground px-6 py-3 rounded-xl font-heading text-sm md:text-base">
                    FREE DELIVERY*<br />
                    <span className="text-xs font-normal">Within 50 miles</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Image Gallery */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Photo Gallery
              </h2>
              <Carousel className="w-full max-w-5xl mx-auto">
                <CarouselContent>
                  {galleryImages.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-2">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full aspect-square object-cover rounded-lg shadow-md"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            </div>
          </section>

          {/* Two Style Options Section */}
          <section className="section-padding bg-muted/30">
            <div className="container-custom">
              <div className="max-w-5xl mx-auto">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                  Two <span className="text-secondary">Style Options</span>
                </h2>
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                  The Economy Shed is available in both utility and lofted barn styles, giving you flexibility to choose the configuration that best fits your storage needs.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Economy Shed Card */}
                  <div className="bg-card rounded-xl overflow-hidden border border-border shadow-lg">
                    <div className="relative">
                      <img
                        src={economyShed1}
                        alt="Economy Shed - Utility Style"
                        className="w-full aspect-video object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                        Economy Shed
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Simple and efficient utility-style design for straightforward storage needs.
                      </p>
                      <div className="space-y-3">
                        {economyShedFeatures.map((feature) => (
                          <div key={feature} className="flex items-center gap-3 text-foreground">
                            <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Lofted Economy Shed Card */}
                  <div className="bg-card rounded-xl overflow-hidden border border-border shadow-lg">
                    <div className="relative">
                      <img
                        src={economyShed3}
                        alt="Lofted Economy Shed - Barn Style"
                        className="w-full aspect-video object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                        Lofted Economy Shed
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Barn-style design with added loft space for maximized storage capacity.
                      </p>
                      <div className="space-y-3">
                        {loftedEconomyFeatures.map((feature) => (
                          <div key={feature} className="flex items-center gap-3 text-foreground">
                            <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <a href="https://summitbuildings.shedpro.co/" target="_blank" rel="noopener noreferrer">
                    <Button variant="hero" size="xl">
                      Design Yours Now
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Value Proposition Section */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                  Maximum Value, Minimum Cost
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    'Lowest Cost Per Square Foot',
                    'Durable Metal Siding',
                    'Weather-Resistant Construction',
                    'Simple Storage Solution',
                    'Quick Delivery Available',
                    'Multiple Size Options',
                    'Budget-Friendly Pricing',
                    'Quality Construction',
                    'Easy Access Doors',
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border/50">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-foreground font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                  <p className="text-center text-muted-foreground">
                    <span className="text-secondary font-semibold">*Please note:</span> Windows and moisture barriers are not available on Economy Shed models. This series is only available with metal siding.
                  </p>
                </div>
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
                </Accordion>
              </div>
            </div>
          </section>

          {/* Important Notes */}
          <section className="py-8 bg-background">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-sm text-muted-foreground">
                  *Free delivery within 50 miles. Economy Sheds are available with metal siding only. Windows and moisture barriers are not available on this series. Prices subject to change without warning.
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
                Design your perfect economy shed online or contact us for a free quote.
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

export default EconomyShed;
