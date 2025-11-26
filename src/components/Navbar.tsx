import { Link } from "react-router-dom"; // Import Link for SPA navigation

const Navbar = () => {
  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-gray-700">
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

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-cyan-400 transition-colors font-medium"
              to="/"
            >
              Home
            </Link>

            {/* --- DROPDOWN 1: Who We Are --- */}
            <div className="relative group h-20 flex items-center">
              <button className="flex items-center text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-cyan-400 transition-colors font-medium">
                Who We Are
                <span className="material-icons-outlined text-sm ml-1 group-hover:rotate-180 transition-transform duration-200">
                  expand_more
                </span>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out">
                <div className="absolute -top-4 left-0 w-full h-4 bg-transparent"></div>

                <div className="p-2">
                  <Link
                    to="/our-partners"
                    className="block px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-cyan-400 transition-colors"
                  >
                    Our Partners
                  </Link>
                  <Link
                    to="/clientele"
                    className="block px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-cyan-400 transition-colors"
                  >
                    Clientele
                  </Link>
                </div>
              </div>
            </div>

            {/* --- DROPDOWN 2: Explore Aajimatics --- */}
            <div className="relative group h-20 flex items-center">
              <button className="flex items-center text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-cyan-400 transition-colors font-medium">
                Explore Aajimatics
                <span className="material-icons-outlined text-sm ml-1 group-hover:rotate-180 transition-transform duration-200">
                  expand_more
                </span>
              </button>

              {/* Main Dropdown Menu */}
              <div className="absolute top-full left-0 w-72 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out">
                <div className="absolute -top-4 left-0 w-full h-4 bg-transparent"></div>

                <div className="p-2">
                  {/* Item with no sub-menu */}
                  <Link
                    to="/bespoke-solutions"
                    className="block px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-cyan-400 transition-colors"
                  >
                    BeSpoke Solutions
                  </Link>

                  {/* --- SUB-DROPDOWN 1: Disruptive Technologies --- */}
                  <div className="relative group/submenu">
                    <button className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-cyan-400 transition-colors">
                      Disruptive Technologies
                      <span className="material-icons-outlined text-sm ml-2 group-hover/submenu:text-primary dark:group-hover/submenu:text-cyan-400">
                        chevron_right
                      </span>
                    </button>
                    {/* Sub-menu content */}
                    <div className="absolute top-0 left-full ml-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl opacity-0 invisible translate-x-2 group-hover/submenu:opacity-100 group-hover/submenu:visible group-hover/submenu:translate-x-0 transition-all duration-300 ease-out">
                      <div className="p-2">
                        <Link
                          to="/cybersecurity"
                          className="block px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-cyan-400 transition-colors"
                        >
                          Cybersecurity
                        </Link>
                        <Link
                          to="/cyber-insurance"
                          className="block px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-cyan-400 transition-colors"
                        >
                          Cyber Insurance
                        </Link>
                        <Link
                          to="/gov-tech"
                          className="block px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-cyan-400 transition-colors"
                        >
                          GovTech
                        </Link>
                        <Link
                          to="/data-and-ai"
                          className="block px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-cyan-400 transition-colors"
                        >
                          Data & Artificial Intelligence
                        </Link>
                        <Link
                          to="/distributed-ledger-technology"
                          className="block px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-cyan-400 transition-colors"
                        >
                          Distributed Ledger Technologies
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Item with no sub-menu */}
                  <Link
                    to="/digital-transformation"
                    className="block px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-cyan-400 transition-colors"
                  >
                    Digital Transformation
                  </Link>

                  {/* --- SUB-DROPDOWN 2: Technology for Financial Services --- */}
                  <div className="relative group/submenu">
                    {/* Made this clickable as it has a specific route */}
                    <Link
                      to="/tech-for-financial-services"
                      className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-cyan-400 transition-colors"
                    >
                      <span className="text-left">
                        Technology for Financial Services
                      </span>
                      <span className="material-icons-outlined text-sm ml-2 group-hover/submenu:text-primary dark:group-hover/submenu:text-cyan-400">
                        chevron_right
                      </span>
                    </Link>
                    {/* Sub-menu content */}
                    <div className="absolute top-0 left-full ml-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl opacity-0 invisible translate-x-2 group-hover/submenu:opacity-100 group-hover/submenu:visible group-hover/submenu:translate-x-0 transition-all duration-300 ease-out">
                      <div className="p-2">
                        <Link
                          to="/insurance"
                          className="block px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-cyan-400 transition-colors"
                        >
                          Insurance
                        </Link>
                        <Link
                          to="/micro-finance-banks"
                          className="block px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-cyan-400 transition-colors"
                        >
                          MFBs
                        </Link>
                        <Link
                          to="/pension"
                          className="block px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-cyan-400 transition-colors"
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
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-cyan-400 transition-colors font-medium"
              to="/contact"
            >
              Contact Us
            </Link>
            {/* News doesn't have a route in the list provided, leaving as # for now */}
            <a
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-cyan-400 transition-colors font-medium"
              href="#"
            >
              News
            </a>
          </nav>

          {/* ACTION BUTTONS */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              to="/contact"
            >
              Get Started
            </Link>
            <Link
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-5 py-2.5 rounded-lg text-sm font-medium border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              to="/contact"
            >
              Talk to an Expert
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="md:hidden">
            <button className="text-gray-700 dark:text-gray-300">
              <span className="material-icons-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;