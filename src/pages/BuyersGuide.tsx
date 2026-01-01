import { useState } from "react";
import { Helmet } from "react-helmet-async";
import html2pdf from "html2pdf.js";
import { Download, Loader2 } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  CoverPage,
  Step1Page,
  Step2Page,
  Step3Page,
  Step4Page,
  Step5ContactPage,
} from "@/components/buyers-guide/BuyersGuidePages";

const BuyersGuide = () => {
  const [activePage, setActivePage] = useState(1);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const navButtons = [
    { page: 1, label: "Cover" },
    { page: 2, label: "Step 1" },
    { page: 3, label: "Step 2" },
    { page: 4, label: "Step 3" },
    { page: 5, label: "Step 4" },
    { page: 6, label: "Step 5 & Contact" },
  ];

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);

    // Wait for the hidden PDF DOM to mount.
    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 250));

    const pdfElement = document.getElementById("buyers-guide-pdf");
    if (!pdfElement) {
      setIsGeneratingPDF(false);
      return;
    }

    const opt = {
      margin: 0.35,
      filename: "Summit-Buyers-Guide.pdf",
      enableLinks: true,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
      },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      pagebreak: { mode: ["css", "legacy"], after: ".pdf-page" },
    };

    try {
      await html2pdf().set(opt).from(pdfElement).save();
    } catch (error) {
      console.error("PDF generation failed:", error);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Summit Buyers Guide | Summit Portable Buildings</title>
        <meta
          name="description"
          content="Your 5-step roadmap to the perfect portable building. Learn how to choose the right size, materials, prepare your site, and more."
        />
      </Helmet>

      <Header />

      <main className="bg-muted min-h-screen pt-20">
        <div className="flex flex-col items-center py-10 px-4">
          {/* Page Navigation */}
          <nav className="sticky top-24 z-40 bg-background/90 backdrop-blur-md px-5 py-3 rounded-full shadow-lg mb-8 flex flex-wrap gap-2 justify-center items-center print:hidden">
            {navButtons.map((btn) => (
              <button
                key={btn.page}
                onClick={() => setActivePage(btn.page)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                  activePage === btn.page
                    ? "bg-primary text-primary-foreground"
                    : "bg-transparent text-primary hover:bg-primary/10"
                }`}
              >
                {btn.label}
              </button>
            ))}

            <div className="h-6 w-px bg-border mx-2" />

            <Button
              onClick={handleDownloadPDF}
              variant="hero"
              size="sm"
              className="gap-2"
              disabled={isGeneratingPDF}
            >
              {isGeneratingPDF ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Download className="w-4 h-4" />
              )}
              {isGeneratingPDF ? "Generating..." : "Download PDF"}
            </Button>
          </nav>

          {/* On-screen content (single page at a time) */}
          <div id="buyers-guide-content" className="w-full flex flex-col items-center">
            {activePage === 1 && <CoverPage />}
            {activePage === 2 && <Step1Page />}
            {activePage === 3 && <Step2Page />}
            {activePage === 4 && <Step3Page />}
            {activePage === 5 && <Step4Page />}
            {activePage === 6 && <Step5ContactPage />}
          </div>

          {/* Hidden content for PDF generation (all pages) */}
          {isGeneratingPDF && (
            <div
              aria-hidden="true"
              className="fixed left-[-100000px] top-0 w-[8.5in] bg-white"
            >
              <div id="buyers-guide-pdf" className="buyers-guide-pdf">
                <CoverPage exportMode />
                <Step1Page exportMode />
                <Step2Page exportMode />
                <Step3Page exportMode />
                <Step4Page exportMode />
                <Step5ContactPage exportMode />
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default BuyersGuide;
