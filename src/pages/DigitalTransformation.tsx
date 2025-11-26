import Navbar from "../components/Navbar"; // Adjust path
import Footer from "../components/Footer"; // Adjust path
import digitalHero from "/assets/images/solutions/sol5.webp"; // Replace with your digital/cloud image
import ProjectCard from "../components/ProjectCard";

const DigitalTransformation = () => {
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
              src={digitalHero}
              alt="Digital Transformation Background"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-[#0b1a3e] via-[#155e9e]/30 to-transparent mix-blend-multiply"></div>

            {/* Centered Title */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight drop-shadow-md">
                Digital Transformation
              </h1>
            </div>
          </div>
        </div>

        {/* 2. Introduction Text */}
        <div className="container mx-auto max-w-4xl text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
            From legacy to limitless.
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Our Digital Transformation practice reimagines how organizations
            operate in a connected world. We help clients modernize
            infrastructure, streamline workflows, and adopt cloud-native
            architectures while embedding security and compliance at every layer.
          </p>
        </div>

        {/* 3. "What we've done" Section */}
        <div className="container mx-auto max-w-5xl mt-20">
          <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-10">
            What we've done:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Project 1 */}
            <ProjectCard 
              text="Cloud migration projects for financial institutions"
              icon={
                // Cloud Icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              }
            />

            {/* Project 2 */}
            <ProjectCard 
              text="Process automation and workflow optimization for enterprises"
              icon={
                // Office Building / Enterprise Icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              }
            />

            {/* Project 3 */}
            <ProjectCard 
              text="Adoption of hybrid cloud DevOps environments"
              icon={
                // Fingerprint / Security Check Icon (Matching image visual)
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.2-2.858.578-4.181m1.572 10.361C3.123 16.85 2 14.526 2 12c0-5.523 4.477-10 10-10s10 4.477 10 10a9.96 9.96 0 01-2 6.132M8 4a8.001 8.001 0 018 0" />
              }
            />

            {/* Empty Div to keep layout balanced (2 columns, 3 items) */}
            <div className="hidden md:block"></div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DigitalTransformation;