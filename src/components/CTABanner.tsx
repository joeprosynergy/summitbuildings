import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-secondary to-primary">
      <div className="container-custom text-center">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
          Ready for Your New Building?
        </h2>
        <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Don't let clutter take over your property. Get started today with a free, no-obligation quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact">
            <Button variant="heroOutline" size="xl" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
              Get Your Free Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
          <a href="tel:5737474700">
            <Button variant="heroOutline" size="xl">
              <Phone className="w-5 h-5" />
              Call 573-747-4700
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
