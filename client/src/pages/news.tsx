import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Users, Building2, CheckCircle } from "lucide-react";
import skinnerParkImage from "@assets/New Assets/Skinner-Park.jpg";

export default function News() {
  const facilityFeatures = [
    "A covered pavilion consisting of 3000 seats and two uncovered pavilions of 1500 seats each",
    "A football pitch size 90mx50m",
    "A cycling track for training of young cyclist size 333m",
    "Home and Away Lockers",
    "Dining Areas",
    "Washrooms",
    "Officials Lockers and Washrooms",
    "General public male and female washrooms",
    "Storage",
    "Concession stands",
    "Elevators",
    "Car park area",
    "Gym",
    "Club room",
    "Meeting rooms",
    "8 corporate boxes",
    "VIP/Mayor's box",
    "Playing field",
    "LED Mass Lighting",
    "Score Board",
    "Security booths",
    "Garbage rooms",
    "Pump rooms"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={skinnerParkImage}
            alt="Skinner Park Redevelopment Project"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/50"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl text-white">
            <Badge className="mb-4 bg-green-600 hover:bg-green-700">
              <CheckCircle className="w-4 h-4 mr-2" />
              Project Completed
            </Badge>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              The Re-Development of Skinner Park Sporting Facility
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed mb-8">
              A landmark project transforming Southern Trinidad's premier sporting and cultural hub
            </p>
            <div className="flex flex-wrap gap-4 text-slate-200">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Todd Street, San Fernando</span>
              </div>
              <div className="flex items-center">
                <CalendarDays className="w-5 h-5 mr-2" />
                <span>Completed February 2023</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>6,000 Seat Capacity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Project Overview */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-slate-800">Project Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="prose prose-slate max-w-none">
                    <p className="text-lg text-slate-600 leading-relaxed">
                      Skinner Park has been the hub for sporting and cultural activities in Southern Trinidad 
                      for decades. In fact, history states that the parcel of land was given to the people 
                      of San Fernando by the Usine St. Madeline Sugar Factory to be used as a recreational ground.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      UDeCOTT has been mandated to redevelop Skinner Park. This Re-Development was executed 
                      in two (2) Phases, with <strong>Phase 1 completed in February 2023</strong>, which entailed 
                      the Demolition, Design and Construction of stands with 6000 capacity seating and the 
                      refurbishment of the field and cycling track.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      At the peak of construction, the project generated direct employment on a daily basis 
                      of over <strong>100 persons</strong> with local labour from the community of approximately 
                      <strong>50% minimum</strong>.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Facility Features */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-slate-800">Facility Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {facilityFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Project Details Sidebar */}
            <div className="space-y-6">
              {/* Project Status */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Badge className="mb-4 bg-green-600 hover:bg-green-700 text-lg px-4 py-2">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      DELIVERED!
                    </Badge>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Project Status</h3>
                    <p className="text-slate-600">Signed, Sealed, DELIVERED!</p>
                  </div>
                </CardContent>
              </Card>

              {/* Project Information */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-800">Project Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <MapPin className="w-5 h-5 text-slate-500 mr-2" />
                      <span className="font-semibold text-slate-700">Address</span>
                    </div>
                    <p className="text-slate-600 ml-7">Skinner Park, Todd Street, San Fernando</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <Building2 className="w-5 h-5 text-slate-500 mr-2" />
                      <span className="font-semibold text-slate-700">Client</span>
                    </div>
                    <p className="text-slate-600 ml-7">Ministry of Sport and Youth Affairs</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <Users className="w-5 h-5 text-slate-500 mr-2" />
                      <span className="font-semibold text-slate-700">Project Partners</span>
                    </div>
                    <p className="text-slate-600 ml-7">UDeCOTT</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <CalendarDays className="w-5 h-5 text-slate-500 mr-2" />
                      <span className="font-semibold text-slate-700">Completion</span>
                    </div>
                    <p className="text-slate-600 ml-7">February 2023</p>
                  </div>
                </CardContent>
              </Card>

              {/* Key Statistics */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-800">Key Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">6,000</div>
                    <div className="text-sm text-slate-600 uppercase tracking-wide">Seat Capacity</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">100+</div>
                    <div className="text-sm text-slate-600 uppercase tracking-wide">Daily Employment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">50%</div>
                    <div className="text-sm text-slate-600 uppercase tracking-wide">Local Labour</div>
                  </div>
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
            Bringing Communities Together Through Quality Construction
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            The Skinner Park redevelopment showcases our commitment to creating world-class sporting 
            facilities that serve communities for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/projects"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              View More Projects
            </a>
            <a
              href="/contact"
              className="inline-block bg-transparent border border-white text-white hover:bg-white hover:text-slate-800 font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
