const PartnerCard = ({ logo, name }:{ logo:string, name:string }) => (
  <div className="bg-white border border-blue-300 rounded-xl h-48 flex items-center justify-center p-8 hover:shadow-lg transition-shadow duration-300">
    <img 
      src={logo} 
      alt={name || "Partner Logo"} 
      className="max-w-full max-h-full object-contain" 
    />
  </div>
);

export default PartnerCard