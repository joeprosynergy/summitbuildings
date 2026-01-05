import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { cloudinaryImages } from '@/lib/cloudinary';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Pages with dark hero sections (need light text when not scrolled)
  const hasDarkHero = isHomePage;
  
  // Determine if we should use light text (for dark backgrounds)
  const useLightText = hasDarkHero && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/types', label: 'Our Buildings', isRoute: true },
    { href: 'https://summitportablebuildings.shedsuite.com/', label: 'See Inventory', isExternal: true },
    { href: '/about-us', label: 'About Us', isRoute: true },
    { href: isHomePage ? '#locations' : '/#locations', label: 'Locations' },
    { href: '/contact-us', label: 'Contact', isRoute: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-md'
          : hasDarkHero
            ? 'bg-transparent'
            : 'bg-card/95 backdrop-blur-md shadow-md'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={cloudinaryImages.summitLogo}
              alt="Summit Portable Buildings"
              className={`h-14 w-auto transition-all duration-300 ${
                useLightText ? 'brightness-0 invert' : ''
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-medium transition-colors duration-200 ${
                    useLightText
                      ? 'text-primary-foreground/90 hover:text-secondary-foreground'
                      : 'text-foreground/80 hover:text-secondary'
                  }`}
                >
                  {link.label}
                </Link>
              ) : link.isExternal ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-medium transition-colors duration-200 ${
                    useLightText
                      ? 'text-primary-foreground/90 hover:text-secondary-foreground'
                      : 'text-foreground/80 hover:text-secondary'
                  }`}
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors duration-200 ${
                    useLightText
                      ? 'text-primary-foreground/90 hover:text-secondary-foreground'
                      : 'text-foreground/80 hover:text-secondary'
                  }`}
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:5737474700"
              className={`flex items-center gap-2 font-semibold ${
                useLightText ? 'text-primary-foreground' : 'text-foreground'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>573-747-4700</span>
            </a>
            <a href="https://summitbuildings.shedpro.co/" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg">
                Design Your Shed
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${useLightText ? 'text-primary-foreground' : 'text-foreground'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${useLightText ? 'text-primary-foreground' : 'text-foreground'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-fade-in">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="px-4 py-3 text-foreground/80 hover:text-secondary hover:bg-muted transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : link.isExternal ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 text-foreground/80 hover:text-secondary hover:bg-muted transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 text-foreground/80 hover:text-secondary hover:bg-muted transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              ))}
              <div className="px-4 pt-4 border-t border-border mt-4">
                <a href="https://summitbuildings.shedpro.co/" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="w-full">
                    Design Your Shed
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
