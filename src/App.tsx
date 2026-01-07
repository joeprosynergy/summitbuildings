import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import OurModels from "./pages/OurModels";
import Styles from "./pages/Styles";
import Greenhouse from "./pages/Greenhouse";
import AnimalShelters from "./pages/AnimalShelters";
import StylesUtility from "./pages/StylesUtility";
import StylesBarn from "./pages/StylesBarn";
import StylesModern from "./pages/StylesModern";
import BasicStorage from "./pages/BasicStorage";
import DeluxeStorageCabins from "./pages/DeluxeStorageCabins";
import UtilityShed from "./pages/UtilityShed";
import ProLoftedBarn from "./pages/ProLoftedBarn";
import EconomyShed from "./pages/EconomyShed";
import BudgetProLoftedBarn from "./pages/BudgetProLoftedBarn";
import BudgetProUtility from "./pages/BudgetProUtility";
import Garage from "./pages/Garage";
import Cabin from "./pages/Cabin";
import BarnCabin from "./pages/BarnCabin";
import Carports from "./pages/Carports";
import GaragesCarports from "./pages/GaragesCarports";
import BuyersGuide from "./pages/BuyersGuide";
import Gallery from "./pages/Gallery";
import Financing from "./pages/Financing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

const AdminCloudinaryUpload = lazy(() => import("./pages/AdminCloudinaryUpload"));

const App = () => (
  <HelmetProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/types" element={<OurModels />} />
            {/* Styles pages */}
            <Route path="/styles" element={<Styles />} />
            <Route path="/styles/utility" element={<StylesUtility />} />
            <Route path="/styles/barn" element={<StylesBarn />} />
            <Route path="/styles/modern" element={<StylesModern />} />
            <Route path="/styles/greenhouse" element={<Greenhouse />} />
            <Route path="/styles/animal-shelters" element={<AnimalShelters />} />
            {/* Basic Storage category and detail pages */}
            <Route path="/types/basic-storage" element={<BasicStorage />} />
            <Route path="/types/basic-storage/economy-shed" element={<EconomyShed />} />
            <Route path="/types/basic-storage/budget-pro-lofted-barn" element={<BudgetProLoftedBarn />} />
            <Route path="/types/basic-storage/budget-pro-utility" element={<BudgetProUtility />} />
            {/* Deluxe Storage & Cabins category and detail pages */}
            <Route path="/types/deluxe-storage-cabins" element={<DeluxeStorageCabins />} />
            <Route path="/types/deluxe-storage-cabins/pro-utility-shed" element={<UtilityShed />} />
            <Route path="/types/deluxe-storage-cabins/pro-lofted-barn" element={<ProLoftedBarn />} />
            <Route path="/types/deluxe-storage-cabins/cabin" element={<Cabin />} />
            <Route path="/types/deluxe-storage-cabins/barn-cabin" element={<BarnCabin />} />
            {/* Garages & Carports category and detail pages */}
            <Route path="/types/garages-carports" element={<GaragesCarports />} />
            <Route path="/types/garages-carports/garage" element={<Garage />} />
            <Route path="/types/garages-carports/carports" element={<Carports />} />
            {/* Greenhouse & Animal Shelters */}
            <Route path="/types/greenhouse" element={<Greenhouse />} />
            <Route path="/types/animal-shelters" element={<AnimalShelters />} />
            {/* Resources */}
            <Route path="/buyers-guide" element={<BuyersGuide />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/financing" element={<Financing />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contact-us" element={<ContactUs />} />
            {/* Utilities */}
             <Route
               path="/cloudinary-upload"
               element={
                 <Suspense
                   fallback={<div className="p-6 text-sm text-muted-foreground">Loading…</div>}
                 >
                   <AdminCloudinaryUpload />
                 </Suspense>
               }
             />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </HelmetProvider>
);

export default App;
