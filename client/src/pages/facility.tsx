import { Card, CardContent } from "@/components/ui/card";
import facilityPhoto from "@assets/New Assets/facilty.jpg";
import qualityPhoto from "@assets/New Assets/quality.jpg";
import bsiLogo from "@assets/bsi_1753191896958.png";

export default function Facility() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={facilityPhoto}
            alt="Yorke Structures Facility"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-900/40"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Our Facility
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              Modern fabricating plant in Arima, Trinidad, delivering quality steel structures across the Caribbean
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Facility Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-slate-800 mb-6">
                    The Facility
                  </h2>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                      Yorke Structures Limited operates a modern fabricating plant in Arima, Trinidad, 
                      situated on approximately <strong>5.26 hectares (13 acres)</strong> of land. The entire 
                      facility occupies well near <strong>30,000m²</strong> with the main fabrication workshop 
                      of just over <strong>15,000m²</strong>.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      The capacity of the works is approximately <strong>5,000 tonnes per annum</strong> and 
                      at any given time, raw materials in excess of <strong>2,000 tonnes</strong> are carried 
                      in stock, to remain flexible to customer requirements and offer quicker delivery times 
                      than other companies.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Key Statistics */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-0 shadow-lg bg-blue-50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">5.26</div>
                    <div className="text-sm text-slate-600 uppercase tracking-wide">Hectares of Land</div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg bg-green-50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">5,000</div>
                    <div className="text-sm text-slate-600 uppercase tracking-wide">Tonnes Per Annum</div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg bg-purple-50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">2,000+</div>
                    <div className="text-sm text-slate-600 uppercase tracking-wide">Tonnes in Stock</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quality System */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <img
                      src={bsiLogo}
                      alt="BSI ISO Certification"
                      className="h-16 w-auto mr-4"
                    />
                    <div>
                      <h2 className="text-3xl font-bold text-slate-800">Quality System</h2>
                      <p className="text-slate-600">ISO 9002 Certified</p>
                    </div>
                  </div>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                      In <strong>March 1998</strong>, Yorke Structures Limited achieved 
                      <strong> ISO 9002 certification</strong> from the British Standards Institute and 
                      in so doing became the <strong>first steel fabrication company in the Caribbean</strong> to 
                      achieve ISO accreditation.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <img
                    src={qualityPhoto}
                    alt="Quality Control"
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Reputation</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Yorke Structures Limited has acquired a deserved reputation within the 
                    regional construction industry and further afield for delivering quality work. 
                    A reputation for quality derived from the personal philosophy of the company's 
                    founder, <strong>Robert T. Yorke</strong>, to always strive to meet the needs of 
                    others with honesty, reliability, dependability and hard work.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Work with the Caribbean's Leading Steel Fabricator?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your steel fabrication requirements and experience 
            our commitment to quality and reliability.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
