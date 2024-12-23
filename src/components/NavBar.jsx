import { useState } from 'react';
import Popover from './Popover';
import AccessibleLink from './Accessibility/AccessibleLink';
import AccessibleButton from './Accessibility/AccessibleButton';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <AccessibleLink
          to='/'
          className='flex items-center space-x-3 rtl:space-x-reverse'
          aria-label='Logo de Joyería Atlántico'
          >
          
          <img
            src='/assets/img/logos/logo-joyeria-atlantico.jpeg'
            className='h-12'
            alt='Logo de Joyería Atlántico'
          />
        </AccessibleLink>
        <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
          <Popover />
          <AccessibleButton
            data-collapse-toggle='navbar-sticky'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-sticky'
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            ariaLabel='Abrir menu en móviles'
            >
            <span className='sr-only'>Abrir menu en móviles</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'>
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </AccessibleButton>
        </div>
        <div
          className={`${isMenuOpen ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id='navbar-sticky'>
          <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <AccessibleLink
                to='/'
                className='block py-2 px-3 text-white bg-secondary-green-dark rounded md:bg-transparent md:text-secondary-green-dark hover:text-secondary md:p-0 md:dark:text-white'
                aria-current='page'>
                Inicio
              </AccessibleLink>
            </li>
            <li>
              <AccessibleLink
                to='/quienes-somos'
                className='block py-2 px-3 text-white bg-secondary-green-dark rounded md:bg-transparent md:text-secondary-green-dark hover:text-secondary md:p-0 md:dark:text-white'>
                Quiénes somos
              </AccessibleLink>
            </li>
            <li>
              <AccessibleLink
                to='/joyeria'
                className='block py-2 px-3 text-white bg-secondary-green-dark rounded md:bg-transparent md:text-secondary-green-dark hover:text-secondary md:p-0 md:dark:text-white'>
                Joyería
              </AccessibleLink>
            </li>
            <li>
              <AccessibleLink
                to='/relojes'
                className='block py-2 px-3 text-white bg-secondary-green-dark rounded md:bg-transparent md:text-secondary-green-dark hover:text-secondary md:p-0 md:dark:text-white'>
                Relojería
              </AccessibleLink>
            </li>
            <li>
              <AccessibleLink
                to='/contact'
                className='block py-2 px-3 text-white bg-secondary-green-dark rounded md:bg-transparent md:text-secondary-green-dark hover:text-secondary md:p-0 md:dark:text-white'>
                Localízame
              </AccessibleLink>
            </li>
            <li>
              <AccessibleLink
                to='/reseñas'
                className='block py-2 px-3 text-white bg-secondary-green-dark rounded md:bg-transparent md:text-secondary-green-dark hover:text-secondary md:p-0 md:dark:text-white'>
                Reseñas
              </AccessibleLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
