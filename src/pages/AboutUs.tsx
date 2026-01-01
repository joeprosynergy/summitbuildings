import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Star, 
  Shield, 
  Users, 
  HandHeart,
  Hammer,
  Home,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Faith Based',
    description: "We believe in Someone Greater than ourselves. In order to be successful in life and business we must maintain Godly principles in our every day living and business practices. Therefore we promise to do all to the best of our ability and in an ethical manner from the sale to the delivery of your product.",
  },
  {
    icon: Star,
    title: 'Excellence',
    description: "We strive to be the best at what we do, leading the way to excellence. We constantly look where to improve by building upon the past. We believe Customer Service and taking care of the people we serve is the key to a successful business. We are committed to provide the best service we possibly can.",
  },
  {
    icon: Shield,
    title: 'Responsibility',
    description: "We desire to operate to the highest ethical & professional standards. We strive to earn your trust and honesty and integrity and by taking responsibility for our actions.",
  },
  {
    icon: Users,
    title: 'Community',
    description: "We believe in playing our part in the community where we operate. We believe in being an asset to our local community.",
  },
  {
    icon: HandHeart,
    title: 'Team Work',
    description: "Teamwork and Diversity are the foundations of our success. We value our diversity, respecting each others' knowledge, skills and experience from the Builder, Sales Member, and Delivery Driver. We feel each one is a special and unique part of the puzzle to create a Successful Business.",
  },
];

const buildingFeatures = [
  "Buildings come standard with a 40/Yr. Metal Roof available in 11 attractive colors. A Shingle Roof is offered as an upgrade.",
  "Vented Ridge standard on all Pro Series Buildings",
  "2″x6″ floor joists set into notched 4″ x 6″ ground skids/runners for added strength.",
  "All buildings have 5/8\" tongue-and-groove floors w/ 3/4\" Optional.",
  "Commercial Truss Plated Rafters are used on all joints for maximum strength.",
  "50 Year Limited Warranty on LP Smart Siding on Wood Buildings.",
  "25 Year Limited Warranty Paint.",
  "2\"x6\" Treated Floor Joists 16\" O.C. (Garage Models include 12\" o.c.)",
  "Heavy Duty Barrel Bolts and Keyed Door Locks.",
  "Commercial Truss Plated Rafters 16\" O.C. or 24\" O.C. Depending on model & size purchased",
  "7/16 OSB Roof Sheathing.",
  "Gable Vents.",
  "Diamond Plated Thresholds on all Wood & Garage Door openings.",
];

const serviceAreas = {
  missouri: "Arnold, Fenton, Festus, Crystal City, Pevely, Herculaneum, Bloomsdale, French Village, High Ridge, House Springs, Cedar Hill, Dittmer, Saint Clair, Villa Ridge, Pacific, Eureka, Sullivan, Cuba, Bourbon, Steelville, Saint James, Rolla, Salem, Cherryville, Viburnum, Bixby, Eminence, Ellington, Ellsinore, Centerville, Mill Spring, Piedmont, Patterson, Annapolis, Lesterville, Winona, Birch Tree, Van Buren, Mountain View, Fremont, Doniphan, Grandin, Fairdealing, Neelville, Popular Bluff, Dudley, Black, Caledonia, Belleview, Bismarck, Iron Mountain Lake, Ironton, Pilot Knob, Arcadia, Potosi, Cadet, Bonne Terre, Desoto, Desloge, Leadington, Farmington, Doe Run, Fredericktown, Marquand, Patton, Sainte Genevieve, Saint Mary, Perryville, Old Appleton, Pocahontas, Oak Ridge, Daisy, Sedgewickville, Millersville, Jackson, Glenallen, Marble Hill, Leopold, Gordonville, Dutchtown, Cape Girardeau, Delta, Advance, Bloomfield, Zalma, Puxico, Bell City, Scott City, Benton, Kelps, Haywood City, Oran, Morley, Blodgett, Dexter, Morehouse, Essex, Sikeston, Bertrand, Miner, Charleston, Wilson City, East Prairie, Canalou, New Madrid, Malden, Portageville, Gideon, Holcomb, Campbell, Hayti, Kennet",
  illinois: "Metropolis, Joppa, Vienna, New Grand Chain, Dongola, Villa Ridge, Tamms, Thebes, McClure, Anna, Jonesboro, Cobden, Carbondale, Murphysboro, Desoto, Ava, Campbell Hill, Chester, Red Bud",
  kentucky: "Mayfield, Arlington, Fancy Farm, Mayfield, Farmington, Murray, Dexter, Benton, Hickory, Symsonia, Melber, Cunningham, Bardwell, Wickliffe, Barlow, Paducah",
};

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Summit Portable Buildings</title>
        <meta
          name="description"
          content="Learn about Summit Portable Buildings - a faith-based, family-owned business committed to excellence in building quality portable structures the old fashioned way."
        />
        <meta property="og:title" content="About Us | Summit Portable Buildings" />
        <meta
          property="og:description"
          content="A family-owned business building quality portable structures with skilled craftsmen and old-fashioned values."
        />
        <link rel="canonical" href="https://summitbuildings.com/about-us" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-navy-dark to-navy">
            <div className="container-custom">
              <div className="max-w-3xl">
                <p className="text-secondary font-heading text-lg uppercase tracking-widest mb-4">
                  About Summit Buildings
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary-foreground leading-tight mb-6">
                  Building Quality Structures <span className="text-secondary">Since Day One</span>
                </h1>
                <p className="text-lg text-primary-foreground/80 max-w-2xl">
                  A family owned business that continues to strive for excellence & customer satisfaction.
                </p>
              </div>
            </div>
          </section>

          {/* Mission Statement */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Mission Statement
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Summit Portable Buildings mission is to build Portable Structures to serve our neighbors. 
                  We do this by building quality structures in our own shop, with customizable, high quality craftsmanship.
                </p>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="section-padding bg-muted/30">
            <div className="container-custom">
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Our Values
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  The principles that guide everything we do
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Family Owned */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6">
                    <Home className="w-4 h-4" />
                    <span className="font-medium text-sm">Family Owned</span>
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                    A Family Business Built on Trust
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    A family owned business that continues to strive for excellence & customer satisfaction. 
                    With experience in Construction & Sales we incorporate that experience into each of our products.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We have been helping customers with solutions to their needs by customizing Backyard Portable Offices, 
                    Storage Sheds, Portable Garages, Utility Buildings, Lofted Barns and Cabins, Tiny House Shells, and other styles.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <Hammer className="w-12 h-12 text-primary" />
                    <h3 className="font-heading text-2xl font-bold text-foreground">
                      The Old Fashioned Way
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    We construct various attractive, affordable, quality, hand-crafted, and durable Portable Buildings 
                    the old fashioned way! We also build each building from the ground up unlike a factory built building.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Craftsmen & Features */}
          <section className="section-padding bg-navy text-primary-foreground">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Skilled Craftsmen, Quality Materials
                </h2>
                <p className="text-primary-foreground/80 leading-relaxed">
                  All of our buildings are built by skilled and experienced craftsmen. We are continually researching 
                  new and improved products to continue bringing our customers a quality building that is in fact 
                  the best money can buy: a Summit Building!
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {buildingFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-primary-foreground/5 rounded-lg p-4"
                  >
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-primary-foreground/90 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Service Areas
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Proudly serving communities across Missouri, Illinois, and Kentucky
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-bold text-primary">MO</span>
                    Missouri
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {serviceAreas.missouri}
                  </p>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-bold text-primary">IL</span>
                    Illinois
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {serviceAreas.illinois}
                  </p>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-bold text-primary">KY</span>
                    Kentucky
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {serviceAreas.kentucky}
                  </p>
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
                Contact us today for a free, no-obligation quote on your dream building.
              </p>
              <Link to="/#contact">
                <Button variant="heroOutline" size="xl" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
                  Get Your Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
