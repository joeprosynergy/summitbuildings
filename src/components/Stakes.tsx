import { Package, Frown, ThumbsDown } from 'lucide-react';

const painPoints = [
  {
    icon: Package,
    title: 'Stuff Everywhere',
    description: "Your garage is packed. The basement is full. Expensive equipment sits outside getting damaged by weather.",
  },
  {
    icon: Frown,
    title: 'Feeling Overwhelmed',
    description: "You're stressed about the clutter. Every time you look at the mess, you feel like you're falling behind.",
  },
  {
    icon: ThumbsDown,
    title: 'Cheap Sheds Fall Apart',
    description: "You shouldn't have to choose between affordable and quality. Cookie-cutter box store sheds just don't last.",
  },
];

const Stakes = () => {
  return (
    <section className="section-padding bg-navy text-primary-foreground">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-secondary font-heading uppercase tracking-widest mb-4">
            We Understand
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-6">
            Running Out of Space is Frustrating
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            You've got equipment, tools, and belongings piling up with nowhere to put them.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="bg-primary-foreground/5 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-secondary/20 rounded-2xl flex items-center justify-center">
                <point.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">
                {point.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xl text-secondary font-semibold text-center">
          You deserve a storage solution that actually works.
        </p>
      </div>
    </section>
  );
};

export default Stakes;
