import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/forms/contact-form";
import { COMPANY_INFO } from "@/lib/constants";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    // Load Leaflet CSS
    const leafletCSS = document.createElement('link');
    leafletCSS.rel = 'stylesheet';
    leafletCSS.href = 'https://unpkg.com/leaflet/dist/leaflet.css';
    document.head.appendChild(leafletCSS);

    // Load Leaflet JS
    const leafletJS = document.createElement('script');
    leafletJS.src = 'https://unpkg.com/leaflet/dist/leaflet.js';
    leafletJS.onload = () => {
      // Initialize map after Leaflet loads
      setTimeout(() => {
        if ((window as any).L && document.getElementById('yorke-map')) {
          initializeMap();
        }
      }, 100);
    };
    document.head.appendChild(leafletJS);

    return () => {
      // Cleanup
      try {
        if (document.head.contains(leafletCSS)) {
          document.head.removeChild(leafletCSS);
        }
        if (document.head.contains(leafletJS)) {
          document.head.removeChild(leafletJS);
        }
      } catch (error) {
        console.warn('Error cleaning up map resources:', error);
      }
    };
  }, []);

  const initializeMap = () => {
    try {
      // Coordinates for O'Meara Industrial Estate, Arima, Trinidad
      const lat = 10.6394;
      const lng = -61.2794;

      const L = (window as any).L;
      const mapElement = document.getElementById('yorke-map');
      
      if (!mapElement || !L) return;

      const map = L.map('yorke-map', { scrollWheelZoom: false }).setView([lat, lng], 16);
      
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      
      const marker = L.marker([lat, lng]).addTo(map);
      marker.bindPopup(`
        <div style="text-align: center; font-family: Arial, sans-serif;">
          <strong>Yorke Structures Limited</strong><br/>
          Yorke Avenue<br/>
          O'Meara Industrial Estate<br/>
          Arima, Trinidad
        </div>
      `);
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };
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
                <MapPin className="w-5 h-5 yorke-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold yorke-gray">Address</h4>
                  <p className="yorke-gray">
                    Yorke Structures Limited<br />
                    Yorke Avenue<br />
                    O'Meara Industrial Estate<br />
                    Arima<br />
                    Trinidad
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 yorke-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold yorke-gray">Business Hours</h4>
                  <p className="yorke-gray">
                    Monday - Friday: 8:00 AM - 4:30 PM<br />
                    Saturday & Sunday: Closed
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Map */}
          <Card className="border-yorke-border">
            <CardHeader className="yorke-dark text-white">
              <CardTitle className="text-xl">Location</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div 
                id="yorke-map" 
                className="yorke-map leaflet-container"
              ></div>
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
                <li>✓ 50+ years of industry experience</li>
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
