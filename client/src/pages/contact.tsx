import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Printer, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/forms/contact-form";
import { COMPANY_INFO } from "@/lib/constants";

export default function Contact() {
  return (
    <div className="max-w-site mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold yorke-gray mb-4">Contact Us</h1>
        <p className="text-xl yorke-gray max-w-3xl mx-auto">
          Get in touch with the Caribbean's premier structural engineering and steel fabrication company
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Contact Information */}
        <div className="space-y-6">
          <Card className="border-yorke-border">
            <CardHeader className="yorke-dark text-white">
              <CardTitle className="text-xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 yorke-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold yorke-gray">Phone</h4>
                  <p className="yorke-gray">{COMPANY_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 yorke-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold yorke-gray">Email</h4>
                  <a 
                    href={`mailto:${COMPANY_INFO.email}`} 
                    className="yorke-orange hover:underline"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Printer className="w-5 h-5 yorke-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold yorke-gray">Printer</h4>
                  <p className="yorke-gray">{COMPANY_INFO.fax}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 yorke-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold yorke-gray">Address</h4>
                  <p className="yorke-gray">
                    Trinidad and Tobago<br />
                    Caribbean
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 yorke-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold yorke-gray">Business Hours</h4>
                  <p className="yorke-gray">
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday: 8:00 AM - 12:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map Placeholder */}
          <Card className="border-yorke-border">
            <CardHeader className="yorke-dark text-white">
              <CardTitle className="text-xl">Location</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center yorke-gray">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-lg font-semibold">Interactive Map</p>
                  <p className="text-sm">Located in Trinidad and Tobago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div>
          <Card className="border-yorke-border">
            <CardHeader className="yorke-dark text-white">
              <CardTitle className="text-xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="yorke-gray mb-6">
                Have a question about our products or services? Need a quote for your project? 
                We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <ContactForm />
            </CardContent>
          </Card>

          {/* Additional Info */}
          <Card className="border-yorke-border mt-6">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold yorke-orange mb-3">Why Choose Yorke Structures?</h3>
              <ul className="space-y-2 text-sm yorke-gray">
                <li>✓ 40+ years of industry experience</li>
                <li>✓ BSI certified quality management</li>
                <li>✓ Largest steel fabricating facility in the Caribbean</li>
                <li>✓ Comprehensive project management</li>
                <li>✓ Expert structural engineering team</li>
                <li>✓ Commitment to safety and environmental responsibility</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Emergency Contact */}
      <Card className="border-yorke-border mt-8 yorke-beige">
        <CardContent className="p-6 text-center">
          <h3 className="text-lg font-bold yorke-gray mb-2">Emergency Services</h3>
          <p className="yorke-gray mb-4">
            For urgent structural engineering consultations or emergency repairs, 
            please contact us immediately at:
          </p>
          <div className="text-xl font-bold yorke-orange">
            {COMPANY_INFO.phone}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
