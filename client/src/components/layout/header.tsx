import { COMPANY_INFO } from "@/lib/constants";
import { Link } from "wouter";
import yslLogo from "@assets/ysl-white-logo_1753190497572.jpg";
import bsiLogo from "@assets/bsi_1753191896958.png";

export default function Header() {
  return (
    <header className="bg-white border-b border-yorke-border sticky top-0 z-50">
      <div className="max-w-site mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Company Logo */}
          <div className="flex items-center">
            <Link href="/" className="site-logo" aria-label="Yorke Structures Limited Home">
              <img 
                src={yslLogo} 
                alt="YSL Logo" 
                className="h-12 w-auto mr-4 flex-shrink-0 transition-opacity duration-200 hover:opacity-80"
              />
            </Link>
            <h1 className="logo">
              <Link href="/" className="site-title block transition-opacity duration-200 hover:opacity-80">
                <span className="text-2xl font-bold yorke-orange uppercase tracking-wide">
                  {COMPANY_INFO.name}
                </span>
                <div className="text-sm yorke-gray mt-1">
                  {COMPANY_INFO.tagline}
                </div>
              </Link>
            </h1>
          </div>
          
          {/* BSI Certification */}
          <div className="bsi">
            <img 
              src={bsiLogo} 
              alt="BSI Certification" 
              className="h-12" 
            />
          </div>
        </div>
      </div>
    </header>
  );
}
