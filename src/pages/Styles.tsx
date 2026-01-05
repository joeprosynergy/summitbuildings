import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cloudinaryImages } from '@/lib/cloudinary';
import modernShed from '@/assets/modern-shed.jpg';

const styles = [
  {
    id: 'utility',
    name: 'Utility',
    subtitle: 'Traditional A-Frame Roof',
    image: cloudinaryImages.utilityShed,
    link: '/styles/utility'
  },
  {
    id: 'barn',
    name: 'Barn',
    subtitle: 'Gambrel Roof',
    image: cloudinaryImages.loftedBarn,
    link: '/styles/barn'
  },
  {
    id: 'modern',
    name: 'Modern',
    subtitle: 'Single Slope Roof',
    image: modernShed,
    link: '/styles/modern'
  },
];

const Styles = () => {
  return (
    <>
      <Helmet>
        <title>Building Styles | Summit Portable Buildings</title>
        <meta name="description" content="Choose your preferred building style - Utility with traditional A-frame roof, Barn with gambrel roof, or Modern with single slope roof." />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container-custom text-center">
            <p className="text-secondary font-semibold tracking-wider uppercase mb-4">Find Your Perfect Style</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Building Styles
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Select a roof style to explore available options
            </p>
          </div>
        </section>

        {/* Styles Grid */}
        <section className="bg-background py-16 md:py-24">
          <div className="container-custom">
            <div className="bg-card rounded-lg shadow-lg overflow-hidden">
              <div className="bg-primary py-5 px-6">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground text-center uppercase tracking-wide">
                  Choose Your Style
                </h2>
              </div>

              <div className="p-6 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  {styles.map((style) => (
                    <Link
                      key={style.id}
                      to={style.link}
                      className="group text-center"
                    >
                      <div className="aspect-square mb-4 overflow-hidden rounded-lg shadow-sm bg-muted">
                        <img
                          src={style.image}
                          alt={style.name}
                          className="w-full h-full transition-transform duration-300 group-hover:scale-105 object-cover"
                        />
                      </div>
                      <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-secondary transition-colors uppercase tracking-wide">
                        {style.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {style.subtitle}
                      </p>
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

export default Styles;
