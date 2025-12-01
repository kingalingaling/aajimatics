import Navbar from "../components/Navbar"; // Adjust path
import Footer from "../components/Footer"; // Adjust path
import ProjectCard from "../components/ProjectCard"; // Importing your existing component
import aiHero from "/assets/images/solutions/sol6.webp"; // Replace with your AI image

const DataAndAI = () => {
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
              src={aiHero}
              alt="Data and AI Background"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-[#0b1a3e] via-[#155e9e]/30 to-transparent mix-blend-multiply"></div>

            {/* Centered Title */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-lg text-center px-4">
                Data & Artificial Intelligence
              </h1>
            </div>
          </div>
        </div>

        {/* 2. Introduction Text */}
        <div className="container mx-auto max-w-4xl text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Turning data into decisions.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We design intelligent systems that make sense of complexity —
            combining analytics, automation, and AI to drive innovation. Our
            data science and AI team enables clients to predict trends, detect
            anomalies, and make data-driven decisions confidently.
          </p>
        </div>

        {/* 3. "What we've done" Section */}
        <div className="container mx-auto max-w-5xl mt-20">
          <h3 className="text-xl font-bold text-center text-gray-800 mb-10">
            What we've done:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Project 1: Predictive Analytics */}
            <ProjectCard 
              text="Predictive analytics for insurance claims and fraud detection"
              icon={
                // Bar Chart / Analytics Icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              }
            />

            {/* Project 2: Data Visualization */}
            <ProjectCard 
              text="Data visualization dashboards for policy and risk insights"
              icon={
                // Line Graph / Trending Icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              }
            />

            {/* Project 3: AI Modeling */}
            <ProjectCard 
              text="AI-driven customer behavior modeling for fintechs"
              icon={
                // AI / Brain Circuit Icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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

export default DataAndAI;