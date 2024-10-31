import { useState } from 'react';
import CardImage from './CardImage';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import AccessibleButton from './Accessibility/AccessibleButton';
import { urlBase } from '../utils/watchesData';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesToShow = 4;

  const handleNext = () => {
    if (currentIndex < images.length - imagesToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <div className='block md:hidden'>
        {images.map((img) => (
          <CardImage
            key={img.id}
            src={`${urlBase}${img.brand}/${img.src}`}
            alt={img.id}
          />
        ))}
      </div>
      <div className='hidden md:block'>
        <div className='relative'>
          <div className='flex overflow-hidden'>
            {images
              .slice(currentIndex, currentIndex + imagesToShow)
              .map((img) => (
                <div
                  key={img.id}
                  className='w-1/4 flex transition-transform duration-500'>
                  <CardImage
                    key={img.id}
                    src={`${urlBase}${img.brand}/${img.src}`}
                    alt={img.id}
                  />
                </div>
              ))}
          </div>
          <AccessibleButton
            type='button'
            ariaLabel='Ir a imagen previa'
            className='absolute -left-10 top-1/2 transform -translate-y-1/2 z-10'
            onClick={handlePrev}
            disabled={currentIndex === 0}>
            <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
              <IoIosArrowDropleft size={40} className='text-primary' />
            </span>
          </AccessibleButton>
          <AccessibleButton
            type='button'
            ariaLabel='Ir a imagen siguiente'
            className='absolute -right-10 top-1/2 transform -translate-y-1/2 z-10'
            onClick={handleNext}
            disabled={currentIndex >= images.length - imagesToShow}>
            <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
              <IoIosArrowDropright size={40} className='text-primary' />
            </span>
          </AccessibleButton>
        </div>
      </div>
    </>
  );
};

export default ImageCarousel;
