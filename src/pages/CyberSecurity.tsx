import Navbar from "../components/Navbar"; // Adjust path
import Footer from "../components/Footer"; // Adjust path
import cyberHero from "/assets/images/solutions/sol2.webp"; // Replace with your cybersecurity image
import ProjectCard from "../components/ProjectCard";
import ServiceCard from "../components/ServiceCard";

const Cybersecurity = () => {
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
              src={cyberHero}
              alt="Cybersecurity Background"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-[#0b1a3e] via-[#155e9e]/50 to-transparent mix-blend-multiply"></div>

            {/* Centered Title */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
                Cybersecurity
              </h1>
            </div>
          </div>
        </div>

        {/* 2. Introduction Text */}
        <div className="container mx-auto max-w-4xl text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Protecting what matters most.
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Aajimatics delivers enterprise-grade security — from prevention to
            compliance and assurance. Our cybersecurity practice helps
            organizations identify, mitigate, and monitor risks through
            world-class assessments and managed services.
          </p>
        </div>

        {/* 3. Core Services Section */}
        <div className="container mx-auto max-w-6xl mt-20">
          <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-10">
            Core Services:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: VAPT */}
            <ServiceCard
              title="VAPT (Vulnerability Assessment & Penetration Testing)"
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              }
            />
            {/* Card 2: Compliance */}
            <ServiceCard
              title="NDPR/GDPR Compliance & Readiness"
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              }
            />
            {/* Card 3: vCISO */}
            <ServiceCard
              title="vCISO Advisory & Cyber Governance"
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              }
            />
            {/* Card 4: DevSecOps */}
            <ServiceCard
              title="DevSecOps Integration & Security Automation"
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              }
            />
            {/* Card 5: ISO Audit */}
            <ServiceCard
              title="ISO 27001 / 27032 Implementation & Audit"
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              }
            />
            {/* Card 6: PCIDSS */}
            <ServiceCard
              title="PCIDSS"
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              }
            />
          </div>
        </div>

        {/* 4. "What we've done" Section */}
        <div className="container mx-auto max-w-5xl mt-20">
          <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-10">
            What we've done:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              text="Enterprise risk audits for pension and e-commerce platforms"
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              }
            />
            <ProjectCard
              text="Cloud security validation for fintech startups"
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              }
            />
            <ProjectCard
              text="Regulatory compliance readiness for government agencies"
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              }
            />
            {/* Placeholder for spacing or 4th item */}
            <div className="hidden md:block"></div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cybersecurity;
