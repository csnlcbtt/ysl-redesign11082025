import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, Settings, HardHat, Shield } from "lucide-react";

export default function Products() {
  const products = [
    {
      id: "purlins",
      title: "Purlins",
      description: "Cold rolled hot dipped galvanized purlins for securing roofing systems",
      details: "Using cold rolled hot dipped Galvanized material, YSL produces both 7 and 8 inch purlins which are used to securing roofing sheets to the top of buildings or on the girth to enable us to 'clad' building.",
      specifications: [
        "7 inch purlins",
        "8 inch purlins", 
        "Cold rolled hot dipped galvanized",
        "Used for roofing sheet securing",
        "Building cladding applications"
      ],
      icon: <Settings className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: "roof-sheets", 
      title: "Roof Sheets",
      description: "Premium galvanized and aluminum roofing solutions for weather protection",
      details: "Both coloured or plain Galvanised sheeting is provided to ensure that the internal of your building is protected from the elements. Roofing sheets can be supplied in Gauges from as thin as 28 gauge to as thick as 20 gauge as per our Clients requirements. Also available are coloured Aluminium sheets which give a longer life span but requires a gentler handling in the installation process.",
      specifications: [
        "Gauge range: 28 to 20 gauge",
        "Galvanized steel options",
        "Colored aluminum sheets",
        "Plain galvanized finish",
        "Custom color options",
        "Extended lifespan aluminum"
      ],
      icon: <Shield className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: "metal-decking",
      title: "Metal Decking", 
      description: "Galvanized metal decking systems for multi-story concrete floor construction",
      details: "Used to enable casting of concrete floors easier in multi-storied building, the metal decking is made of cold rolled hot dipped Galvanized material and is available in 0.96mm thick material However, we have custom made some of slightly thicker material. The decking interlocks and covers a width of approximately 2 ft when installed. We puddle weld the decking to the steel frame and as requested by the client we have the capability to do stud welding where 'studs' welding on the decking pans as to give the floor added strength when the concrete is poured.",
      specifications: [
        "0.96mm standard thickness",
        "Custom thicker material available",
        "2 ft coverage width when installed",
        "Interlocking design",
        "Puddle welding capability",
        "Stud welding services"
      ],
      icon: <HardHat className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: "fasteners",
      title: "Fasteners",
      description: "High-grade A325 bolts, nuts, and washers for structural connections",
      details: "Standard fasteners used for pulling our buildings together are the A325 bolts with nuts and washers. These range in diameter from ½\" to 1 3/8\" and lengths up to 4\" have been used. If after the bolts have been tensioned it is necessary to take them down, they are not reused.",
      specifications: [
        "A325 grade bolts",
        "Diameter range: ½\" to 1 3/8\"",
        "Lengths up to 4\"",
        "Complete with nuts and washers",
        "Single-use after tensioning",
        "High tensile strength"
      ],
      icon: <Wrench className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Products</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Premium steel products manufactured to the highest standards for the Caribbean construction industry
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                      <div className="text-orange-600">
                        {product.icon}
                      </div>
                      {product.title}
                    </CardTitle>
                  </div>
                  <p className="text-slate-600 text-lg">{product.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-700 leading-relaxed">{product.details}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Specifications:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {product.specifications.map((spec, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-600 rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-slate-600">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Quality Assurance
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            All our products are manufactured using the latest technology and highest quality standards,
            backed by our ISO 9002 certification and 50+ years of industry experience.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">ISO 9002</div>
              <div className="text-slate-300">Certified Quality</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-slate-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-slate-300">Quality Tested</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-orange-50 to-orange-100 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Need Custom Products?
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Our experienced team can manufacture custom steel products to meet your specific project requirements.
                Contact us today to discuss your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
                >
                  Get Quote
                </a>
                <a
                  href="/products-services/services"
                  className="inline-block bg-transparent border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
                >
                  View Services
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
