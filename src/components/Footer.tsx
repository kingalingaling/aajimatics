import { Link } from "react-router-dom"; // 1. Import Link
import compliance from "../assets/audit-compliance.png";
import compliance2 from "../assets/comp-trustmark.jpg";
import franceFlag from "../assets/france-flag.png";
import canadaFlag from "../assets/canada-flag.png";
import nigeriaFlag from "../assets/nigeria-flag.png";

const Footer = () => {
  return (
    <footer className="text-white md:px-16 bg-linear-to-br from-[#15236B] via-[#0077E6] to-[#15236B] relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* LOGO & ADDRESS COLUMN */}
          <div className="col-span-1 md:col-span-1">
            <img
              alt="Aajimatics Technologies white logo"
              className="h-10 mb-4"
              src="/assets/logo-white.png"
            />
            <div className="flex gap-x-3 items-center mb-4">
              <img
                alt="Compliance Trustmark 2023"
                className="w-32 h-32"
                src={compliance2}
              />
              <img
                alt="NDPR Audit Compliant 2023 QR code badge"
                className="w-32 h-32"
                src={compliance}
              />
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <img
                alt="Canadian flag"
                className="w-5 h-auto"
                src={canadaFlag}
              />
              <img
                alt="Nigerian flag"
                className="w-5 h-auto"
                src={nigeriaFlag}
              />
              <img alt="French flag" className="w-5 h-auto" src={franceFlag} />
            </div>
            <p className="text-sm text-gray-100">
              Aajimatics <br />
              McMaster Innovation Park <br />
              305-175 Longwood Rd South <br />
              Hamilton, ON L8P 0A1 <br /> Canada
            </p>
          </div>

          {/* SERVICES COLUMN */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-100">
              <li>
                <Link
                  className="hover:text-cyan-400 duration-100"
                  to="/bespoke-solutions"
                >
                  BeSpoke Solutions
                </Link>
              </li>
              <li>
                {/* No specific route for Disruptive Tech category page, keeping as hash or could link to main service */}
                <a className="hover:text-cyan-400 duration-100" href="#">
                  Disruptive Technologies
                </a>
              </li>
              <li>
                <Link
                  className="hover:text-cyan-400 duration-100"
                  to="/cybersecurity"
                >
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-cyan-400 duration-100"
                  to="/cyber-insurance"
                >
                  Cyber Insurance
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-cyan-400 duration-100"
                  to="/gov-tech"
                >
                  GovTech
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-cyan-400 duration-100"
                  to="/digital-transformation"
                >
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-cyan-400 duration-100"
                  to="/tech-for-financial-services"
                >
                  Technology for Financial Services
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY COLUMN */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-100">
              <li>
                <Link
                  className="hover:text-cyan-400 duration-100"
                  to={"/about"}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-cyan-400 duration-100"
                  to="/careers"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-cyan-400 duration-100"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL COLUMN */}
          <div>
            <h4 className="font-bold text-lg mb-4">Legal &amp; Compliance</h4>
            <ul className="space-y-2 text-sm text-gray-100">
              <li>
                <Link
                  className="hover:text-cyan-400 duration-100"
                  to="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-cyan-400 duration-100" to="#">
                  Terms of use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 border-t border-white/20 pt-8 text-center lg:text-left flex flex-col lg:flex-row justify-between text-sm text-white">
          <p>© {new Date().getFullYear()} Aajimatics. All rights reserved.</p>
          <p className="mb-2">
            Licensed under the Nigeria Data Protection Commission (NDPC).
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
