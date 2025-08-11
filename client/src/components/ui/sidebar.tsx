import { useState } from "react";
import { Link } from "wouter";
import { Search, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import robertPhoto from "@assets/robert_1753191896954.jpg";


export default function Sidebar() {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: news } = useQuery({
    queryKey: ['/api/news']
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log("Search for:", searchQuery);
    }
  };

  return (
    <aside className="space-y-6">
      

      {/* Robert T. Yorke Module */}
      <Card className="border-yorke-border">
        <CardHeader className="yorke-dark text-white rounded-t-lg">
          <CardTitle className="text-sm uppercase tracking-wide">Dr. Robert T. Yorke</CardTitle>
        </CardHeader>
        <CardContent className="p-4 text-center">
          <img 
            src={robertPhoto} 
            alt="Dr. Robert T. Yorke" 
            className="rounded-lg shadow-lg mx-auto mb-3 w-32 h-40 object-cover"
          />
          <Link 
            href="/about/robert-yorke" 
            className="yorke-orange hover:underline font-semibold"
          >
            Learn about our founder
          </Link>
        </CardContent>
      </Card>
      
      {/* Steel Fabrication Video Module */}
      <Card className="border-yorke-border">
        <CardHeader className="yorke-dark text-white rounded-t-lg">
          <CardTitle className="text-sm uppercase tracking-wide">Steel Fabrication</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
            <div className="text-center yorke-gray">
              <Play className="w-12 h-12 mb-2 yorke-orange mx-auto" />
              <p className="text-sm font-semibold">Steel Fabrication Process</p>
              <p className="text-xs">Watch our fabrication showcase</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Search Module */}
      <Card className="border-yorke-border">
        <CardHeader className="yorke-dark text-white rounded-t-lg">
          <CardTitle className="text-sm uppercase tracking-wide">Search</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <form onSubmit={handleSearch}>
            <div className="flex">
              <Input
                type="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 border-yorke-border focus:border-[hsl(25,95%,39%)] rounded-r-none"
              />
              <Button 
                type="submit" 
                className="yorke-dark text-white rounded-l-none hover:bg-[hsl(25,95%,39%)] transition-colors"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      
      {/* Latest News Module */}
      <Card className="border-yorke-border">
        <CardHeader className="yorke-dark text-white rounded-t-lg">
          <CardTitle className="text-sm uppercase tracking-wide">Latest News</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <ul className="space-y-3 text-sm">
            {news?.slice(0, 3).map((article: any) => (
              <li key={article.id} className="border-b border-gray-200 pb-2 last:border-b-0">
                <Link 
                  href={`/news/${article.id}`}
                  className="yorke-orange hover:underline block"
                >
                  {article.title}
                </Link>
                <div className="text-xs text-gray-500 mt-1">
                  {new Date(article.publishDate).toLocaleDateString()}
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </aside>
  );
}
