const CardImage = ({ src, alt }) => {
  return (
    <div className='w-full md:w-1/4 mt-2 md:mt-0 md:p-4'>
      <div className='h-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <img
          src={src}
          alt={`Imagen ${alt}`}
          className='object-contain h-full w-full p-2'
        />
      </div>
    </div>
  );
};

export default CardImage;
