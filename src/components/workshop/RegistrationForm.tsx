import type { FormData } from "./types";
import type { handleChange, handleSubmit } from "./types";

const RegistrationForm = ({
  formData,
  handleChange,
  handleSubmit,
  isWaica,
}: {
  formData: FormData;
  handleChange: handleChange;
  handleSubmit: handleSubmit;
  isWaica: boolean;
}) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 sticky top-32">
    <div className="text-center mb-8">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
        Request Invitation
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
        Space is strictly limited. Please fill out your details below to secure
        your spot.
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

      <div>
        <label
          htmlFor={isWaica ? "waicaNumber" : "icmrRegNumber"}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Are you a registered member of {formData.accessCode}? *
        </label>
        <select
          id={isWaica ? "waicaNumber" : "icmrRegNumber"}
          name={isWaica ? "waicaNumber" : "icmrRegNumber"}
          required
          value={isWaica ? formData.waicaNumber : formData.icmrRegNumber}
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

      {!isWaica && (
        <div>
          <label
            htmlFor="participationType"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Participation Type *
          </label>
          <select
            id="participationType"
            name="participationType"
            required
            value={formData.participationType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-[#155e9e] focus:border-transparent transition-all outline-none appearance-none"
          >
            <option value="In-Person">In-Person Attendance</option>
            <option value="Online">Online Attendance (₦60,000)</option>
          </select>
        </div>
      )}

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
    </form>
  </div>
);

export default RegistrationForm;