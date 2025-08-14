import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { COMPANY_INFO } from "@/lib/constants";
import bsiLogo from "@assets/bsi_1753191896958.png";
import facilityPhoto from "@assets/facilty_1753192297349.jpg";
import robertPhoto from "@assets/robert_1753191896954.jpg";
import companyPhoto from "@assets/b2_1754924928463.jpg";

export default function About() {
  return (
    <div className="max-w-site mx-auto px-4 py-8">
      <div className="space-y-8">
        
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold yorke-gray mb-4">About Yorke Structures Limited</h1>
          <p className="text-xl yorke-gray max-w-3xl mx-auto">
            {COMPANY_INFO.description} since {COMPANY_INFO.established}
          </p>
        </div>

        {/* Company Profile */}
        <Card className="border-yorke-border">
          <CardHeader className="yorke-dark text-white">
            <CardTitle className="text-xl">Company Profile</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Company Image */}
              <div className="md:col-span-1">
                <img 
                  src={companyPhoto} 
                  alt="Yorke Structures Management Team" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              
              {/* Company Content */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 yorke-orange">Our History</h3>
                  <p className="yorke-gray leading-relaxed mb-4">
                    Yorke Structures Limited was established on July 31, 1972 by Dr. Robert T. Yorke and commenced business with 10 employees. Today the company employs over 250 people and operates the largest steel fabrication facility in the Caribbean, situated in Arima, Trinidad.
                  </p>
                  <p className="yorke-gray leading-relaxed mb-4">
                    After over five decades of operations, the company continues to provide a comprehensive structural engineering service specialising in the design, fabrication, supply and erection of steel structures and other structural components.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 yorke-orange">Our Excellence</h3>
                  <p className="yorke-gray leading-relaxed mb-4">
                    Contracts are regularly executed in the petro-chemical, energy, marine, industrial, commercial and municipal sectors of the construction industry with products and services being exported throughout the Caribbean. Yorke Structures Limited is a pioneer in the Caribbean in its chosen field.
                  </p>
                  <p className="yorke-gray leading-relaxed mb-4">
                    Yorke Structures Limited has acquired a deserved reputation within the regional construction industry and further afield for delivering quality work. A reputation for quality derived from the personal philosophy of the company's founder, Dr. Robert T. Yorke, to always strive to meet the needs of others with honesty, reliability, dependability and hard work.
                  </p>
                  <p className="yorke-gray leading-relaxed">
                    With five decades of service behind us Yorke Structures Limited continues to regularly execute contracts in the petro-chemical, energy, industrial, commercial and municipal sectors of the construction industry with products and services being exported throughout the Caribbean.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Personnel */}
        <Card className="border-yorke-border">
          <CardHeader className="yorke-dark text-white">
            <CardTitle className="text-xl">Key Personnel</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Founder Photo */}
              <div className="text-center">
                <img 
                  src={robertPhoto} 
                  alt="Dr. Robert T. Yorke" 
                  className="rounded-lg shadow-lg mx-auto mb-4 w-48 h-48 object-cover"
                />
                <h3 className="text-lg font-bold yorke-gray mb-2">Dr. Robert T. Yorke</h3>
                <p className="text-sm yorke-gray mb-3">Founder & Chairman Emeritus</p>
                <p className="text-sm yorke-gray leading-relaxed">
                  After 39 hard working years, Dr. Robert T. Yorke retired on January 1, 2011. On August 31, 2011, Dr. Robert T. Yorke was awarded the Chaconia Medal Gold for his long and meritorious service to Trinidad and Tobago in the sphere of business.
                </p>
                <Link 
                  href="/about/robert-yorke" 
                  className="inline-block mt-3 yorke-orange hover:underline font-semibold"
                >
                  Learn More
                </Link>
              </div>
              
              {/* Board of Directors */}
              <div>
                <h4 className="font-semibold yorke-orange mb-4 text-lg">Board of Directors</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold yorke-gray">Dr. Robert T. Yorke</h5>
                    <p className="text-sm yorke-gray">Founder & Chairman Emeritus</p>
                  </div>
                  <div>
                    <h5 className="font-semibold yorke-gray">Jacqueline Yorke Westcott</h5>
                    <p className="text-sm yorke-gray">Executive Chairman, <span className="yorke-orange">SHRM-SCP</span></p>
                  </div>
                  <div>
                    <h5 className="font-semibold yorke-gray">Simon H. Westcott</h5>
                    <p className="text-sm yorke-gray">Managing Director, Chartered Engineer</p>
                  </div>
                </div>
              </div>
              
              {/* Management */}
              <div>
                <h4 className="font-semibold yorke-orange mb-4 text-lg">Management Team</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold yorke-gray">Jacqueline Yorke Westcott</h5>
                    <p className="text-sm yorke-gray">Executive Chairman</p>
                  </div>
                  <div>
                    <h5 className="font-semibold yorke-gray">Simon H. Westcott</h5>
                    <p className="text-sm yorke-gray">Managing Director</p>
                  </div>
                  <div>
                    <h5 className="font-semibold yorke-gray">Kenneth Prince</h5>
                    <p className="text-sm yorke-gray">Contracts Administrator</p>
                  </div>
                  <div>
                    <h5 className="font-semibold yorke-gray">Khadija Bourne Murray</h5>
                    <p className="text-sm yorke-gray">QHSE Manager</p>
                  </div>
                </div>
                <div className="mt-4">
                  <Link 
                    href="/about/management" 
                    className="yorke-orange hover:underline font-semibold text-sm"
                  >
                    Meet Our Leadership Team
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quality Management */}
        <Card className="border-yorke-border">
          <CardHeader className="yorke-dark text-white">
            <CardTitle className="text-xl">Quality Management</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <img 
                  src={bsiLogo} 
                  alt="BSI Certification" 
                  className="mx-auto mb-3 h-16"
                />
                <h4 className="font-semibold yorke-orange mb-2">BSI Certification</h4>
                <p className="text-sm yorke-gray">
                  Certified by the British Standards Institution for our commitment to quality excellence.
                </p>
                <Link 
                  href="/about/quality/bsi"
                  className="inline-block mt-2 yorke-orange hover:underline text-sm"
                >
                  Learn More
                </Link>
              </div>
              <div className="text-center">
                <h4 className="font-semibold yorke-orange mb-2">Quality Policy</h4>
                <p className="text-sm yorke-gray mb-3">
                  Our comprehensive quality management system ensures consistent excellence in all our projects.
                </p>
                <Link 
                  href="/about/quality/policy"
                  className="inline-block yorke-orange hover:underline text-sm"
                >
                  View Policy
                </Link>
              </div>
              <div className="text-center">
                <h4 className="font-semibold yorke-orange mb-2">HSE Policy</h4>
                <p className="text-sm yorke-gray mb-3">
                  Health, Safety and Environment policies that prioritize worker safety and environmental responsibility.
                </p>
                <Link 
                  href="/about/quality/hse"
                  className="inline-block yorke-orange hover:underline text-sm"
                >
                  View Policy
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
