import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Check,
  ArrowRight,
  Palette,
  DoorOpen,
  Layers,
  Box
} from 'lucide-react';
import utilityShed from '@/assets/utility-shed.jpg';

const features = [
  'Double 36" Doors w/ T-Handle Lock & Key',
  '3/4″ T & G Flooring',
  'Ridge Vent',
  '7\' 9″ (93″) Walls',
];

const sidingOptions = {
  paint: ['Barn Red', 'Black', 'Buckskin', 'Burnished Slate', 'Clay', 'Dark Brown', 'GP Gray', 'GP Tan', 'Gray', 'Shadow', 'Martin Creme', 'Mountain Red', 'Navy Blue', 'Quaker Tan', 'Riehl Blue', 'Riehl Green', 'Wedgwood Blue', 'White'],
  metal: ['Alamo White', 'Ash Gray', 'Brilliant White', 'Black', 'Brite Red', 'Brown', 'Buckskin Desert', 'Burgundy', 'Burnished Slate', 'Charcoal', 'Forest Green', 'Galvalume', 'Gallery Blue', 'Hunter Green', 'Ivory', 'Light Stone', 'Ocean', 'Rustic', 'Pewter', 'Tan', 'Taupe'],
  urethane: ['Barnwood', 'Butternut', 'Charcoal', 'Chestnut Brown', 'Golden Wheat', 'Mahogany', 'Natural Cedar', 'Natural Teak', 'Redwood', 'Sage'],
  vinyl: ['Beige', 'Cactus', 'Champagne', 'Cream', 'Deep Water', 'Fern', 'Firebrick', 'Granite', 'Graphite', 'Khaki', 'Maverick Brown', 'Mocha', 'Myrtle', 'Olive', 'Russet', 'Sandstone', 'Seaport', 'Sierra', 'Silver', 'Smoke', 'Steel Blue', 'Wheat', 'White', 'Yellow'],
};

const doorOptions = [
  'Single 36" Wood Door',
  'Double 36" Wood Doors',
  'Single 36" 6 Panel Fiberglass Door',
  'Double 36" 6 Panel Fiberglass Doors',
  'Single 36" 6 Panel Fiberglass 11 Lite Door',
  'Single 36" 9 Lite Pre-Hung Door',
  'Double 36" 9 Lite Pre-Hung Doors',
  '6\'x6\' Roll up Door',
  '6\'x7\' Roll up Door',
  '9\'x7\' Roll up Door',
  '9\'x7\' Insulated Garage Door',
];

const windowOptions = [
  '24"x36" Window (Single Pane)',
  '36"x36" Window (Single Pane)',
  '24"x36" Vinyl Insulated Window w/ grid',
  '36"x36" Vinyl Insulated Window w/ grid',
];

const storageOptions = [
  '22" Workbench w/ 3/4" Top (per foot)',
  '22" Dbl. Shelves w/ 1/2" Top (per foot)',
  'Extra Loft Area (sq. foot)',
  'Extra Loft Ladder',
];

const UtilityShed = () => {
  return (
    <>
      <Helmet>
        <title>Utility Shed | Summit Portable Buildings</title>
        <meta
          name="description"
          content="The Utility Shed is a classy, yet simple addition to your property. Perfect for outdoor power equipment, tack rooms, hay sheds, or workshops. Available in sizes 8×8 to 14×40."
        />
        <meta property="og:title" content="Utility Shed | Summit Portable Buildings" />
        <meta
          property="og:description"
          content="A classy, yet simple addition to your property. Superior workmanship makes it the obvious choice for your storage needs."
        />
        <link rel="canonical" href="https://summitbuildings.com/our-models/utility-shed" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-dark to-navy">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Link 
                    to="/#products" 
                    className="inline-flex items-center gap-2 text-secondary/80 hover:text-secondary mb-4 transition-colors"
                  >
                    ← Back to All Buildings
                  </Link>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary-foreground leading-tight mb-6">
                    UTILITY <span className="text-secondary">SHED</span>
                  </h1>
                  <p className="text-lg text-primary-foreground/80 mb-6">
                    The <strong>UTILITY SHED</strong> is a classy, yet simple addition to your property. The superior workmanship makes it an aesthetically pleasing and obvious choice for your storage needs.
                  </p>
                  <p className="text-primary-foreground/70 mb-8">
                    It is a great building for outdoor power equipment. Need a portable tack room or a small hay shed? This is the perfect building for the job. In addition, it can serve as a great shop for all your mechanic or woodworking tools if you add windows and a 36" 9 Lite Door. With so many sizes and styles available, you can find just the right fit for your property!
                  </p>
                  
                  {/* Key Features */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-primary-foreground/90">
                        <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-secondary font-heading text-lg mb-6">Sizes: 8×8 to 14×40</p>
                  
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
                    src={utilityShed}
                    alt="Summit Utility Shed"
                    className="rounded-2xl shadow-2xl w-full"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-secondary text-primary-foreground px-6 py-3 rounded-xl font-heading">
                    FREE DELIVERY*
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Notes */}
          <section className="py-6 bg-muted/50 border-b border-border/30">
            <div className="container-custom">
              <p className="text-sm text-muted-foreground text-center">
                *Please note that the 8 foot wide model features a single 48" door. *Transom windows in picture come at an up-charge. **Prices are subject to change without warning.
              </p>
            </div>
          </section>

          {/* Color Options */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-4">
                  <Palette className="w-4 h-4" />
                  <span className="font-medium text-sm">Customize Your Look</span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Color & Material Options
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Choose from our wide selection of siding materials and colors to match your property perfectly.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Paint Siding */}
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">Paint Siding</h3>
                  <div className="flex flex-wrap gap-2">
                    {sidingOptions.paint.map((color) => (
                      <span key={color} className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metal Siding */}
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">Metal Siding</h3>
                  <div className="flex flex-wrap gap-2">
                    {sidingOptions.metal.map((color) => (
                      <span key={color} className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Urethane Siding */}
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">Urethane Siding</h3>
                  <div className="flex flex-wrap gap-2">
                    {sidingOptions.urethane.map((color) => (
                      <span key={color} className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Vinyl Siding */}
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">Vinyl Siding</h3>
                  <div className="flex flex-wrap gap-2">
                    {sidingOptions.vinyl.map((color) => (
                      <span key={color} className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Options */}
          <section className="section-padding bg-muted/30">
            <div className="container-custom">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Additional Options
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Customize your utility shed with these available upgrades.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Doors */}
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <DoorOpen className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">Doors</h3>
                  <ul className="space-y-2">
                    {doorOptions.slice(0, 6).map((option) => (
                      <li key={option} className="text-sm text-muted-foreground flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        {option}
                      </li>
                    ))}
                    <li className="text-sm text-secondary">+ more options...</li>
                  </ul>
                </div>

                {/* Windows */}
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Layers className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">Windows</h3>
                  <ul className="space-y-2">
                    {windowOptions.map((option) => (
                      <li key={option} className="text-sm text-muted-foreground flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        {option}
                      </li>
                    ))}
                    <li className="text-sm text-muted-foreground flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      9" & 12" Vinyl Shutters
                    </li>
                  </ul>
                </div>

                {/* Storage */}
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Box className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">Storage</h3>
                  <ul className="space-y-2">
                    {storageOptions.map((option) => (
                      <li key={option} className="text-sm text-muted-foreground flex items-start gap-2">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Extras */}
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Palette className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">Extras</h3>
                  <ul className="space-y-2">
                    <li className="text-sm text-muted-foreground flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      Wainscott (metal or wood)
                    </li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      Porch & Loft Railing
                    </li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      Electrical Package
                    </li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      Ramps & Anchors
                    </li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      Build on Site Available
                    </li>
                  </ul>
                </div>
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
                <Link to="/#products">
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

export default UtilityShed;
