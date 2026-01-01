import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Phone, Clock, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      toast({
        title: 'Please provide consent',
        description: 'You must consent to receive messages before submitting.',
        variant: 'destructive',
      });
      return;
    }
    toast({
      title: 'Request Submitted!',
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
    setConsent(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-secondary font-heading uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-primary-foreground mb-4">
            Request a Quote
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Have questions? Ready to get started? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3 bg-card p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="(555) 555-5555"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-background"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <Textarea
                  name="message"
                  placeholder="Tell us about your project, preferred size, colors, etc."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="bg-background"
                />
              </div>
              
              <div className="flex items-start gap-3">
                <Checkbox 
                  id="consent" 
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(checked === true)}
                />
                <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                  I consent to receive transactional messages related to my inquiry. Message & data rates may apply.
                </label>
              </div>
              
              <Button variant="hero" size="xl" type="submit" className="w-full">
                Submit Request
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-heading text-xl text-primary-foreground mb-2">
                Call Us
              </h3>
              <a href="tel:5737474700" className="flex items-center gap-3 text-secondary text-2xl font-bold hover:underline">
                <Phone className="w-6 h-6" />
                (573) 747-4700
              </a>
            </div>

            <div>
              <h3 className="font-heading text-xl text-primary-foreground mb-2">
                Main Location
              </h3>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p>7336 State Highway 32</p>
                  <p>Farmington, MO 63640</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-xl text-primary-foreground mb-2">
                Hours
              </h3>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p>Mon - Fri: 8am - 5pm</p>
                  <p>Sat: 9am - 3pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
