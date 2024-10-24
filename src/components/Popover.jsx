import { useEffect, useRef, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa6';
import { MdOutlineAttachEmail } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import AccessibleButton from './Accessibility/AccessibleButton';
import AccessibleLink from './Accessibility/AccessibleLink';



const Popover = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);

  const handlePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsPopoverOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <AccessibleButton
        onClick={handlePopover}
        type='button'
        className='text-white me-4 bg-secondary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-500 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-white dark:hover:bg-secondary dark:focus:ring-primary'
      >
        ¿Necesitas ayuda?
      </AccessibleButton>
      {isPopoverOpen && (
        <div
          ref={popoverRef}
          role='tooltip'
          className='absolute right-10 z-30 mt-12 w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-100 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800'
        >
          <div className='flex justify-between px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700'>
            <h3 className='font-semibold text-gray-900 dark:text-white'>
              Contacto
            </h3>
            <AccessibleButton ariaLabel='Cerrar' type='button' onClick={handlePopover}>
              <MdClose />
            </AccessibleButton>
          </div>
          <div className='px-3 py-2 gap-2'>
            <AccessibleLink
              href='tel:954000000'
              className='flex gap-4 border rounded-sm p-2 text-gray-900 my-2'
            >
              <FaPhone size={20}/>
              954 000 000
            </AccessibleLink>
            <AccessibleLink
              href='tel:954435738'
              className='flex gap-4 border rounded-sm p-2 text-gray-900 my-2'
            >
              <MdOutlineAttachEmail size={20}/>
              joyeria@joyeriaatlantico.com
            </AccessibleLink>
            <AccessibleLink
              href='tel:954435738'
              className='flex gap-4 border rounded-sm p-2 text-gray-900 my-2'
            >
              <MdOutlineContactSupport size={20}/>
              Contacta con nosotros
            </AccessibleLink>
          </div>
          <div data-popper-arrow></div>
        </div>
      )}
    </>
  );
};

export default Popover;
