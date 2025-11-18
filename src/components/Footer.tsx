import compliance from "../assets/audit-compliance.png";
import franceFlag from "../assets/france-flag.png";
import canadaFlag from "../assets/canada-flag.png";
import nigeriaFlag from "../assets/nigeria-flag.png";
const Footer = () => {
  return (
    <footer className="text-white md:px-16 bg-linear-to-br from-[#15236B] via-[#0077E6] to-[#15236B] relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <img
              alt="Aajimatics Technologies white logo"
              className="h-10 mb-4"
              src="/assets/logo-white.png"
            />
            <img
              alt="NDPR Audit Compliant 2023 QR code badge"
              className="w-32 h-auto mb-4"
              src={compliance}
            />
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
              McMaster Innovation Park, 305 - 175 Longwood RD South Hamilton, ON
              L8P0A1 Canada
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-100">
              <li>
                <a className="hover:text-cyan-400 duration-100" href="#">
                  BeSpoke Solutions
                </a>
              </li>
              <li>
                <a className="hover:text-cyan-400 duration-100" href="#">
                  Disruptive Technologies
                </a>
              </li>
              <li>
                <a className="hover:text-cyan-400 duration-100" href="#">
                  Cybersecurity
                </a>
              </li>
              <li>
                <a className="hover:text-cyan-400 duration-100" href="#">
                  Cyber Insurance
                </a>
              </li>
              <li>
                <a className="hover:text-cyan-400 duration-100" href="#">
                  GovTech
                </a>
              </li>
              <li>
                <a className="hover:text-cyan-400 duration-100" href="#">
                  Digital Transformation
                </a>
              </li>
              <li>
                <a className="hover:text-cyan-400 duration-100" href="#">
                  Technology for Financial Services
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-100">
              <li>
                <a className="hover:text-cyan-400 duration-100" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-cyan-400 duration-100" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="hover:text-cyan-400 duration-100" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Legal &amp; Compliance</h4>
            <ul className="space-y-2 text-sm text-gray-100">
              <li>
                <a className="hover:text-cyan-400 duration-100" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-cyan-400 duration-100" href="#">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-8 text-center lg:text-left flex flex-col lg:flex-row justify-between text-sm text-white">
          <p>© 2025 Aajimatics. All rights reserved.</p>
          <p className="mb-2">
            Licensed under the Nigeria Data Protection Commission (NDPC).
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
