import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Computer, Factory, Building2, Settings, Users, CheckCircle } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "drafting-detailing",
      title: "Drafting & Detailing Management Services",
      description: "Comprehensive computerized engineering design and drafting capabilities",
      details: "The company operates fully computerised integrated engineering design and drafting departments together with other ancillary support services. All computers at Yorke Structures are networked and the company has a web site on the Internet and operates e-mail facilities. The drawing office boasts eight networked computer workstations running StruCAD 3D modeling and AutoCAD software. 3D structures are modeled and all connections applied and detailed using StruCAD software. The software has the capability to perform dimensional and other clash checks and automatically generates error-free detailed shop drawings. Each workstation is linked to enable the sharing of standard details and other project information and all are connected to central plotter and back up facilities. The company's bid and tender development, engineering design and project management capabilities have all been streamlined Using proprietary software solutions",
      capabilities: [
        "8 networked computer workstations",
        "StruCAD 3D modeling software",
        "AutoCAD design capabilities",
        "Dimensional and clash checking",
        "Error-free shop drawings",
        "Central plotting facilities",
        "Bid and tender development",
        "Project management solutions"
      ],
      icon: <Computer className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: "fabrication",
      title: "Fabrication",
      description: "State-of-the-art steel fabrication with modern equipment and skilled workforce",
      details: "The main workshop is equipped with nine overhead cranes, each with a five ton capacity. Mobile cranes are also available where required to handle very large structural components. The company operates three large saw benches. All plating, drilling and assembly work is carried out by skilled fitters and inspected in accordance with the requirements of the company Quality System. All welding is carried out by qualified welders, who are regularly tested and certified in specific welding skills in accordance with recognised international standards. Welding is usually carried out using automatic MIG welding machines although other welding methods can be readily accommodated. Non-destructive testing of welds, when required, is arranged through an external testing agency. The company operates two inclined 8-wheel BCP Wheelabrator machines which are capable of blasting steelwork to near white (SSPC SP10) in a single pass. All blast profiles from a commercial blast to a near white steel condition can be achieved. In addition a manual blasting shop is available to blast larger structural components. The company operates both an automatic painting machine and a large ventilated paint shop and can apply all specified paint systems. Ambient conditions are measured and recorded to ensure manufacturer's instructions are complied with and clients' expectations are met.",
      capabilities: [
        "9 overhead cranes (5-ton capacity each)",
        "Mobile cranes for large components",
        "3 large saw benches",
        "Qualified certified welders",
        "Automatic MIG welding machines",
        "Non-destructive weld testing",
        "BCP Wheelabrator blast machines",
        "Near white steel blasting (SSPC SP10)",
        "Automatic painting systems",
        "Ventilated paint shop facilities"
      ],
      icon: <Factory className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: "erection",
      title: "Erection",
      description: "Complete steel structure installation with owned equipment and trained personnel",
      details: "The company owns its own cranes, transport, man lifts and other equipment required to install structural steelwork on site. We have extensive experience of erecting steel structures in the energy, commercial and municipal sectors both in Trinidad and the wider Caribbean. The company employs its own riggers, erectors, safety officers, quality technician and trade assistants who are all trained to carry out their activities efficiently. We take the safety and welfare of our personnel seriously and have experience of operating under full OSHA requirements.",
      capabilities: [
        "Company-owned cranes and equipment",
        "Transport and man lifts",
        "Caribbean-wide experience",
        "Energy sector expertise",
        "Commercial and municipal projects",
        "Trained riggers and erectors",
        "Dedicated safety officers",
        "Quality technicians",
        "OSHA compliance experience",
        "Full safety protocols"
      ],
      icon: <Building2 className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Comprehensive steel fabrication services from design to installation, 
            backed by 50+ years of expertise in the Caribbean construction industry
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-16">
          {services.map((service, index) => (
            <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <Card className="border-0 shadow-lg overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Card>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-orange-100 rounded-lg text-orange-600">
                        {service.icon}
                      </div>
                      <CardTitle className="text-3xl font-bold text-slate-800">{service.title}</CardTitle>
                    </div>
                    <p className="text-xl text-slate-600">{service.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="prose prose-slate max-w-none">
                      <p className="text-slate-700 leading-relaxed">{service.details}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                        <Settings className="w-5 h-5 text-orange-600" />
                        Key Capabilities:
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {service.capabilities.map((capability, capIndex) => (
                          <div key={capIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-600">{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Excellence */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Service Excellence</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our integrated approach ensures seamless project delivery from initial design through final installation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="p-4 bg-orange-600 rounded-lg inline-block mb-4">
                <Computer className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Design</h3>
              <p className="text-slate-300">Advanced 3D modeling and CAD design capabilities</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-orange-600 rounded-lg inline-block mb-4">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Fabrication</h3>
              <p className="text-slate-300">State-of-the-art manufacturing with quality control</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-orange-600 rounded-lg inline-block mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Installation</h3>
              <p className="text-slate-300">Professional erection with safety compliance</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-orange-600 rounded-lg inline-block mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Support</h3>
              <p className="text-slate-300">Ongoing project management and technical support</p>
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
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                From initial design concepts to final installation, our comprehensive services 
                ensure your steel structure project is completed to the highest standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
                >
                  Contact Us
                </a>
                <a
                  href="/products-services/products"
                  className="inline-block bg-transparent border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
                >
                  View Products
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
