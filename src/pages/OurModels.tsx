import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cloudinaryImages } from '@/lib/cloudinary';

const categories = [
  {
    id: 'basic-storage',
    name: 'Basic Storage',
    description: 'Affordable, practical sheds for everyday storage needs',
    models: [
      { name: 'Budget Pro - Utility', image: cloudinaryImages.budgetProUtility, link: '/types/basic-storage#budget-pro-utility' },
      { name: 'Budget Pro - Lofted Barn', image: cloudinaryImages.budgetProLoftedBarn, link: '/types/basic-storage#budget-pro-lofted-barn' },
      { name: 'Economy', image: cloudinaryImages.economy, link: '/types/basic-storage#economy' },
    ],
    link: '/types/basic-storage'
  },
  {
    id: 'deluxe-storage-cabins',
    name: 'Deluxe Storage & Cabins',
    description: 'Premium buildings with extra features and style',
    models: [
      { name: 'Pro - Utility', image: cloudinaryImages.proUtility, link: '/types/deluxe-storage-cabins#pro-utility' },
      { name: 'Pro - Lofted Barn', image: cloudinaryImages.proLoftedBarn, link: '/types/deluxe-storage-cabins#pro-lofted-barn' },
      { name: 'Cabins/Tiny Home', image: cloudinaryImages.cabinShed, link: '/types/deluxe-storage-cabins#cabins-tiny-home' },
    ],
    link: '/types/deluxe-storage-cabins'
  },
  {
    id: 'garages-carports',
    name: 'Garages & Carports',
    description: 'Secure vehicle and equipment storage',
    models: [
      { name: 'Garages', image: cloudinaryImages.garage, link: '/types/garages-carports#garages' },
      { name: 'Carports', image: cloudinaryImages.carport, link: '/types/garages-carports#carports' },
    ],
    link: '/types/garages-carports'
  },
  {
    id: 'outdoor-structures',
    name: 'Outdoor Structures',
    description: 'Greenhouses and animal housing solutions',
    models: [
      { name: 'Greenhouses', image: cloudinaryImages.greenhouse1, link: '/types/greenhouse' },
      { name: 'Animal Shelters', image: cloudinaryImages.animalShelter1, link: '/types/animal-shelters' },
    ],
    link: '/types/outdoor-structures'
  },
];

const content = {
  heading: "Structure Types",
};

const OurModels = () => {
  return (
    <>
      <Helmet>
        <title>Our Models | Summit Portable Buildings</title>
        <meta name="description" content="Browse our complete selection of storage buildings. From basic storage sheds to deluxe cabins and garages, find the perfect structure for your needs." />
        <link rel="canonical" href="https://summitbuildings.com/types" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container-custom text-center">
            <p className="text-secondary font-semibold tracking-wider uppercase mb-4">Hand-Built to Last</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
              {content.heading}
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
                    <div className={`grid gap-6 md:gap-8 ${
                      category.models.length <= 2 
                        ? 'grid-cols-2 max-w-md mx-auto' 
                        : category.models.length === 3 
                          ? 'grid-cols-3 max-w-2xl mx-auto' 
                          : 'grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto'
                    }`}>
                      {category.models.map((model) => (
                        <Link
                          key={model.name}
                          to={model.link}
                          className="group text-center"
                        >
                          <div className="aspect-square mb-4 overflow-hidden rounded-lg shadow-sm bg-muted">
                            <img
                              src={model.image}
                              alt={model.name}
                              className="w-full h-full transition-transform duration-300 group-hover:scale-105 object-cover"
                            />
                          </div>
                          <h3 className="font-heading font-bold text-foreground group-hover:text-secondary transition-colors uppercase tracking-wide">
                            {model.name}
                          </h3>
                        </Link>
                      ))}
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
              href="https://summitbuildings.shedpro.co/"
              target="_blank"
              rel="noopener noreferrer"
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
