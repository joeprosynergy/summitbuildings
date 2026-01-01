import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Building, Shield } from 'lucide-react';
import heroShed from '@/assets/hero-shed.jpg';

const stats = [
  { icon: Award, label: '30+ Years Experience' },
  { icon: Building, label: '1000+ Buildings Built' },
  { icon: Shield, label: 'Lifetime Warranty' },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroShed})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/85 to-navy/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom py-32 lg:py-40">
        <div className="max-w-3xl">
          <p className="text-secondary font-heading text-lg md:text-xl uppercase tracking-widest mb-4 animate-fade-in-up">
            Summit Portable Buildings
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            BUILT THE<br />
            <span className="text-secondary">OLD FASHIONED WAY</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Attractive, affordable, high quality, hand crafted, and durable portable buildings built right here in the USA. We're a multi-state portable building supplier serving Missouri, Illinois, Kentucky, and Arkansas!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl">
              Customize Your Own
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Our Locations
            </Button>
          </div>

          {/* Stats Badges */}
          <div className="flex flex-wrap gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-2 text-primary-foreground/90"
              >
                <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                  <stat.icon className="w-3 h-3 text-secondary" />
                </div>
                <span className="text-sm font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-secondary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
