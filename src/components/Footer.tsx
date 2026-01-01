import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const links = {
    basicStorage: [
      { label: 'Economy Shed', href: '/types/basic-storage/economy-shed' },
      { label: 'Utility Shed', href: '/types/basic-storage#utility' },
      { label: 'Side Utility', href: '/types/basic-storage#side-utility' },
      { label: 'Lofted Barn', href: '/types/basic-storage#lofted-barn' },
      { label: 'Side Lofted Barn', href: '/types/basic-storage#side-lofted-barn' },
      { label: 'Mini Barn', href: '/types/basic-storage#mini-barn' },
      { label: 'Garden Shed', href: '/types/basic-storage#garden-shed' },
    ],
    deluxeStorage: [
      { label: 'Budget Pro - Utility', href: '/types/basic-storage#budget-pro-utility' },
      { label: 'Pro - Utility', href: '/types/deluxe-storage-cabins/pro-utility-shed' },
      { label: 'Pro - Lofted Barn', href: '/types/deluxe-storage-cabins/pro-lofted-barn' },
      { label: 'Cabin', href: '/types/deluxe-storage-cabins/cabin' },
    ],
    garagesCarports: [
      { label: 'Garage', href: '/types/garages-carports/garage' },
      { label: 'Carport', href: '/types/garages-carports#carport' },
    ],
    resources: [
      { label: "FAQ's", href: '/#faq' },
      { label: 'Financing', href: '#' },
      { label: 'Rent-to-Own', href: '#' },
      { label: 'Warranty Info', href: '#' },
    ],
    about: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about-us' },
      { label: 'Contact', href: '/#contact' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
    locations: [
      { label: 'Missouri', href: '/#locations' },
      { label: 'Illinois', href: '/#locations' },
      { label: 'Kentucky', href: '/#locations' },
      { label: 'Arkansas', href: '/#locations' },
    ],
  };

  return (
    <footer className="bg-navy-dark">
      {/* Header Banner */}
      <div className="container-custom pt-16 pb-12">
        <h2 className="font-heading text-2xl md:text-3xl text-primary-foreground text-center uppercase tracking-wide">
          Find Your Perfect Portable Building Today
        </h2>
      </div>

      {/* Main Footer Links */}
      <div className="container-custom pb-16">
        <div className="flex flex-wrap justify-center gap-12 lg:gap-16">
          {/* Basic Storage */}
          <div>
            <h3 className="font-heading text-secondary text-sm uppercase mb-4 tracking-wide">
              Basic Storage
            </h3>
            <ul className="space-y-2">
              {links.basicStorage.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Deluxe Storage & Cabins */}
          <div>
            <h3 className="font-heading text-secondary text-sm uppercase mb-4 tracking-wide">
              Deluxe & Cabins
            </h3>
            <ul className="space-y-2">
              {links.deluxeStorage.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Garages & Carports */}
          <div>
            <h3 className="font-heading text-secondary text-sm uppercase mb-4 tracking-wide">
              Garages & Carports
            </h3>
            <ul className="space-y-2">
              {links.garagesCarports.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading text-secondary text-sm uppercase mb-4 tracking-wide">
              Resources
            </h3>
            <ul className="space-y-2">
              {links.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-heading text-secondary text-sm uppercase mb-4 tracking-wide">
              About
            </h3>
            <ul className="space-y-2">
              {links.about.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Where We Deliver */}
          <div>
            <h3 className="font-heading text-secondary text-sm uppercase mb-4 tracking-wide">
              Where We Deliver
            </h3>
            <ul className="space-y-2">
              {links.locations.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="container-custom pb-16">
        <div className="text-center space-y-6">
          <p className="text-primary-foreground text-lg">
            Get the building of your dreams
          </p>
          <a href="tel:5747474700" className="text-primary-foreground text-2xl md:text-3xl font-heading hover:text-secondary transition-colors">
            (574) 747-4700
          </a>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              variant="outline"
              className="bg-primary-foreground border-border text-foreground hover:bg-primary-foreground/90 px-8"
              asChild
            >
              <Link to="/types">Browse Buildings</Link>
            </Button>
            <Button
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8"
              asChild
            >
              <a href="https://summitbuildings.shedpro.co/" target="_blank" rel="noopener noreferrer">Design Now</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <p className="text-primary-foreground/50 text-sm text-center">
            © {new Date().getFullYear()} Summit Portable Buildings. All rights reserved. Built in the USA with pride.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
