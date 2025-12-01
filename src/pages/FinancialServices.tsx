import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 
import ProjectCard from "../components/ProjectCard"; 
import fintechHero from "../assets/images/other-heroes/tfs.jpg"; 

const FinancialServices = () => {
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
              src={fintechHero}
              alt="Financial Services Background"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-[#424449] via-[#155e9e]/40 to-transparent mix-blend-multiply"></div>

            {/* Centered Title */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-lg text-center px-4">
                Technology for Financial Services
              </h1>
            </div>
          </div>
        </div>

        {/* 2. Introduction Text */}
        <div className="container mx-auto max-w-4xl text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Digitizing Africa's financial backbone.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We build, secure, and scale digital ecosystems for financial
            institutions — from banks to pension managers and microfinance
            operators. Our solutions blend fintech innovation with cybersecurity
            and compliance rigor.
          </p>
        </div>

        {/* 3. "What we've done" Section */}
        <div className="container mx-auto max-w-5xl mt-20">
          <h3 className="text-xl font-bold text-center text-gray-800 mb-10">
            What we've done:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Project 1: Payment Gateway */}
            <ProjectCard 
              text="Payment gateway integration and transaction monitoring tools"
              icon={
                // Network / Transaction Nodes Icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                // Alternative: Connected dots
                // <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              }
            />

            {/* Project 2: KYC Automation */}
            <ProjectCard 
              text="Digital onboarding and KYC automation for MFIs"
              icon={
                // Face Scan / ID Icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              }
            />

            {/* Project 3: RegTech Dashboards */}
            <ProjectCard 
              text="RegTech dashboards for financial compliance"
              icon={
                // Dashboard / Layout Icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
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

export default FinancialServices;