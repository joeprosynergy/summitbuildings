import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cloudinaryImages } from '@/lib/cloudinary';

const options = [
  {
    id: 'economy',
    name: 'Economy',
    description: 'Affordable storage solution with essential features.',
    features: ['LP SmartSide siding', '2x4 floor joists 16" OC', '4x4 treated skids'],
    image: cloudinaryImages.economy,
    link: '/types/basic-storage/economy-shed'
  },
  {
    id: 'budget-pro',
    name: 'Budget Pro',
    description: 'Great value with upgraded features at an affordable price.',
    features: ['LP SmartSide siding', '2x6 floor joists 16" OC', '4x6 treated skids'],
    image: cloudinaryImages.budgetProUtility,
    link: '/types/basic-storage/budget-pro-utility'
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Premium quality with top-tier materials and craftsmanship.',
    features: ['LP SmartSide siding', '2x6 floor joists 12" OC', '4x6 treated skids', 'House wrap'],
    image: cloudinaryImages.proUtility,
    link: '/types/deluxe-storage-cabins/pro-utility-shed'
  },
  {
    id: 'cabin',
    name: 'Cabin',
    description: 'Versatile living space perfect for tiny homes or guest houses.',
    features: ['LP SmartSide siding', '2x6 floor joists 12" OC', '4x6 treated skids', 'Insulation ready'],
    image: cloudinaryImages.cabinShed,
    link: '/types/deluxe-storage-cabins/cabin'
  },
  {
    id: 'garage',
    name: 'Garage',
    description: 'Secure vehicle and equipment storage with easy access.',
    features: ['LP SmartSide siding', '2x6 floor joists 12" OC', 'Garage door included'],
    image: cloudinaryImages.garage,
    link: '/types/garages-carports/garage'
  },
  {
    id: 'carport',
    name: 'Carport',
    description: 'Open-air vehicle protection with durable construction.',
    features: ['Metal roof', 'Steel frame', 'Multiple size options'],
    image: cloudinaryImages.carport,
    link: '/types/garages-carports/carports'
  },
];

const StylesUtility = () => {
  return (
    <>
      <Helmet>
        <title>Utility Style Buildings | Summit Portable Buildings</title>
        <meta name="description" content="Explore our Utility style buildings with traditional A-frame roofs. Choose from Economy, Budget Pro, Pro, Cabin, Garage, or Carport options." />
        <link rel="canonical" href="https://summitbuildings.com/styles/utility" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container-custom text-center">
            <Link to="/styles" className="text-secondary font-semibold tracking-wider uppercase mb-4 hover:underline inline-block">
              ← Back to Styles
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Utility Style
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Traditional A-Frame Roof — Classic design with timeless appeal
            </p>
          </div>
        </section>

        {/* Options Grid */}
        <section className="bg-background py-16 md:py-24">
          <div className="container-custom">
            <div className="bg-card rounded-lg shadow-lg overflow-hidden">
              <div className="bg-primary py-5 px-6">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground text-center uppercase tracking-wide">
                  Choose Your Option
                </h2>
              </div>

              <div className="p-6 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {options.map((option) => (
                    <Link
                      key={option.id}
                      to={option.link}
                      className="group bg-muted/30 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={option.image}
                          alt={option.name}
                          className="w-full h-full transition-transform duration-300 group-hover:scale-105 object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-secondary transition-colors uppercase tracking-wide mb-2">
                          {option.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {option.description}
                        </p>
                        <div className="space-y-1">
                          <p className="text-xs font-semibold text-foreground uppercase tracking-wide">Standard Features:</p>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            {option.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <span className="w-1 h-1 bg-secondary rounded-full"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Design your perfect utility building online in minutes
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

export default StylesUtility;
