import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import proUtility from '@/assets/pro-utility.webp';
import proLoftedBarn from '@/assets/pro-lofted-barn.jpg';
import cabinShed from '@/assets/cabin-shed.jpg';
import dormer from '@/assets/dormer.jpeg';

const models = [
  {
    id: 'pro-utility',
    name: 'Pro - Utility',
    tagline: 'Superior workmanship for any storage need.',
    features: [
      'Double 36" Doors w/ T-Handle Lock',
      '7\' 9" Wall Height',
      'Ridge Vent Standard',
      '3/4" T & G Flooring',
    ],
    image: proUtility,
    gallery: [proUtility, proUtility, proUtility, proUtility, proUtility, proUtility],
    detailLink: '/pro-utility-shed',
  },
  {
    id: 'pro-lofted-barn',
    name: 'Pro - Lofted Barn',
    tagline: 'Our best seller with maximum storage.',
    features: [
      '2 Lofts for Extra Storage',
      'Loft Ladder Included',
      '6\' 6" Wall Height',
      'Classic Barn Styling',
    ],
    image: proLoftedBarn,
    gallery: [proLoftedBarn, proLoftedBarn, proLoftedBarn, proLoftedBarn, proLoftedBarn, proLoftedBarn],
    detailLink: '/pro-lofted-barn',
  },
  {
    id: 'cabins-tiny-home',
    name: 'Cabins / Tiny Home',
    tagline: 'Comfortable living in a compact space.',
    features: [
      'Finished Interior Options',
      'Electrical Package Available',
      'Custom Layouts',
      'Perfect for Guest Houses',
    ],
    image: cabinShed,
    gallery: [cabinShed, cabinShed, cabinShed, cabinShed, cabinShed, cabinShed],
    detailLink: '/styles/deluxe-storage-cabins#cabins-tiny-home',
  },
  {
    id: 'dormer',
    name: 'Dormer',
    tagline: 'Extra headroom and natural light.',
    features: [
      'Dormer Window for Light',
      'Increased Headroom',
      'Loft Storage Space',
      'Elegant Design',
    ],
    image: dormer,
    gallery: [dormer, dormer, dormer, dormer, dormer, dormer],
    detailLink: '/styles/deluxe-storage-cabins#dormer',
    contain: true,
  },
];

const quickNavModels = [
  { id: 'pro-utility', name: 'Pro - Utility', image: proUtility },
  { id: 'pro-lofted-barn', name: 'Pro - Lofted Barn', image: proLoftedBarn },
  { id: 'cabins-tiny-home', name: 'Cabins / Tiny Home', image: cabinShed },
  { id: 'dormer', name: 'Dormer', image: dormer, contain: true },
];

const DeluxeStorageCabins = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <>
      <Helmet>
        <title>Deluxe Storage & Cabins | Summit Portable Buildings</title>
        <meta name="description" content="Explore our premium deluxe storage buildings and cabins including Pro Utility, Pro Lofted Barn, Cabins, and Dormers. Superior quality with extra features." />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Quick Nav */}
        <section className="bg-primary py-8">
          <div className="container-custom">
            <div className="bg-card rounded-lg shadow-lg p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-center text-primary mb-8 uppercase tracking-wide">
                Deluxe Storage & Cabins
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
                {quickNavModels.map((model) => (
                  <a
                    key={model.id}
                    href={`#${model.id}`}
                    className="group text-center"
                  >
                    <div className={`aspect-square mb-3 overflow-hidden rounded-lg ${model.contain ? 'bg-neutral-100 p-2' : 'bg-muted'}`}>
                      <img
                        src={model.image}
                        alt={model.name}
                        className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${model.contain ? 'object-contain' : 'object-cover'}`}
                      />
                    </div>
                    <h3 className="font-heading font-bold text-foreground group-hover:text-secondary transition-colors uppercase text-sm md:text-base tracking-wide">
                      {model.name}
                    </h3>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Models Detail Sections */}
        <section className="bg-background">
          {models.map((model, index) => (
            <div
              key={model.id}
              id={model.id}
              className={`py-16 md:py-24 scroll-mt-24 ${index % 2 === 1 ? 'bg-muted/50' : ''}`}
            >
              <div className="container-custom">
                {/* Section Header */}
                <div className="bg-primary rounded-t-lg py-4 px-6 mb-0">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground uppercase tracking-wide">
                    {model.name}
                  </h2>
                </div>

                {/* Content */}
                <div className="bg-card rounded-b-lg shadow-md p-6 md:p-10">
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Text Content */}
                    <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                      <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4 uppercase">
                        {model.tagline}
                      </h3>
                      <ul className="space-y-3 mb-8">
                        {model.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link to={model.detailLink}>
                          <Button variant="hero" size="lg">
                            View Details
                          </Button>
                        </Link>
                        <a href="https://summitbuildings.shedpro.co/" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="lg">
                            Design This Shed
                          </Button>
                        </a>
                      </div>
                    </div>

                    {/* Image and Gallery */}
                    <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                      <div className={`aspect-[4/3] rounded-lg overflow-hidden shadow-lg mb-4 ${model.contain ? 'bg-neutral-100 p-4' : ''}`}>
                        <img
                          src={model.image}
                          alt={model.name}
                          className={`w-full h-full ${model.contain ? 'object-contain' : 'object-cover'}`}
                        />
                      </div>
                      {/* Gallery thumbnails - 6 small images */}
                      <div className="grid grid-cols-6 gap-2">
                        {model.gallery.slice(0, 6).map((img, i) => (
                          <div key={i} className={`aspect-square rounded overflow-hidden ${model.contain ? 'bg-neutral-100 p-1' : 'bg-muted'}`}>
                            <img src={img} alt="" className={`w-full h-full hover:scale-105 transition-transform cursor-pointer ${model.contain ? 'object-contain' : 'object-cover'}`} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
              Can't Decide? We Can Help.
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Call us and we'll help you choose the perfect building for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5737474700"
                className="inline-block bg-secondary text-secondary-foreground font-bold px-8 py-4 rounded-md hover:brightness-110 transition-all"
              >
                Call 573-747-4700
              </a>
              <Link
                to="/styles"
                className="inline-block border-2 border-primary-foreground/30 text-primary-foreground font-bold px-8 py-4 rounded-md hover:bg-primary-foreground hover:text-primary transition-all"
              >
                View All Models
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default DeluxeStorageCabins;
