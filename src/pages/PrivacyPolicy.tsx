import Navbar from "../components/Navbar"; // Adjust path
import Footer from "../components/Footer"; // Adjust path
import privacyHero from "../assets/images/other-heroes/terms-hero.webp"; // Reusing an abstract/tech image, or use a specific one
import type { ReactNode } from "react";

const PrivacyPolicy = () => {
  return (
    <div className="font-display bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col">
      <Navbar />

      {/* Main Content Wrapper */}
      <main className="grow pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        {/* 1. Hero Section */}
        <div className="container mx-auto">
          <div className="relative w-full h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl bg-[#0b1a3e]">
            {/* Background Image with Overlay */}
            <img
              src={privacyHero}
              alt="Privacy Policy Background"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-[#0b1a3e] via-[#155e9e]/40 to-transparent mix-blend-multiply"></div>

            {/* Centered Title */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
                Privacy Policy
              </h1>
            </div>
          </div>
        </div>

        {/* 2. Legal Content Container */}
        <div className="container mx-auto max-w-4xl mt-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700">
            {/* Introduction */}
            <div className="text-gray-600 dark:text-gray-300 space-y-6 text-lg leading-relaxed">
              <p>
                This Privacy Policy describes how{" "}
                <strong>Aajimatics Technologies</strong> (“we”, “our”, or “us”)
                collects, uses, stores, and protects personal information
                obtained from users (“you”, “your”) of our website{" "}
                <strong>aajimatics.com</strong>, mobile applications, and
                digital services (collectively, the “Services”).
              </p>
              <p>
                We are committed to protecting your personal data in accordance
                with applicable data protection laws in Nigeria, including the
                Nigeria Data Protection Act (NDPA) 2023, the Nigeria Data
                Protection Regulation (NDPR), and the regulatory oversight of
                the Nigeria Data Protection Commission.
              </p>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-600" />

            {/* Sections */}
            <div className="space-y-8">
              <PolicySection title="1. Definition of Personal Data">
                <p className="mb-4">
                  Personal Data (also known as Personally Identifiable
                  Information) refers to any information that can be used to
                  identify, contact, or locate an individual. This includes, but
                  is not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full name</li>
                  <li>Residential or business address</li>
                  <li>Telephone number</li>
                  <li>Email address</li>
                  <li>
                    Identification numbers (e.g., NIN, BVN where applicable)
                  </li>
                  <li>Financial and payment information</li>
                  <li>Login credentials</li>
                  <li>IP address and device identifiers</li>
                </ul>
                <p className="mt-4">
                  Personal Data does not include information collected
                  anonymously or aggregated data that cannot be linked to an
                  identified individual.
                </p>
              </PolicySection>

              <PolicySection title="2. Information We Collect">
                <p className="mb-4">
                  We may collect the following categories of information:
                </p>

                <h4 className="font-semibold text-gray-800 dark:text-white mt-4 mb-2">
                  a. Information You Provide Directly
                </h4>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Account registration details</li>
                  <li>Contact and inquiry submissions</li>
                  <li>Business information</li>
                  <li>Payment and billing data</li>
                  <li>Support communications</li>
                </ul>

                <h4 className="font-semibold text-gray-800 dark:text-white mt-4 mb-2">
                  b. Information Collected Automatically
                </h4>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and duration</li>
                  <li>Referring website URLs</li>
                </ul>

                <h4 className="font-semibold text-gray-800 dark:text-white mt-4 mb-2">
                  c. Information from Third Parties
                </h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Payment processors</li>
                  <li>Identity verification providers</li>
                  <li>Analytics and security service providers</li>
                </ul>
              </PolicySection>

              <PolicySection title="3. Legal Basis for Processing">
                <p className="mb-4">
                  We collect and process personal data based on one or more of
                  the following lawful bases:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your consent</li>
                  <li>Performance of a contract</li>
                  <li>Compliance with legal obligations</li>
                  <li>Legitimate business interests</li>
                </ul>
              </PolicySection>

              <PolicySection title="4. How We Use Your Information">
                <p className="mb-4">
                  We use your personal data for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide, operate, and maintain our Services</li>
                  <li>To verify identity and prevent fraud</li>
                  <li>To process payments and transactions</li>
                  <li>To respond to inquiries and provide customer support</li>
                  <li>To improve system functionality and user experience</li>
                  <li>To send service-related notifications and updates</li>
                  <li>To comply with regulatory and legal requirements</li>
                </ul>
              </PolicySection>

              <PolicySection title="5. Data Sharing and Disclosure">
                <p className="mb-4">We may share personal data with:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Trusted third-party service providers</li>
                  <li>Payment processors and financial institutions</li>
                  <li>Cloud hosting and data storage providers</li>
                  <li>
                    Regulatory authorities and law enforcement agencies, where
                    required by law
                  </li>
                </ul>
                <p className="font-semibold text-gray-800 dark:text-white">
                  We do not sell personal data to third parties.
                </p>
              </PolicySection>

              <PolicySection title="6. Data Storage and Security">
                <p className="mb-4">
                  We implement appropriate technical and organizational security
                  measures to protect your personal data, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Encryption</li>
                  <li>Secure access controls</li>
                  <li>Regular system audits</li>
                  <li>Restricted employee access</li>
                </ul>
                <p>
                  While we take reasonable steps to secure your data, no
                  electronic transmission or storage system can be guaranteed to
                  be 100% secure.
                </p>
              </PolicySection>

              <PolicySection title="7. Cookies and Tracking Technologies">
                <p className="mb-4">
                  We use cookies and similar technologies to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Maintain session security</li>
                  <li>Improve website functionality</li>
                  <li>Analyze site usage</li>
                  <li>Enhance user experience</li>
                </ul>
                <p>
                  You may disable cookies through your browser settings, but
                  some features of the website may not function properly as a
                  result.
                </p>
              </PolicySection>

              <PolicySection title="8. Data Retention">
                <p className="mb-4">
                  We retain personal data only for as long as necessary to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fulfill the purposes outlined in this policy</li>
                  <li>Comply with legal and regulatory obligations</li>
                  <li>Resolve disputes and enforce agreements</li>
                </ul>
              </PolicySection>

              <PolicySection title="9. Your Data Protection Rights">
                <p className="mb-4">
                  Under Nigerian data protection laws, you have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Restrict or object to processing</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent at any time</li>
                  <li>
                    Lodge a complaint with the Nigeria Data Protection
                    Commission
                  </li>
                </ul>
              </PolicySection>

              <PolicySection title="10. Data Deletion and Account Deactivation">
                <p className="mb-4">
                  You may request that your personal data be deleted or that
                  your account be deactivated by contacting us at:{" "}
                  <a
                    href="mailto:cyber@aajimatics.com"
                    className="text-[#155e9e] hover:underline"
                  >
                    cyber@aajimatics.com
                  </a>
                </p>
                <p>
                  Some information may be retained where legally required for
                  compliance, dispute resolution, or regulatory reporting.
                </p>
              </PolicySection>

              <PolicySection title="11. Third-Party Websites">
                <p>
                  Our Services may contain links to third-party websites. We are
                  not responsible for the privacy practices or content of such
                  external platforms.
                </p>
              </PolicySection>

              <PolicySection title="12. Children’s Privacy">
                <p>
                  Our Services are not intended for individuals under the age of
                  18. We do not knowingly collect personal data from children.
                </p>
              </PolicySection>

              <PolicySection title="13. International Data Transfers">
                <p>
                  Where personal data is transferred outside Nigeria, we ensure
                  that appropriate safeguards are in place to protect your data
                  in compliance with Nigerian data protection laws.
                </p>
              </PolicySection>

              <PolicySection title="14. Changes to This Privacy Policy">
                <p>
                  We reserve the right to update this Privacy Policy at any
                  time. Changes will be posted on this page with an updated
                  effective date. Where required by law, we will notify users
                  directly.
                </p>
              </PolicySection>

              <div className="bg-[#f0f9ff] dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-900/30 mt-8">
                <h3 className="text-xl font-bold text-[#155e9e] dark:text-white mb-4">
                  15. Contact Information
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  For questions, concerns, or requests regarding this Privacy
                  Policy or your personal data, please contact:
                </p>
                <div className="text-gray-700 dark:text-gray-200 space-y-1">
                  <p className="font-bold">Aajimatics Technologies</p>
                  <p>
                    Address: McMaster Innovation Park, 305-175 Longwood Rd
                    South, Hamilton, ON L8P 0A1
                  </p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:info@aajimatics.com"
                      className="text-[#155e9e] hover:underline"
                    >
                      info@aajimatics.com
                    </a>
                  </p>
                  <p>
                    Website:{" "}
                    <a
                      href="https://aajimatics.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#155e9e] hover:underline"
                    >
                      aajimatics.com
                    </a>
                  </p>
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

// --- Reusable Section Component for Cleaner Code ---
const PolicySection = ({ title, children }:{title:string; children: ReactNode}) => (
  <section>
    <h3 className="text-xl font-bold text-[#155e9e] dark:text-white mb-4">
      {title}
    </h3>
    <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
      {children}
    </div>
  </section>
);

export default PrivacyPolicy;
