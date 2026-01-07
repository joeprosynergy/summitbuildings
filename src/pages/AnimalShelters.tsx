import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useBackPath } from '@/hooks/useBackPath';
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

// Import images
import animalShelter1 from '@/assets/animal-shelter-1.jpg';
import animalShelter2 from '@/assets/animal-shelter-2.jpg';
import dogKennel1 from '@/assets/dog-kennel-1.jpg';
import dogKennel2 from '@/assets/dog-kennel-2.jpg';
import chickenCoop1 from '@/assets/chicken-coop-1.jpg';
import chickenCoop2 from '@/assets/chicken-coop-2.jpg';

const shelterTypes = [
  {
    id: 'animal-shelter',
    name: 'Animal Shelter',
    tagline: 'Safe & Comfortable Housing for Animals',
    description: 'The Animal Shelter from Summit Buildings is a well-designed, purpose-built facility dedicated to the care and housing of animals. This shelter focuses on providing a safe, comfortable environment for your animals with spacious areas and easy access. The structure incorporates durable, weather-resistant materials to minimize maintenance and maximize protection.',
    features: [
      '11 Lite Walk-In Door',
      'Durable, weather-resistant construction',
      'Spacious interior design',
      'Easy-to-clean surfaces',
      'Secure fencing options',
      'Customizable layout',
    ],
    note: '*Please note that windows and moisture barriers are not available.',
    images: [animalShelter1, animalShelter2],
  },
  {
    id: 'dog-kennel',
    name: 'Dog Kennel',
    tagline: 'Comfort, Safety & Security for Your Pets',
    description: 'The Dog Kennels from Summit Buildings are expertly crafted structures designed to provide comfort, safety, and security for pets. These kennels are built with high-quality, durable materials to withstand the elements, ensuring that dogs are protected from the weather while enjoying a spacious, well-ventilated environment.',
    features: [
      "6' x 6' Walls",
      '2 Runs',
      '36" Wood Door',
      '(1) 2 x 3 Single Pane Window',
      'Composite Decking on Exterior Runs',
      'Gate Inside and Outside of Run',
      'Secure, predator-proof fencing',
      'Easy-to-clean surfaces',
    ],
    images: [dogKennel1, dogKennel2],
  },
  {
    id: 'chicken-coop',
    name: 'Chicken Coop',
    tagline: 'Safe & Secure Housing for Your Flock',
    description: 'The Chicken Coops from Summit Buildings are thoughtfully designed to provide chickens with a safe, comfortable, and secure environment. Built with high-quality, weather-resistant materials, these coops offer excellent protection from the elements, predators, and harsh conditions.',
    features: [
      '3\' 8" (44") Walls',
      '30" Wood Door w/ Keys',
      '2 - 18" x 27" Single Pane Windows',
      '1 - 12" x 16" Chicken Door',
      '4 Nesting boxes w/ outside access door',
      '1 box serves approximately 3-5 chickens',
    ],
    note: 'Additional nesting boxes may be added for additional cost.',
    images: [chickenCoop1, chickenCoop2],
  },
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

const AnimalShelters = () => {
  const location = useLocation();
  const { path: backPath, label: backLabel } = useBackPath({
    defaultPath: '/types',
    defaultLabel: 'All Models',
    stylesPath: '/styles',
    stylesLabel: 'Building Styles',
  });

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Animal Shelters, Dog Kennels & Chicken Coops | Summit Portable Buildings</title>
        <meta
          name="description"
          content="Quality animal housing solutions from Summit Buildings. Dog kennels, chicken coops, and animal shelters built with durable materials for comfort, safety, and security."
        />
        <meta property="og:title" content="Animal Shelters | Summit Portable Buildings" />
        <meta
          property="og:description"
          content="Purpose-built animal housing including dog kennels, chicken coops, and animal shelters. Durable construction, customizable options. Free delivery within 50 miles."
        />
        <link rel="canonical" href="https://summitbuildings.com/types/animal-shelters" />
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
                    to={backPath} 
                    className="inline-flex items-center gap-2 text-secondary/80 hover:text-secondary mb-4 transition-colors"
                  >
                    ← Back to {backLabel}
                  </Link>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary-foreground leading-tight mb-6">
                    ANIMAL <span className="text-secondary">SHELTERS</span>
                  </h1>
                  <p className="text-lg text-primary-foreground/80 mb-6">
                    Quality housing solutions for your animals. From dog kennels to chicken coops to full animal shelters, we build durable, comfortable, and secure structures.
                  </p>
                  
                  <p className="text-secondary font-heading text-xl mb-6">Custom Sizes Available</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://summitbuildings.shedpro.co/" target="_blank" rel="noopener noreferrer">
                      <Button variant="hero" size="xl">
                        Build Your Own
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </a>
                    <a href="https://summitportablebuildings.shedsuite.com" target="_blank" rel="noopener noreferrer">
                      <Button variant="heroOutline" size="xl">
                        Browse Our Inventory
                      </Button>
                    </a>
                  </div>
                </div>
                
                <div className="relative">
                  <img
                    src={dogKennel1}
                    alt="Summit Dog Kennel"
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

          {/* Quick Nav */}
          <section className="py-8 bg-muted/50 border-b border-border">
            <div className="container-custom">
              <div className="flex flex-wrap justify-center gap-4">
                {shelterTypes.map((shelter) => (
                  <a
                    key={shelter.id}
                    href={`#${shelter.id}`}
                    className="px-6 py-3 bg-card rounded-lg border border-border hover:border-secondary hover:bg-secondary/10 transition-all font-medium text-foreground"
                  >
                    {shelter.name}
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Shelter Type Sections */}
          {shelterTypes.map((shelter, index) => (
            <section
              key={shelter.id}
              id={shelter.id}
              className={`section-padding ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}
            >
              <div className="container-custom">
                <div className="max-w-6xl mx-auto">
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
                        {shelter.name}
                      </h2>
                      <p className="text-secondary font-heading text-lg mb-4">{shelter.tagline}</p>
                      <p className="text-muted-foreground mb-6">{shelter.description}</p>
                      
                      <div className="bg-card rounded-xl p-6 border border-border shadow-sm mb-6">
                        <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                          Standard Features
                        </h3>
                        <div className="space-y-2">
                          {shelter.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-3 text-foreground">
                              <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        {shelter.note && (
                          <p className="text-xs text-muted-foreground italic mt-4">
                            {shelter.note}
                          </p>
                        )}
                      </div>
                      
                      <a href="https://summitbuildings.shedpro.co/" target="_blank" rel="noopener noreferrer">
                        <Button variant="hero">
                          Design Your {shelter.name}
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                    
                    <div className={`grid grid-cols-2 gap-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      {shelter.images.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt={`${shelter.name} ${imgIndex + 1}`}
                          className="rounded-xl shadow-lg w-full aspect-square object-cover"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}

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
                Ready to House Your Animals?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Design your perfect animal shelter today or call us to discuss your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://summitbuildings.shedpro.co/" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="xl">
                    Design Your Shelter
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

export default AnimalShelters;
