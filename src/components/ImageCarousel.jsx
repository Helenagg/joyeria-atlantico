import { useState } from 'react';
import CardImage from './CardImage';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import AccessibleButton from './Accessibility/AccessibleButton';
import { urlBase } from '../utils/watchesData';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesToShow = 4;

  const visibleImages = images.slice(currentIndex, currentIndex + imagesToShow);

  const handleNext = () => {
    if (currentIndex < images.length - imagesToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  console.log('New images.len', Math.min(images.length, imagesToShow +1) * (100 / imagesToShow));
  console.log('images', images.length * (100 / imagesToShow));

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  console.log('current', currentIndex);
  

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
        <div className='w-full overflow-hidden'>
          <div className='flex items-center'>
            <AccessibleButton
              type='button'
              ariaLabel='Ir a imagen previa'
              className='px-4 py-2 m-8'
              onClick={handlePrev}
            >
              <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
                <IoIosArrowDropleft size={40} className='text-primary' />
              </span>
            </AccessibleButton>
            <div className='overflow-hidden w-full'>
              <div
                className='flex transition-transform duration-500'
                style={{
                  transform: `translateX(-${
                    currentIndex * (80 / imagesToShow)
                  }%)`,
                  width: `${(visibleImages.length * 100) / imagesToShow}%`,
                  // width: `${Math.min(images.length, imagesToShow + 1) * (100 / imagesToShow)}%`
                }}
              >
                {images.map((img) => (
                  <CardImage
                    key={img.id}
                    src={`${urlBase}${img.brand}/${img.src}`}
                    alt={img.id}
                  />
                ))}
              </div>
            </div>
            <AccessibleButton
              type='button'
              ariaLabel='Ir a imagen siguiente'
              className='px-4 py-2 m-8'
              onClick={handleNext}
            >
              <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
                <IoIosArrowDropright size={40} className='text-primary' />
              </span>
            </AccessibleButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCarousel;
