import Navbar from "../components/Navbar"; // Adjust path
import Footer from "../components/Footer"; // Adjust path
import careersHero from "../assets/images/contact-hero.webp"; // Replace with a team/office/laptop image

const Careers = () => {
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
              src={careersHero}
              alt="Careers at Aajimatics"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-[#0b1a3e] via-[#155e9e]/50 to-transparent mix-blend-multiply"></div>

            {/* Centered Title */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
                Careers
              </h1>
            </div>
          </div>
        </div>

        {/* 2. Intro / Culture Text */}
        <div className="container mx-auto max-w-4xl text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Join the future of digital security.
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            At Aajimatics, we aren't just building software; we are building the
            trust infrastructure for Africa's digital economy. We look for
            passionate minds in cybersecurity, cloud engineering, and data
            science who are ready to make a tangible impact.
          </p>
        </div>

        {/* 3. Current Openings Status (Not Hiring) */}
        <div className="container mx-auto max-w-3xl mt-20">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 md:p-16 text-center border border-gray-100 dark:border-gray-700">
            {/* Icon */}
            <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-gray-500 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              No open positions right now
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto">
              We currently don't have any active job listings, but we are always
              keen to meet exceptional talent. As we continue to scale, new
              opportunities in engineering, security audit, and product
              management will open up.
            </p>

            {/* Call to Action - Talent Pool 
            <div className="bg-[#f0f9ff] dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-900/30">
              <h4 className="text-lg font-semibold text-[#155e9e] dark:text-cyan-400 mb-2">
                Don't wait for a posting
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Send your CV and a brief introduction to our HR team. We'll keep
                you on our radar for future roles that match your expertise.
              </p>

              <a
                href="mailto:careers@aajimatics.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#155e9e] text-white font-semibold rounded-lg hover:bg-[#0b1a3e] transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email Your Resume
              </a>
            </div> */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
