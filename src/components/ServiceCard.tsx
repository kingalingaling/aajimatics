import type { ReactNode } from "react";

const ServiceCard = ({
  title,
  icon,
}: {
  title: string;
  icon: ReactNode;
}) => (
  <div className="bg-[#1e60a6] rounded-lg p-6 h-48 flex flex-col justify-between shadow-lg hover:scale-[1.02] transition-transform cursor-default">
    <div className="text-white w-12 h-12">
      <svg
        className="w-full h-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {icon}
      </svg>
    </div>
    <h4 className="text-white font-semibold text-lg leading-tight">{title}</h4>
  </div>
);

export default ServiceCard;
