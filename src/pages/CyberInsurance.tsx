import Navbar from "../components/Navbar"; // Adjust path as needed
import Footer from "../components/Footer"; // Adjust path as needed
import cidaLogo from "../assets/images/cida-logo.png"

const CyberInsurance = () => {
  return (
    <div className="font-display bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col">
      <Navbar />

      {/* Main Content Wrapper - Add padding top to account for fixed Navbar */}
      <main className="grow pt-28 pb-20 px-4 sm:px-6 lg:px-16">
        {/* 1. Hero Section */}
        <div className="container mx-auto">
          <div className="relative w-full h-80 rounded-3xl overflow-hidden shadow-2xl bg-[#0b1a3e]">
            {/* Background Image with Overlay */}
            <img
              src="/assets/images/solutions/sol3.webp"
              alt="Cyber Insurance Background"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#0b1a3e]/80 to-transparent mix-blend-multiply"></div>

            {/* Centered Title */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <img src={cidaLogo} className="h-[70px] w-auto mb-2" alt="" />
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                Cyber Insurance (CIDA Platform)
              </h1>
            </div>
          </div>
        </div>

        {/* 2. Introduction Text */}
        <div className="container mx-auto max-w-4xl text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Quantify risk. Protect your future.
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Cyber Insurance by Aajimatics bridges the gap between cybersecurity
            and financial protection. Through CIDA (Cyber Insurance & Domain
            Assessment), we assess, score, and benchmark your cyber maturity
            helping insurers and enterprises understand, mitigate, and insure
            digital risks effectively.
          </p>
        </div>

        {/* 3. "What we've done" Section */}
        <div className="container mx-auto max-w-5xl mt-20">
          <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-10">
            What we've done:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-xl flex items-center shadow-sm hover:shadow-md transition-shadow">
              <div className="shrink-0 bg-[#155e9e] p-3 rounded-full flex items-center justify-center">
                {/* Icon: Computer/Dashboard */}
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="ml-4 text-gray-700 dark:text-gray-200 font-medium text-sm md:text-base">
                CIDA has been used to evaluate over 50+ organizations for cyber-risk scoring
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-xl flex items-center shadow-sm hover:shadow-md transition-shadow">
              <div className="shrink-0 bg-[#155e9e] p-3 rounded-full flex items-center justify-center">
                {/* Icon: Security Shield */}
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <p className="ml-4 text-gray-700 dark:text-gray-200 font-medium text-sm md:text-base">
                Supported underwriters in policy pricing using real-time assessment data
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-xl flex items-center shadow-sm hover:shadow-md transition-shadow">
              <div className="shrink-0 bg-[#155e9e] p-3 rounded-full flex items-center justify-center">
                {/* Icon: API/Integration */}
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="ml-4 text-gray-700 dark:text-gray-200 font-medium text-sm md:text-base">
                Cloud security validation for fintech startups
              </p>
            </div>

            {/* Empty div to balance the grid if needed, or add a 4th item */}
            <div className="hidden md:block"></div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CyberInsurance;
