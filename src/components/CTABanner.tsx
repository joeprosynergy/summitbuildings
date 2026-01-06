import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, AlertTriangle } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-secondary to-primary">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground px-4 py-2 rounded-full mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-medium">Don't Wait</span>
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Don't Let Clutter Take Over Your Property
          </h2>
          
          <p className="text-primary-foreground/90 text-lg md:text-xl mb-4 max-w-3xl mx-auto">
            Every month you wait, the problem gets worse. Equipment rusts in the rain. The garage gets more packed. The stress builds.
          </p>
          
          <p className="text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            That cheap shed from the box store? It'll be falling apart in 5 years while you wish you'd invested in quality.
          </p>
          
          <p className="text-primary-foreground font-semibold text-xl mb-8">
            You've worked too hard to settle for less than you deserve.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://summitbuildings.shedpro.co/" target="_blank" rel="noopener noreferrer">
              <Button variant="heroOutline" size="xl" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
                Design Your Shed
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
      </div>
    </section>
  );
};

export default CTABanner;
