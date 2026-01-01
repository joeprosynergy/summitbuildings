import { Facebook, Instagram, Youtube } from 'lucide-react';
import summitLogo from '@/assets/summit-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    products: [
      { label: 'Utility', href: '#products' },
      { label: 'Side Utility', href: '#products' },
      { label: 'Lofted Barn', href: '#products' },
      { label: 'Garage', href: '#products' },
      { label: 'Deluxe Cabin', href: '#products' },
    ],
    company: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Locations', href: '/#locations' },
      { label: 'Contact', href: '/#contact' },
      { label: 'Rent-to-Own', href: '#' },
      { label: 'Financing', href: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Warranty Info', href: '#' },
    ],
  };

  return (
    <footer className="bg-navy-dark">
      {/* Main Footer */}
      <div className="container-custom section-padding pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={summitLogo}
              alt="Summit Portable Buildings"
              className="h-16 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-primary-foreground/60 mb-6">
              Attractive, affordable, high quality, hand crafted, and durable portable buildings built right here in the USA.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="font-heading text-primary-foreground uppercase mb-6">
              Our Buildings
            </h3>
            <ul className="space-y-3">
              {links.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-heading text-primary-foreground uppercase mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-heading text-primary-foreground uppercase mb-6">
              Legal
            </h3>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/50 text-sm text-center md:text-left">
              © {currentYear} Summit Portable Buildings. All rights reserved.
            </p>
            <p className="text-primary-foreground/50 text-sm">
              Built in the USA with pride.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
