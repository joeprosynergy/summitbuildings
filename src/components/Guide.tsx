import { Award, Building, Shield, Users } from 'lucide-react';

const credentials = [
  { icon: Award, label: '30+ Years Experience' },
  { icon: Building, label: '1000+ Buildings Delivered' },
  { icon: Shield, label: 'Lifetime Warranty' },
  { icon: Users, label: 'Family Owned & Operated' },
];

const Guide = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-secondary font-heading uppercase tracking-widest mb-4">
              We're Here to Help
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-6">
              Your Guide to the Perfect Building
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We understand the frustration of needing more space. That's why we've spent over 30 years 
              perfecting our craft—building attractive, affordable, and durable portable buildings that 
              solve real storage problems.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              As a family-owned business, we treat every customer like a neighbor. We listen to your needs, 
              help you choose the right building, and deliver a product we're proud to put our name on. 
              Built the old fashioned way means quality you can trust.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {credentials.map((cred) => (
                <div key={cred.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <cred.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{cred.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 lg:p-12">
            <blockquote className="text-lg md:text-xl text-foreground italic leading-relaxed mb-6">
              "A family owned business that continues to strive for excellence & customer satisfaction. 
              With experience in Construction & Sales we incorporate that experience into each of our products."
            </blockquote>
            <p className="font-heading text-foreground font-bold">— The Summit Team</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
