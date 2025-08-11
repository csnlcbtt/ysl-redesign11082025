import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Wrench, 
  Settings, 
  Truck, 
  HardHat, 
  Shield,
  Factory,
  Cog
} from "lucide-react";
import facilityPhoto from "@assets/facilty_1753192297349.jpg";

export default function ProductsServices() {
  const products = [
    {
      title: "Steel Structures",
      description: "Custom-designed steel frameworks for industrial, commercial, and residential applications",
      features: ["Industrial Buildings", "Warehouses", "Commercial Complexes", "Residential Frameworks"],
      icon: <Building2 className="w-8 h-8" />
    },
    {
      title: "Structural Components",
      description: "High-quality steel components manufactured to precise specifications",
      features: ["Beams & Columns", "Trusses", "Connections", "Custom Fabrications"],
      icon: <Cog className="w-8 h-8" />
    },
    {
      title: "Prefabricated Systems",
      description: "Efficient prefabricated steel systems for rapid construction deployment",
      features: ["Modular Buildings", "Bridge Components", "Tower Structures", "Equipment Platforms"],
      icon: <Factory className="w-8 h-8" />
    }
  ];

  const services = [
    {
      title: "Structural Engineering",
      description: "Comprehensive engineering design and analysis services",
      features: ["Structural Design", "Load Analysis", "CAD Drafting", "3D Modeling"],
      icon: <Settings className="w-8 h-8" />
    },
    {
      title: "Steel Fabrication",
      description: "State-of-the-art fabrication using modern equipment and techniques",
      features: ["Cutting & Welding", "Assembly", "Quality Control", "Finishing"],
      icon: <Wrench className="w-8 h-8" />
    },
    {
      title: "Supply & Erection",
      description: "Complete supply chain and installation services",
      features: ["Material Supply", "Logistics", "Site Installation", "Project Management"],
      icon: <Truck className="w-8 h-8" />
    },
    {
      title: "Quality Assurance",
      description: "BSI-certified quality management throughout all processes",
      features: ["BSI Certification", "Quality Inspections", "Testing Services", "Documentation"],
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Health & Safety",
      description: "Comprehensive health, safety, and environmental management",
      features: ["HSE Compliance", "Safety Training", "Risk Assessment", "Environmental Protection"],
      icon: <HardHat className="w-8 h-8" />
    }
  ];

  return (
    <div className="max-w-site mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold yorke-gray mb-4">Products & Services</h1>
        <p className="text-xl yorke-gray max-w-3xl mx-auto">
          Comprehensive structural engineering and steel fabrication solutions for the Caribbean region
        </p>
      </div>

      {/* Products Section */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold yorke-orange mb-4">Our Products</h2>
          <p className="yorke-gray max-w-2xl mx-auto">
            High-quality steel products manufactured in our state-of-the-art facility, 
            the largest steel fabricating facility in the Caribbean.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {products.map((product, index) => (
            <Card key={index} className="border-yorke-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-[hsl(25,95%,39%)] text-white rounded-full w-fit">
                  {product.icon}
                </div>
                <CardTitle className="text-lg yorke-gray">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="yorke-gray text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="mr-2 mb-2 text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Product Showcase */}
        <Card className="border-yorke-border">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-xl font-bold yorke-orange mb-4">Steel Fabrication Excellence</h3>
                <p className="yorke-gray leading-relaxed mb-4">
                  Our products are manufactured using the latest technology and highest quality standards. 
                  With over 50 years of experience, we deliver precision-engineered steel solutions that meet 
                  the demanding requirements of Caribbean construction projects.
                </p>
                <ul className="space-y-2 text-sm yorke-gray">
                  <li>✓ BSI-certified manufacturing processes</li>
                  <li>✓ Advanced CAD/CAM technology</li>
                  <li>✓ Rigorous quality control testing</li>
                  <li>✓ Custom fabrication capabilities</li>
                </ul>
              </div>
              <div>
                <img 
                  src={facilityPhoto} 
                  alt="Steel Fabrication Process" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Services Section */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold yorke-orange mb-4">Our Services</h2>
          <p className="yorke-gray max-w-2xl mx-auto">
            From initial design through final installation, we provide comprehensive services 
            to ensure your project's success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-yorke-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <div className="mr-3 p-2 bg-[hsl(25,95%,39%)] text-white rounded">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg yorke-gray">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="yorke-gray text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-1 text-xs yorke-gray">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="mt-16 text-center yorke-beige border border-yorke-border rounded-lg p-8">
        <h2 className="text-2xl font-bold yorke-gray mb-4">Need a Custom Solution?</h2>
        <p className="yorke-gray mb-6 max-w-2xl mx-auto">
          Every project is unique. Our experienced team can work with you to develop 
          custom products and services tailored to your specific requirements.
        </p>
        <div className="space-x-4">
          <a 
            href="/contact" 
            className="inline-block bg-[hsl(25,95%,39%)] text-white px-6 py-3 rounded hover:bg-opacity-90 transition-colors font-semibold"
          >
            Request Quote
          </a>
          <a 
            href="/about/facility" 
            className="inline-block border border-yorke-border px-6 py-3 rounded hover:yorke-beige transition-colors font-semibold yorke-gray"
          >
            Schedule Visit
          </a>
        </div>
      </div>
    </div>
  );
}
