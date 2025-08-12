import { COMPANY_INFO } from "@/lib/constants";
import bsiLogo from "@assets/bsi_1753191896958.png";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="yorke-dark text-white py-8 mt-16">
      <div className="max-w-site mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-4 yorke-orange">Contact Information</h4>
            <div className="space-y-2 text-sm">
              <div>
                <strong>Address:</strong><br />
                {COMPANY_INFO.address.line1}<br />
                {COMPANY_INFO.address.line2}<br />
                {COMPANY_INFO.address.city} {COMPANY_INFO.address.postalCode}
              </div>
              <div><strong>Email:</strong> {COMPANY_INFO.email}</div>
              <div><strong>Phone:</strong> {COMPANY_INFO.phone}</div>
              <div><strong>Fax:</strong> {COMPANY_INFO.fax}</div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 yorke-orange">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-[hsl(25,95%,39%)] transition-colors">About Us</Link></li>
              <li><Link href="/products-services" className="hover:text-[hsl(25,95%,39%)] transition-colors">Products & Services</Link></li>
              <li><Link href="/projects" className="hover:text-[hsl(25,95%,39%)] transition-colors">Projects</Link></li>
              <li><Link href="/about/quality" className="hover:text-[hsl(25,95%,39%)] transition-colors">Quality Management</Link></li>
              <li><Link href="/contact" className="hover:text-[hsl(25,95%,39%)] transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 yorke-orange">{COMPANY_INFO.name}</h4>
            <p className="text-sm leading-relaxed">
              {COMPANY_INFO.description}. Established {COMPANY_INFO.established}.
            </p>
            <div className="mt-4">
              <span className="inline-block">
                <img 
                  src={bsiLogo} 
                  alt="BSI Certification" 
                  className="h-8" 
                />
              </span>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-600 mt-8 pt-4 text-center text-xs">
          <p>Copyright © {currentYear} {COMPANY_INFO.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
