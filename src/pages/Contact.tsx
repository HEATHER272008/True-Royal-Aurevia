import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-5xl font-display font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Get in touch with us for any inquiries about our royal jewelry collection
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="gold-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      123 Royal Boulevard<br />
                      Jewelry District<br />
                      Manila, Philippines 1000
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gold-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-2">Phone</h3>
                    <p className="text-muted-foreground">
                      +63 (2) 1234-5678<br />
                      +63 917 123 4567
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gold-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      info@aurevia.com<br />
                      support@aurevia.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <Card className="gold-border overflow-hidden">
            <CardContent className="p-0 h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.4366647812577!2d121.03412931531273!3d14.562600689827916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c90264a0f537%3A0x2b2de4b5b7e21a02!2sManila%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1234567890123!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aurevia Location"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
