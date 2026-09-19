import Navbar from "../components/Navbar"; // Adjust path
import Footer from "../components/Footer"; // Adjust path
import contactHero from "../assets/images/contact-hero.webp"; // Replace with your astronaut/tunnel image
import canadaFlag from "../assets/canada-flag.png"; // Reusing from footer
import nigeriaFlag from "../assets/nigeria-flag.png"; // Reusing from footer
import franceFlag from "../assets/france-flag.png"; // Reusing from footer

const ContactUs = () => {
  return (
    <div className="font-display bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      {/* Main Content Wrapper */}
      <main className="grow pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* The Hero Card */}
          <div className="relative w-full min-h-[650px] rounded-3xl overflow-hidden shadow-2xl bg-[#0b1a3e] flex items-center">
            {/* 1. Background Image (Positioned to the right) */}
            <img
              src={contactHero}
              alt="Contact Us Background"
              className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
            />

            {/* 2. Gradient Overlay (Heavy on left, fading to right) */}
            {/* This creates the blue area for the text while revealing the image on the right */}
            <div className="absolute inset-0 bg-linear-to-r from-[#052c65] via-[#053a78]/90 to-transparent"></div>

            {/* 3. Content Container */}
            <div className="relative z-10 w-full md:w-2/3 lg:w-1/2 p-8 md:p-10 lg:p-20 text-white">
              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                We’d love to <br /> hear from you.
              </h1>

              {/* Subtext */}
              <p className="mt-6 text-lg text-gray-200 leading-relaxed max-w-lg">
                Whether you’re exploring partnership opportunities, need
                cybersecurity expertise, or want to transform your operations —
                we’re here to help.
              </p>

              {/* Contact Details Section */}
              <div className="mt-8 space-y-4">
                {/* Email Item */}
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className="mt-1 shrink-0">
                    <svg
                      className="w-6 h-6 text-gray-300"
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
                  </div>
                  {/* Text */}
                  <div>
                    <h3 className="font-semibold text-white text-lg">Email</h3>
                    <p className="text-gray-300 mt-1">info@aajimatics.com</p>
                    <p className="text-gray-300">cyber@aajimatics.com</p>
                  </div>
                </div>

                {/* Address Item */}
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  {/* <div className="mt-1 shrink-0">
                    <svg
                      className="w-6 h-6 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div> */}
                  {/* Text */}
                  {/* <div>
                    <h3 className="font-semibold text-white text-lg">
                      Address
                    </h3>
                    <p className="text-gray-300 mt-1 font-black leading-relaxed max-w-xs">
                      CANADA
                    </p>
                    <p className="text-gray-300 mt-0.5 leading-relaxed max-w-xs">
                      McMaster Innovation Park, <br />
                      305-175 Longwood Rd South. <br />
                      Hamilton, ON L8P 0A1.
                    </p>
                    <p className="text-gray-300 font-black mt-2 leading-relaxed max-w-xs">
                      NIGERIA
                    </p>
                    <p className="text-gray-300 mt-0.5 leading-relaxed max-w-xs">
                      Liaison Office <br />
                      Victoria Island, Lagos.
                    </p>
                  </div> */}
                </div>
              </div>

              {/* Flags Section */}
              <div className="mt-8 flex items-center space-x-6">
                <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm">
                  <img
                    src={canadaFlag}
                    alt="Canada"
                    className="w-8 h-8 object-contain rounded-lg"
                  />
                </div>
                <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm">
                  <img
                    src={nigeriaFlag}
                    alt="Nigeria"
                    className="w-8 h-8 object-contain rounded-lg"
                  />
                </div>
                <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm">
                  <img
                    src={franceFlag}
                    alt="France"
                    className="w-8 h-8 object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
