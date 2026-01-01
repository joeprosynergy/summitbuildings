import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import utilityShed from '@/assets/utility-shed.jpg';
import sideUtilityShed from '@/assets/side-utility-shed.jpg';
import loftedBarn from '@/assets/lofted-barn.jpg';
import garageShed from '@/assets/garage-shed.jpg';
import cabinShed from '@/assets/cabin-shed.jpg';

const products = [
  {
    id: 1,
    name: 'Lofted Barn',
    description: 'Extra storage up top. Maximize your space with a spacious loft area.',
    image: loftedBarn,
    price: 'From $4,500',
    link: '#',
  },
  {
    id: 2,
    name: 'Utility Shed',
    description: 'Perfect for tools & equipment. A classy, simple addition to any property.',
    image: utilityShed,
    price: 'From $2,800',
    link: '/pro-utility-shed',
  },
  {
    id: 3,
    name: 'Side Utility',
    description: 'Same great quality with a side entry design for unique layouts.',
    image: sideUtilityShed,
    price: 'From $3,200',
    link: '#',
  },
  {
    id: 4,
    name: 'Cottage Cabin',
    description: 'With covered porch. Perfect for home offices or guest quarters.',
    image: cabinShed,
    price: 'From $6,500',
    link: '#',
  },
  {
    id: 5,
    name: 'Portable Garage',
    description: 'Secure vehicle storage. Protect your vehicles and equipment.',
    image: garageShed,
    price: 'From $5,800',
    link: '#',
  },
];

const Products = () => {
  return (
    <section id="products" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary font-heading uppercase tracking-widest mb-3">
            Choose Your Style
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-6">
            10+ Building Styles to Choose From
          </h2>
          <p className="text-muted-foreground text-lg">
            Every style is fully customizable. Pick your size, colors, doors, windows, and extras.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Button */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {product.link !== '#' ? (
                    <Link to={product.link}>
                      <Button variant="hero" size="lg" className="w-full">
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  ) : (
                    <a href="https://summitbuildings.shedpro.co/" target="_blank" rel="noopener noreferrer">
                      <Button variant="hero" size="lg" className="w-full">
                        Customize Now
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-heading text-foreground font-bold">
                    {product.name}
                  </h3>
                  <span className="text-sm text-secondary font-semibold">
                    {product.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="https://summitbuildings.shedpro.co/" target="_blank" rel="noopener noreferrer">
            <Button variant="cta" size="xl">
              See All Models & Customize
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
