interface partner {
  id: string;
  alt: string;
  imageSrc: string;
}

const Partner:React.FC<partner> = ({alt, imageSrc}) => {
  return (
    <img
      alt={alt}
      className="h-12 md:h-16 w-auto object-contain"
      src={imageSrc}
    />
  );
};

export default Partner;
