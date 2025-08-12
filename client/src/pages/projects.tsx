import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/layout/seo-head";

export default function Projects() {
  const { data: projects, isLoading } = useQuery({
    queryKey: ['/api/projects']
  });

  const projectsArray = Array.isArray(projects) ? projects : [];

  if (isLoading) {
    return (
      <div className="max-w-site mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold yorke-gray mb-8 text-center">Featured Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-80 bg-gray-200 rounded-lg animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-site mx-auto px-4 py-8">
      <SEOHead 
        title="Featured Projects"
        description="Showcasing 50+ years of excellence in structural engineering and steel fabrication across the Caribbean. View our portfolio of major projects."
        keywords="steel fabrication projects, structural engineering projects, caribbean construction, trinidad steel projects"
        type="website"
      />
      
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold yorke-gray mb-4">Featured Projects</h1>
        <p className="text-xl yorke-gray max-w-3xl mx-auto">
          Showcasing 50+ years of excellence in structural engineering and steel fabrication across the Caribbean
        </p>
      </div>

      {projectsArray && projectsArray.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsArray.map((project: any) => (
            <Card key={project.id} className="border-yorke-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <h3 className="text-lg font-bold yorke-gray">{project.title}</h3>
                </div>
                
                {project.category && (
                  <Badge variant="outline" className="mb-3 text-xs border-yorke-border">
                    {project.category}
                  </Badge>
                )}
                
                <p className="yorke-gray text-sm leading-relaxed mb-3">
                  {project.description}
                </p>
                
                {project.client && (
                  <div className="text-xs yorke-gray">
                    <strong>Client:</strong> {project.client}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold yorke-gray mb-4">No Projects Available</h2>
          <p className="yorke-gray">Please check back later for updates on our latest projects.</p>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-12 text-center yorke-beige border border-yorke-border rounded-lg p-8">
        <h2 className="text-2xl font-bold yorke-gray mb-4">Ready to Start Your Project?</h2>
        <p className="yorke-gray mb-6 max-w-2xl mx-auto">
          With over 50 years of experience in structural engineering and steel fabrication, 
          we're ready to help bring your vision to life. Contact us today to discuss your project requirements.
        </p>
        <div className="space-x-4">
          <a 
            href="/contact" 
            className="inline-block bg-[hsl(25,95%,39%)] text-white px-6 py-3 rounded hover:bg-opacity-90 transition-colors font-semibold"
          >
            Get a Quote
          </a>
          <a 
            href="/about/facility" 
            className="inline-block border border-yorke-border px-6 py-3 rounded hover:yorke-beige transition-colors font-semibold yorke-gray"
          >
            Tour Our Facility
          </a>
        </div>
      </div>
    </div>
  );
}
