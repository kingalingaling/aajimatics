import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar"; // Adjust path
import Footer from "../components/Footer"; // Adjust path
import heroBg from "../assets/images/hero-banner.webp"; // Reusing existing background image
import waicaLogo from "../assets/waica-logo.png"; // Partner logo path
import icmrLogo from "../assets/icmr-logo.png"; // Partner logo path
import toast from "react-hot-toast";

const VALID_CODES = ["WAICA",
  // "ICMR"
];

const WorkshopRegistration: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [tempCodeInput, setTempCodeInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // --- Countdown Timer State ---
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // --- Registration Form State ---
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    waicaNumber: "", // Will store "Yes" or "No"
    icmrRegNumber: "", // Will store "Yes" or "No"
    country: "",
    accessCode: "", // Stored valid code
  });

  // Handle the access code verification
  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();
    const normalizedCode = tempCodeInput.trim().toUpperCase();

    if (VALID_CODES.includes(normalizedCode)) {
      localStorage.setItem("workshopAccess", normalizedCode);
      setIsUnlocked(true);
      setFormData((prev) => ({ ...prev, accessCode: normalizedCode }));
      toast.success("Access granted!");
    } else {
      toast.error("Invalid access code. Please try again.");
    }
  };

  // --- Countdown Logic ---
  useEffect(() => {
    if (!isUnlocked || !formData.accessCode) return;

    // Set Target Date based on the entered code
    const targetDateString =
      formData.accessCode === "WAICA"
        ? "2026-05-28T07:30:00"
        : "2026-06-02T07:30:00";

    const targetDate = new Date(targetDateString).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isUnlocked, formData.accessCode]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const loadingToast = toast.loading("Submitting registration...");

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address.", { id: loadingToast });
      return;
    }

    try {
      const response = await fetch(
        "https://aajimatics-backend.onrender.com/api/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Registration submitted successfully!", {
          id: loadingToast,
        });
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        toast.error(data.error || "Something went wrong. Please try again.", {
          id: loadingToast,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        "Network error. Please check your connection and try again.",
        { id: loadingToast },
      );
    }
  };

  // Helper to render the relevant partner logo and details
  const renderWorkshopAffiliation = () => {
    const isWaica = formData.accessCode === "WAICA";
    const dates = isWaica ? "May 28 - 29, 2026" : "June 2 - 3, 2026";

    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-xl flex flex-col md:flex-row items-center space-x-6">
        <img
          src={isWaica ? waicaLogo : icmrLogo}
          alt={`${formData.accessCode} Logo`}
          className="h-16 w-auto shrink-0"
        />
        <div className="grow text-center md:text-left mt-4 md:mt-0">
          <div className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-1">
            Official Cohort
          </div>
          <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
            {isWaica
              ? "WEST AFRICAN INSURANCE COMPANIES ASSOCIATION"
              : "INSTITUTE OF CAPITAL MARKET REGISTRARS"}
          </h4>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <span className="inline-flex items-center space-x-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold">
              <span className="material-icons-outlined text-sm">event</span>
              <span>{dates}</span>
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="font-display bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col">
      <Navbar />

      {!isUnlocked ? (
        /* ================= 1. GATE UI ================= */
        <main className="grow flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-md w-full border border-gray-100 dark:border-gray-700 text-center animate-fadeIn">
            <div className="w-16 h-16 bg-[#e0f2fe] dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-icons-outlined text-3xl text-[#155e9e] dark:text-cyan-400">
                lock
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Private Workshop
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm">
              This registration is invite-only. Please enter your company access
              code to continue.
            </p>
            <form onSubmit={handleVerifyCode} className="space-y-5">
              <input
                type="text"
                value={tempCodeInput}
                onChange={(e) => setTempCodeInput(e.target.value)}
                placeholder="Enter Access Code"
                className="w-full px-4 py-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] focus:border-transparent transition-all outline-none text-center text-lg uppercase tracking-widest font-semibold placeholder:font-normal placeholder:tracking-normal"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#155e9e] hover:bg-[#0b1a3e] text-white font-bold py-4 rounded-xl transition-colors duration-300 shadow-md flex justify-center items-center cursor-pointer"
              >
                Verify Code
                <span className="material-icons-outlined ml-2 text-sm">
                  arrow_forward
                </span>
              </button>
            </form>
          </div>
        </main>
      ) : isSubmitted ? (
        /* ================= 2. SUCCESS UI ================= */
        <main className="grow flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 animate-fadeIn">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 max-w-2xl w-full border border-gray-100 dark:border-gray-700 text-center animate-fadeIn">
            <div className="w-20 h-20 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-green-100 dark:border-green-800/30">
              <span className="material-icons-outlined text-5xl text-green-500 dark:text-green-400">
                check_circle
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Registration Successful!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
              Thank you,{" "}
              <span className="font-semibold text-gray-800 dark:text-white">
                {formData.name}
              </span>
              . We've received your request for an invitation. A confirmation
              email has been sent. Our team will review your submission and
              follow up with further details.
            </p>
            <a
              href="/"
              className="inline-flex justify-center items-center w-full sm:w-auto bg-[#155e9e] hover:bg-[#0b1a3e] text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 shadow-md cursor-pointer"
            >
              Return to Homepage
              <span className="material-icons-outlined ml-2 text-sm">home</span>
            </a>
          </div>
        </main>
      ) : (
        /* ================= 3. EXECUTIVE MASTERCLASS UI ================= */
        <main className="grow animate-fadeIn">
          {/* HERO SECTION */}
          <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-[#0b1a3e] overflow-hidden">
            <img
              src={heroBg}
              alt="Cyber Insurance Workshop"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0b1a3e] via-transparent to-[#0b1a3e]/50"></div>

            <div className="container mx-auto max-w-7xl relative z-10 flex flex-col items-center text-center">
              <div className="inline-flex items-center space-x-2 bg-cyan-500/20 text-cyan-300 px-3 py-1.5 rounded-md text-sm font-semibold mb-6 border border-cyan-500/30">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>In-Person Executive Summit</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6 max-w-5xl">
                Cyber Insurance Capacity Building & Immersion Summit
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mb-12">
                A 2-Day intensive programme powering Africa's cyber insurance
                revolution. Not just a conference—a transformation engine.
              </p>

              {/* FLOATING COUNTDOWN TIMER */}
              <div className="w-full max-w-3xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl">
                <div className="text-xs text-cyan-300 uppercase tracking-widest font-semibold mb-4 opacity-90">
                  Event Will Start In
                </div>
                <div className="flex justify-center items-center gap-4 sm:gap-8 text-white">
                  <div className="flex flex-col items-center">
                    <span className="text-4xl sm:text-6xl font-bold tracking-tight">
                      {String(timeLeft.days).padStart(2, "0")}
                    </span>
                    <span className="text-xs uppercase tracking-widest mt-2 opacity-80">
                      Days
                    </span>
                  </div>
                  <span className="text-4xl sm:text-6xl font-light opacity-50 mb-6">
                    :
                  </span>
                  <div className="flex flex-col items-center">
                    <span className="text-4xl sm:text-6xl font-bold tracking-tight">
                      {String(timeLeft.hours).padStart(2, "0")}
                    </span>
                    <span className="text-xs uppercase tracking-widest mt-2 opacity-80">
                      Hours
                    </span>
                  </div>
                  <span className="text-4xl sm:text-6xl font-light opacity-50 mb-6">
                    :
                  </span>
                  <div className="flex flex-col items-center">
                    <span className="text-4xl sm:text-6xl font-bold tracking-tight">
                      {String(timeLeft.minutes).padStart(2, "0")}
                    </span>
                    <span className="text-xs uppercase tracking-widest mt-2 opacity-80">
                      Minutes
                    </span>
                  </div>
                  <span className="text-4xl sm:text-6xl font-light opacity-50 mb-6 hidden sm:block">
                    :
                  </span>
                  <div className=" flex-col items-center hidden sm:flex">
                    <span className="text-4xl sm:text-6xl font-bold tracking-tight">
                      {String(timeLeft.seconds).padStart(2, "0")}
                    </span>
                    <span className="text-xs uppercase tracking-widest mt-2 opacity-80">
                      Seconds
                    </span>
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
                {/* 1. Affiliation Block */}
                {renderWorkshopAffiliation()}

                {/* 2. Overview & Core Stats */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 border-b-2 border-[#155e9e] pb-2 inline-block">
                    The Opportunity You Cannot Afford To Miss
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-lg text-justify leading-relaxed mb-8">
                    Africa stands at an inflection point. While 50% of US
                    organisations carry cyber insurance, Africa sits at under
                    1%. Ghana, the region's largest insurance premium market at
                    $320M, represents both the highest concentration of
                    insurable cyber risk and the greatest readiness for
                    adoption.
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
                        Global Cyber Market (2025)
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
                      href="/assets/workshop/CYBER INSURANCE CAPACITY BUILDING GHANA.pdf"
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

                {/* 3. Who Should Attend (Categorized) */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-b-2 border-[#155e9e] pb-2 inline-block">
                    Who Should Attend
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Designed for senior-level professionals across the full
                    insurance and risk value chain. A minimum of 2-3
                    participants per organisation is recommended.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-[#155e9e] dark:text-cyan-400 mb-3 text-sm uppercase tracking-wider">
                        Insurance Companies
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        <li>• Underwriters & Actuaries</li>
                        <li>• Claims Managers & Risk Officers</li>
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
                        <li>• Loss Adjusters & Technical Officers</li>
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
                    Three acts. One transformative experience. Every session
                    builds toward a shared understanding of cyber insurance—and
                    your 90-day board-ready roadmap.
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
                            Underwriting & Risk Assessment
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
                            Incident response to settlement & BI quantification.
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
                    What You Will Leave With
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
                        Complimentary copy of our Market Report and a
                        Certificate of Completion (NIC Ghana CPD pursued).
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

                {/* 6. Pricing & Investment */}
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 border-b-2 border-[#155e9e] pb-2 inline-block">
                    Pricing
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    {/* Member Rate Card */}
                    <div className="border-2 border-[#155e9e] rounded-2xl p-6 bg-[#f0f9ff] dark:bg-blue-900/10 relative shadow-md">
                      <div className="absolute -top-3 right-4 bg-[#155e9e] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                        Member Rate
                      </div>
                      <h4 className="text-[#155e9e] dark:text-cyan-400 uppercase text-xs font-bold tracking-widest mb-3">
                        {formData.accessCode} Affiliates
                      </h4>
                      <div className="flex items-end mb-3">
                        <span className="text-4xl font-black text-[#155e9e] dark:text-white">
                          $400
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        Exclusive subsidized rate for active, registered members
                        of {formData.accessCode}.
                      </p>
                    </div>

                    {/* Standard Rate Card */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 bg-white dark:bg-gray-800 shadow-sm opacity-90">
                      <h4 className="text-gray-500 uppercase text-xs font-bold tracking-widest mb-3">
                        Standard Admission
                      </h4>
                      <div className="flex items-end mb-3">
                        <span className="text-4xl font-black text-gray-800 dark:text-white">
                          $500
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        Standard pricing for non-members, general industry
                        practitioners, and independent IT risk directors.
                      </p>
                    </div>
                  </div>

                  {/* SPECIAL DISCOUNTS SECTION */}
                  <div className="bg-[#f0f9ff] dark:bg-blue-900/10 border border-[#155e9e]/30 rounded-xl p-5 shadow-sm">
                    <h4 className="text-[#155e9e] dark:text-cyan-400 font-bold mb-4 flex items-center text-lg">
                      <span className="material-icons-outlined mr-2">
                        local_offer
                      </span>
                      Special Discounts & Offers
                    </h4>
                    <ul className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-0.5 font-bold text-lg">
                          ✓
                        </span>
                        <div>
                          <strong className="text-gray-900 dark:text-white block text-base mb-1">
                            Early Bird Registration
                          </strong>
                          Receive a{" "}
                          <span className="font-semibold text-[#155e9e] dark:text-cyan-400">
                            5% discount
                          </span>{" "}
                          on your ticket when you complete your registration and
                          payment before <strong>May 15th</strong>.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-0.5 font-bold text-lg">
                          ✓
                        </span>
                        <div>
                          <strong className="text-gray-900 dark:text-white block text-base mb-1">
                            Group Sponsorship
                          </strong>
                          Organisations sponsoring{" "}
                          <strong>at least 5 participants</strong> will
                          automatically qualify for a{" "}
                          <span className="font-semibold text-[#155e9e] dark:text-cyan-400">
                            10% corporate discount
                          </span>{" "}
                          across all tickets.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Sticky Registration Card */}
              <div className="lg:col-span-5 relative">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 sticky top-32">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      Request Invitation
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                      Space is strictly limited. Please fill out your details
                      below to secure your spot.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] focus:border-transparent transition-all outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Business Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] focus:border-transparent transition-all outline-none"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Company *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] focus:border-transparent transition-all outline-none"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="title"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          Job Title *
                        </label>
                        <input
                          type="text"
                          id="title"
                          name="title"
                          required
                          value={formData.title}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] focus:border-transparent transition-all outline-none"
                        />
                      </div>
                    </div>

                    {/* DYNAMIC YES/NO MEMBERSHIP SELECTION */}
                    <div>
                      <label
                        htmlFor={
                          formData.accessCode === "ICMR"
                            ? "icmrRegNumber"
                            : "waicaNumber"
                        }
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Are you a registered member of {formData.accessCode}? *
                      </label>
                      <select
                        id={
                          formData.accessCode === "ICMR"
                            ? "icmrRegNumber"
                            : "waicaNumber"
                        }
                        name={
                          formData.accessCode === "ICMR"
                            ? "icmrRegNumber"
                            : "waicaNumber"
                        }
                        required
                        value={
                          formData.accessCode === "ICMR"
                            ? formData.icmrRegNumber
                            : formData.waicaNumber
                        }
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] focus:border-transparent transition-all outline-none appearance-none"
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="Yes">Yes, I am a member</option>
                        <option value="No">No, I am not a member</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Country *
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] focus:border-transparent transition-all outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#155e9e] hover:bg-[#0b1a3e] text-white cursor-pointer font-bold py-4 rounded-xl transition-colors duration-300 shadow-md flex justify-center items-center mt-6"
                    >
                      Submit Registration
                      <span className="material-icons-outlined ml-2 text-sm">
                        arrow_forward
                      </span>
                    </button>

                    <div className="flex items-center justify-center mt-4 space-x-2 text-gray-500 text-xs">
                      <span className="material-icons-outlined text-sm">
                        lock
                      </span>
                      <span>Your information is securely encrypted.</span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      <Footer />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default WorkshopRegistration;
