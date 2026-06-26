import type {TimeLeft} from "./types";

const CountdownTimer = ({ timeLeft }: {timeLeft: TimeLeft}) => (
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
      <span className="text-4xl sm:text-6xl font-light opacity-50 mb-6">:</span>
      <div className="flex flex-col items-center">
        <span className="text-4xl sm:text-6xl font-bold tracking-tight">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
        <span className="text-xs uppercase tracking-widest mt-2 opacity-80">
          Hours
        </span>
      </div>
      <span className="text-4xl sm:text-6xl font-light opacity-50 mb-6">:</span>
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
      <div className="flex-col items-center hidden sm:flex">
        <span className="text-4xl sm:text-6xl font-bold tracking-tight">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
        <span className="text-xs uppercase tracking-widest mt-2 opacity-80">
          Seconds
        </span>
      </div>
    </div>
  </div>
);

export default CountdownTimer;