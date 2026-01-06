import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLocation } from 'react-router-dom';

const interestOptions = [
  { value: 'storage-shed', label: 'Storage Shed' },
  { value: 'cabin', label: 'Cabin' },
  { value: 'garage', label: 'Garage' },
  { value: 'carport', label: 'Carport' },
  { value: 'greenhouse', label: 'Greenhouse' },
  { value: 'animal-shelter', label: 'Animal Shelter/Kennel' },
  { value: 'other', label: 'Other' },
];

const sizeOptions = [
  { value: 'small', label: 'Small (up to 10x12)' },
  { value: 'medium', label: 'Medium (10x12 to 12x20)' },
  { value: 'large', label: "Large (anything wider than 12' or longer than 20')" },
];

const truckAccessOptions = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
  { value: 'help', label: 'I need help with this' },
];

const contactMethodOptions = [
  { value: 'text', label: 'Text' },
  { value: 'call', label: 'Call' },
  { value: 'email', label: 'Email' },
];

const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/20240386/uwfjnan/';

const ContactForm = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    otherInterest: '',
    size: '',
    truckAccess: '',
    contactMethod: '',
    message: '',
  });
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState(false);

  const splitName = (fullName: string) => {
    const trimmed = fullName.trim();
    const parts = trimmed.split(/\s+/);
    if (parts.length === 1) {
      return { firstName: parts[0], lastName: '' };
    }
    const firstName = parts[0];
    const lastName = parts.slice(1).join(' ');
    return { firstName, lastName };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check - if filled, silently reject
    if (honeypot) {
      toast({
        title: 'Thank you',
        description: 'We are unable to help with your request.',
      });
      return;
    }
    
    if (!consent) {
      toast({
        title: 'Please provide consent',
        description: 'You must consent to receive messages before submitting.',
        variant: 'destructive',
      });
      return;
    }

    if (!formData.name.trim()) {
      toast({
        title: 'Name is required',
        description: 'Please enter your full name.',
        variant: 'destructive',
      });
      return;
    }

    if (!formData.phone.trim()) {
      toast({
        title: 'Phone is required',
        description: 'Please enter your phone number.',
        variant: 'destructive',
      });
      return;
    }

    if (!formData.email.trim()) {
      toast({
        title: 'Email is required',
        description: 'Please enter your email address.',
        variant: 'destructive',
      });
      return;
    }

    if (!formData.interest) {
      toast({
        title: 'Please select what you are interested in',
        description: 'Select one option.',
        variant: 'destructive',
      });
      return;
    }

    if (!formData.size) {
      toast({
        title: 'Size is required',
        description: 'Please select a size.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { firstName, lastName } = splitName(formData.name);
      const currentPage = window.location.origin + location.pathname;
      
      const interestLabel = interestOptions.find(i => i.value === formData.interest)?.label || formData.interest;
      const interestDisplay = formData.interest === 'other' && formData.otherInterest
        ? `Other: ${formData.otherInterest}`
        : interestLabel;

      const sizeLabel = sizeOptions.find(s => s.value === formData.size)?.label || formData.size;
      const contactMethodLabel = contactMethodOptions.find(c => c.value === formData.contactMethod)?.label || formData.contactMethod || 'Not specified';
      const truckAccessLabel = truckAccessOptions.find(t => t.value === formData.truckAccess)?.label || 'Not specified';

      // Build HTML email content
      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1a1a2e; border-bottom: 2px solid #c9a227; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="background-color: #f5f5f5;">
              <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd; width: 40%;">First Name</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${firstName}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">Last Name</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${lastName}</td>
            </tr>
            <tr style="background-color: #f5f5f5;">
              <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">Phone</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${formData.phone}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">Email</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${formData.email}</td>
            </tr>
            <tr style="background-color: #f5f5f5;">
              <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">Interested In</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${interestDisplay}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">Size</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${sizeLabel}</td>
            </tr>
            <tr style="background-color: #f5f5f5;">
              <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">Truck & Trailer Access</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${truckAccessLabel}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">Preferred Contact Method</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${contactMethodLabel}</td>
            </tr>
            <tr style="background-color: #f5f5f5;">
              <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">Message</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${formData.message || 'No message provided'}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">Page Submitted From</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${currentPage}</td>
            </tr>
          </table>
          
          <p style="margin-top: 20px; color: #666; font-size: 12px;">
            Submitted on: ${new Date().toLocaleString()}
          </p>
        </div>
      `;

      // Data for Zapier - each field as separate line item
      const zapierData = {
        first_name: firstName,
        last_name: lastName,
        full_name: formData.name,
        phone: formData.phone,
        email: formData.email,
        interested_in: interestDisplay,
        size: sizeLabel,
        truck_trailer_access: truckAccessLabel,
        preferred_contact_method: contactMethodLabel,
        message: formData.message || 'No message provided',
        page_submitted_from: currentPage,
        submitted_at: new Date().toISOString(),
        html_content: htmlContent,
      };

      await fetch(ZAPIER_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify(zapierData),
      });

      toast({
        title: 'Request Submitted!',
        description: "We'll get back to you promptly.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        otherInterest: '',
        size: '',
        truckAccess: '',
        contactMethod: '',
        message: '',
      });
      setConsent(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Submission Error',
        description: 'There was an issue submitting your request. Please try again or call us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Honeypot field - hidden from users */}
      <div className="absolute opacity-0 pointer-events-none" aria-hidden="true" tabIndex={-1}>
        <label htmlFor="do_you_like_cabbage">Do you like cabbage?</label>
        <input
          type="checkbox"
          id="do_you_like_cabbage"
          name="do_you_like_cabbage"
          checked={honeypot}
          onChange={(e) => setHoneypot(e.target.checked)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Full Name <span className="text-destructive">*</span>
        </label>
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

      {/* Phone & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Phone <span className="text-destructive">*</span>
          </label>
          <Input
            type="tel"
            name="phone"
            placeholder="(555) 555-5555"
            value={formData.phone}
            onChange={handleChange}
            required
            className="bg-background"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Email <span className="text-destructive">*</span>
          </label>
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
      </div>

      {/* What are you interested in? */}
      <div className="bg-muted/50 p-5 rounded-lg border border-border">
        <h3 className="text-base font-semibold text-foreground mb-4">
          What are you interested in? <span className="text-destructive">*</span>
        </h3>
        <RadioGroup
          value={formData.interest}
          onValueChange={(value) => setFormData({ ...formData, interest: value, otherInterest: value !== 'other' ? '' : formData.otherInterest })}
          className="grid grid-cols-2 gap-3"
        >
          {interestOptions.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <RadioGroupItem value={option.value} id={`interest-${option.value}`} />
              <Label htmlFor={`interest-${option.value}`} className="text-sm cursor-pointer">
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
        {formData.interest === 'other' && (
          <div className="mt-4">
            <Input
              type="text"
              name="otherInterest"
              placeholder="Please describe what you're looking for..."
              value={formData.otherInterest}
              onChange={handleChange}
              className="bg-background"
            />
          </div>
        )}
      </div>

      {/* Size */}
      <div className="bg-muted/50 p-5 rounded-lg border border-border">
        <h3 className="text-base font-semibold text-foreground mb-4">
          Size <span className="text-destructive">*</span>
        </h3>
        <RadioGroup
          value={formData.size}
          onValueChange={(value) => setFormData({ ...formData, size: value })}
          className="space-y-3"
        >
          {sizeOptions.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <RadioGroupItem value={option.value} id={`size-${option.value}`} />
              <Label htmlFor={`size-${option.value}`} className="text-sm cursor-pointer">
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Truck Access */}
      <div className="bg-muted/50 p-5 rounded-lg border border-border">
        <h3 className="text-base font-semibold text-foreground mb-4">
          Does your site have access for a truck and trailer?
        </h3>
        <RadioGroup
          value={formData.truckAccess}
          onValueChange={(value) => setFormData({ ...formData, truckAccess: value })}
          className="flex flex-wrap gap-4"
        >
          {truckAccessOptions.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <RadioGroupItem value={option.value} id={`truck-${option.value}`} />
              <Label htmlFor={`truck-${option.value}`} className="text-sm cursor-pointer">
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Contact Method */}
      <div className="bg-muted/50 p-5 rounded-lg border border-border">
        <h3 className="text-base font-semibold text-foreground mb-4">
          Preferred method we use to contact you
        </h3>
        <RadioGroup
          value={formData.contactMethod}
          onValueChange={(value) => setFormData({ ...formData, contactMethod: value })}
          className="flex gap-6"
        >
          {contactMethodOptions.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <RadioGroupItem value={option.value} id={`contact-${option.value}`} />
              <Label htmlFor={`contact-${option.value}`} className="text-sm cursor-pointer">
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Additional Message
        </label>
        <Textarea
          name="message"
          placeholder="Tell us about your project, preferred size, colors, etc."
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="bg-background"
        />
      </div>

      {/* Consent */}
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

      <Button variant="hero" size="xl" type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit Request'}
        <Send className="w-4 h-4" />
      </Button>
    </form>
  );
};

export default ContactForm;
