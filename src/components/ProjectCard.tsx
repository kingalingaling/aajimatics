import type { ReactNode } from "react";

const ProjectCard = ({ text, icon }: {text: string; icon: ReactNode}) => (
  <div className="bg-gray-200 dark:bg-gray-800 p-5 rounded-xl flex items-center shadow-sm">
    <div className="shrink-0 bg-[#155e9e] p-3 rounded-full flex items-center justify-center w-12 h-12">
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {icon}
      </svg>
    </div>
    <p className="ml-4 text-gray-700 dark:text-gray-200 font-medium text-sm md:text-base">
      {text}
    </p>
  </div>
);

export default ProjectCard