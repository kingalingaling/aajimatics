import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SITE_DATA } from "../utilities/siteData"; 
import PartnerCard from "../components/PartnerCard";

const Brands = () => {
  return (
    <div className="font-display bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      {/* Main Content Wrapper */}
      <main className="grow pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        
        {/* --- SECTION 1: CORE INSTITUTIONAL PARTNERS --- */}
        <div className="container mx-auto max-w-6xl">
          
          {/* Header Text */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#155e9e] mb-6">
              Our SBUs & Brands
            </h1>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SITE_DATA.brands.map((brand) => (
              <PartnerCard key={brand.id} logo={brand.logo} name={brand.name} />
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};




export default Brands;