import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Calendar, DollarSign, Clock, Home, FileText, CreditCard, Key } from 'lucide-react';

const Financing = () => {
  const paymentFeatures = [
    {
      icon: Calendar,
      title: 'Available Terms',
      description: '1 - 15 Years',
    },
    {
      icon: Clock,
      title: 'Repayment Options',
      description: 'Weekly, Fortnightly, or Monthly',
    },
    {
      icon: DollarSign,
      title: 'Amounts',
      description: '$2,001 - $100,000',
    },
  ];

  const howItWorks = [
    {
      icon: Home,
      step: '01',
      title: 'Select A Building',
      description: 'Select what you want to buy from our wide range of storage buildings, cabins, and garages.',
    },
    {
      icon: FileText,
      step: '02',
      title: 'Apply Online',
      description: 'Apply to buy now and pay later with our simple online application process.',
    },
    {
      icon: CreditCard,
      step: '03',
      title: 'We Get Paid',
      description: 'Conditionally approved in seconds & it gets paid to us directly.',
    },
    {
      icon: Key,
      step: '04',
      title: 'You Own It',
      description: 'Own it today with flexible payments that fit your budget.',
    },
  ];

  const benefits = [
    'Zero interest for up to a year when approved',
    'Zero payments for up to a year when approved',
    'No early payoff penalty',
    'Fast approval process',
    'Competitive rates',
    'Flexible loan options',
  ];

  return (
    <>
      <Helmet>
        <title>Financing | Summit Portable Buildings</title>
        <meta name="description" content="Easy financing options for your storage building. Zero interest, zero payments for up to a year with no early payoff penalty. Apply today!" />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-transparent" />
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Special Financing Offer
              </span>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
                Zero Interest + Zero Payments
              </h1>
              <p className="text-primary-foreground/90 text-xl md:text-2xl mb-4">
                For up to a year when approved through our preferred finance company.
              </p>
              <p className="text-secondary text-lg font-semibold mb-8">
                No Early Payoff Penalty!
              </p>
              <Button 
                size="lg" 
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6"
                asChild
              >
                <a href="https://upgrade.com/h/6lFlFMgaJZ" target="_blank" rel="noopener noreferrer">
                  Apply for Financing Now
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Summit Portable Buildings, we strive to provide easy and accessible financing solutions for those looking to invest in sheds, tiny homes, pole barns, and other custom structures. We believe that everyone should have the opportunity to create the space they need, which is why we offer flexible loan options with fast approvals and competitive rates.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Our mission is to simplify the financing process, giving you a seamless experience from start to finish. With a commitment to transparency, excellent communication, and personalized support, we partner with a trusted financing company to ensure you receive the best service possible.
              </p>
            </div>
          </div>
        </section>

        {/* Payment Plans Section */}
        <section className="py-16 bg-muted">
          <div className="container-custom">
            <h2 className="font-heading text-3xl md:text-4xl text-center mb-4">
              Quick and Easy Payment Plans
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              With Summit Portable Buildings, we make it easier than ever for you to get the storage building you need without the burden of upfront costs.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {paymentFeatures.map((feature, index) => (
                <Card key={index} className="text-center border-2 hover:border-secondary transition-colors">
                  <CardContent className="pt-8 pb-8">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="font-heading text-lg text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground font-medium">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button 
                size="lg" 
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                asChild
              >
                <a href="https://upgrade.com/h/6lFlFMgaJZ" target="_blank" rel="noopener noreferrer">
                  Apply for Financing Now
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <h2 className="font-heading text-3xl md:text-4xl text-center mb-12">
              How It Works
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {howItWorks.map((item, index) => (
                <div key={index} className="text-center relative">
                  {/* Connector line for desktop */}
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
                  )}
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <span className="inline-block bg-secondary text-secondary-foreground text-sm font-bold px-3 py-1 rounded-full mb-3">
                      Step {item.step}
                    </span>
                    <h3 className="font-heading text-xl text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                size="lg" 
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6"
                asChild
              >
                <a href="https://www.upgrade.com/funnel/home/new?linkCode=7ab5a43b-81a9-4b78-b29e-ecd5b978ccce" target="_blank" rel="noopener noreferrer">
                  Click Here to Apply Now
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-primary">
          <div className="container-custom">
            <h2 className="font-heading text-3xl md:text-4xl text-center text-primary-foreground mb-12">
              Why Finance With Us?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-primary-foreground/10 rounded-lg p-4">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="text-primary-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted">
          <div className="container-custom text-center">
            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Apply for financing today and take the first step toward owning your perfect storage building.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                asChild
              >
                <a href="https://upgrade.com/h/6lFlFMgaJZ" target="_blank" rel="noopener noreferrer">
                  Apply for Financing
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/#contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Financing;
