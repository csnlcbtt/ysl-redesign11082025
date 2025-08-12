import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/forms/contact-form";
import SEOHead from "@/components/layout/seo-head";
import { COMPANY_INFO } from "@/lib/constants";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    console.log('Contact component mounted, initializing map...');
    
    // Load Leaflet CSS
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'https://unpkg.com/leaflet/dist/leaflet.css';
    document.head.appendChild(css);

    // Load Leaflet JS
    const js = document.createElement('script');
    js.src = 'https://unpkg.com/leaflet/dist/leaflet.js';
    js.onload = () => {
      console.log('Leaflet loaded, checking for OLC...');
      console.log('Leaflet available:', !!(window as any).L);
      console.log('OLC available:', !!(window as any).OpenLocationCode);
      
      // Wait a bit more to ensure OLC is also loaded
      setTimeout(() => {
        if ((window as any).L && document.getElementById('yorke-map')) {
          console.log('Initializing map...');
          initializeMap();
        } else {
          console.error('Missing requirements for map initialization');
        }
      }, 100);
    };
    document.head.appendChild(js);

    return () => {
      // optional: remove nodes and destroy map if you keep a ref
    };
  }, []);

  const initializeMap = () => {
    try {
      const L = (window as any).L;
      const mapElement = document.getElementById('yorke-map');
      
      if (!mapElement) {
        console.error('Map element not found');
        return;
      }

      if (!L) {
        console.error('Leaflet not available');
        return;
      }

      console.log('Initializing basic map...');

      // Fallback coordinates (near the JP77+52J Plus Code area)
      const lat = 10.6370;
      const lng = -61.2825;

      // Create map
      const map = L.map("yorke-map", { 
        scrollWheelZoom: false,
        zoomControl: true 
      }).setView([lat, lng], 16);
      
      console.log('Map object created');

      // Add tiles
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      console.log('Tiles added');

      // Add marker
      const marker = L.marker([lat, lng], { riseOnHover: true }).addTo(map);
      marker.bindPopup(`
        <div style="text-align:center">
          <strong>Yorke Structures Ltd</strong><br/>
          Lot 38 O'Meara Industrial Estate<br/>
          Yorke Avenue<br/>
          Arima 301218
        </div>
      `);

      console.log('Marker added');

      // Ensure proper sizing
      setTimeout(() => {
        map.invalidateSize();
        console.log('Map size invalidated');
      }, 100);

      // Try Plus Code enhancement if OLC is available
      const OLC = (window as any).OpenLocationCode;
      if (OLC) {
        try {
          // Use the correct Plus Code: JP77+52J
          const fullCode = OLC.recoverNearest("JP77+52J", lat, lng);
          const bbox = OLC.decode(fullCode);
          const preciseLat = (bbox.latLo + bbox.latHi) / 2;
          const preciseLng = (bbox.lngLo + bbox.lngHi) / 2;
          
          console.log('Plus Code coordinates:', preciseLat, preciseLng);
          
          // Update marker position
          marker.setLatLng([preciseLat, preciseLng]);
          map.setView([preciseLat, preciseLng], 17);
          
          console.log('Updated to Plus Code location');
        } catch (olcError) {
          console.warn('Plus Code error:', olcError);
        }
      }

      console.log('Map initialized successfully');
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };
  return (
    <div className="max-w-site mx-auto px-4 py-8">
      <SEOHead 
        title="Contact Us"
        description={`Get in touch with the Caribbean's premier structural engineering and steel fabrication company. Located at ${COMPANY_INFO.address.line1}, ${COMPANY_INFO.address.line2}, ${COMPANY_INFO.address.city}. Phone: ${COMPANY_INFO.phone}`}
        keywords="contact yorke structures, steel fabrication trinidad, structural engineering contact, arima steel company"
        type="website"
      />
      
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
                    {COMPANY_INFO.address.line1}<br />
                    {COMPANY_INFO.address.line2}<br />
                    {COMPANY_INFO.address.city} {COMPANY_INFO.address.postalCode}
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
                className="yorke-map"
                style={{ 
                  height: '420px', 
                  width: '100%', 
                  backgroundColor: '#f0f0f0',
                  minHeight: '420px' 
                }}
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
