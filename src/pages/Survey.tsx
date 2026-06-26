import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Adjust path
import Footer from "../components/Footer"; // Adjust path
import heroBg from "../assets/images/hero-banner.webp"; // Reusing existing background image
import toast from "react-hot-toast";

const PostSummitSurvey: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // --- Complex Form State ---
  const [formData, setFormData] = useState({
    // Section A: About You
    fullName: "",
    jobTitle: "",
    organisation: "",
    email: "",
    phone: "",
    country: "",
    otherCountry: "",
    orgType: "",
    otherOrgType: "",
    journeyStage: "",
    sizeBand: "",

    // Section B: Summit Experience
    overallRating: "",
    valuableSessions: [] as string[],
    npsScore: "",
    takeaway: "",
    testimonialConsent: "",
    moreValuable: "",

    // Section C: Capability Snapshot (1-5)
    capabilities: {
      underwriting: "",
      claims: "",
      technology: "",
      compliance: "",
      market: "",
      data: "",
      talent: "",
      security: "",
    },

    // Section D: Priorities & Challenges
    soundsLikeOrg: [] as string[],
    priorities: "",
    biggestBarrier: "",

    // Section E: Regulatory Readiness
    readiness: {
      strategy: "",
      ciso: "",
      framework: "",
      incidentPlan: "",
      vendorAttestation: "",
      training: "",
      reporting: "",
    },

    // Section F: 90-Day Commitment
    actions: [
      { action: "", owner: "", date: "" },
      { action: "", owner: "", date: "" },
      { action: "", owner: "", date: "" },
    ],
    techDecision: "",
    deferDate: "",
    septemberDifference: "",

    // Section G: Support
    exploreSupport: [] as string[],
    strategyCall: "",
    bestTime: "",
    whoElse: "",
    joinAlumni: "",
    consent: false,
  });

  // Tracks which fields currently have "Other" selected
  const [showOther, setShowOther] = useState<Record<string, boolean>>({});

  // Handles the dropdown change. If "Other" is picked, it switches the UI.
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (value === "Other") {
      setShowOther((prev) => ({ ...prev, [name]: true }));
      setFormData({ ...formData, [name]: "" }); // Clear it so they can type
    } else {
      handleChange(e); // Standard handle change
    }
  };

  // Handles clicking "Cancel" to return to the dropdown
  const cancelOther = (fieldName: string) => {
    setShowOther((prev) => ({ ...prev, [fieldName]: false }));
    setFormData({ ...formData, [fieldName]: "" }); // Reset the form data
  };

  // --- Handlers ---
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox" && name === "consent") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCheckboxArray = (
    field: "valuableSessions" | "soundsLikeOrg" | "exploreSupport",
    value: string,
  ) => {
    setFormData((prev) => {
      const array = prev[field];
      if (array.includes(value)) {
        return { ...prev, [field]: array.filter((item) => item !== value) };
      } else {
        return { ...prev, [field]: [...array, value] };
      }
    });
  };

  const handleNestedChange = (
    section: "capabilities" | "readiness",
    field: string,
    value: string,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  const handleActionChange = (
    index: number,
    field: "action" | "owner" | "date",
    value: string,
  ) => {
    const newActions = [...formData.actions];
    newActions[index][field] = value;
    setFormData({ ...formData, actions: newActions });
  };

  const calculateAggregate = () => {
    return Object.values(formData.capabilities).reduce(
      (sum, val) => sum + (parseInt(val) || 0),
      0,
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Consent Validation
    if (!formData.consent) {
      toast.error("Please provide consent to submit the questionnaire.");
      return;
    }

    // 2. Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // 3. Basic Fields Validation
    const requiredBasicFields = [
      "fullName",
      "jobTitle",
      "organisation",
      "email",
      "phone",
      "country",
      "orgType",
      "journeyStage",
      "sizeBand",
      "overallRating",
      "npsScore",
      "takeaway",
      "testimonialConsent",
      "priorities",
      "biggestBarrier",
      "techDecision",
      "septemberDifference",
      "strategyCall",
      "joinAlumni",
    ];

    for (const field of requiredBasicFields) {
      // Type assertion needed for dynamic key access in TypeScript
      if (!formData[field as keyof typeof formData]) {
        toast.error("Please ensure all standard questions are answered.");
        return;
      }
    }

    // 4. Nested Capabilities Validation
    const isCapabilitiesValid = Object.values(formData.capabilities).every(
      (val) => val !== "",
    );
    if (!isCapabilitiesValid) {
      toast.error("Please complete the entire Capability Snapshot section.");
      return;
    }

    // 5. Nested Readiness Validation
    const isReadinessValid = Object.values(formData.readiness).every(
      (val) => val !== "",
    );
    if (!isReadinessValid) {
      toast.error("Please complete the Regulatory Readiness section.");
      return;
    }

    // 6. 90-Day Actions Validation (Checks all 3 rows)
    const isActionsValid = formData.actions.every(
      (a) =>
        a.action.trim() !== "" && a.owner.trim() !== "" && a.date.trim() !== "",
    );
    if (!isActionsValid) {
      toast.error(
        "Please complete all fields for your three 90-Day Commitment actions.",
      );
      return;
    }

    // 7. Conditional Fields Validation
    if (formData.techDecision === "Defer" && !formData.deferDate.trim()) {
      toast.error(
        "Please provide a review date for your deferred technology decision.",
      );
      return;
    }

    if (formData.strategyCall !== "No" && !formData.bestTime.trim()) {
      toast.error(
        "Please provide the best days/times to reach you for your strategy call.",
      );
      return;
    }

    // --- Validation Passed, Trigger API Call ---
    const loadingToast = toast.loading("Submitting your snapshot...");

    try {
      const response = await fetch("http://localhost:5000/api/submit-survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Questionnaire submitted successfully!", {
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
      console.error("Error submitting survey:", error);
      toast.error(
        "Network error. Please check your connection and try again.",
        { id: loadingToast },
      );
    }
  };

  // --- Data Mappings for Clean Rendering ---
  const capabilityQuestions = [
    {
      id: "underwriting",
      label: "Cyber underwriting — we can price and bind cyber risk",
    },
    {
      id: "claims",
      label: "Claims handling — documented process and IR-firm relationships",
    },
    {
      id: "technology",
      label: "Technology — a digital underwriting / risk-scoring platform",
    },
    {
      id: "compliance",
      label:
        "Regulatory compliance — NIC directives, Data Protection Act, GDPR clarity",
    },
    {
      id: "market",
      label: "Market & distribution — a cyber product, channel and pipeline",
    },
    { id: "data", label: "Data & actuarial — pricing beyond pure judgement" },
    {
      id: "talent",
      label: "Talent & training — cyber insurance expertise in-house",
    },
    {
      id: "security",
      label: "Our own cyber security — how protected is our own organisation?",
    },
  ];

  const readinessQuestions = [
    {
      id: "strategy",
      label: "Board-approved cybersecurity strategy & risk appetite",
    },
    {
      id: "ciso",
      label: "Formally appointed CISO / Head of Cyber with defined KPIs",
    },
    {
      id: "framework",
      label: "Enterprise-wide Cyber Risk Management Framework",
    },
    { id: "incidentPlan", label: "Tested incident-response plan" },
    {
      id: "vendorAttestation",
      label: "Third-party / vendor attestation or CSA certification process",
    },
    {
      id: "training",
      label: "Mandatory cyber-awareness training for all staff",
    },
    {
      id: "reporting",
      label: "Process to report incidents to NIC & CSA within 14 days",
    },
  ];

  return (
    <div className="font-display bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col">
      <Navbar />

      {isSubmitted ? (
        <main className="grow flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 animate-fadeIn">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 max-w-2xl w-full border border-gray-100 dark:border-gray-700 text-center">
            <div className="w-20 h-20 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-green-100 dark:border-green-800/30">
              <span className="material-icons-outlined text-5xl text-green-500 dark:text-green-400">
                check_circle
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Snapshot Received
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
              Thank you,{" "}
              <span className="font-semibold">
                {formData.fullName || "Participant"}
              </span>
              . Your capability snapshot has been recorded confidentially.
              Within five working days, you will receive your benchmark report
              and priority access to the diagnostic audits.
            </p>
            <button
              onClick={() => (window.location.href = "/")}
              className="inline-flex justify-center items-center bg-[#155e9e] hover:bg-[#0b1a3e] text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-md"
            >
              Return to Homepage
              <span className="material-icons-outlined ml-2 text-sm">home</span>
            </button>
          </div>
        </main>
      ) : (
        <main className="grow animate-fadeIn pb-20">
          {/* HERO SECTION */}
          <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-[#0b1a3e] overflow-hidden">
            <img
              src={heroBg}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0b1a3e] via-transparent to-[#0b1a3e]/50"></div>

            <div className="container mx-auto max-w-4xl relative z-10 text-center">
              <div className="inline-flex items-center space-x-2 bg-cyan-500/20 text-cyan-300 px-3 py-1.5 rounded-md text-sm font-semibold mb-6 border border-cyan-500/30">
                <span className="material-icons-outlined text-sm">
                  analytics
                </span>
                <span>WEST AFRICA CYBER INSURANCE SUMMIT 2026</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
                Post-Summit Participant Questionnaire
              </h1>
              <p className="text-xl text-cyan-100 font-light max-w-2xl mx-auto mb-8">
                Your capability snapshot — and the start of your 90-day journey.
              </p>

              {/* Info Box */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-left text-sm text-gray-200 space-y-4">
                <p>
                  <strong className="text-white">Why this matters:</strong> Over
                  the next 90 days, AAJIMATICS will build support around your
                  organisation—not a generic programme, but one shaped by where
                  you actually stand. Your answers stay confidential.
                </p>
                <p>
                  <strong className="text-white">
                    What you get in return:
                  </strong>{" "}
                  A confidential Capability Snapshot benchmarking you against
                  the cohort, priority access to complimentary diagnostic
                  audits, and a 45-minute strategy call.
                </p>
                <p className="text-cyan-300 font-semibold flex items-center">
                  <span className="material-icons-outlined text-lg mr-2">
                    schedule
                  </span>
                  Please complete and submit by 8 July 2026.
                </p>
              </div>
            </div>
          </section>

          {/* FORM SECTION */}
          <section className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* SECTION A */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4 flex items-center">
                  <span className="bg-[#155e9e] text-white w-8 h-8 rounded-md flex items-center justify-center text-sm mr-3">
                    A
                  </span>
                  About You & Your Organisation
                </h3>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Job Title / Role *
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      required
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Organisation *
                    </label>
                    <input
                      type="text"
                      name="organisation"
                      required
                      value={formData.organisation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="text"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] outline-none"
                    />
                  </div>
                  {/* --- COUNTRY FIELD --- */}
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Which Country Do You Primarily Operate In? *
                    </label>

                    {!showOther["country"] ? (
                      <select
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleSelectChange} // Use the new helper here
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] outline-none appearance-none"
                      >
                        <option value="" disabled>
                          Select a country
                        </option>
                        <option value="Ghana">Ghana</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Côte d'Ivoire">
                          Côte d&apos;Ivoire
                        </option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Togo">Togo</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Other">Other</option>
                      </select>
                    ) : (
                      <div className="relative">
                        <input
                          type="text"
                          name="country"
                          required
                          placeholder="Type your country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => cancelOther("country")} // Pass the exact field name
                          className="text-xs text-red-500 hover:text-red-700 mt-1 font-semibold"
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  {/* --- ORGANISATION TYPE FIELD --- */}
                  <div>
                    <label
                      htmlFor="orgType"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Which Best Describes Your Organisation? *
                    </label>

                    {!showOther["orgType"] ? (
                      <select
                        name="orgType"
                        required
                        value={formData.orgType}
                        onChange={handleSelectChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] outline-none appearance-none"
                      >
                        <option value="" disabled>
                          Select Organisation type
                        </option>
                        <option value="Insurer">Insurer</option>
                        <option value="Broker">Broker</option>
                        <option value="Broker / intermediary">
                          Broker / intermediary
                        </option>
                        <option value="MGA / underwriting agency">
                          MGA / underwriting agency
                        </option>
                        <option value="Regulator / association">
                          Regulator / association
                        </option>
                        <option value="Corporate buyer (insured)">
                          Corporate buyer (insured)
                        </option>
                        <option value="Technology / service provider">
                          Technology / service provider
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    ) : (
                      <div className="relative">
                        <input
                          type="text"
                          name="orgType"
                          required
                          placeholder="Type your organisation type"
                          value={formData.orgType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => cancelOther("orgType")}
                          className="text-xs text-red-500 hover:text-red-700 mt-1 font-semibold"
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Where are you on the cyber insurance journey today?
                    </label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        "Not yet active",
                        "Exploring / researching",
                        "Designing a product",
                        "Piloting / first policies",
                        "Actively writing",
                        "Established book, scaling",
                      ].map((opt) => (
                        <label
                          key={opt}
                          className="flex items-center space-x-3 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="journeyStage"
                            value={opt}
                            onChange={handleChange}
                            className="w-4 h-4 text-[#155e9e] focus:ring-[#155e9e]"
                          />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {opt}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Approximate size band (GWP for insurers/brokers; revenue
                      for corporates), USD:
                    </label>
                    <div className="flex flex-wrap gap-4">
                      {[
                        "< $5M",
                        "$5–25M",
                        "$25–100M",
                        "$100M+",
                        "Prefer not to say",
                      ].map((opt) => (
                        <label
                          key={opt}
                          className="flex items-center space-x-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="sizeBand"
                            value={opt}
                            onChange={handleChange}
                            className="w-4 h-4 text-[#155e9e] focus:ring-[#155e9e]"
                          />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {opt}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION B */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4 flex items-center">
                  <span className="bg-[#155e9e] text-white w-8 h-8 rounded-md flex items-center justify-center text-sm mr-3">
                    B
                  </span>
                  Your Summit Experience
                </h3>

                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      B1. Overall, how would you rate the summit? (1 = Poor, 5 =
                      Outstanding)
                    </label>
                    <div className="flex gap-4">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <label
                          key={num}
                          className={`w-12 h-12 flex items-center justify-center rounded-full border-2 cursor-pointer transition-all ${formData.overallRating === String(num) ? "bg-[#155e9e] border-[#155e9e] text-white" : "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-[#155e9e]"}`}
                        >
                          <input
                            type="radio"
                            name="overallRating"
                            value={num}
                            onChange={handleChange}
                            className="hidden"
                          />
                          <span className="font-bold">{num}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      B2. Which sessions delivered the most value to you?
                      (select up to three)
                    </label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        "Cyber risk fundamentals & the modern threat landscape",
                        "Reinsurance structures (treaty, facultative, accumulation)",
                        "How organisations fail — the governance & financial case",
                        "Cyber insurance foundations — what it is and isn’t",
                        "Underwriting & risk assessment in practice",
                        "Pricing, actuarial science & data scarcity (11-Factor Framework)",
                        "Cyber claims management",
                        "Audit, compliance & the NIC directives",
                        "CIDT™ & CIDA™ platform showcase",
                      ].map((opt) => (
                        <label
                          key={opt}
                          className="flex items-start space-x-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={formData.valuableSessions.includes(opt)}
                            onChange={() =>
                              handleCheckboxArray("valuableSessions", opt)
                            }
                            disabled={
                              formData.valuableSessions.length >= 3 &&
                              !formData.valuableSessions.includes(opt)
                            }
                            className="w-4 h-4 mt-0.5 text-[#155e9e] focus:ring-[#155e9e] rounded"
                          />
                          <span className="text-gray-700 dark:text-gray-300 text-sm leading-snug">
                            {opt}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      B3. How likely are you to recommend this summit to a peer?
                      (0 = Not at all, 10 = Extremely)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <label
                          key={num}
                          className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg border-2 cursor-pointer transition-all ${formData.npsScore === String(num) ? "bg-[#155e9e] border-[#155e9e] text-white" : "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-[#155e9e]"}`}
                        >
                          <input
                            type="radio"
                            name="npsScore"
                            value={num}
                            onChange={handleChange}
                            className="hidden"
                          />
                          <span className="font-bold">{num}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      B4. In one sentence: what will you do differently as a
                      result of these two days?
                    </label>
                    <textarea
                      name="takeaway"
                      rows={2}
                      value={formData.takeaway}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] outline-none resize-none"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      B5. May we share your answer to B4 as a testimonial?
                    </label>
                    <div className="flex flex-wrap gap-4">
                      {[
                        "Yes, attributed to me & my organisation",
                        "Yes, but anonymised",
                        "No",
                      ].map((opt) => (
                        <label
                          key={opt}
                          className="flex items-center space-x-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="testimonialConsent"
                            value={opt}
                            onChange={handleChange}
                            className="w-4 h-4 text-[#155e9e] focus:ring-[#155e9e]"
                          />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {opt}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      B6. What would have made the summit more valuable to you?
                    </label>
                    <textarea
                      name="moreValuable"
                      rows={2}
                      value={formData.moreValuable}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] outline-none resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* SECTION C */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-start mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
                    <span className="bg-[#155e9e] text-white w-8 h-8 rounded-md flex items-center justify-center text-sm mr-3">
                      C
                    </span>
                    Your Capability Snapshot
                  </h3>
                  <div className="bg-cyan-50 dark:bg-blue-900/20 px-4 py-2 rounded-lg border border-cyan-100 dark:border-blue-800/50 text-center">
                    <span className="block text-[10px] uppercase tracking-widest text-cyan-700 dark:text-cyan-400 font-bold mb-1">
                      Aggregate Score
                    </span>
                    <span className="text-2xl font-black text-[#155e9e] dark:text-white">
                      {calculateAggregate()}{" "}
                      <span className="text-sm font-normal text-gray-400">
                        / 40
                      </span>
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                  Score your organisation honestly on each dimension. (1 = None,
                  2 = Weak, 3 = Developing, 4 = Capable, 5 = Advanced)
                </p>

                <div className="space-y-4">
                  {capabilityQuestions.map((q) => (
                    <div
                      key={q.id}
                      className="flex flex-col md:flex-row md:items-center justify-between bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800"
                    >
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-3 md:mb-0 md:pr-4">
                        {q.label}
                      </span>
                      <div className="flex gap-2 shrink-0">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <label
                            key={num}
                            className={`w-10 h-10 flex items-center justify-center rounded-lg border cursor-pointer transition-all ${formData.capabilities[q.id as keyof typeof formData.capabilities] === String(num) ? "bg-[#155e9e] border-[#155e9e] text-white" : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:border-[#155e9e]"}`}
                          >
                            <input
                              type="radio"
                              name={q.id}
                              value={num}
                              onChange={(e) =>
                                handleNestedChange(
                                  "capabilities",
                                  q.id,
                                  e.target.value,
                                )
                              }
                              className="hidden"
                            />
                            <span className="font-bold text-sm">{num}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION D */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4 flex items-center">
                  <span className="bg-[#155e9e] text-white w-8 h-8 rounded-md flex items-center justify-center text-sm mr-3">
                    D
                  </span>
                  Your Priorities & Challenges
                </h3>

                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      D1. Which of these sound like your organisation? (tick all
                      that apply)
                    </label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        "We can’t price cyber risk — we decline most of it.",
                        "We’ve never handled a cyber claim and wouldn’t know where to start.",
                        "Our underwriting runs on spreadsheets and disconnected systems.",
                        "We’re not sure what the NIC directives require of us.",
                        "We want to enter the cyber market but don’t know where to start.",
                        "We price largely on judgement — we have little or no data.",
                        "Cyber expertise sits with one or two people — we’re exposed if they leave.",
                        "We need reinsurance support but can’t answer reinsurers’ questions.",
                      ].map((opt) => (
                        <label
                          key={opt}
                          className="flex items-start space-x-3 cursor-pointer bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-100 dark:border-gray-800"
                        >
                          <input
                            type="checkbox"
                            checked={formData.soundsLikeOrg.includes(opt)}
                            onChange={() =>
                              handleCheckboxArray("soundsLikeOrg", opt)
                            }
                            className="w-4 h-4 mt-0.5 text-[#155e9e] focus:ring-[#155e9e] rounded"
                          />
                          <span className="text-gray-700 dark:text-gray-300 text-sm leading-snug">
                            "{opt}"
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      D2. What are your top three priorities for cyber insurance
                      over the next 90 days?
                    </label>
                    <textarea
                      name="priorities"
                      rows={3}
                      value={formData.priorities}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] outline-none resize-none"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      D3. What is the single biggest barrier holding you back
                      right now?
                    </label>
                    <textarea
                      name="biggestBarrier"
                      rows={2}
                      value={formData.biggestBarrier}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] outline-none resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* SECTION E */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 overflow-hidden">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 flex items-center">
                  <span className="bg-[#155e9e] text-white w-8 h-8 rounded-md flex items-center justify-center text-sm mr-3">
                    E
                  </span>
                  Regulatory Readiness
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
                  The NIC Cyber Security Directives are mandatory for insurers
                  and reinsurers. Where does your organisation stand on each?
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr>
                        <th className="py-3 px-4 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider bg-gray-50 dark:bg-gray-900 rounded-tl-lg">
                          Requirement
                        </th>
                        <th className="py-3 px-2 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider text-center bg-gray-50 dark:bg-gray-900">
                          Yes
                        </th>
                        <th className="py-3 px-2 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider text-center bg-gray-50 dark:bg-gray-900">
                          In Progress
                        </th>
                        <th className="py-3 px-2 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider text-center bg-gray-50 dark:bg-gray-900">
                          No
                        </th>
                        <th className="py-3 px-2 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider text-center bg-gray-50 dark:bg-gray-900 rounded-tr-lg">
                          Not Sure
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                      {readinessQuestions.map((q) => (
                        <tr
                          key={q.id}
                          className="hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors"
                        >
                          <td className="py-4 px-4 text-sm text-gray-800 dark:text-gray-200 pr-8">
                            {q.label}
                          </td>
                          {["Yes", "In progress", "No", "Not sure"].map(
                            (opt) => (
                              <td key={opt} className="py-4 px-2 text-center">
                                <input
                                  type="radio"
                                  name={`readiness_${q.id}`}
                                  value={opt}
                                  onChange={(e) =>
                                    handleNestedChange(
                                      "readiness",
                                      q.id,
                                      e.target.value,
                                    )
                                  }
                                  checked={
                                    formData.readiness[
                                      q.id as keyof typeof formData.readiness
                                    ] === opt
                                  }
                                  className="w-5 h-5 text-[#155e9e] focus:ring-[#155e9e] cursor-pointer"
                                />
                              </td>
                            ),
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SECTION F */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4 flex items-center">
                  <span className="bg-[#155e9e] text-white w-8 h-8 rounded-md flex items-center justify-center text-sm mr-3">
                    F
                  </span>
                  Your 90-Day Commitment
                </h3>

                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                      F1. The three priority actions you committed to in Module
                      12:
                    </label>
                    <div className="space-y-4">
                      {[0, 1, 2].map((idx) => (
                        <div
                          key={idx}
                          className="flex flex-col md:flex-row gap-3 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-800"
                        >
                          <div className="flex items-center text-gray-400 font-bold mr-2 text-lg">
                            {idx + 1}.
                          </div>
                          <input
                            type="text"
                            placeholder="Priority Action"
                            value={formData.actions[idx].action}
                            onChange={(e) =>
                              handleActionChange(idx, "action", e.target.value)
                            }
                            className="grow px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm outline-none focus:border-[#155e9e]"
                          />
                          <input
                            type="text"
                            placeholder="Owner"
                            value={formData.actions[idx].owner}
                            onChange={(e) =>
                              handleActionChange(idx, "owner", e.target.value)
                            }
                            className="w-full md:w-1/4 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm outline-none focus:border-[#155e9e]"
                          />
                          <input
                            type="date"
                            placeholder="By When (Date)"
                            value={formData.actions[idx].date}
                            onChange={(e) =>
                              handleActionChange(idx, "date", e.target.value)
                            }
                            className="w-full md:w-1/4 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm outline-none focus:border-[#155e9e]"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      F2. Your technology decision (as marked in the room):
                    </label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        "Pilot CIDT™/CIDA™ on live submissions",
                        "Full licence",
                        "Explore strategic partnership",
                        "Undecided",
                      ].map((opt) => (
                        <label
                          key={opt}
                          className="flex items-center space-x-3 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="techDecision"
                            value={opt}
                            onChange={handleChange}
                            className="w-4 h-4 text-[#155e9e] focus:ring-[#155e9e]"
                          />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {opt}
                          </span>
                        </label>
                      ))}
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="techDecision"
                          value="Defer"
                          onChange={handleChange}
                          className="w-4 h-4 text-[#155e9e] focus:ring-[#155e9e]"
                        />
                        <span className="text-gray-700 dark:text-gray-300 text-sm whitespace-nowrap">
                          Defer with review date:
                        </span>
                        <input
                          type="date"
                          name="deferDate"
                          value={formData.deferDate}
                          onChange={handleChange}
                          disabled={formData.techDecision !== "Defer"}
                          placeholder="DD/MM/YYYY"
                          className="w-full px-3 py-1 text-sm border-b border-gray-300 dark:border-gray-600 bg-transparent outline-none focus:border-[#155e9e] disabled:opacity-50"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      F3. By 29 September 2026, what will be measurably
                      different in your organisation?
                    </label>
                    <textarea
                      name="septemberDifference"
                      rows={2}
                      value={formData.septemberDifference}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] outline-none resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* SECTION G */}
              <div className="bg-[#f0f9ff] dark:bg-blue-900/10 rounded-2xl shadow-xl p-8 border-2 border-[#155e9e]/30">
                <h3 className="text-2xl font-bold text-[#155e9e] dark:text-cyan-400 mb-6 border-b border-[#155e9e]/20 pb-4 flex items-center">
                  <span className="bg-[#155e9e] text-white w-8 h-8 rounded-md flex items-center justify-center text-sm mr-3">
                    G
                  </span>
                  How We Can Support You
                </h3>

                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-bold text-gray-800 dark:text-white mb-3">
                      G1. Which would you like to explore over the next 90 days?
                      (tick all that apply)
                    </label>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-4">
                      {[
                        "Discounted CIDA™ 360° Assessment",
                        "Cyber insurance capability audit",
                        "NIC compliance-gap review",
                        "IR readiness review / tabletop",
                        "CIDT™ / CIDA™ pilot",
                        "Cyber product design",
                        "Underwriting framework (11-Factor)",
                        "Actuarial & pricing methodology",
                        "Claims framework development",
                        "Reinsurance structuring advisory",
                        "Board governance & regulatory advisory",
                        "In-house training & certification",
                        "Executive coaching",
                        "African cyber market intelligence",
                        "A partnership conversation",
                      ].map((opt) => (
                        <label
                          key={opt}
                          className="flex items-start space-x-2 cursor-pointer bg-white dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-700 shadow-sm hover:border-[#155e9e] transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={formData.exploreSupport.includes(opt)}
                            onChange={() =>
                              handleCheckboxArray("exploreSupport", opt)
                            }
                            className="w-4 h-4 mt-0.5 text-[#155e9e] focus:ring-[#155e9e] rounded"
                          />
                          <span className="text-gray-700 dark:text-gray-300 text-xs font-medium leading-tight">
                            {opt}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                      <label className="block text-sm font-bold text-gray-800 dark:text-white mb-3">
                        G2. Would you like a complimentary 30-min strategy call
                        with the faculty?
                      </label>
                      <div className="flex gap-4 mb-4">
                        {["Yes — please contact me", "Maybe later", "No"].map(
                          (opt) => (
                            <label
                              key={opt}
                              className="flex items-center space-x-2 cursor-pointer"
                            >
                              <input
                                type="radio"
                                name="strategyCall"
                                value={opt}
                                onChange={handleChange}
                                className="w-4 h-4 text-[#155e9e] focus:ring-[#155e9e]"
                              />
                              <span className="text-gray-700 dark:text-gray-300 text-sm">
                                {opt.split(" ")[0]}
                              </span>
                            </label>
                          ),
                        )}
                      </div>
                      <input
                        type="text"
                        name="bestTime"
                        placeholder="Best days / times to reach you"
                        value={formData.bestTime}
                        onChange={handleChange}
                        disabled={formData.strategyCall === "No"}
                        className="w-full px-3 py-2 text-sm border-b border-gray-300 dark:border-gray-600 bg-transparent outline-none focus:border-[#155e9e] disabled:opacity-50"
                      />
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                      <label className="block text-sm font-bold text-gray-800 dark:text-white mb-3">
                        G4. Join the AAJIMATICS alumni community (private group
                        + insight reports)?
                      </label>
                      <div className="flex gap-6">
                        {["Yes", "No"].map((opt) => (
                          <label
                            key={opt}
                            className="flex items-center space-x-2 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="joinAlumni"
                              value={opt}
                              onChange={handleChange}
                              className="w-5 h-5 text-[#155e9e] focus:ring-[#155e9e]"
                            />
                            <span className="text-gray-800 dark:text-white font-medium">
                              {opt}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      G3. Who else in your organisation should be part of these
                      conversations? (name & role)
                    </label>
                    <textarea
                      name="whoElse"
                      rows={2}
                      value={formData.whoElse}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] outline-none resize-none"
                    ></textarea>
                  </div>

                  {/* CONSENT & SUBMIT */}
                  <div className="mt-8 pt-6 border-t border-[#155e9e]/20">
                    <label className="flex items-start space-x-4 cursor-pointer p-4 bg-white/50 dark:bg-gray-900/50 rounded-xl border border-cyan-100 dark:border-gray-700">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="w-5 h-5 mt-1 text-[#155e9e] focus:ring-[#155e9e] rounded"
                      />
                      <span className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed">
                        <strong>G5. Consent:</strong> I agree to AAJIMATICS
                        contacting me about the 90-day programme and related
                        services, and to my responses being used —
                        confidentially — to tailor that support. I understand I
                        can withdraw at any time by emailing
                        cfso2@aajimatics.com.
                      </span>
                    </label>

                    <button
                      type="submit"
                      className={`w-full mt-6 text-white font-bold py-5 rounded-xl transition-all shadow-lg flex justify-center items-center text-lg ${formData.consent ? "bg-[#155e9e] hover:bg-[#0b1a3e] cursor-pointer" : "bg-gray-400 cursor-not-allowed opacity-70"}`}
                    >
                      Submit Questionnaire
                      <span className="material-icons-outlined ml-2">send</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </main>
      )}

      <Footer />
    </div>
  );
};

export default PostSummitSurvey;
