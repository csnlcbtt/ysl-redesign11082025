import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import Slideshow from "@/components/ui/slideshow";
import Sidebar from "@/components/ui/sidebar";
import { COMPANY_INFO } from "@/lib/constants";
import managementPhoto from "@assets/management_1753192297350.jpg";
import facilityPhoto from "@assets/facilty_1753192297349.jpg";
import robertPhoto from "@assets/robert_1753191896954.jpg";

export default function Home() {
  const { data: news, isLoading: newsLoading } = useQuery({
    queryKey: ['/api/news']
  });

  return (
    <div>
      {/* Hero Slideshow */}
      <Slideshow />

      {/* Main Content Container */}
      <div className="max-w-site mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content */}
          <main className="lg:w-2/3">
            <div className="bg-white border border-yorke-border rounded-lg p-6">
              
              {/* Welcome Section */}
              <section className="welcome mb-8">
                <h2 className="text-3xl font-bold yorke-gray mb-4">Welcome</h2>
                <div className="yorke-beige border border-yorke-border rounded p-4 mb-4">
                  <p className="text-lg leading-relaxed">
                    Welcome to the {COMPANY_INFO.name} Website. {COMPANY_INFO.name} is the {COMPANY_INFO.description}! We have 40+ years in the construction of projects.
                  </p>
                  <Link href="/about" className="inline-block mt-2 yorke-orange hover:underline font-semibold">
                    Read more.
                  </Link>
                </div>
              </section>

              {/* Company Overview Section */}
              <section className="company-overview mb-8">
                <h2 className="text-2xl font-bold text-[hsl(25,95%,39%)] mb-4 uppercase">
                  Brief introduction and overview of YSL
                </h2>
                
                <div className="yorke-beige border border-yorke-border rounded p-4 mb-6">
                  <p className="yorke-gray leading-relaxed mb-4">
                    We are a privately held company established in 1972 providing a comprehensive structural engineering service, specialising in the fabrication, supply and erection of steel structures and other structural components. As the market leader in the Caribbean Yorke Structures Limited operates the largest steel fabricating facility in the region.
                  </p>
                  <Link href="/about" className="yorke-orange hover:underline font-semibold">
                    Read More
                  </Link>
                </div>
              </section>

              {/* Dr. Robert T. Yorke Section */}
              <section className="robert-yorke mb-8">
                <h2 className="text-2xl font-bold text-[hsl(25,95%,39%)] mb-4 uppercase">
                  Dr. Robert T. Yorke
                </h2>
                
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-1">
                    <img 
                      src={robertPhoto} 
                      alt="Dr. Robert T. Yorke" 
                      className="rounded-lg shadow-lg w-full"
                    />
                  </div>
                  <div className="md:col-span-3">
                    <div className="yorke-beige border border-yorke-border rounded p-4">
                      <p className="yorke-gray leading-relaxed mb-4">
                        After 39 hard working years to keep his business, Yorke Structures Ltd thriving, Robert T. Yorke retired on January 1, 2011, though he knows it will be difficult to stay away. On the 31st August 2011 Dr. Robert T. Yorke was awarded the Chaconia Medal Gold for his long and meritorious service to Trinidad and Tobago in sphere of business.
                      </p>
                      <Link href="/about" className="yorke-orange hover:underline font-semibold">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* Featured Sections */}
              <section className="featured-sections">
                <div className="grid md:grid-cols-3 gap-6">
                  
                  {/* Management */}
                  <Card className="text-center border-yorke-border">
                    <CardContent className="p-4">
                      <img 
                        src={managementPhoto} 
                        alt="Management Team" 
                        className="rounded-lg shadow-lg w-full h-auto mb-3"
                      />
                      <h3 className="text-lg font-bold yorke-gray mb-2">
                        <Link 
                          href="/about/management" 
                          className="hover:text-[hsl(25,95%,39%)] transition-colors"
                        >
                          Management
                        </Link>
                      </h3>
                    </CardContent>
                  </Card>
                  
                  {/* Facility */}
                  <Card className="text-center border-yorke-border">
                    <CardContent className="p-4">
                      <img 
                        src={facilityPhoto} 
                        alt="Steel Fabrication Facility" 
                        className="rounded-lg shadow-lg w-full h-auto mb-3"
                      />
                      <h3 className="text-lg font-bold yorke-gray mb-2">
                        <Link 
                          href="/about/facility" 
                          className="hover:text-[hsl(25,95%,39%)] transition-colors"
                        >
                          Facility
                        </Link>
                      </h3>
                    </CardContent>
                  </Card>
                  
                  {/* Projects */}
                  <Card className="text-center border-yorke-border">
                    <CardContent className="p-4">
                      <img 
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=180" 
                        alt="Construction Projects" 
                        className="rounded-lg shadow-lg w-full h-auto mb-3"
                      />
                      <h3 className="text-lg font-bold yorke-gray mb-2">
                        <Link 
                          href="/projects" 
                          className="hover:text-[hsl(25,95%,39%)] transition-colors"
                        >
                          Projects
                        </Link>
                      </h3>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </div>
          </main>
          
          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
