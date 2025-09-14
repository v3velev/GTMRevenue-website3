import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GTMCampaigns from "./pages/GTMCampaigns";
import MarketIntelligence from "./pages/MarketIntelligence";
import CaseStudy1 from "./pages/CaseStudy1";
import CaseStudy2 from "./pages/CaseStudy2";
import CaseStudy3 from "./pages/CaseStudy3";
import CaseStudy4 from "./pages/CaseStudy4";
import CaseStudy5 from "./pages/CaseStudy5";
import CaseStudy6 from "./pages/CaseStudy6";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gtm-campaigns" element={<GTMCampaigns />} />
          <Route path="/market-intelligence" element={<MarketIntelligence />} />
        <Route path="/case-study-1" element={<CaseStudy1 />} />
        <Route path="/case-study-2" element={<CaseStudy2 />} />
        <Route path="/case-study-3" element={<CaseStudy3 />} />
        <Route path="/case-study-4" element={<CaseStudy4 />} />
        <Route path="/case-study-5" element={<CaseStudy5 />} />
        <Route path="/case-study-6" element={<CaseStudy6 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
