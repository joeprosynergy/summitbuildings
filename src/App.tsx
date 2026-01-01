import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import OurModels from "./pages/OurModels";
import BasicStorage from "./pages/BasicStorage";
import DeluxeStorageCabins from "./pages/DeluxeStorageCabins";
import UtilityShed from "./pages/UtilityShed";
import ProLoftedBarn from "./pages/ProLoftedBarn";
import EconomyShed from "./pages/EconomyShed";
import Garage from "./pages/Garage";
import Cabin from "./pages/Cabin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/styles" element={<OurModels />} />
            <Route path="/styles/basic-storage" element={<BasicStorage />} />
            <Route path="/styles/deluxe-storage-cabins" element={<DeluxeStorageCabins />} />
            <Route path="/pro-utility-shed" element={<UtilityShed />} />
            <Route path="/pro-lofted-barn" element={<ProLoftedBarn />} />
            <Route path="/economy-shed" element={<EconomyShed />} />
            <Route path="/garage" element={<Garage />} />
            <Route path="/cabin" element={<Cabin />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
