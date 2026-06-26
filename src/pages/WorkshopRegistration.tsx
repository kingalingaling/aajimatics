import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import toast from "react-hot-toast";
import SuccessView from "../components/workshop/SuccessView";
import IcmrView from "../components/workshop/IcmrView";
import WaicaView from "../components/workshop/WaicaView";

const VALID_CODES = ["WAICA", "ICMR"];

// ============================================================================
// MAIN CONTROLLER COMPONENT
// ============================================================================
const WorkshopRegistration: React.FC = () => {
  const [tempCodeInput, setTempCodeInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(() => {
    return localStorage.getItem("aajimaticsRegistrationSuccess") === "true";
  });

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
    waicaNumber: "", // "Yes" or "No" for WAICA
    icmrRegNumber: "", // "Yes" or "No" for ICMR
    country: "",
    participationType: "In-Person", // Used primarily for ICMR
    accessCode: "", // Stored valid code ("WAICA" or "ICMR")
  });

  const isWaica = formData.accessCode === "WAICA";

  // --- Countdown Logic ---
  useEffect(() => {
    if (!formData.accessCode) return;

    // Set Target Date based on the entered code
    const targetDateString =
      formData.accessCode === "WAICA"
        ? "2026-06-11T07:30:00"
        : "2026-06-08T08:30:00";

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
  }, [formData.accessCode]);

  // --- Handlers ---
  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();
    const normalizedCode = tempCodeInput.trim().toUpperCase();

    if (VALID_CODES.includes(normalizedCode)) {
      localStorage.setItem("aajimaticsWorkshopAccess", normalizedCode);
      setFormData((prev) => ({ ...prev, accessCode: normalizedCode }));
      toast.success("Access granted!");
    } else {
      toast.error("Invalid access code. Please try again.");
    }
  };

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
      // DYNAMIC ENDPOINT ROUTING
      const endpoint = isWaica
        ? "https://aajimatics-backend.onrender.com/api/register"
        : "https://aajimatics-backend.onrender.com/api/register-icmr";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Registration submitted successfully!", {
          id: loadingToast,
        });

        // Save submission state to local storage to handle accidental refreshes
        localStorage.setItem("aajimaticsRegistrationSuccess", "true");
        localStorage.setItem("aajimaticsLastRegisteredName", formData.name);

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

  const handleRegisterAnother = () => {
    localStorage.removeItem("aajimaticsRegistrationSuccess");
    localStorage.removeItem("aajimaticsLastRegisteredName");

    setFormData((prev) => ({
      ...prev,
      name: "",
      email: "",
      title: "",
      waicaNumber: "",
      icmrRegNumber: "",
      participationType: "In-Person",
    }));

    setIsSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // --- Render Logic ---
  return (
    <div className="font-display bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col">
      <Navbar />

      {!formData.accessCode ? (
        /* ================= GATE UI ================= */
        <main className="grow flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-md w-full border border-gray-100 dark:border-gray-700 text-center animate-fadeIn">
            <div className="w-16 h-16 bg-[#e0f2fe] dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-icons-outlined text-3xl text-[#155e9e] dark:text-cyan-400">
                lock
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Private Masterclass
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm">
              This registration is invite-only. Please enter your organization's
              access code to continue.
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
        /* ================= SUCCESS UI ================= */
        <SuccessView
          isWaica={isWaica}
          registeredName={
            formData.name ||
            localStorage.getItem("aajimaticsLastRegisteredName") ||
            "Participant"
          }
          handleRegisterAnother={handleRegisterAnother}
        />
      ) : (
        /* ================= WORKSHOP UI ================= */
        <main className="grow animate-fadeIn">
          {isWaica ? (
            <WaicaView
              // timeLeft={timeLeft}
              // formData={formData}
              // handleChange={handleChange}
              // handleSubmit={handleSubmit}
            />
          ) : (
            <IcmrView
              timeLeft={timeLeft}
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          )}
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
