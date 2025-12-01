import Navbar from "../components/Navbar"; // Adjust path
import Footer from "../components/Footer"; // Adjust path
import aboutHero from "../assets/images/who-we-are-img.webp"; // Reusing your existing image

const AboutUs = () => {
  const coreValues = [
    {
      title: "Integrity",
      description: "Trust built on transparency.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
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
      ),
    },
    {
      title: "Innovation",
      description: "Technology that evolves with purpose.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Impact",
      description:
        "Solutions that change how organizations work, protect, and grow.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
          />
        </svg>
      ),
    },
  ];

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
              src={aboutHero}
              alt="About Aajimatics"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-[#0b1a3e] via-[#155e9e]/50 to-transparent mix-blend-multiply"></div>

            {/* Centered Title */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
                Who We Are
              </h1>
            </div>
          </div>
        </div>

        {/* 2. LRC Leader in ePlatforms Section */}
        <div className="container mx-auto max-w-4xl mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
            LRC Leader in ePlatforms
          </h2>
          <div className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed space-y-6">
            <p>
              Incorporated in 2010, AAJIMATICS has been developing its
              electronic systems and solutions and is now providing technology
              solutions and expertise to a varied client group in Nigeria.
              AAJIMATICS is an electronic technologies solutions and services
              firm; combined, we direct these two areas of expertise to deliver
              ePlatforms for both established and growing markets. Clients
              include healthcare institutions, banks and government MDAs.
            </p>
            <p>
              We leverage Informatics to enable Processes, Procedures,
              Organizations, and Entities to function Optimally.
            </p>
            <p className="font-medium text-[#155e9e] dark:text-cyan-400">
              Our current focus is on delivering eHealth | eBusiness | eSecurity
              technologies to a varied clientele in North America and emerging
              markets including Nigeria. 
            </p>
          </div>
        </div>

        {/* 3. Mission Statement Section */}
        <div className="container mx-auto max-w-5xl mt-20">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border-l-8 border-[#155e9e]">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8">
              Mission Statement
            </h2>
            
            {/* The Quote */}
            <blockquote className="text-xl md:text-2xl font-medium italic text-gray-700 dark:text-gray-200 mb-8 relative">
              <span className="text-4xl text-gray-300 absolute -top-4 -left-2">“</span>
              To be the leading catalyst in the optimal adoption, implementation
              and utilization of eHealth applications by institutions involved
              in Healthcare delivery in Canada and emerging major economies such
              as Nigeria.
            </blockquote>

            <div className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed space-y-4">
              <p>
                Effective healthcare delivery is critical for a population’s
                overall health and economic sustainability. Leveraging academic
                best practices combined with industry expertise allows us to
                deliver effective, customized, and modular systems from
                conception to implementation.
              </p>
              <p>
                We have since emerged as one of the leading champions for the
                effective and efficient adoption of eHealth in emerging markets
                including Nigeria.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Core Values Section */}
        <div className="container mx-auto max-w-6xl mt-24">
          <div className="bg-linear-to-br from-[#0b1a3e] to-[#155e9e] rounded-3xl p-10 md:p-16 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/20 transition-colors border border-white/10"
                >
                  <div className="mb-4 p-4 bg-white/10 rounded-full">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-200 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;