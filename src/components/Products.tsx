import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import utilityShed from '@/assets/utility-shed.jpg';
import sideUtilityShed from '@/assets/side-utility-shed.jpg';
import loftedBarn from '@/assets/lofted-barn.jpg';
import garageShed from '@/assets/garage-shed.jpg';
import cabinShed from '@/assets/cabin-shed.jpg';

const products = [
  {
    id: 1,
    name: 'Utility',
    description: 'A classy, yet simple addition to any property. Perfect for storing lawn equipment, tools, and outdoor gear.',
    image: utilityShed,
    sizes: '8×8 to 14×40',
  },
  {
    id: 2,
    name: 'Side Utility',
    description: 'Same great quality with a side entry design. Ideal for tight spaces or unique property layouts.',
    image: sideUtilityShed,
    sizes: '8×12 to 12×32',
  },
  {
    id: 3,
    name: 'Lofted Barn',
    description: 'Maximize your storage with our spacious lofted barn. Extra vertical space for all your needs.',
    image: loftedBarn,
    sizes: '8×12 to 14×40',
  },
  {
    id: 4,
    name: 'Garage',
    description: 'Protect your vehicles and equipment with a durable, portable garage solution.',
    image: garageShed,
    sizes: '12×20 to 14×40',
  },
  {
    id: 5,
    name: 'Deluxe Cabin',
    description: 'The perfect backyard retreat. Great for home offices, she-sheds, or guest quarters.',
    image: cabinShed,
    sizes: '10×16 to 14×40',
  },
];

const Products = () => {
  return (
    <section id="products" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary font-heading uppercase tracking-widest mb-3">
            Our Models
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-6">
            CHOOSE YOUR BUILDING
          </h2>
          <p className="text-muted-foreground text-lg">
            You are in the right place to learn more about our options and prices! Each building is hand-crafted with premium materials.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-lg overflow-hidden shadow-md card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <Button variant="hero" size="lg" className="w-full">
                    Design Your Own
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-heading text-foreground uppercase">
                    {product.name}
                  </h3>
                  <span className="text-sm text-secondary font-semibold">
                    {product.sizes}
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
          <Button variant="cta" size="xl">
            View All Models
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
