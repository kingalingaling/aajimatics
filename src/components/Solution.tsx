import React from "react";
import { Link } from "react-router-dom";

interface Solution {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  details: string;
  color: string;
  link: string;
  offeringsTitle?: string;
  offerings: string[] | null;
}

const Solution: React.FC<Solution> = ({
  title,
  imageSrc,
  imageAlt,
  details,
  link,
  color,
  offerings,
  offeringsTitle,
}) => {
  return (
    // CONTAINER: 'group' class allows children to react to hover
    <div className="relative w-full md:h-[619px] rounded-lg overflow-hidden shadow-xl group bg-gray-900">
      {/* 1. BACKGROUND IMAGE LAYER */}
      <img
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        src={imageSrc}
      />

      {/* 2. GRADIENT OVERLAY LAYER */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${color} 0%, ${color}cc 50%, transparent 100%)`,
        }}
      />

      {/* 3. CONTENT LAYER */}
      <div className="relative z-10 h-full flex flex-col justify-end p-8">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>

        <p className="text-gray-200 text-sm leading-relaxed mb-4">{details}</p>

        {offerings && (
          <div className="mb-4">
            <h4 className="font-semibold text-white mb-2">{offeringsTitle}</h4>
            <ul className="space-y-1 text-sm text-gray-300 list-disc list-inside">
              {offerings.map((offering, index) => (
                <li key={index}>{offering}</li>
              ))}
            </ul>
          </div>
        )}

        {/* MODIFIED LINK:
           1. opacity-0: Hidden by default.
           2. translate-y-4: Pushed down slightly.
           3. group-hover:opacity-100: Visible on hover.
           4. group-hover:translate-y-0: Moves up to position on hover.
        */}
        <div
          className="
      overflow-hidden max-h-0 opacity-0 
      transition-all duration-500 ease-out 
      group-hover:max-h-10 group-hover:opacity-100
    "
        >
          <Link
            className="font-semibold text-white hover:text-cyan-500 inline-flex items-center pt-2"
            to={link}
          >
            Learn More <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Solution;
