const CardImage = ({ src, alt, isWatchesPage, description, model }) => {
  return (
    <div className={`w-full mt-2 md:mt-0 md:p-4`}>
      <div className={`${isWatchesPage ? 'h-80' : 'h-72'} bg-white border border-secondary rounded-lg shadow shadow-secondary dark:bg-gray-800 dark:border-gray-700`}>
        <img
          src={src}
          alt={`Imagen ${alt}`}
          className={`object-contain ${isWatchesPage ? 'h-64 w-full' : 'h-full w-64'}  p-3`}
          />
          {isWatchesPage && (
            <div className="text-sm text-primary font-semibold flex justify-between mx-6 my-2">
            <p>{description}</p>
            <p>{model}</p>
            </div>
          )}
      </div>
    </div>
  );
};

export default CardImage;
