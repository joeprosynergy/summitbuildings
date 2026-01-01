import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import utilityShed from '@/assets/utility-shed.jpg';
import loftedBarn from '@/assets/lofted-barn.jpg';
import cabinShed from '@/assets/cabin-shed.jpg';
import garageShed from '@/assets/garage-shed.jpg';
import sideUtility from '@/assets/side-utility-shed.jpg';

const categories = [
  {
    id: 'basic-storage',
    name: 'Basic Storage',
    description: 'Affordable, practical sheds for everyday storage needs',
    models: [
      { name: 'Budget Pro', image: utilityShed, link: '/our-models/basic-storage#budget-pro' },
      { name: 'Mini Barn', image: loftedBarn, link: '/our-models/basic-storage#mini-barn' },
      { name: 'Economy', image: sideUtility, link: '/our-models/basic-storage#economy' },
    ],
    link: '/our-models/basic-storage'
  },
  {
    id: 'deluxe-storage-cabins',
    name: 'Deluxe Storage & Cabins',
    description: 'Premium buildings with extra features and style',
    models: [
      { name: 'Pro Series', image: utilityShed, link: '/our-models/deluxe-storage-cabins#pro-series' },
      { name: 'Cabins', image: cabinShed, link: '/our-models/deluxe-storage-cabins#cabins' },
      { name: 'Tiny Homes', image: cabinShed, link: '/our-models/deluxe-storage-cabins#tiny-homes' },
      { name: 'Dormer', image: loftedBarn, link: '/our-models/deluxe-storage-cabins#dormer' },
    ],
    link: '/our-models/deluxe-storage-cabins'
  },
  {
    id: 'garages-carports',
    name: 'Garages & Carports',
    description: 'Secure vehicle and equipment storage',
    models: [
      { name: 'Garages & Carports', image: garageShed, link: '/our-models/garages-carports#garages-carports' },
    ],
    link: '/our-models/garages-carports'
  },
];

const OurModels = () => {
  return (
    <>
      <Helmet>
        <title>Our Models | Summit Portable Buildings</title>
        <meta name="description" content="Browse our complete selection of portable buildings. From basic storage sheds to deluxe cabins and garages, find the perfect structure for your needs." />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container-custom text-center">
            <p className="text-secondary font-semibold tracking-wider uppercase mb-4">Hand-Built to Last</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Structure Types
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Choose one of our popular models or customize your own
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-background">
          {categories.map((category, index) => (
            <div 
              key={category.id} 
              className={`py-16 md:py-24 ${index % 2 === 1 ? 'bg-muted/30' : ''}`}
            >
              <div className="container-custom">
                {/* Unified Card Container */}
                <div className="bg-card rounded-lg shadow-lg overflow-hidden">
                  {/* Category Header - directly connected */}
                  <div className="bg-primary py-5 px-6">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground text-center uppercase tracking-wide">
                      {category.name}
                    </h2>
                  </div>

                  {/* Models Grid - no gap from header */}
                  <div className="p-6 md:p-10">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                      {category.models.map((model) => (
                        <Link
                          key={model.name}
                          to={model.link}
                          className="group text-center"
                        >
                          <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-muted shadow-sm">
                            <img
                              src={model.image}
                              alt={model.name}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <h3 className="font-heading font-bold text-foreground group-hover:text-secondary transition-colors uppercase tracking-wide">
                            {model.name}
                          </h3>
                        </Link>
                      ))}
                      {/* View All Link */}
                      <Link
                        to={category.link}
                        className="group flex flex-col items-center justify-center aspect-square rounded-lg border-2 border-dashed border-border hover:border-secondary hover:bg-muted/50 transition-all"
                      >
                        <span className="text-4xl text-muted-foreground group-hover:text-secondary transition-colors mb-2">→</span>
                        <span className="font-heading font-bold text-muted-foreground group-hover:text-secondary transition-colors uppercase text-sm">
                          View All
                        </span>
                      </Link>
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
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Design your perfect building online in minutes
            </p>
            <a
              href="#"
              className="inline-block bg-secondary text-secondary-foreground font-bold px-8 py-4 rounded-md hover:brightness-110 transition-all"
            >
              Design Your Building
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default OurModels;
