import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { AiFillTikTok } from 'react-icons/ai';
import { FaLinkedin } from "react-icons/fa6";
import AccessibleLink from './Accessibility/AccessibleLink';

const Footer = () => {
  return (
    <footer className='bg-black dark:bg-white mt-6'>
      <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'>
            <AccessibleLink href='/' className='flex items-center'>
              <img
               src='/assets/img/logos/logo-joyeria-atlantico.jpeg'
               className='h-14'
               alt='Logo de Joyería Atlántico'
              />
            </AccessibleLink>
            <div className='flex mt-10 sm:justify-center'>
              <AccessibleLink
                href='#'
                className='text-secondary hover:text-gray-900 dark:hover:text-white'
                aria-label='Facebook de Joyería Atlántico'
              >
                <FaFacebookSquare size={30} />
              </AccessibleLink>

              <AccessibleLink
                href='#'
                className='text-secondary hover:text-gray-900 dark:hover:text-white ms-5'
                aria-label='Twitter de Joyería Atlántico'
              >
                <FaSquareXTwitter size={30}/>
              </AccessibleLink>

              <AccessibleLink
                href='#'
                className='text-secondary hover:text-gray-900 dark:hover:text-white ms-5'
                aria-label='TikTok de Joyería Atlántico'
              >
                <AiFillTikTok size={30}/>
              </AccessibleLink>
              <AccessibleLink
                href='#'
                className='text-secondary hover:text-gray-900 dark:hover:text-white ms-5'
                aria-label='Linkedin de Joyería Atlántico'
              >
                <FaLinkedin size={30}/>
              </AccessibleLink>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
            <div>
              <ul className='text-secondary dark:text-gray-400 font-medium'>
                <li className='mb-4'>
                  <AccessibleLink href='/' className='hover:underline'>
                    Inicio
                  </AccessibleLink>
                </li>
                <li className='mb-4'>
                  <AccessibleLink
                    href='/quienes-somos'
                    className='hover:underline'
                  >
                    Quiénes somos
                  </AccessibleLink>
                </li>
                <li className='mb-4'>
                  <AccessibleLink
                    href='/contact'
                    className='hover:underline'
                  >
                    Localízame
                  </AccessibleLink>
                </li>
              </ul>
            </div>
            <div>
              <ul className='text-secondary dark:text-gray-400 font-medium'>
                <li className='mb-4'>
                  <AccessibleLink
                    href='/joyeria'
                    className='hover:underline '
                  >
                    Joyería
                  </AccessibleLink>
                </li>
                <li className='mb-4'>
                  <AccessibleLink
                    href='/relojes'
                    className='hover:underline'
                  >
                    Relojería
                  </AccessibleLink>
                </li>
                <li className='mb-4'>
                  <AccessibleLink
                    href='reseñas'
                    className='hover:underline'
                  >
                    Reseñas
                  </AccessibleLink>
                </li>
              </ul>
            </div>
            <div>
              <ul className='text-secondary dark:text-gray-400 font-medium'>
                <li className='mb-4'>
                  <AccessibleLink href='/privacidad' className='hover:underline'>
                    Política de privacidad
                  </AccessibleLink>
                </li>
                <li className='mb-4'>
                  <AccessibleLink href='/legal' className='hover:underline'>
                    Aviso Legal
                  </AccessibleLink>
                </li>
                <li className='mb-4'>
                  <AccessibleLink href='/accesibilidad' className='hover:underline'>
                    Declaración de accesibilidad
                  </AccessibleLink>
                </li>
                <li >
                  <AccessibleLink href='/cookies' className='hover:underline'>
                    Política de cookies
                  </AccessibleLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-6 border-primary border-2 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <div className='sm:flex sm:items-center sm:justify-center'>
          <img src='/assets/img/logos/PORTADA_LOGO_COLOR.jpg' alt='Logo Fondos Europeos' className='w-1/5'/>
          <img src='/assets/img/logos/logo-fondos-europeos-next-generation.webp' alt='Logo Fondos Next Generation' className='w-1/3'/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
