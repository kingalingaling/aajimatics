import heroBg from "../../assets/images/hero-banner.webp";
import icmrLogo from "../../assets/icmr-logo.png";
import CountdownTimer from "./CountdownTimer";
import RegistrationForm from "./RegistrationForm";
import type { FormData, TimeLeft, handleChange, handleSubmit } from "./types";

const IcmrView = ({
  timeLeft,
  formData,
  handleChange,
  handleSubmit,
}: {
  timeLeft: TimeLeft;
  formData: FormData;
  handleChange: handleChange;
  handleSubmit: handleSubmit;
}) => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-[#0b1a3e] overflow-hidden">
        <img
          src={heroBg}
          alt="AI Governance Workshop"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0b1a3e] via-transparent to-[#0b1a3e]/50"></div>

        <div className="container mx-auto max-w-7xl relative z-10 flex flex-col items-center text-center">
          {/* BADGES */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/20 text-cyan-300 px-3 py-1.5 rounded-md text-sm font-semibold border border-cyan-500/30">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>SEC Nigeria Aligned</span>
            </div>
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 text-purple-300 px-3 py-1.5 rounded-md text-sm font-semibold border border-purple-500/30">
              <span className="material-icons-outlined text-sm">devices</span>
              <span>Hybrid: Virtual Day 1 | Physical Day 2</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6 max-w-5xl">
            AI Governance & Algorithmic Risk in Capital Market Operations
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mb-12">
            Evaluate, deploy, audit, and govern AI systems within Nigeria's
            capital market regulatory context. Govern the future. Defend the
            present.
          </p>

          {/* TIMER SECTION */}
          <div className="w-full max-w-3xl flex flex-col items-center">
            <div className="text-center mb-4">
              <p className="text-cyan-300 font-bold tracking-widest uppercase text-sm mb-1 drop-shadow-md">
                Event Commences In
              </p>
            </div>

            <div className="w-full">
              <CountdownTimer timeLeft={timeLeft} />
            </div>

            {/* EXACT SCHEDULE BOX */}
            <div className="mt-5 bg-white/5 border border-white/10 rounded-lg py-4 px-6 backdrop-blur-sm w-full max-w-md mx-auto shadow-lg">
              <div className="flex flex-col space-y-3">
                <div className="text-cyan-100 text-sm font-medium tracking-wide flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="flex items-center">
                    <span className="material-icons-outlined text-cyan-400 mr-2 text-lg">
                      laptop_mac
                    </span>
                    Day 1 (Virtual)
                  </span>
                  <span className="font-bold text-white">10:00 AM</span>
                </div>
                <div className="text-cyan-100 text-sm font-medium tracking-wide flex justify-between items-center pt-1">
                  <span className="flex items-center">
                    <span className="material-icons-outlined text-cyan-400 mr-2 text-lg">
                      groups
                    </span>
                    Day 2 (Physical)
                  </span>
                  <span className="font-bold text-white">8:30 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT SPLIT */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT COLUMN: Overview, Modules, Pricing */}
          <div className="lg:col-span-7 space-y-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-xl flex flex-col md:flex-row items-center space-x-6">
              <img
                src={icmrLogo}
                alt="ICMR Logo"
                className="h-16 w-auto shrink-0"
              />
              <div className="grow text-center md:text-left mt-4 md:mt-0">
                <div className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-1">
                  Official Cohort
                </div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  INSTITUTE OF CAPITAL MARKET REGISTRARS
                </h4>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <span className="inline-flex items-center space-x-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold">
                    <span className="material-icons-outlined text-sm">
                      event
                    </span>
                    <span>8th - 9th June, 2026</span>
                  </span>
                  <span className="inline-flex items-center space-x-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-semibold">
                    <span className="material-icons-outlined text-sm">
                      workspace_premium
                    </span>
                    <span>12 CPD Points</span>
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 border-b-2 border-[#155e9e] pb-2 inline-block">
                The Regulatory Reality
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg text-justify leading-relaxed mb-8">
                This is a landmark{" "}
                <strong>Hybrid (Virtual Day 1, Physical Day 2)</strong> training
                programme for capital market registrar professionals where
                regulatory mastery meets technical resilience. As AI integrates
                deeper into financial ecosystems, understanding algorithmic
                bias, ethical risk frameworks, and vendor due diligence is no
                longer optional—it is a regulatory imperative.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#f0f9ff] dark:bg-blue-900/10 p-6 rounded-xl border border-[#155e9e]/20 text-center">
                  <div className="text-3xl font-black text-[#155e9e] dark:text-cyan-400">
                    93%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide mt-2 font-semibold">
                    Of Breaches Start With Phishing
                  </div>
                </div>
                <div className="bg-[#f0f9ff] dark:bg-blue-900/10 p-6 rounded-xl border border-[#155e9e]/20 text-center">
                  <div className="text-3xl font-black text-[#155e9e] dark:text-cyan-400">
                    72h
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide mt-2 font-semibold">
                    SEC/CBN Incident Notification Window
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="/assets/workshop/ICMR Training Programme.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 border-2 border-[#155e9e] text-[#155e9e] dark:border-cyan-500 dark:text-cyan-400 hover:bg-[#155e9e] hover:text-white dark:hover:bg-cyan-500 dark:hover:text-gray-900 font-bold py-3 px-6 rounded-xl transition-colors duration-300 shadow-sm w-full sm:w-auto"
                >
                  <span className="material-icons-outlined">
                    picture_as_pdf
                  </span>
                  <span>View Full Brochure</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 border-b-2 border-[#155e9e] pb-2 inline-block">
                Participation Fees
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="border-2 border-[#155e9e] rounded-2xl p-5 bg-[#f0f9ff] dark:bg-blue-900/10 relative shadow-md flex flex-col justify-center">
                  <div className="absolute -top-3 right-4 bg-[#155e9e] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                    Member
                  </div>
                  <h4 className="text-[#155e9e] dark:text-cyan-400 uppercase text-xs font-bold tracking-widest mb-2">
                    ICMR Members
                  </h4>
                  <div className="flex items-end">
                    <span className="text-2xl lg:text-3xl font-black text-[#155e9e] dark:text-white">
                      ₦150,000
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Per Programme</p>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-5 bg-white dark:bg-gray-800 shadow-sm flex flex-col justify-center">
                  <h4 className="text-gray-500 uppercase text-xs font-bold tracking-widest mb-2">
                    Non-Members
                  </h4>
                  <div className="flex items-end">
                    <span className="text-2xl lg:text-3xl font-black text-gray-800 dark:text-white">
                      ₦170,000
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Per Programme</p>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-5 bg-white dark:bg-gray-800 shadow-sm flex flex-col justify-center">
                  <h4 className="text-gray-500 uppercase text-xs font-bold tracking-widest mb-2">
                    Online
                  </h4>
                  <div className="flex items-end">
                    <span className="text-2xl lg:text-3xl font-black text-gray-800 dark:text-white">
                      ₦60,000
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Per Programme</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 border-b-2 border-[#155e9e] pb-2 inline-block">
                Curriculum Highlights
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "AI & ML Demystified",
                    desc: "Core mechanics of Artificial Intelligence and Machine Learning specifically tailored for registrar operations.",
                  },
                  {
                    title: "Regulatory Posture",
                    desc: "Deep dive into SEC Nigeria's emerging AI regulatory posture and compliance expectations.",
                  },
                  {
                    title: "Ethical Risk Frameworks",
                    desc: "Strategies for identifying and mitigating algorithmic bias and ensuring ethical operations.",
                  },
                  {
                    title: "AI Risk Register Capstone",
                    desc: "Hands-on workshop to build and manage a comprehensive AI Risk Register.",
                  },
                  {
                    title: "Vendor Due Diligence",
                    desc: "Managing third-party AI risk and evaluating external vendors securely.",
                  },
                ].map((mod, i) => (
                  <div
                    key={i}
                    className="flex p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="mr-4 mt-1">
                      <span className="bg-[#155e9e]/10 text-[#155e9e] dark:text-cyan-400 p-2 rounded-lg material-icons-outlined">
                        account_balance
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white text-lg">
                        {mod.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                        {mod.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Form */}
          <div className="lg:col-span-5 relative">
            <RegistrationForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              isWaica={false}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default IcmrView;
