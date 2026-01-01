import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Mike T.',
    location: 'Farmington, MO',
    subtitle: 'From packed garage to organized workshop',
    rating: 5,
    text: "I was skeptical about ordering a shed, but Summit made it so easy. Designed it online, they built it in two weeks, and delivery was seamless. The quality is incredible - way better than anything at the big box stores.",
  },
  {
    id: 2,
    name: 'Sarah W.',
    location: 'Cape Girardeau, MO',
    subtitle: 'From cluttered basement to family-ready home',
    rating: 5,
    text: "We needed extra storage after our third kid. Summit helped us design the perfect lofted barn that matches our house. The guys were professional, delivery was on time, and it looks amazing. Wish we'd done this years ago!",
  },
  {
    id: 3,
    name: 'Robert D.',
    location: 'Paducah, KY',
    subtitle: 'From cramped to having his own space',
    rating: 5,
    text: "Best investment we've made for our property. I finally have a real workshop where I can work on projects without my wife complaining about the mess in the garage. The craftsmanship is top notch.",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-stone">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary font-heading uppercase tracking-widest mb-3">
            Success Stories
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-6">
            Real Families. Real Results.
          </h2>
          <p className="text-lg text-muted-foreground">
            See how Summit Buildings helped these homeowners solve their storage problems.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card p-8 rounded-lg shadow-md relative"
            >
              <Quote className="w-10 h-10 text-secondary/20 absolute top-6 right-6" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-secondary fill-secondary"
                  />
                ))}
              </div>
              
              {/* Text */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div>
                <p className="font-heading text-foreground font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonial.location}
                </p>
                <p className="text-secondary text-sm font-medium mt-1">
                  {testimonial.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
