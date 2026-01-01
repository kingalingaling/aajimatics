import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// Define the precise types for your menu structure
type TopKey = "who" | "explore" | null;
type ExploreKey = "disruptive" | "fintech" | null;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Nested State Structure
  const [activeTop, setActiveTop] = useState<TopKey>(null);
  const [activeExploreChild, setActiveExploreChild] =
    useState<ExploreKey>(null);

  const location = useLocation();

  // Close everything when route changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setIsOpen(false);
    setActiveTop(null);
    setActiveExploreChild(null);
  }, [location.pathname]);

  // Toggle Top-Level Menus (Who We Are / Explore)
  const toggleTop = (key: TopKey) => {
    setActiveTop((prev) => {
      if (prev === key || (prev === "explore" && key !== "explore")) {
        setActiveExploreChild(null);
      }
      return prev === key ? null : key;
    });
  };

  // Toggle Nested Explore Menus (Disruptive / Fintech)
  const toggleExploreChild = (key: ExploreKey) => {
    setActiveExploreChild((prev) => (prev === key ? null : key));
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-gray-200 font-display">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <div className="shrink-0">
            <Link className="flex items-center space-x-2" to="/">
              <img
                alt="Aajimatics Technologies logo"
                className="h-10 w-auto"
                src="/assets/logo.webp"
              />
            </Link>
          </div>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              className="text-gray-700 hover:text-primary transition-colors font-medium"
              to="/"
            >
              Home
            </Link>

            {/* Desktop: Who We Are */}
            <div className="relative group h-20 flex items-center">
              <button className="flex items-center text-gray-700 hover:text-primary transition-colors font-medium">
                Who We Are
                <span className="material-icons-outlined text-sm ml-1 group-hover:rotate-180 transition-transform duration-200">
                  expand_more
                </span>
              </button>
              {/* Dropdown */}
              <div className="absolute top-full left-0 w-56 bg-white border border-gray-200 rounded-xl shadow-xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                <div className="absolute -top-4 left-0 w-full h-4 bg-transparent"></div>
                <div className="p-2">
                  <Link
                    to="/our-partners"
                    className="block px-4 py-3 rounded-lg hover:bg-gray-50 text-sm text-gray-700 hover:text-primary transition-colors"
                  >
                    Our Partners
                  </Link>
                  <Link
                    to="/clientele"
                    className="block px-4 py-3 rounded-lg hover:bg-gray-50 text-sm text-gray-700 hover:text-primary transition-colors"
                  >
                    Clientele
                  </Link>
                  <Link
                    to="/sbus-and-brands"
                    className="block px-4 py-3 rounded-lg hover:bg-gray-50 text-sm text-gray-700 hover:text-primary transition-colors"
                  >
                    Our SBUs and Brands
                  </Link>
                  <Link
                    to="/about"
                    className="block px-4 py-3 rounded-lg hover:bg-gray-50 text-sm text-gray-700 hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Desktop: Explore Aajimatics */}
            <div className="relative group h-20 flex items-center">
              <button className="flex items-center text-gray-700 hover:text-primary transition-colors font-medium">
                Explore Aajimatics
                <span className="material-icons-outlined text-sm ml-1 group-hover:rotate-180 transition-transform duration-200">
                  expand_more
                </span>
              </button>

              {/* Main Dropdown */}
              <div className="absolute top-full left-0 w-72 bg-white border border-gray-200 rounded-xl shadow-xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                <div className="absolute -top-4 left-0 w-full h-4 bg-transparent"></div>
                <div className="p-2 relative">
                  <Link
                    to="/bespoke-solutions"
                    className="block px-4 py-3 rounded-lg hover:bg-gray-50 text-sm text-gray-700 hover:text-primary transition-colors"
                  >
                    BeSpoke Solutions
                  </Link>

                  {/* Desktop Nested: Disruptive Tech */}
                  <div className="relative group/submenu">
                    <button className="flex justify-between items-center w-full px-4 py-3 rounded-lg hover:bg-gray-50 text-sm text-gray-700 hover:text-primary transition-colors">
                      Disruptive Technologies
                      <span className="material-icons-outlined text-sm ml-2">
                        chevron_right
                      </span>
                    </button>
                    {/* Nested Submenu */}
                    <div className="absolute -top-2 left-full ml-1 w-64 bg-white border border-gray-200 rounded-xl shadow-xl opacity-0 invisible translate-x-2 group-hover/submenu:opacity-100 group-hover/submenu:visible group-hover/submenu:translate-x-0 transition-all duration-300 ease-out z-50">
                      <div className="p-2">
                        <Link
                          to="/cybersecurity"
                          className="block px-4 py-3 rounded-lg hover:bg-gray-50 text-sm text-gray-700 hover:text-primary transition-colors"
                        >
                          Cybersecurity
                        </Link>
                        <Link
                          to="/cyber-insurance"
                          className="block px-4 py-3 rounded-lg hover:bg-gray-50 text-sm text-gray-700 hover:text-primary transition-colors"
                        >
                          Cyber Insurance
                        </Link>
                        <Link
                          to="/gov-tech"
                          className="block px-4 py-3 rounded-lg hover:bg-gray-50 text-sm text-gray-700 hover:text-primary transition-colors"
                        >
                          GovTech
                        </Link>
                        <Link
                          to="/data-and-ai"
                          className="block px-4 py-3 rounded-lg hover:bg-gray-50 text-sm text-gray-700 hover:text-primary transition-colors"
                        >
                          Data & AI
                        </Link>
                        <Link
                          to="/distributed-ledger-technology"
                          className="block px-4 py-3 rounded-lg hover:bg-gray-50 text-sm text-gray-700 hover:text-primary transition-colors"
                        >
                          Distributed Ledger Technology
                        </Link>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/digital-transformation"
                    className="block px-4 py-3 rounded-lg hover:bg-gray-50 text-sm text-gray-700 hover:text-primary transition-colors"
                  >
                    Digital Transformation
                  </Link>

                  {/* Desktop Nested: Financial Services */}
                  <div className="relative group/submenu">
                    <Link
                      to="/tech-for-financial-services"
                      className="flex justify-between items-center w-full px-4 py-3 rounded-lg hover:bg-gray-50 text-sm text-gray-700 hover:text-primary transition-colors"
                    >
                      <span className="text-left">
                        Tech for Financial Services
                      </span>
                      <span className="material-icons-outlined text-sm ml-2">
                        chevron_right
                      </span>
                    </Link>
                    {/* Nested Submenu */}
                    <div className="absolute -top-2 left-full ml-1 w-64 bg-white border border-gray-200 rounded-xl shadow-xl opacity-0 invisible translate-x-2 group-hover/submenu:opacity-100 group-hover/submenu:visible group-hover/submenu:translate-x-0 transition-all duration-300 ease-out z-50">
                      <div className="p-2">
                        <Link
                          to="/insurance"
                          className="block px-4 py-3 rounded-lg hover:bg-gray-50 text-sm text-gray-700 hover:text-primary transition-colors"
                        >
                          Insurance
                        </Link>
                        <Link
                          to="/micro-finance-banks"
                          className="block px-4 py-3 rounded-lg hover:bg-gray-50 text-sm text-gray-700 hover:text-primary transition-colors"
                        >
                          MFBs
                        </Link>
                        <Link
                          to="/pension"
                          className="block px-4 py-3 rounded-lg hover:bg-gray-50 text-sm text-gray-700 hover:text-primary transition-colors"
                        >
                          Pension
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              className="text-gray-700 hover:text-primary transition-colors font-medium"
              to="/contact"
            >
              Contact Us
            </Link>
            <a
              className="text-gray-700 hover:text-primary transition-colors font-medium"
              href="#"
            >
              News
            </a>
          </nav>

          {/* DESKTOP ACTION BUTTONS */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              href="#"
            >
              Get Started
            </a>
            <a
              className="bg-gray-100 text-gray-800 px-5 py-2.5 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-200 transition-colors"
              href="#"
            >
              Talk to an Expert
            </a>
          </div>

          {/* ================= MOBILE MENU TOGGLE ================= */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 p-2 focus:outline-none"
            >
              <span className="material-icons-outlined text-3xl">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU DRAWER ================= */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-4 pb-8 space-y-2 h-[calc(100vh-5rem)] overflow-y-auto">
          <Link
            to="/"
            className="text-lg font-semibold text-gray-800 py-2 hover:text-primary transition-colors block"
          >
            Home
          </Link>

          {/* --- Mobile Accordion 1: Who We Are --- */}
          <div>
            <button
              onClick={() => toggleTop("who")}
              className="text-lg font-semibold text-gray-800 py-2 hover:text-primary transition-colors flex items-center justify-between w-full"
            >
              Who We Are
              <span
                className={`material-icons-outlined text-sm transition-transform ${
                  activeTop === "who" ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </button>
            {activeTop === "who" && (
              <div className="pl-4 space-y-2 border-l-2 border-gray-100 ml-2 mt-2">
                <Link
                  to="/our-partners"
                  className="text-base text-gray-600 py-1 hover:text-primary transition-colors block"
                >
                  Our Partners
                </Link>
                <Link
                  to="/clientele"
                  className="text-base text-gray-600 py-1 hover:text-primary transition-colors block"
                >
                  Clientele
                </Link>
                <Link
                  to="/about"
                  className="text-base text-gray-600 py-1 hover:text-primary transition-colors block"
                >
                  About Us
                </Link>
              </div>
            )}
          </div>

          {/* --- Mobile Accordion 2: Explore Aajimatics --- */}
          <div>
            <button
              onClick={() => toggleTop("explore")}
              className="text-lg font-semibold text-gray-800 py-2 hover:text-primary transition-colors flex items-center justify-between w-full"
            >
              Explore Aajimatics
              <span
                className={`material-icons-outlined text-sm transition-transform ${
                  activeTop === "explore" ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </button>

            {activeTop === "explore" && (
              <div className="pl-4 space-y-2 border-l-2 border-gray-100 ml-2 mt-2">
                <Link
                  to="/bespoke-solutions"
                  className="text-base text-gray-600 py-1 hover:text-primary transition-colors block"
                >
                  BeSpoke Solutions
                </Link>

                {/* Level 2 Nested Accordion: Disruptive Technologies */}
                <div>
                  <button
                    onClick={() => toggleExploreChild("disruptive")}
                    className="text-base text-gray-600 py-1 hover:text-primary transition-colors flex items-center justify-between w-full"
                  >
                    Disruptive Technologies
                    <span
                      className={`material-icons-outlined text-sm transition-transform ${
                        activeExploreChild === "disruptive" ? "rotate-90" : ""
                      }`}
                    >
                      chevron_right
                    </span>
                  </button>
                  {/* Level 3 Items */}
                  {activeExploreChild === "disruptive" && (
                    <div className="pl-4 space-y-2 border-l-2 border-gray-100 ml-2 mt-2">
                      <Link
                        to="/cybersecurity"
                        className="text-base text-gray-600 py-1 hover:text-primary transition-colors block"
                      >
                        Cybersecurity
                      </Link>
                      <Link
                        to="/cyber-insurance"
                        className="text-base text-gray-600 py-1 hover:text-primary transition-colors block"
                      >
                        Cyber Insurance
                      </Link>
                      <Link
                        to="/gov-tech"
                        className="text-base text-gray-600 py-1 hover:text-primary transition-colors block"
                      >
                        GovTech
                      </Link>
                      <Link
                        to="/data-and-ai"
                        className="text-base text-gray-600 py-1 hover:text-primary transition-colors block"
                      >
                        Data & AI
                      </Link>
                      <Link
                        to="/distributed-ledger-technology"
                        className="text-base text-gray-600 py-1 hover:text-primary transition-colors block"
                      >
                        Distributed Ledger Technology
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  to="/digital-transformation"
                  className="text-base text-gray-600 py-1 hover:text-primary transition-colors block"
                >
                  Digital Transformation
                </Link>

                {/* Level 2 Nested Accordion: Financial Services */}
                <div>
                  <button
                    onClick={() => toggleExploreChild("fintech")}
                    className="text-base text-gray-600 py-1 hover:text-primary transition-colors flex items-center justify-between w-full text-left"
                  >
                    <span className="pr-2">Tech for Financial Services</span>
                    <span
                      className={`material-icons-outlined text-sm transition-transform ${
                        activeExploreChild === "fintech" ? "rotate-90" : ""
                      }`}
                    >
                      chevron_right
                    </span>
                  </button>
                  {/* Level 3 Items */}
                  {activeExploreChild === "fintech" && (
                    <div className="pl-4 space-y-2 border-l-2 border-gray-100 ml-2 mt-2">
                      <Link
                        to="/tech-for-financial-services"
                        className="text-base text-gray-600 py-1 hover:text-primary transition-colors block font-semibold"
                      >
                        Overview
                      </Link>
                      <Link
                        to="/insurance"
                        className="text-base text-gray-600 py-1 hover:text-primary transition-colors block"
                      >
                        Insurance
                      </Link>
                      <Link
                        to="/micro-finance-banks"
                        className="text-base text-gray-600 py-1 hover:text-primary transition-colors block "
                      >
                        MFBs
                      </Link>
                      <Link
                        to="/pension"
                        className="text-base text-gray-600 py-1 hover:text-primary transition-colors block"
                      >
                        Pension
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  to="/sbus-and-brands"
                  className="text-base text-gray-600 py-1 hover:text-primary transition-colors block"
                >
                  Our Brands and SBUs
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="text-lg font-semibold text-gray-800 py-2 hover:text-primary transition-colors block"
          >
            Contact Us
          </Link>
          <a
            href="#"
            className="text-lg font-semibold text-gray-800 py-2 hover:text-primary transition-colors block"
          >
            News
          </a>

          {/* Mobile Buttons */}
          <div className="pt-6 space-y-3">
            <a
              href="#"
              className="block w-full text-center bg-primary text-white px-5 py-3 rounded-lg font-medium"
            >
              Get Started
            </a>
            <a
              href="#"
              className="block w-full text-center bg-gray-100 text-gray-800 px-5 py-3 rounded-lg font-medium border border-gray-300"
            >
              Talk to an Expert
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
