import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CTAButton {
  text: string;
  href: string;
  variant: 'hero' | 'heroOutline';
  external?: boolean;
}

interface BackPathConfig {
  path: string;
  label: string;
}

interface ProductHeroProps {
  backPath: BackPathConfig | {
    defaultPath: string;
    defaultLabel: string;
  };
  title: string;
  titleHighlight: string;
  titlePosition?: 'before' | 'after' | 'only'; // 'only' for when highlight is the entire title
  description: string | React.ReactNode;
  secondaryDescription?: string | React.ReactNode;
  subtitle?: string; // e.g., "Sizes: 8×8 to 14×40" or "Starting at $29,717.89"
  image: string;
  imageAlt: string;
  badge?: string; // e.g., "Our Best Seller" or "Infinitely Customizable"
  showDeliveryBadge?: boolean;
  ctaButtons?: CTAButton[]; // Custom CTA buttons
  extraContent?: React.ReactNode; // For things like the badges in Carports
}

const defaultCTAButtons: CTAButton[] = [
  {
    text: 'Build Your Own',
    href: 'https://summitbuildings.shedpro.co/',
    variant: 'hero',
    external: true,
  },
  {
    text: 'Browse Our Inventory',
    href: '/inventory',
    variant: 'heroOutline',
    external: false,
  },
];

const ProductHero = ({
  backPath,
  title,
  titleHighlight,
  titlePosition = 'after',
  description,
  secondaryDescription,
  subtitle,
  image,
  imageAlt,
  badge,
  showDeliveryBadge = true,
  ctaButtons = defaultCTAButtons,
  extraContent,
}: ProductHeroProps) => {
  const location = useLocation();
  const state = location.state as { from?: string } | null;
  
  // Resolve back path - support dynamic navigation based on where user came from
  const resolveBackPath = (): BackPathConfig => {
    // If backPath has path/label directly, use it
    if ('path' in backPath && 'label' in backPath) {
      return backPath as BackPathConfig;
    }
    
    // Dynamic resolution
    const config = backPath as { defaultPath: string; defaultLabel: string };
    
    // Check location state first (set by Link components with state)
    if (state?.from) {
      return {
        path: state.from,
        label: `← Back`,
      };
    }
    
    // Default fallback
    return {
      path: config.defaultPath,
      label: config.defaultLabel,
    };
  };
  
  const resolvedBackPath = resolveBackPath();
  const renderTitle = () => {
    if (titlePosition === 'only') {
      return <span className="text-secondary">{titleHighlight}</span>;
    }
    if (titlePosition === 'before') {
      return (
        <>
          <span className="text-secondary">{titleHighlight}</span> {title}
        </>
      );
    }
    return (
      <>
        {title} <span className="text-secondary">{titleHighlight}</span>
      </>
    );
  };

  return (
    <section className="pt-32 pb-16 min-h-[600px] lg:min-h-[700px] bg-gradient-to-br from-navy via-navy-dark to-navy flex items-center">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Link 
              to={resolvedBackPath.path}
              className="inline-flex items-center gap-2 text-secondary/80 hover:text-secondary mb-4 transition-colors"
            >
              {resolvedBackPath.label}
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary-foreground leading-tight mb-6">
              {renderTitle()}
            </h1>
            <div className="text-lg text-primary-foreground/80 mb-6">
              {description}
            </div>
            
            {secondaryDescription && (
              <div className="text-primary-foreground/80 mb-6">
                {secondaryDescription}
              </div>
            )}
            
            {subtitle && (
              <p className="text-secondary font-heading text-xl mb-6">{subtitle}</p>
            )}

            {extraContent}
            
            <div className="flex flex-col sm:flex-row gap-4">
              {ctaButtons.map((button, index) => (
                button.external ? (
                  <a key={index} href={button.href} target="_blank" rel="noopener noreferrer">
                    <Button variant={button.variant} size="xl">
                      {button.text}
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </a>
                ) : (
                  <Link key={index} to={button.href}>
                    <Button variant={button.variant} size="xl">
                      {button.text}
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                )
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img
              src={image}
              alt={imageAlt}
              className="rounded-2xl shadow-2xl w-full"
            />
            {badge && (
              <div className="absolute -bottom-3 -right-3 bg-secondary text-primary-foreground px-4 py-2 rounded-lg font-heading text-sm">
                {badge}
              </div>
            )}
            {showDeliveryBadge && !badge && (
              <div className="absolute -bottom-4 -right-4 bg-secondary text-primary-foreground px-6 py-3 rounded-xl font-heading text-sm md:text-base">
                FREE DELIVERY*<br />
                <span className="text-xs font-normal">Within 50 miles</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
