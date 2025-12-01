import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 
import ProjectCard from "../components/ProjectCard"; 
import mfbHero from "../assets/images/other-heroes/mfbs.jpg"; 

const Microfinance = () => {
  return (
    <div className="font-display bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      {/* Main Content Wrapper */}
      <main className="grow pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        
        {/* 1. Hero Section */}
        <div className="container mx-auto">
          <div className="relative w-full h-80 rounded-3xl overflow-hidden shadow-2xl bg-[#0b1a3e]">
            {/* Background Image with Overlay */}
            <img
              src={mfbHero}
              alt="Microfinance Background"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-[#0b1a3e] via-[#155e9e]/40 to-transparent mix-blend-multiply"></div>

            {/* Centered Title */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-lg text-center px-4">
                Microfinance Banks (MFBs)
              </h1>
            </div>
          </div>
        </div>

        {/* 2. Introduction Text */}
        <div className="container mx-auto max-w-4xl text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Technology that empowers inclusion.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Aajimatics provides cost-effective digital solutions that help
            microfinance institutions scale securely — from digital onboarding
            to credit analytics.
          </p>
        </div>

        {/* 3. "What we've done" Section */}
        <div className="container mx-auto max-w-5xl mt-20">
          <h3 className="text-xl font-bold text-center text-gray-800 mb-10">
            What we've done:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Project 1: Core Banking */}
            <ProjectCard 
              text="Core banking integrations and KYC systems"
              icon={
                // Bank / Institution Icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              }
            />

            {/* Project 2: Cyber Risk */}
            <ProjectCard 
              text="Cyber risk frameworks for regulatory compliance"
              icon={
                // Shield / Security Icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              }
            />

            {/* Project 3: Agent Banking */}
            <ProjectCard 
              text="Agent banking dashboards with fraud-monitoring analytics"
              icon={
                // Analytics / Chart Icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              }
            />

            {/* Empty Div to keep layout balanced */}
            <div className="hidden md:block"></div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Microfinance;