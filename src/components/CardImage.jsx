const CardImage = ({ src, alt }) => {
  return (
    <div className="w-1/4 p-4">
    <div className='h-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <img src={src} alt={`Imagen ${alt}`} className='object-contain h-full w-full p-2' />
    </div>
    </div>
  );
};

export default CardImage;
