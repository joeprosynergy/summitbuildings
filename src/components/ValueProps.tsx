import { Shield, Truck, Award, Clock } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Premium materials and skilled craftsmanship mean your building will stand strong for decades.',
  },
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'We deliver and set up your building at no extra charge within our service area.',
  },
  {
    icon: Award,
    title: 'Lifetime Warranty',
    description: 'Our buildings are backed by a comprehensive warranty because we stand behind our work.',
  },
  {
    icon: Clock,
    title: 'Quick Turnaround',
    description: 'Most buildings are ready in weeks, not months. Get your storage solution fast.',
  },
];

const ValueProps = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
