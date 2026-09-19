import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Adjust path
import Footer from "../components/Footer"; // Adjust path
import heroBg from "../assets/images/hero-banner.webp"; // Reusing existing background image
import toast from "react-hot-toast";

const IcmrPreTrainingAssessment: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // --- Form State ---
  const [formData, setFormData] = useState({
    // Section A: Participant & Firm Details
    fullName: "",
    jobTitle: "",
    organisation: "",
    yearsInRole: "",
    email: "",
    phone: "",
    attendance: [] as string[],

    // Section B: AI & Automation Footprint
    aiTools: [] as string[],
    otherAiTool: "",
    vendors: "",
    incidents: "",

    // Section C: Governance & Compliance Readiness
    aiPolicy: "",
    dataPolicy: "",
    riskOwner: "",
    ndpcRegistered: "",
    hasDpo: "",

    // Section D: Priorities
    priority1: "",
    priority2: "",
    priority3: "",
    nightmareRisk: "",
    successDefinition: "",

    // Section E: Real Scenario (Optional)
    realScenario: "",

    // Section F: Questions
    panelQuestion: "",

    // Section G: Logistics
    dietary: "",
    accessibility: "",
    anythingElse: "",
  });

  // --- Handlers ---
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxArray = (
    field: "attendance" | "aiTools",
    value: string,
  ) => {
    setFormData((prev) => {
      const array = prev[field];
      if (array.includes(value)) {
        // If unchecking "Other", also clear the text input
        if (field === "aiTools" && value === "Other") {
          return {
            ...prev,
            [field]: array.filter((item) => item !== value),
            otherAiTool: "",
          };
        }
        return { ...prev, [field]: array.filter((item) => item !== value) };
      } else {
        // If checking "None", clear all other tools
        if (
          field === "aiTools" &&
          value === "None of the above currently in use"
        ) {
          return { ...prev, [field]: [value], otherAiTool: "" };
        }
        // If checking a tool, remove "None"
        if (
          field === "aiTools" &&
          value !== "None of the above currently in use"
        ) {
          const filtered = array.filter(
            (item) => item !== "None of the above currently in use",
          );
          return { ...prev, [field]: [...filtered, value] };
        }

        return { ...prev, [field]: [...array, value] };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // 2. Array Validations
    if (formData.attendance.length === 0) {
      toast.error("Please select your attendance type in Section A.");
      return;
    }
    if (formData.aiTools.length === 0) {
      toast.error(
        "Please select at least one option for your firm's AI footprint in Section B.",
      );
      return;
    }

    // Conditional Validation for "Other" AI Tool
    if (formData.aiTools.includes("Other") && !formData.otherAiTool.trim()) {
      toast.error(
        "Please specify the 'Other' AI tool your firm uses in Section B.",
      );
      return;
    }

    // 3. Priorities Validation
    if (!formData.priority1 || !formData.priority2 || !formData.priority3) {
      toast.error("Please rank your top three priority modules in Section D.");
      return;
    }
    const priorities = [
      formData.priority1,
      formData.priority2,
      formData.priority3,
    ];
    const uniquePriorities = new Set(priorities);
    if (uniquePriorities.size !== 3) {
      toast.error("Please select three distinct modules for your priorities.");
      return;
    }

    // 4. Standard Required Fields Validation (Excluding Optional Fields)
    const requiredBasicFields = [
      "fullName",
      "jobTitle",
      "organisation",
      "yearsInRole",
      "phone",
      "vendors",
      "incidents",
      "aiPolicy",
      "dataPolicy",
      "riskOwner",
      "ndpcRegistered",
      "hasDpo",
      "nightmareRisk",
      "successDefinition",
      "panelQuestion",
    ];

    for (const field of requiredBasicFields) {
      if (!formData[field as keyof typeof formData]) {
        toast.error("Please ensure all mandatory questions are answered.");
        return;
      }
    }

    // --- Validation Passed, Trigger API Call ---
    const loadingToast = toast.loading("Submitting your assessment...");

    try {
      const response = await fetch(
        "https://aajimatics-backend.onrender.com/api/icmr-pre-training",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Assessment submitted successfully!", {
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
      console.error("Error submitting assessment:", error);
      toast.error(
        "Network error. Please check your connection and try again.",
        { id: loadingToast },
      );
    }
  };

  // --- Constants for Rendering ---
  const moduleOptions = [
    "Module 1 — AI & Machine Learning Demystified for Registrars",
    "Module 2 — Algorithmic Risk in Capital Market Operations",
    "Module 3 — SEC Nigeria's Emerging AI Posture",
    "Module 4 — Ethical AI & Bias in Shareholder Data Management",
    "Module 5 — Building an AI Governance Framework",
    "Module 6 — Decision Audit Trails & Explainability",
    "Module 7 — Third-Party AI & Vendor Risk Management",
    "Module 8 — Capstone Workshop: Governance Action Plan",
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
              Assessment Received
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
              Thank you,{" "}
              <span className="font-semibold">
                {formData.fullName || "Participant"}
              </span>
              . Your scope & needs assessment has been securely recorded. This
              helps us ensure the live exercises and discussions reflect your
              real operational needs.
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
                  fact_check
                </span>
                <span>ICMR-AI-GOV-001</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
                Pre-Training Participant Scope & Needs Assessment
              </h1>
              <p className="text-xl text-cyan-100 font-light max-w-2xl mx-auto mb-8">
                For completion by every confirmed participant ahead of the 21-22
                September 2026 training.
              </p>

              {/* Info Box */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-left text-sm text-gray-200 space-y-4 shadow-xl">
                <p>
                  <strong className="text-white">Purpose of this form:</strong>{" "}
                  This short assessment helps your facilitator, David Abodunrin,
                  calibrate the two days to the room — pitching each module at
                  the right depth, drawing examples from tools you actually use,
                  and making sure the live exercises reflect real registrar
                  operations.
                </p>
                <p>
                  <strong className="text-cyan-300">
                    Confidentiality Notice:
                  </strong>{" "}
                  Responses are read only by the facilitation team and are not
                  shared with other participants or firms. Do not include
                  confidential shareholder data anywhere in this form — describe
                  systems and processes in general terms only.
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
                  Participant & Firm Details
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
                      Registrar Firm / Organisation *
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
                      Years in Current Role *
                    </label>
                    <input
                      type="text"
                      name="yearsInRole"
                      required
                      value={formData.yearsInRole}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address *
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
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Attendance (tick all that apply) *
                  </label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Day 1 (21 Sept)",
                      "Day 2 (22 Sept)",
                    //   "Both days (full programme)",
                      "Attending online rather than in-person",
                    ].map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center space-x-3 cursor-pointer bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-100 dark:border-gray-800 hover:border-[#155e9e] transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={formData.attendance.includes(opt)}
                          onChange={() =>
                            handleCheckboxArray("attendance", opt)
                          }
                          className="w-4 h-4 text-[#155e9e] focus:ring-[#155e9e] rounded"
                        />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          {opt}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* SECTION B */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4 flex items-center">
                  <span className="bg-[#155e9e] text-white w-8 h-8 rounded-md flex items-center justify-center text-sm mr-3">
                    B
                  </span>
                  Your Firm's Current AI & Automation Footprint
                </h3>

                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Which of the following does your firm currently use, in
                      any form? (tick all that apply) *
                    </label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        "KYC / onboarding risk-scoring tool",
                        "Customer-facing chatbot or query tool",
                        "Fraud / anomaly-detection tool",
                        "Dividend or corporate-action automation",
                        "Document processing / OCR / data-extraction tool",
                        "AI-assisted reporting or analytics dashboard",
                        "None of the above currently in use",
                        "Other",
                      ].map((opt) => (
                        <label
                          key={opt}
                          className="flex items-start space-x-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={formData.aiTools.includes(opt)}
                            onChange={() => handleCheckboxArray("aiTools", opt)}
                            className="w-4 h-4 mt-0.5 text-[#155e9e] focus:ring-[#155e9e] rounded border-gray-300"
                          />
                          <span className="text-gray-700 dark:text-gray-300 text-sm leading-snug">
                            {opt}
                          </span>
                        </label>
                      ))}
                    </div>
                    {/* Dynamic Text Input for "Other" */}
                    {formData.aiTools.includes("Other") && (
                      <div className="mt-3 ml-7">
                        <input
                          type="text"
                          name="otherAiTool"
                          placeholder="Please specify the other tool..."
                          required
                          value={formData.otherAiTool}
                          onChange={handleChange}
                          className="w-full sm:w-1/2 px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-sm outline-none focus:border-[#155e9e]"
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      For each tool ticked above, please name the vendor (or
                      note “in-house built”): *
                    </label>
                    <textarea
                      name="vendors"
                      rows={2}
                      required
                      value={formData.vendors}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] outline-none resize-none"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Has your firm experienced any incident, near-miss, or
                      customer complaint linked to an automated or algorithmic
                      tool? (brief description only — no confidential data) *
                    </label>
                    <textarea
                      name="incidents"
                      rows={2}
                      required
                      value={formData.incidents}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] outline-none resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* SECTION C */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4 flex items-center">
                  <span className="bg-[#155e9e] text-white w-8 h-8 rounded-md flex items-center justify-center text-sm mr-3">
                    C
                  </span>
                  Governance & Compliance Readiness
                </h3>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Does your firm currently have a written AI policy? *
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          "Yes",
                          "No",
                          "In progress / under development",
                          "Unsure",
                        ].map((opt) => (
                          <label
                            key={opt}
                            className="flex items-center space-x-2 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="aiPolicy"
                              value={opt}
                              required
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
                        Does your firm have a written data-governance policy? *
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          "Yes",
                          "No",
                          "In progress / under development",
                          "Unsure",
                        ].map((opt) => (
                          <label
                            key={opt}
                            className="flex items-center space-x-2 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="dataPolicy"
                              value={opt}
                              required
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

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Who currently owns AI-related risk decisions at your firm?
                      (role/title — or write “no one currently”) *
                    </label>
                    <input
                      type="text"
                      name="riskOwner"
                      required
                      value={formData.riskOwner}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] outline-none"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Is your firm registered with the NDPC under the NDPA
                        2023? *
                      </label>
                      <div className="flex gap-4">
                        {["Yes", "No", "Unsure"].map((opt) => (
                          <label
                            key={opt}
                            className="flex items-center space-x-2 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="ndpcRegistered"
                              value={opt}
                              required
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
                        Do you have a designated Data Protection Officer (DPO)?
                        *
                      </label>
                      <div className="flex gap-4">
                        {["Yes", "No"].map((opt) => (
                          <label
                            key={opt}
                            className="flex items-center space-x-2 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="hasDpo"
                              value={opt}
                              required
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
              </div>

              {/* SECTION D */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4 flex items-center">
                  <span className="bg-[#155e9e] text-white w-8 h-8 rounded-md flex items-center justify-center text-sm mr-3">
                    D
                  </span>
                  Your Priorities For The Two Days
                </h3>

                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-bold text-gray-800 dark:text-white mb-3">
                      Rank your top THREE priority areas from the curriculum:
                    </label>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {[1, 2, 3].map((num) => (
                        <div
                          key={num}
                          className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-100 dark:border-gray-800"
                        >
                          <label className="block text-xs uppercase tracking-widest text-[#155e9e] dark:text-cyan-400 font-bold mb-2">
                            Priority Rank {num}
                          </label>
                          <select
                            name={`priority${num}`}
                            required
                            value={
                              formData[
                                `priority${num}` as keyof typeof formData
                              ] as string
                            }
                            onChange={handleChange}
                            className="w-full bg-transparent text-sm text-gray-800 dark:text-white border-b border-gray-300 dark:border-gray-600 outline-none pb-1"
                          >
                            <option value="" disabled>
                              Select Module...
                            </option>
                            {moduleOptions.map((mod) => {
                              // Disable this option if it's already selected in a DIFFERENT priority field
                              const isSelectedElsewhere =
                                (num !== 1 && formData.priority1 === mod) ||
                                (num !== 2 && formData.priority2 === mod) ||
                                (num !== 3 && formData.priority3 === mod);

                              return (
                                <option
                                  key={mod}
                                  value={mod}
                                  disabled={isSelectedElsewhere}
                                  className={
                                    isSelectedElsewhere
                                      ? "text-gray-400 dark:text-gray-600"
                                      : ""
                                  }
                                >
                                  {mod}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      What is the one AI-related risk keeping you up at night,
                      professionally? *
                    </label>
                    <textarea
                      name="nightmareRisk"
                      rows={2}
                      required
                      value={formData.nightmareRisk}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] outline-none resize-none"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      What would make this training a genuine success for you
                      and your firm? *
                    </label>
                    <textarea
                      name="successDefinition"
                      rows={2}
                      required
                      value={formData.successDefinition}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] outline-none resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* SECTION E (OPTIONAL) */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
                    <span className="bg-[#155e9e] text-white w-8 h-8 rounded-md flex items-center justify-center text-sm mr-3">
                      E
                    </span>
                    A Real Scenario From Your Desk
                  </h3>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Optional
                  </span>
                </div>

                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    Without disclosing confidential shareholder data, briefly
                    describe one automated or AI-adjacent process at your firm
                    that you would find valuable to examine during the training
                    — for example, a chatbot, a screening tool, a reporting
                    workflow, or a vendor system. Where useful, selected
                    (anonymised) examples may be used to enrich live discussion
                    and the Module 8 capstone exercise.
                  </p>
                  <textarea
                    name="realScenario"
                    rows={4}
                    value={formData.realScenario}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] outline-none resize-none"
                  ></textarea>
                </div>
              </div>

              {/* SECTION F */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4 flex items-center">
                  <span className="bg-[#155e9e] text-white w-8 h-8 rounded-md flex items-center justify-center text-sm mr-3">
                    F
                  </span>
                  Questions For The Panel & Facilitator
                </h3>

                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    Day 1 includes a live panel session (Module 3) with
                    Catherine Nwosu, Jonathan Eborah and Adekunle Ajiboye. If
                    you could ask the panel or the facilitator one question
                    about AI governance in Nigeria's capital market, what would
                    it be? *
                  </p>
                  <textarea
                    name="panelQuestion"
                    rows={2}
                    required
                    value={formData.panelQuestion}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] outline-none resize-none"
                  ></textarea>
                </div>
              </div>

              {/* SECTION G */}
              <div className="bg-[#f0f9ff] dark:bg-blue-900/10 rounded-2xl shadow-xl p-8 border-2 border-[#155e9e]/30">
                <div className="flex justify-between items-center mb-6 border-b border-[#155e9e]/20 pb-4">
                  <h3 className="text-2xl font-bold text-[#155e9e] dark:text-cyan-400 flex items-center">
                    <span className="bg-[#155e9e] text-white w-8 h-8 rounded-md flex items-center justify-center text-sm mr-3">
                      G
                    </span>
                    Logistics
                  </h3>
                  <span className="bg-[#155e9e]/10 text-[#155e9e] dark:text-cyan-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Optional
                  </span>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Dietary Requirements
                      </label>
                      <input
                        type="text"
                        name="dietary"
                        value={formData.dietary}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Accessibility Needs
                      </label>
                      <input
                        type="text"
                        name="accessibility"
                        value={formData.accessibility}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Anything else the facilitation team should know ahead of
                      the training:
                    </label>
                    <textarea
                      name="anythingElse"
                      rows={2}
                      value={formData.anythingElse}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] outline-none resize-none"
                    ></textarea>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="w-full text-white font-bold py-5 rounded-xl transition-all shadow-lg flex justify-center items-center text-lg bg-[#155e9e] hover:bg-[#0b1a3e] cursor-pointer"
                    >
                      Submit Assessment
                      <span className="material-icons-outlined ml-2">send</span>
                    </button>
                    {/* <p className="text-center text-sm text-gray-500 mt-4">
                      Please return this completed form at least two working
                      days before the training begins.
                    </p> */}
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

export default IcmrPreTrainingAssessment;
