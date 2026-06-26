const SuccessView = ({
  isWaica,
  registeredName,
  handleRegisterAnother,
}: { isWaica: boolean; registeredName: string; handleRegisterAnother: () => void }) => (
  <main className="grow flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 animate-fadeIn">
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 max-w-3xl w-full border border-gray-100 dark:border-gray-700 text-center animate-fadeIn">
      <div className="w-20 h-20 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-green-100 dark:border-green-800/30">
        <span className="material-icons-outlined text-5xl text-green-500 dark:text-green-400">
          check_circle
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
        Registration Received!
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
        Thank you,{" "}
        <span className="font-semibold text-gray-800 dark:text-white">
          {registeredName}
        </span>
        . Your details have been securely recorded.
        {!isWaica &&
          " To confirm your slot, please proceed with your payment below."}
      </p>

      {!isWaica && (
        <div className="bg-[#f0f9ff] dark:bg-blue-900/10 border-2 border-[#155e9e] rounded-xl p-6 mb-10 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#155e9e] opacity-5 rounded-bl-full pointer-events-none"></div>
          <h3 className="text-xl font-bold text-[#155e9e] dark:text-cyan-400 mb-4 flex items-center">
            <span className="material-icons-outlined mr-2">
              account_balance
            </span>
            Payment Details
          </h3>
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-[#155e9e]/20 dark:border-cyan-900/30 mb-5 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <span className="block text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider font-semibold mb-1">
                  Account Name
                </span>
                <strong className="text-gray-900 dark:text-white text-base">
                  Institute of Capital Market Registrars
                </strong>
              </div>
              <div>
                <span className="block text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider font-semibold mb-1">
                  Bank Name
                </span>
                <strong className="text-gray-900 dark:text-white text-base">
                  First Bank of Nigeria (FBN)
                </strong>
              </div>
              <div className="sm:col-span-2 mt-2 pt-4 border-t border-gray-100 dark:border-gray-700">
                <span className="block text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider font-semibold mb-1">
                  Account Number
                </span>
                <strong className="text-3xl text-[#155e9e] dark:text-cyan-400 font-black tracking-widest select-all">
                  2005852511
                </strong>
              </div>
            </div>
          </div>
          <div className="flex items-start bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800/30">
            <span className="material-icons-outlined text-yellow-600 dark:text-yellow-500 mr-3 mt-0.5">
              info
            </span>
            <p className="text-sm text-yellow-800 dark:text-yellow-200 leading-relaxed">
              <strong className="block mb-1">Action Required:</strong>
              Please forward your evidence of payment to{" "}
              <a
                href="mailto:workshops@aajimatics.com"
                className="font-bold underline hover:text-yellow-900 dark:hover:text-yellow-100"
              >
                workshops@aajimatics.com
              </a>{" "}
              to finalize your registration.
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={handleRegisterAnother}
          className="inline-flex justify-center items-center w-full sm:w-auto bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 shadow-sm cursor-pointer"
        >
          Register Another Participant
          <span className="material-icons-outlined ml-2 text-sm">
            person_add
          </span>
        </button>
        <a
          href="/"
          className="inline-flex justify-center items-center w-full sm:w-auto bg-[#155e9e] hover:bg-[#0b1a3e] text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 shadow-md cursor-pointer"
        >
          Return to Homepage
          <span className="material-icons-outlined ml-2 text-sm">home</span>
        </a>
      </div>
    </div>
  </main>
);

export default SuccessView;