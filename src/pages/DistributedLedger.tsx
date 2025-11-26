import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 
import ProjectCard from "../components/ProjectCard";
import dltHero from "../assets/images/other-heroes/dlt.jpg"; 

const DistributedLedger = () => {
  return (
    <div className="font-display bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col">
      <Navbar />

      {/* Main Content Wrapper */}
      <main className="grow pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        
        {/* 1. Hero Section */}
        <div className="container mx-auto">
          <div className="relative w-full h-80 rounded-3xl overflow-hidden shadow-2xl bg-[#0b1a3e]">
            {/* Background Image with Overlay */}
            <img
              src={dltHero}
              alt="Distributed Ledger Technology Background"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-[#0b1a3e] via-[#155e9e]/40 to-transparent mix-blend-multiply"></div>

            {/* Centered Title */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-lg text-center px-4">
                Distributed Ledger Technologies <br className="hidden md:block"/> (DLT)
              </h1>
            </div>
          </div>
        </div>

        {/* 2. Introduction Text */}
        <div className="container mx-auto max-w-4xl text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Trust, transparency, and traceability — powered by blockchain.
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            We leverage distributed ledger frameworks to build next-generation
            trust systems for finance, identity, and governance. Our solutions
            ensure verifiable data integrity, automated smart contracts, and
            secure digital transactions.
          </p>
        </div>

        {/* 3. "What we've done" Section */}
        <div className="container mx-auto max-w-5xl mt-20">
          <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-10">
            What we've done:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Project 1: Blockchain Ledger */}
            <ProjectCard 
              text="Prototype blockchain ledger for regulatory record-keeping"
              icon={
                // Hexagon / Node Network Icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                // Alternative: Cube Icon
                // <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              }
            />

            {/* Project 2: Smart Contracts */}
            <ProjectCard 
              text="Smart contract frameworks for insurance and pensions"
              icon={
                // Document with nodes / Contract Icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              }
            />

            {/* Project 3: Digital Identity */}
            <ProjectCard 
              text="Pilot integrations for digital identity validation"
              icon={
                // Fingerprint / Secure ID Icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.2-2.858.578-4.181m1.572 10.361C3.123 16.85 2 14.526 2 12c0-5.523 4.477-10 10-10s10 4.477 10 10a9.96 9.96 0 01-2 6.132M8 4a8.001 8.001 0 018 0" />
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

export default DistributedLedger;