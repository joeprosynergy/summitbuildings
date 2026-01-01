import { MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const locations = [
  {
    id: 1,
    city: 'Springfield',
    state: 'MO',
    address: '1234 Business Hwy, Springfield, MO 65801',
    phone: '(417) 555-0123',
    hours: 'Mon-Sat: 9AM-6PM',
  },
  {
    id: 2,
    city: 'Paducah',
    state: 'KY',
    address: '5678 Main Street, Paducah, KY 42001',
    phone: '(270) 555-0456',
    hours: 'Mon-Sat: 9AM-6PM',
  },
  {
    id: 3,
    city: 'Carbondale',
    state: 'IL',
    address: '910 Highway 13, Carbondale, IL 62901',
    phone: '(618) 555-0789',
    hours: 'Mon-Sat: 9AM-6PM',
  },
  {
    id: 4,
    city: 'Jonesboro',
    state: 'AR',
    address: '2345 Stadium Blvd, Jonesboro, AR 72401',
    phone: '(870) 555-0321',
    hours: 'Mon-Sat: 9AM-6PM',
  },
];

const Locations = () => {
  return (
    <section id="locations" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary font-heading uppercase tracking-widest mb-3">
            Find Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-6">
            OUR LOCATIONS
          </h2>
          <p className="text-muted-foreground text-lg">
            Visit one of our locations to see our buildings in person. Our friendly staff is ready to help you find the perfect solution.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location) => (
            <div
              key={location.id}
              className="bg-card p-6 rounded-lg shadow-md border border-border hover:border-secondary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-secondary" />
                <h3 className="font-heading text-xl text-foreground">
                  {location.city}, {location.state}
                </h3>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4">
                {location.address}
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-secondary" />
                  <span className="text-foreground">{location.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-secondary" />
                  <span className="text-muted-foreground">{location.hours}</span>
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="w-full">
                Get Directions
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
