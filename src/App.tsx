import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ProbateBadge from "./components/ProbateBadge";
import Index from "./pages/Index";
import WhoWeAre from "./pages/WhoWeAre";
import WhatWeDo from "./pages/WhatWeDo";
import SuccessStories from "./pages/SuccessStories";
import Investments from "./pages/Investments";
import Probate from "./pages/Probate";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <ProbateBadge />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<WhoWeAre />} />
          <Route path="/residential-brokerage" element={<WhatWeDo />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/real-estate-investments" element={<Investments />} />
          <Route path="/inherited-properties" element={<Probate />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
