import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SITE_DATA } from "../utilities/siteData"; 
import PartnerCard from "../components/PartnerCard";

const OurPartners = () => {
  return (
    <div className="font-display bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col">
      <Navbar />

      {/* Main Content Wrapper */}
      <main className="grow pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        
        {/* --- SECTION 1: CORE INSTITUTIONAL PARTNERS --- */}
        <div className="container mx-auto max-w-6xl">
          
          {/* Header Text */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#155e9e] dark:text-white mb-6">
              Core Institutional Partners
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Our success is powered by strategic alliances with regulators,
              insurers, cloud providers, and research institutions. We collaborate
              with industry-leading organizations to deliver excellence,
              compliance, and innovation that clients can trust.
            </p>
          </div>

          {/* Core Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SITE_DATA.corePartners.map((partner, index) => (
              <PartnerCard key={index} logo={partner.logo} name={partner.name} />
            ))}
          </div>
        </div>


        {/* --- SECTION 2: PARTNERS --- */}
        <div className="container mx-auto max-w-6xl mt-24">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#155e9e] dark:text-white">
              Partners
            </h2>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SITE_DATA.regPartners.map((partner, index) => (
              <PartnerCard key={index} logo={partner.logo} name={partner.name} />
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};




export default OurPartners;