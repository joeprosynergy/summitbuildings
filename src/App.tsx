import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
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
import Carports from "./pages/Carports";
import GaragesCarports from "./pages/GaragesCarports";
import BuyersGuide from "./pages/BuyersGuide";
import Gallery from "./pages/Gallery";
import Financing from "./pages/Financing";
import AdminCloudinaryUpload from "./pages/AdminCloudinaryUpload";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/types" element={<OurModels />} />
            {/* Basic Storage category and detail pages */}
            <Route path="/types/basic-storage" element={<BasicStorage />} />
            <Route path="/types/basic-storage/economy-shed" element={<EconomyShed />} />
            {/* Deluxe Storage & Cabins category and detail pages */}
            <Route path="/types/deluxe-storage-cabins" element={<DeluxeStorageCabins />} />
            <Route path="/types/deluxe-storage-cabins/pro-utility-shed" element={<UtilityShed />} />
            <Route path="/types/deluxe-storage-cabins/pro-lofted-barn" element={<ProLoftedBarn />} />
            <Route path="/types/deluxe-storage-cabins/cabin" element={<Cabin />} />
            {/* Garages & Carports category and detail pages */}
            <Route path="/types/garages-carports" element={<GaragesCarports />} />
            <Route path="/types/garages-carports/garage" element={<Garage />} />
            <Route path="/types/garages-carports/carports" element={<Carports />} />
            {/* Resources */}
            <Route path="/buyers-guide" element={<BuyersGuide />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/financing" element={<Financing />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            {/* Utilities */}
            <Route path="/cloudinary-upload" element={<AdminCloudinaryUpload />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
