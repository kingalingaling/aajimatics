import heroBg from "../../assets/images/hero-banner.webp";
import waicaLogo from "../../assets/waica-logo.png";
// import type { FormData, TimeLeft, handleChange, handleSubmit } from "./types";

const WaicaView = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-[#0b1a3e] overflow-hidden">
        <img
          src={heroBg}
          alt="Cyber Insurance Workshop"
          className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0b1a3e] via-[#0b1a3e]/80 to-[#0b1a3e]/50"></div>

        <div className="container mx-auto max-w-7xl relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center space-x-2 bg-red-500/20 text-red-300 px-4 py-2 rounded-md text-sm font-bold mb-6 border border-red-500/30 uppercase tracking-widest">
            <span className="material-icons-outlined text-sm">lock</span>
            <span>Registration Closed</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6 max-w-5xl opacity-90">
            Cyber Insurance Capacity Building & Immersion Summit
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mb-12">
            The June 2026 cohort for this intensive programme has successfully
            concluded.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT SPLIT */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT COLUMN: Overview, Modules, Pricing */}
          <div className="lg:col-span-7 space-y-12">
            {/* 1. Affiliation Block */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-xl flex flex-col md:flex-row items-center space-x-6 opacity-75 grayscale-50">
              <img
                src={waicaLogo}
                alt="WAICA Logo"
                className="h-16 w-auto shrink-0"
              />
              <div className="grow text-center md:text-left mt-4 md:mt-0">
                <div className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-1">
                  Past Cohort
                </div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  WEST AFRICAN INSURANCE COMPANIES ASSOCIATION
                </h4>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <span className="inline-flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-semibold">
                    <span className="material-icons-outlined text-sm">
                      event
                    </span>
                    <span>June, 2026</span>
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Overview & Core Stats */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 border-b-2 border-[#155e9e] pb-2 inline-block">
                The Opportunity
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg text-justify leading-relaxed mb-8">
                Africa stands at an inflection point. While 50% of US
                organisations carry cyber insurance, Africa sits at under
                1%. Ghana, the region's largest insurance premium
                market at $320M, represents both the highest concentration of
                insurable cyber risk and the greatest readiness for
                adoption. This is a transformation engine: Leave with
                AI-powered tools, live-built frameworks, and a signed action
                plan ready for board presentation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-[#f0f9ff] dark:bg-blue-900/10 p-4 rounded-xl border border-[#155e9e]/20 text-center">
                  <div className="text-2xl font-black text-[#155e9e] dark:text-cyan-400">
                    $3.5B
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide mt-1">
                    Annual African Cyber Losses
                  </div>
                </div>
                <div className="bg-[#f0f9ff] dark:bg-blue-900/10 p-4 rounded-xl border border-[#155e9e]/20 text-center">
                  <div className="text-2xl font-black text-[#155e9e] dark:text-cyan-400">
                    $28B
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide mt-1">
                    Global Cyber Market
                  </div>
                </div>
                <div className="bg-[#f0f9ff] dark:bg-blue-900/10 p-4 rounded-xl border border-[#155e9e]/20 text-center">
                  <div className="text-2xl font-black text-[#155e9e] dark:text-cyan-400">
                    &lt; 1%
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide mt-1">
                    African Penetration Rate
                  </div>
                </div>
              </div>

              {/* Brochure Download Button */}
              <div>
                <a
                  href="/assets/workshop/CYBER INSURANCE CAPACITY BUILDING GHANA-5.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 border-2 border-[#155e9e] text-[#155e9e] dark:border-cyan-500 dark:text-cyan-400 hover:bg-[#155e9e] hover:text-white dark:hover:bg-cyan-500 dark:hover:text-gray-900 font-bold py-3 px-6 rounded-xl transition-colors duration-300 shadow-sm w-full sm:w-auto"
                >
                  <span className="material-icons-outlined">
                    picture_as_pdf
                  </span>
                  <span>Download Past Brochure</span>
                </a>
              </div>
            </div>

            {/* 3. Who Should Attend (Categorized) */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-b-2 border-[#155e9e] pb-2 inline-block">
                Who Should Attend
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Designed for senior-level professionals across the full
                insurance and risk value chain. A minimum of 2-3 participants
                per organisation is recommended.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-[#155e9e] dark:text-cyan-400 mb-3 text-sm uppercase tracking-wider">
                    Insurance Companies
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Underwriters & Actuaries</li>
                    <li>• Claims Managers</li>
                    <li>• Risk Officers</li>
                    <li>• Product Development Teams</li>
                    <li>• CEOs / MDs & Board Directors</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[#155e9e] dark:text-cyan-400 mb-3 text-sm uppercase tracking-wider">
                    Reinsurers & Brokers
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• Reinsurance Underwriters</li>
                    <li>• Treaty Structurers</li>
                    <li>• Brokers (Retail & Wholesale)</li>
                    <li>• Loss Adjusters</li>
                    <li>• Technical Officers</li>
                  </ul>
                </div>
                <div className="sm:col-span-2">
                  <h4 className="font-bold text-[#155e9e] dark:text-cyan-400 mb-3 text-sm uppercase tracking-wider">
                    Regulators & Others
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 grid sm:grid-cols-2">
                    <li>• NIC/Regulatory Officials</li>
                    <li>• CISOs & IT Directors</li>
                    <li>• Banks & Telcos Risk Teams</li>
                    <li>• Fintech & Insurtech Leaders</li>
                    <li>• Academic & Research Institutions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. Curriculum / 12 Modules in Acts */}
            <div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 border-b-2 border-[#155e9e] pb-2 inline-block">
                The 12-Module Masterclass
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Three acts. One transformative experience. Every session builds
                toward a shared understanding of cyber insurance—and your 90-day
                board-ready roadmap.
              </p>

              <div className="space-y-6">
                {/* ACT 1 */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-gray-50 dark:bg-gray-900/50 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      ACT 1: The Cyber Reality
                    </h4>
                  </div>
                  <div className="p-6 grid sm:grid-cols-3 gap-6">
                    <div>
                      <div className="text-xs font-bold text-[#155e9e] dark:text-cyan-400 mb-1">
                        M1
                      </div>
                      <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                        The Global Cyber Threat Landscape
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#155e9e] dark:text-cyan-400 mb-1">
                        M2
                      </div>
                      <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                        Africa & Ghana: Real Incidents, Real Losses
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#155e9e] dark:text-cyan-400 mb-1">
                        M3
                      </div>
                      <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                        How Organisations Are Responding & Failing
                      </div>
                    </div>
                  </div>
                </div>

                {/* ACT 2 */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-gray-50 dark:bg-gray-900/50 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      ACT 2: The Insurance Response
                    </h4>
                  </div>
                  <div className="p-6 grid sm:grid-cols-3 gap-6">
                    <div>
                      <div className="text-xs font-bold text-[#155e9e] dark:text-cyan-400 mb-1">
                        M4
                      </div>
                      <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                        Cyber Insurance Foundations
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#155e9e] dark:text-cyan-400 mb-1">
                        M5
                      </div>
                      <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                        Underwriting & Risk Assessment in Practice
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#155e9e] dark:text-cyan-400 mb-1">
                        M6
                      </div>
                      <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                        Pricing, Actuarial Science & Data Scarcity
                      </div>
                    </div>
                  </div>
                </div>

                {/* ACT 3 */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-gray-50 dark:bg-gray-900/50 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      ACT 3: Strategy & Execution
                    </h4>
                  </div>
                  <div className="p-6 grid sm:grid-cols-2 gap-y-4 gap-x-6">
                    <div>
                      <div className="text-xs font-bold text-[#155e9e] dark:text-cyan-400 mb-1">
                        M7: CIDATM AI
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Solving the African pricing problem with ML.
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#155e9e] dark:text-cyan-400 mb-1">
                        M8: Cyber Claims
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Incident response to settlement & BI
                        quantification.
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#155e9e] dark:text-cyan-400 mb-1">
                        M9 & M10: Reinsurance & Regulation
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Treaty structures, Cat XL, Data Protection & NIC
                        Ghana.
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#155e9e] dark:text-cyan-400 mb-1">
                        M11 & M12: The Ecosystem
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Product design and your custom 90-Day Action Plan.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. What You Will Leave With */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-b-2 border-[#155e9e] pb-2 inline-block">
                What Participants Achieved
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                  <span className="material-icons-outlined text-[#155e9e] dark:text-cyan-400 mb-3 text-3xl">
                    verified
                  </span>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Cyber Insurance Mastery
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    End-to-end command of underwriting, pricing, claims,
                    reinsurance, and product design.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                  <span className="material-icons-outlined text-[#155e9e] dark:text-cyan-400 mb-3 text-3xl">
                    assignment
                  </span>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    90-Day Action Roadmap
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    A board-ready, organisation-specific cyber insurance
                    readiness plan built during the summit.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                  <span className="material-icons-outlined text-[#155e9e] dark:text-cyan-400 mb-3 text-3xl">
                    menu_book
                  </span>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Africa Cyber Report & CPD
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Complimentary copy of our Market Report and a Certificate of
                    Completion (NIC Ghana CPD pursued).
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                  <span className="material-icons-outlined text-[#155e9e] dark:text-cyan-400 mb-3 text-3xl">
                    handshake
                  </span>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Aajimatics Partnership
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Direct access to technology licensing, co-product
                    development, or regional distribution rights.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Closed Registration Notice */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-red-100 dark:border-red-900/30 sticky top-32 text-center">
              <div className="w-20 h-20 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-icons-outlined text-4xl text-red-500 dark:text-red-400">
                  event_busy
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Registration is Closed
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                The June 2026 cohort for the Cyber Insurance Capacity Building
                Summit has concluded. We are no longer accepting registrations
                for this session.
              </p>

              {/* <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 mb-8 border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-gray-800 dark:text-white mb-2 text-sm uppercase tracking-wider">
                  Missed out?
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Join our priority waitlist to receive advance notice and
                  early-bird access for our next executive masterclass.
                </p>
                <a
                  href="mailto:info@aajimatics.com?subject=Waitlist:%20Cyber%20Insurance%20Summit"
                  className="inline-flex justify-center items-center w-full bg-[#155e9e] hover:bg-[#0b1a3e] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-sm"
                >
                  Join the Waitlist
                  <span className="material-icons-outlined ml-2 text-sm">
                    mail_outline
                  </span>
                </a>
              </div> */}

              <div className="text-sm text-gray-500 dark:text-gray-500 flex flex-col items-center">
                <span className="mb-2">
                  For inquiries regarding past registrations:
                </span>
                <a
                  href="mailto:info@aajimatics.com"
                  className="font-bold text-[#155e9e] dark:text-cyan-400 hover:underline"
                >
                  info@aajimatics.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WaicaView;
