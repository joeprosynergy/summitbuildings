import summitLogo from "@/assets/summit-logo.png";

type PageProps = {
  exportMode?: boolean;
};

const wrapClass = (exportMode?: boolean) =>
  `pdf-page w-full max-w-4xl bg-background overflow-hidden ${
    exportMode ? "shadow-none mb-0" : "shadow-2xl mb-10"
  }`;

export const CoverPage = ({ exportMode }: PageProps) => (
  <section className={wrapClass(exportMode)} aria-label="Summit Buyer's Guide Cover">
    <div
      className="min-h-[700px] md:min-h-[900px] p-8 md:p-16 flex flex-col justify-between text-primary-foreground border-[12px] border-secondary"
      style={{
        background: `linear-gradient(rgba(10, 29, 55, 0.85), rgba(10, 29, 55, 0.85)), url('https://images.unsplash.com/photo-1510127034890-bc2936860bc2?q=80&w=2070&auto=format&fit=crop')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center flex-grow flex flex-col justify-start pt-8">
        <p className="text-xs uppercase tracking-[0.4em] font-bold opacity-90 mb-8">
          Built the Old Fashioned Way • Hand-Crafted in the USA
        </p>
        <div className="text-center mb-16">
          <img
            src={summitLogo}
            alt="Summit Portable Buildings Logo"
            className="max-h-32 md:max-h-40 w-auto mx-auto brightness-0 invert"
          />
        </div>
      </div>
      <div className="text-center">
        <div className="bg-secondary h-2 w-28 mx-auto mb-8" />
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black uppercase leading-[0.9]">
          STORAGE<br />BUILDING<br />
          <span className="text-secondary">BUYER'S</span>
          <br />GUIDE
        </h1>
        <p className="mt-6 text-lg md:text-xl font-semibold opacity-90 italic">
          Your 5-Step Roadmap to the Perfect Storage Solution
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-end border-t border-primary-foreground/30 pt-8 mt-8 gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-secondary">The Summit Standard</p>
          <p className="text-lg">Premium American Craftsmanship</p>
        </div>
        <div className="text-right">
          <p className="text-sm opacity-70">summitbuildings.com</p>
        </div>
      </div>
    </div>
  </section>
);

export const Step1Page = ({ exportMode }: PageProps) => (
  <section className={wrapClass(exportMode)} aria-label="Buyer's Guide Step 1">
    <div className="p-8 md:p-12 flex flex-col min-h-[700px]">
      <header className="flex justify-between items-center border-b-2 border-primary pb-4 mb-10">
        <div className="flex items-center gap-4">
          <div className="font-black text-primary border-r-2 border-secondary pr-3 text-lg tracking-wide">SUMMIT</div>
          <div className="font-bold text-secondary text-sm tracking-wide">BUYER'S GUIDE</div>
        </div>
        <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Step 1</div>
      </header>

      <div className="flex gap-5 mb-7">
        <div className="bg-secondary text-secondary-foreground w-11 h-11 min-w-[44px] flex items-center justify-center rounded-full font-black text-lg">
          1
        </div>
        <div>
          <h3 className="text-primary text-xl font-black uppercase mb-2">Define Your Purpose & Apply the "Plus 25%" Rule</h3>
          <p className="text-foreground/80 leading-relaxed">
            Start by identifying the primary use: storage, workshop, home office, garage, cabin, or something unique. Summit offers fully customizable options—from utility sheds to lofted barns and tiny home shells.
          </p>
          <p className="text-foreground/80 leading-relaxed mt-4">
            <strong>Proven Tip:</strong> Industry experts, including Summit craftsmen, recommend adding at least 25% to your initial size estimate. Most customers outgrow their building faster than expected.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-5">
        <img
          crossOrigin="anonymous"
          src="https://shedsunlimited.b-cdn.net/wp-content/uploads/blog/10-Backyard-Portable-Buildings-For-Sale-in-2021/backyard-portable-buildings-for-sale-14x30-Premier-Garden-Shed-2-1400x933.jpg"
          alt="Spacious backyard workshop shed"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <img
          crossOrigin="anonymous"
          src="https://www.lappstructures.com/wp-content/uploads/2024/12/20200814_111531_05344-1-scaled-aspect-ratio-570-400-1024x719.jpg"
          alt="Custom interior workshop"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <img
          crossOrigin="anonymous"
          src="https://www.lappstructures.com/wp-content/uploads/2024/12/20210527_132818_01183-scaled-aspect-ratio-570-400-1024x718.jpg"
          alt="Organized home office or hobby space inside storage building"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <footer className="mt-auto border-t border-border pt-5 text-center">
        <p className="font-bold text-primary">Free Delivery & Setup within 50 Miles • Rent-to-Own Available</p>
      </footer>
    </div>
  </section>
);

export const Step2Page = ({ exportMode }: PageProps) => (
  <section className={wrapClass(exportMode)} aria-label="Buyer's Guide Step 2">
    <div className="p-8 md:p-12 flex flex-col min-h-[700px]">
      <header className="flex justify-between items-center border-b-2 border-primary pb-4 mb-10">
        <div className="flex items-center gap-4">
          <div className="font-black text-primary border-r-2 border-secondary pr-3 text-lg tracking-wide">SUMMIT</div>
          <div className="font-bold text-secondary text-sm tracking-wide">BUYER'S GUIDE</div>
        </div>
        <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Step 2</div>
      </header>

      <div className="flex gap-5 mb-7">
        <div className="bg-secondary text-secondary-foreground w-11 h-11 min-w-[44px] flex items-center justify-center rounded-full font-black text-lg">
          2
        </div>
        <div>
          <h3 className="text-primary text-xl font-black uppercase mb-2">Choose Premium Materials & Aesthetics</h3>
          <p className="text-foreground/80 leading-relaxed">
            Your building should boost property value and blend beautifully. Summit uses top-tier <strong>LP® SmartSide®</strong> engineered wood siding—treated to resist impact, fungal decay, and termites—for lasting durability.
          </p>
          <p className="text-foreground/80 leading-relaxed mt-4">Customize colors, rooflines, doors, and windows to match your home perfectly.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-5">
        <img
          crossOrigin="anonymous"
          src="https://countrysidebarns.com/site/wp-content/uploads/2018/11/12x20-Portable-Side-Porch-Cabin-Shed-Outdoor-Storage-Countryside-Barns-Building-e1633447571173.jpg"
          alt="Elegant side porch cabin style storage building"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <img
          crossOrigin="anonymous"
          src="https://hartvilleoutdoorproducts.com/wp-content/uploads/2024/01/outdoor-shed-with-garage-door-Akron-ohio-2000x1500.webp"
          alt="Modern gable shed with garage door"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <img
          crossOrigin="anonymous"
          src="https://images.ctfassets.net/89s5b832f23c/eHzRp0Gsh70f5qnXYgPN5/a9fe19e2767cff803560fa75da07016e/RT1dw_10x12_Craftsman_Steep_Pitch_Dormer_Transom_Cedar_Shake_Custom_Painted_Shed__1_.jpg?fm=webp&w=2560&h=1440"
          alt="Close-up of LP SmartSide siding on premium shed"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <footer className="mt-auto border-t border-border pt-5 text-center">
        <p className="font-bold text-primary">Hand-Crafted Quality • Built to Last Decades</p>
      </footer>
    </div>
  </section>
);

export const Step3Page = ({ exportMode }: PageProps) => (
  <section className={wrapClass(exportMode)} aria-label="Buyer's Guide Step 3">
    <div className="p-8 md:p-12 flex flex-col min-h-[700px]">
      <header className="flex justify-between items-center border-b-2 border-primary pb-4 mb-10">
        <div className="flex items-center gap-4">
          <div className="font-black text-primary border-r-2 border-secondary pr-3 text-lg tracking-wide">SUMMIT</div>
          <div className="font-bold text-secondary text-sm tracking-wide">BUYER'S GUIDE</div>
        </div>
        <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Step 3</div>
      </header>

      <div className="flex gap-5 mb-7">
        <div className="bg-secondary text-secondary-foreground w-11 h-11 min-w-[44px] flex items-center justify-center rounded-full font-black text-lg">
          3
        </div>
        <div>
          <h3 className="text-primary text-xl font-black uppercase mb-2">Permits & Site Preparation</h3>
          <p className="text-foreground/80 leading-relaxed">
            <strong>Permits:</strong> Customer responsibility—check local zoning, HOAs, and obtain required permits.
          </p>
          <p className="text-foreground/80 leading-relaxed mt-4">
            <strong>Site Requirements:</strong>
          </p>
          <ul className="list-disc pl-5 my-3 text-foreground/80 text-sm leading-relaxed space-y-1">
            <li>Clear path: Minimum 2' wider than building + 17' high overhead clearance (wider for turns).</li>
            <li>Remove obstacles: stumps, limbs, low wires, fences, etc.</li>
            <li>Level site within 18" slope; Summit levels up to 18".</li>
            <li>Recommended: Compacted gravel pad (4"+ thick, 2' wider/longer than building).</li>
            <li>For 40'+ buildings: Laser-level concrete/rock/dirt pad required.</li>
          </ul>
          <p className="text-foreground/80 leading-relaxed mt-4">
            <strong>Warranty Notes:</strong>
          </p>
          <ul className="list-disc pl-5 my-3 text-foreground/80 text-sm leading-relaxed space-y-1">
            <li>Up to 36': Max 24" block height (ground to runner) or warranty void.</li>
            <li>40'+: Max 12" block height or warranty void.</li>
            <li>Use new concrete blocks only—used blocks void warranty.</li>
            <li>Extra labor &gt;2 hours: $100/hr. Inadequate prep: $300 re-delivery fee.</li>
          </ul>
          <div className="mt-4 bg-muted border-l-4 border-primary p-3 italic text-foreground/80 text-sm">
            <strong>Summit Tip:</strong> Refer to our Block Chart for exact concrete block quantities based on building size and site slope.
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-5">
        <img
          crossOrigin="anonymous"
          src="https://shedsunlimited.b-cdn.net/wp-content/uploads/landing-pages/How-to-Prepare-Your-Gravel-Shed-Pad/gravel-shed-pad-6-1400x933.jpg"
          alt="Compacted gravel pad with shed"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <img
          crossOrigin="anonymous"
          src="https://goldstarbuildings.b-cdn.net/wp-content/uploads/concrete-blocks-for-portable-cabin-foundations-for-cabins-with-metal-roofs-in-erie-pa-768x512.jpg"
          alt="Concrete blocks under storage building"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <img
          crossOrigin="anonymous"
          src="https://www.beachybarns.com/wp-content/uploads/bis-images/14355/concrete-pad-shed-foundations-for-backyard-buildings-in-urbana-oh-1600x9999.jpg"
          alt="Level foundation options for sheds"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <footer className="mt-auto border-t border-border pt-5 text-center">
        <p className="font-bold text-primary">Proper Prep Ensures Full Warranty & Smooth Delivery</p>
      </footer>
    </div>
  </section>
);

export const Step4Page = ({ exportMode }: PageProps) => (
  <section className={wrapClass(exportMode)} aria-label="Buyer's Guide Step 4">
    <div className="p-8 md:p-12 flex flex-col min-h-[700px]">
      <header className="flex justify-between items-center border-b-2 border-primary pb-4 mb-10">
        <div className="flex items-center gap-4">
          <div className="font-black text-primary border-r-2 border-secondary pr-3 text-lg tracking-wide">SUMMIT</div>
          <div className="font-bold text-secondary text-sm tracking-wide">BUYER'S GUIDE</div>
        </div>
        <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Step 4</div>
      </header>

      <div className="flex gap-5 mb-7">
        <div className="bg-secondary text-secondary-foreground w-11 h-11 min-w-[44px] flex items-center justify-center rounded-full font-black text-lg">
          4
        </div>
        <div>
          <h3 className="text-primary text-xl font-black uppercase mb-2">Professional Delivery & Setup</h3>
          <p className="text-foreground/80 leading-relaxed">
            Summit uses specialized "Shed Mule" equipment to precisely place your building—even in tight backyard spaces—without damaging your lawn.
          </p>
          <p className="text-foreground/80 leading-relaxed mt-4">Enjoy free delivery and setup within 50 miles. Custom orders typically ready in 10–30 days.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-5">
        <img
          crossOrigin="anonymous"
          src="https://www.horizonstructures.com/wp-content/uploads/2014/11/muledelivery.jpg"
          alt="Shed Mule delivering building in tight space"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <img
          crossOrigin="anonymous"
          src="https://i.ytimg.com/vi/F6vmI-eei9k/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBJOhYBvxxF7EgEM5K-_EFTaOqYOw"
          alt="Mule placing tall barn on site"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <img
          crossOrigin="anonymous"
          src="https://www.durastorstructures.com/wp-content/uploads/2025/03/delivery-2.png"
          alt="Professional storage building placement"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <footer className="mt-auto border-t border-border pt-5 text-center">
        <p className="font-bold text-primary">Hassle-Free from Order to Installation</p>
      </footer>
    </div>
  </section>
);

export const Step5ContactPage = ({ exportMode }: PageProps) => (
  <section className={wrapClass(exportMode)} aria-label="Buyer's Guide Step 5 and Contact">
    <div className="p-8 md:p-12 flex flex-col min-h-[700px]">
      <header className="flex justify-between items-center border-b-2 border-primary pb-4 mb-10">
        <div className="flex items-center gap-4">
          <div className="font-black text-primary border-r-2 border-secondary pr-3 text-lg tracking-wide">SUMMIT</div>
          <div className="font-bold text-secondary text-sm tracking-wide">BUYER'S GUIDE</div>
        </div>
        <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Step 5</div>
      </header>

      <div className="flex gap-5 mb-7">
        <div className="bg-secondary text-secondary-foreground w-11 h-11 min-w-[44px] flex items-center justify-center rounded-full font-black text-lg">
          5
        </div>
        <div>
          <h3 className="text-primary text-xl font-black uppercase mb-2">Warranty & Long-Term Maintenance</h3>
          <p className="text-foreground/80 leading-relaxed">
            Summit stands behind every building with strong manufacturer's warranties. Protect your investment by keeping vegetation cleared around the base for proper airflow.
          </p>
          <p className="text-foreground/80 leading-relaxed mt-4">With proper care, your Summit structure will serve beautifully for decades.</p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-xl font-bold text-primary">Ready to Build Your Perfect Summit Structure?</p>
        <p className="mt-3 text-foreground/80">Contact us today for a free quote or visit our lot!</p>
        
        <div className="mt-5 p-4 bg-muted rounded-lg">
          <p className="font-bold text-primary mb-2">Visit Us Online:</p>
          <p className="text-sm text-foreground/80">
            <strong>Website:</strong> summitbuildings.com
          </p>
          <p className="text-sm text-foreground/80 mt-1">
            <strong>3D Builder:</strong> design.idssoftware.com/v3/app?dealerId=summitbuildings
          </p>
        </div>
      </div>

      <footer className="mt-auto border-t border-border pt-4 text-center">
        <p className="font-bold text-primary">7336 State Highway 32, Farmington, MO 63640</p>
        <p className="mt-1 text-foreground/80">
          <strong>Phone:</strong> 573-747-4700 • <strong>Email:</strong> info@summitbuildings.com
        </p>
        <p className="mt-2 uppercase tracking-wider text-secondary font-bold text-sm">
          Hand-Crafted in the USA • Rent-To-Own Available
        </p>
      </footer>
    </div>
  </section>
);
