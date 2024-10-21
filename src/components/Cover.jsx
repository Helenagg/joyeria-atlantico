import { useEffect, useState } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";



const Cover = ({ coverImages }) => {
  

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % coverImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + coverImages.length) % coverImages.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
        nextImage()
    }, 5000)

    return () => clearTimeout(interval)
  }, [])

  return (
    <div id='gallery' className='relative w-full'>
      <div className='relative h-screen overflow-hidden rounded-lg md:h-96'>
        {coverImages.map((image) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              currentIndex === image.id - 1 ? 'opacity-100' : 'opacity-0'
            }`}>
            <img
              src={image.url}
            //   className='block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            className=" w-full h-full object-scale-down"  
            alt={`Image ${image.id}`}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
    {coverImages.map((image, index) => (
      <button
        key={index}
        className={`w-3 h-3 rounded-full ${
          currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'
        }`}
        onClick={() => setCurrentIndex(index)}
        aria-label={`Go to slide ${index + 1}`}
      ></button>
    ))}
  </div>
      <button
        type='button'
        className='absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
        onClick={prevImage}
        >
        <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
          <IoIosArrowDropleft size={40} className="text-gray-600"/>
        </span>
      </button>
      <button
        type='button'
        className='absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
        onClick={nextImage}>
        <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
          <IoIosArrowDropright size={40} className="text-gray-600"/>
        </span>
      </button>
    </div>
  );
};

export default Cover;
