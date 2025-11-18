import type { IconType } from "react-icons";

const CoreValueCard = ({
  icon,
  title,
  details,
}: {
  icon: IconType;
  title: string;
  details: string;
}) => {
  return (
    <div className="bg-primary text-white p-6 rounded-xl flex items-center space-x-5">
      <div className="bg-white p-3 rounded-md shrink-0">
        {icon({ size: 30, color: "black" })}
      </div>
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-200">{details}</p>
      </div>
    </div>
  );
};

export default CoreValueCard;
