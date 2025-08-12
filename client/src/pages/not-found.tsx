import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import SEOHead from "@/components/layout/seo-head";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <SEOHead 
        title="Page Not Found"
        description="Sorry, the page you are looking for could not be found. Return to Yorke Structures Limited homepage."
        keywords="404, page not found, yorke structures"
        type="website"
      />
      
      <Card className="w-full max-w-lg mx-4 shadow-lg">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="flex justify-center mb-6">
            <AlertCircle className="h-16 w-16 text-orange-500" />
          </div>
          
          <h1 className="text-3xl font-bold text-slate-800 mb-4">404 - Page Not Found</h1>
          
          <p className="text-slate-600 mb-8 leading-relaxed">
            Sorry, the page you are looking for could not be found. It may have been moved, 
            deleted, or you may have entered an incorrect URL.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <button className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
                <Home className="w-4 h-4" />
                Return Home
              </button>
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 bg-transparent border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>
          
          <div className="mt-8 text-sm text-slate-500">
            If you believe this is an error, please contact us at{" "}
            <a href="mailto:info@yorkestructuresltd.com" className="text-orange-600 hover:underline">
              info@yorkestructuresltd.com
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
