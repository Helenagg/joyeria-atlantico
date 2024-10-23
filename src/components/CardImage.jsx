const CardImage = ({ src, alt, isWatchesPage, description, price }) => {
  return (
    <div className={`w-full ${isWatchesPage ? '' : 'md:w-1/4'} mt-2 md:mt-0 md:p-4`}>
      <div className={`${isWatchesPage ? 'h-80' : 'h-72'} bg-white border border-secondary rounded-lg shadow shadow-secondary dark:bg-gray-800 dark:border-gray-700`}>
        <img
          src={src}
          alt={`Imagen ${alt}`}
          className={`object-contain ${isWatchesPage ? 'h-64' : 'h-full'} w-full p-3`}
          />
          {isWatchesPage && (
            <div className="text-sm text-primary font-semibold flex justify-between mx-6 my-2">
            <p>{description}</p>
            <p>{price}</p>
            </div>
          )}
      </div>
    </div>
  );
};

export default CardImage;
