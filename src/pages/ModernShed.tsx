import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check, Home, Wrench, Briefcase, Palette, ExternalLink } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GallerySection from '@/components/GallerySection';
import ProductHero from '@/components/ProductHero';
import { useBackPath } from '@/hooks/useBackPath';

import modernShed1 from '@/assets/modern-shed-1.jpg';
import modernShed2 from '@/assets/modern-shed-2.jpg';
import modernShed3 from '@/assets/modern-shed-3.jpg';
import modernShed4 from '@/assets/modern-shed-4.jpg';
import modernShed5 from '@/assets/modern-shed-5.jpg';
import modernShed6 from '@/assets/modern-shed-6.jpg';
import modernShed7 from '@/assets/modern-shed-7.jpg';
import modernShed8 from '@/assets/modern-shed-8.jpg';
import modernShed9 from '@/assets/modern-shed-9.jpg';
import modernShed10 from '@/assets/modern-shed-10.jpg';

const galleryImages = [
  { src: modernShed1, alt: 'Modern Shed exterior front view' },
  { src: modernShed2, alt: 'Modern Shed exterior with clerestory windows' },
  { src: modernShed3, alt: 'Modern Shed exterior side angle' },
  { src: modernShed4, alt: 'Modern Shed exterior corner view' },
  { src: modernShed5, alt: 'Modern Shed interior with natural light' },
  { src: modernShed6, alt: 'Modern Shed exterior with door' },
  { src: modernShed7, alt: 'Modern Shed interior framing' },
  { src: modernShed8, alt: 'Modern Shed interior floor view' },
  { src: modernShed9, alt: 'Modern Shed interior windows and door' },
  { src: modernShed10, alt: 'Modern Shed interior open space' },
];

const modernShedFeatures = [
  'LP SmartSide siding',
  '2x6 Floor joists 12" OC',
  '4x6 Treated skids',
  'AdvanTech flooring',
  'House wrap',
  'Single slope roof',
  '6" Overhangs',
  'Moisture barrier & drip edge on roof',
  'Wall studs 16" OC',
  '36" 9-Lite pre-hung door',
];

const sidingOptions = {
  paint: [
    { name: 'White', color: '#FFFFFF' },
    { name: 'Navajo White', color: '#FAEBD7' },
    { name: 'Light Gray', color: '#D3D3D3' },
    { name: 'GP Gray', color: '#A9A9A9' },
    { name: 'Clay', color: '#B8860B' },
    { name: 'Buckskin', color: '#C19A6B' },
    { name: 'Beige', color: '#F5F5DC' },
    { name: 'Sandstone', color: '#786D5F' },
    { name: 'Taupe', color: '#483C32' },
    { name: 'Brown', color: '#8B4513' },
    { name: 'Burnished Slate', color: '#5A5A5A' },
    { name: 'Black', color: '#222222' },
    { name: 'Red', color: '#B22222' },
    { name: 'Barn Red', color: '#7C0A02' },
    { name: 'Forest Green', color: '#228B22' },
    { name: 'Light Blue', color: '#ADD8E6' },
    { name: 'Blue', color: '#4169E1' },
  ],
  metal: [
    { name: 'White', color: '#FFFFFF' },
    { name: 'Light Gray', color: '#D3D3D3' },
    { name: 'Clay', color: '#B8860B' },
    { name: 'Tan', color: '#D2B48C' },
    { name: 'Brown', color: '#8B4513' },
    { name: 'Burnished Slate', color: '#5A5A5A' },
    { name: 'Charcoal', color: '#36454F' },
    { name: 'Black', color: '#222222' },
    { name: 'Red', color: '#B22222' },
    { name: 'Barn Red', color: '#7C0A02' },
    { name: 'Forest Green', color: '#228B22' },
    { name: 'Blue', color: '#4169E1' },
    { name: 'Galvalume', color: '#C0C0C0' },
  ],
};

const upgradeOptions = [
  {
    category: 'Doors',
    items: ['Additional 36" 9-Lite doors', '15-Lite French doors', 'Sliding glass door', 'Roll-up garage door'],
  },
  {
    category: 'Windows',
    items: ['Additional 24x36 windows', 'Clerestory windows', '30x36 windows', '36x36 windows'],
  },
  {
    category: 'Flooring & Ramps',
    items: ['Pressure treated flooring', 'Ramp', 'Concrete anchors'],
  },
  {
    category: 'Storage & Interior',
    items: ['Workbench', 'Shelving', 'Loft', 'Electrical package'],
  },
  {
    category: 'Extras',
    items: ['Shutters', 'Flower boxes', 'Vents', 'Additional colors'],
  },
];

const ColorSwatch = ({ name, color }: { name: string; color: string }) => (
  <div className="flex items-center gap-2">
    <div
      className="w-6 h-6 rounded-full border border-border shadow-sm"
      style={{ backgroundColor: color }}
    />
    <span className="text-sm text-muted-foreground">{name}</span>
  </div>
);

const ModernShed = () => {
  const backPath = useBackPath({
    defaultPath: '/types/deluxe-storage-cabins',
    defaultLabel: '← Back to Deluxe Storage & Cabins',
    stylesPath: '/styles/modern',
    stylesLabel: '← Back to Modern Style',
  });

  return (
    <>
      <Helmet>
        <title>Modern Shed | Summit Portable Buildings</title>
        <meta name="description" content="Discover our Modern Shed with single slope roof design. Features LP SmartSide siding, 6-inch overhangs, and contemporary aesthetics. Perfect for offices, studios, or storage." />
        <link rel="canonical" href="https://summitbuildings.com/types/deluxe-storage-cabins/modern-shed" />
      </Helmet>

      <Header />

      <main className="pt-20">
        <ProductHero
          backPath={backPath}
          title="MODERN"
          titleHighlight="SHED"
          description="Contemporary design with clean lines and a distinctive single slope roof. Perfect for modern home offices, art studios, or stylish storage solutions."
          image={modernShed1}
          imageAlt="Modern Shed"
        />

        {/* Gallery Section */}
        <section className="bg-muted/30 py-16">
          <div className="container-custom">
            <GallerySection images={galleryImages} />
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-background py-16 md:py-24">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Standard Features
                </h2>
                <p className="text-muted-foreground mb-8">
                  Every Modern Shed includes premium Pro Series construction with contemporary design elements that set it apart from traditional sheds.
                </p>
                <ul className="space-y-3">
                  {modernShedFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Check className="h-4 w-4 text-secondary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-lg p-8 shadow-lg">
                <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                  Why Choose Modern Style?
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <Home className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Contemporary Aesthetics</h4>
                      <p className="text-sm text-muted-foreground">Clean lines and single slope roof complement modern home architecture.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <Wrench className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Pro Series Quality</h4>
                      <p className="text-sm text-muted-foreground">LP SmartSide siding, 2x6 floor joists, and AdvanTech flooring for durability.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Versatile Use</h4>
                      <p className="text-sm text-muted-foreground">Perfect for home offices, studios, workshops, or stylish storage.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <Palette className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Natural Light</h4>
                      <p className="text-sm text-muted-foreground">Clerestory window options bring in abundant natural light.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ideal Uses Section */}
        <section className="bg-muted/50 py-16">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8 text-center">
              Ideal Uses
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { title: 'Home Office', description: 'A quiet, professional workspace separate from your home.' },
                { title: 'Art Studio', description: 'Natural light and open space for creative work.' },
                { title: 'Guest Suite', description: 'Add finishing touches for comfortable guest accommodations.' },
                { title: 'Modern Storage', description: 'Stylish storage that complements contemporary homes.' },
              ].map((use, index) => (
                <div key={index} className="bg-card rounded-lg p-6 text-center shadow-md">
                  <h3 className="font-heading font-bold text-foreground mb-2">{use.title}</h3>
                  <p className="text-sm text-muted-foreground">{use.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Color Options Section */}
        <section className="bg-background py-16 md:py-24">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 text-center">
              Color & Material Options
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Customize your Modern Shed with a wide range of colors for siding, trim, and roofing.
            </p>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="paint" className="bg-card rounded-lg border-none shadow">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="font-heading font-semibold text-foreground">Paint Colors (LP SmartSide)</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {sidingOptions.paint.map((color) => (
                        <ColorSwatch key={color.name} name={color.name} color={color.color} />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="metal" className="bg-card rounded-lg border-none shadow">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="font-heading font-semibold text-foreground">Metal Roof Colors</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {sidingOptions.metal.map((color) => (
                        <ColorSwatch key={color.name} name={color.name} color={color.color} />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Upgrades Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 text-center">
              Available Upgrades
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Enhance your Modern Shed with these popular upgrades.
            </p>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {upgradeOptions.map((category, index) => (
                  <AccordionItem key={index} value={`upgrade-${index}`} className="bg-card rounded-lg border-none shadow">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <span className="font-heading font-semibold text-foreground">{category.category}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                            <Check className="h-4 w-4 text-secondary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
              Ready to Design Your Modern Shed?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Use our online configurator to customize your perfect Modern Shed, or contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://summitbuildings.shedpro.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-bold px-8 py-4 rounded-md hover:brightness-110 transition-all"
              >
                Design Your Building
                <ExternalLink className="h-4 w-4" />
              </a>
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 text-primary-foreground font-bold px-8 py-4 rounded-md hover:bg-primary-foreground/20 transition-all border border-primary-foreground/30"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ModernShed;
