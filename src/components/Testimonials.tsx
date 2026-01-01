import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'John M.',
    location: 'Springfield, MO',
    rating: 5,
    text: 'Absolutely love my new utility shed! The quality is outstanding and the delivery team was professional and efficient. Highly recommend Summit Buildings.',
  },
  {
    id: 2,
    name: 'Sarah T.',
    location: 'Paducah, KY',
    rating: 5,
    text: 'We bought a lofted barn for extra storage and it exceeded our expectations. The craftsmanship is top-notch and it looks great in our backyard.',
  },
  {
    id: 3,
    name: 'Mike R.',
    location: 'Carbondale, IL',
    rating: 5,
    text: 'Best decision we made! The rent-to-own option made it affordable and the shed is built like a tank. Thank you Summit Buildings!',
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-stone">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary font-heading uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-6">
            WHAT OUR CUSTOMERS SAY
          </h2>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
