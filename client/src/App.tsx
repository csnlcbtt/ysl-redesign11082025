import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Layout components
import Header from "@/components/layout/header";
import Navigation from "@/components/layout/navigation";
import Breadcrumb from "@/components/layout/breadcrumb";
import Footer from "@/components/layout/footer";

// Pages
import Home from "@/pages/home";
import About from "@/pages/about";
import ProductsServices from "@/pages/products-services";
import Products from "@/pages/products";
import Services from "@/pages/services";
import Projects from "@/pages/projects";
import Contact from "@/pages/contact";
import RobertYorke from "@/pages/robert-yorke";
import Management from "@/pages/management";
import Facility from "@/pages/facility";
import News from "@/pages/news";
import Quality from "@/pages/quality";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/products-services" component={ProductsServices} />
      <Route path="/products-services/products" component={Products} />
      <Route path="/products-services/services" component={Services} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route path="/about/robert-yorke" component={RobertYorke} />
      <Route path="/about/management" component={Management} />
      <Route path="/about/facility" component={Facility} />
      <Route path="/about/news" component={News} />
      <Route path="/quality" component={Quality} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <Navigation />
          <Breadcrumb />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
