import { ClipboardList, Calculator, Truck, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Choose Your Design',
    description: 'Browse our catalog or work with us to create a custom design that fits your needs.',
    icon: ClipboardList,
  },
  {
    number: 2,
    title: 'Get Your Quote',
    description: 'Receive a free, no-obligation quote with transparent pricing and no hidden fees.',
    icon: Calculator,
  },
  {
    number: 3,
    title: 'Schedule Delivery',
    description: 'Pick a delivery date that works for you. We handle all the logistics.',
    icon: Truck,
  },
  {
    number: 4,
    title: 'Enjoy Your Building',
    description: 'Our team professionally installs your building. You just enjoy it!',
    icon: CheckCircle,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting your dream building is easy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
              )}
              
              <div className="relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/30 text-center h-full">
                {/* Step number badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold text-sm shadow-md">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
