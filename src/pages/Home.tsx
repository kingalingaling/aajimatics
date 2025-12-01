import heroImg from "../assets/images/hero-banner.webp";
import whoWeAreImg from "../assets/images/who-we-are-img.webp";
import timeline from "../assets/images/timeline.jpg";
import tech4Good from "../assets/images/tech-for-good.png";
import careerPic from "../assets/images/mr-ajiboye.jpg";
import CoreValueCard from "../components/CoreValueCard";
import Navbar from "../components/Navbar";
import Partner from "../components/Partner";
import Solution from "../components/Solution";
import { SITE_DATA } from "../utilities/siteData";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    // Root container
    <div className="font-display bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
      <Navbar />

      {/* 1. HERO SECTION (Remains Opaque/Separate) */}
      {/* No glows here, as requested */}
      <section className="hero-bg pt-20 text-white relative flex justify-center">
        <div className="absolute inset-0">
          <img src={heroImg} className="w-full h-full object-cover" alt="" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center text-center h-[90vh] py-10 bg-black/60 ">
          <h1 className="text-2xl md:text-3xl font-bold leading-tight max-w-4xl">
            eHealth, eBusiness, eGovernment, <br />
            and eSecurity Technologies
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-200">
            We empower organizations with secure, compliant, and transformative
            technology solutions—bridging the gap between innovation,
            governance, and resilience.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              className="bg-light-blue text-white font-bold px-8 py-3 rounded-lg text-base hover:bg-primary duration-200"
              href="mailto:cyber@aajimatics.com"
            >
              Get Started
            </a>
            <a
              className="bg-white backdrop-blur-sm text-black font-bold px-8 py-3 rounded-lg text-base hover:bg-white/70 duration-200"
              href="mailto:cyber@aajimatics.com"
            >
              Talk to an Expert
            </a>
          </div>
        </div>

        {/* TRAPEZOID DIVIDER */}
        <div
          className="
            w-full md:w-[50%] lg:w-[40%] mx-auto h-16 md:h-20 
            bg-white dark:bg-gray-900 
            absolute bottom-0 z-20 
            [clip-path:polygon(15%_0%,85%_0%,100%_100%,0%_100%)]
            flex justify-center items-center text-primary font-bold text-xl md:text-2xl lg:text-3xl
          "
        >
          Who We Are
        </div>
      </section>

      {/* 2. BODY CONTENT WRAPPER (Glows live here) */}
      <div className="relative overflow-hidden bg-white dark:bg-gray-900">
        {/* Glow 1: Top Right (Blue/Purple Gradient) */}
        <div
          className="absolute top-0 right-0 -mr-[100px] -mt-[50px] w-[600px] h-[600px] rounded-full blur-[150px] opacity-30 pointer-events-none z-0"
          style={{
            backgroundImage:
              "linear-gradient(to bottom left, #3B82F6, #9333EA)",
          }}
        />

        {/* Glow 2: Middle Left (Red/Purple Gradient) */}
        <div
          className="absolute top-[30%] left-0 -ml-[150px] w-[500px] h-[500px] rounded-full blur-[150px] opacity-30 pointer-events-none z-0"
          style={{
            backgroundImage: "linear-gradient(to right, #EF4444, #9333EA)",
          }}
        />

        {/* Glow 3: Lower Right (Blue/Red Gradient) */}
        <div
          className="absolute bottom-[5%] right-0 -mr-[100px] w-[600px] h-[600px] rounded-full blur-[200px] opacity-30 pointer-events-none z-0"
          style={{
            backgroundImage: "linear-gradient(to top left, #2563EB, #EF4444)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full blur-[200px] opacity-30 pointer-events-none z-0"
          style={{
            backgroundImage: "linear-gradient(to top right, #E40613, #EF4444)",
          }}
        />

        {/* ------------------------------------------------ */}

        {/* Who we are */}
        <section
          className="py-12 md:py-20 md:px-16 relative z-10 bg-transparent"
          id="who-we-are"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="text-center lg:text-left lg:col-span-3">
                <p className="mt-6 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  We are a technology and cybersecurity company driven by
                  innovation, integrity, and impact. Our mission is to help
                  businesses, governments, and institutions stay resilient in a
                  rapidly evolving digital world. Through a multidisciplinary
                  team of experts, we deliver tailored technology solutions that
                  enhance security, drive transformation, and accelerate growth.
                </p>
              </div>
              <div className="lg:col-span-2">
                <img
                  alt="Abstract graphic of an unlocked padlock symbolizing security solutions"
                  className="rounded-2xl w-auto h-full object-cover"
                  src={whoWeAreImg}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="md:px-16 relative z-10 bg-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">
              Our Core Values
            </h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SITE_DATA.coreValues.map((value) => (
                <CoreValueCard
                  key={value.id}
                  icon={value.icon}
                  title={value.title}
                  details={value.details}
                />
              ))}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-16 md:py-24 relative z-10 bg-transparent md:px-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">
              What We Do
            </h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SITE_DATA.solutions.map((solution) => (
                <Solution key={solution.id} {...solution} />
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="md:px-16 relative z-10 bg-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border border-gray-300 dark:border-gray-700 rounded-2xl backdrop-blur-md bg-white/40 dark:bg-gray-800/40 p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Partners
              </h2>
              {/* ... content ... */}
              <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Our success is powered by strategic alliances with regulators,
                insurers, cloud providers, and research institutions. We
                collaborate with industry-leading organizations to deliver
                excellence, compliance, and innovation that clients can trust.
              </p>
              <div className="mt-10 flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {SITE_DATA.partners.map((partner) => (
                  <Partner key={partner.id} {...partner} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-6 md:px-16 w-full relative z-10 bg-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-center">
              <img
                src={tech4Good}
                alt="Technology for Good Badge"
                className="mx-auto"
              />
              <img
                src={timeline}
                alt="Aajimatics timeline"
                className="mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Careers */}
        <section className="py-8 md:py-16 md:px-16 relative z-10 bg-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex justify-end items-center rounded-xl lg:w-2/3 mx-auto md:ml-auto">
                <img
                  src={careerPic}
                  alt=""
                  className="w-full object-cover rounded-lg"
                />
              </div>
              <div className="rounded-xl p-4 md:p-12 flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-4/5 text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white">
                    Careers
                  </h2>
                  <p className="mt-4 text-gray-700 dark:text-gray-300">
                    Join a team of innovators shaping Africa's digital future.
                    We're always looking for passionate minds in cybersecurity,
                    cloud engineering, software development, and data science.
                  </p>
                  <Link
                    className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                    to="/careers"
                  >
                    Explore roles →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
