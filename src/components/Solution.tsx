import React from "react";

interface Solution {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  details: string;
  color: string; // Dynamic hex code (e.g., "#0b1a3e")

  // Optional properties
  link: string | null;
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
    // CONTAINER: Relative to hold absolute children, h-full to stretch in grid
    <div className="relative w-full md:h-[619px] rounded-lg overflow-hidden shadow-xl group bg-gray-900">
      {/* 1. BACKGROUND IMAGE LAYER */}
      {/* Covers the entire card space */}
      <img
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        src={imageSrc}
      />

      {/* 2. GRADIENT OVERLAY LAYER */}
      {/* Sits on top of image, behind text. Fades from solid Color (bottom) to Transparent (top) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          // This gradient starts solid at the bottom (0%), stays semi-opaque up to 60%, then fades out
          background: `linear-gradient(to top, ${color} 0%, ${color}cc 50%, transparent 100%)`,
        }}
      />

      {/* 3. CONTENT LAYER */}
      {/* Flex container aligned to the bottom (justify-end) */}
      <div className="relative z-10 h-full flex flex-col justify-end p-8">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>

        {/* Description */}
        <p className="text-gray-200 text-sm leading-relaxed mb-4">{details}</p>

        {/* Conditional Offerings List */}
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

        {/* Conditional Link */}
        {link && (
          <a
            className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center"
            href={link}
          >
            Learn More <span className="ml-2">→</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default Solution;
