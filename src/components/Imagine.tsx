import { 
  Car, 
  Shield, 
  Wrench, 
  TrendingUp, 
  Lock,
  Clock
} from 'lucide-react';

const benefits = [
  {
    icon: Car,
    text: 'A clean, organized garage you can actually park in',
  },
  {
    icon: Shield,
    text: 'Expensive tools and equipment protected from weather',
  },
  {
    icon: Wrench,
    text: 'A dedicated workshop or hobby space of your own',
  },
  {
    icon: TrendingUp,
    text: 'Increased property value with an attractive building',
  },
  {
    icon: Lock,
    text: 'Peace of mind knowing your belongings are secure',
  },
  {
    icon: Clock,
    text: 'A building that will last for decades, not years',
  },
];

const Imagine = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-secondary font-heading uppercase tracking-widest mb-4">
            Imagine This
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-6">
            What Life Looks Like With the Right Storage
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Picture walking into your garage and actually having room. Your lawn equipment has a home. Your tools are organized. Everything has its place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.text}
              className="flex items-center gap-4 bg-card rounded-xl p-5 border border-border/50"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-secondary" />
              </div>
              <p className="text-foreground font-medium">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Imagine;
