import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { AiFillTikTok } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='bg-gray-900 dark:bg-white mt-6'>
      <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'>
            <a href='https://flowbite.com/' className='flex items-center'>
              <img
                src='https://flowbite.com/docs/images/logo.svg'
                className='h-8 me-3'
                alt='FlowBite Logo'
              />
              <span className='self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-gray-900'>
                Joyería Atlántico
              </span>
            </a>
            <div className='flex mt-10 sm:justify-center'>
              <a
                href='#'
                className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
              >
                <FaFacebookSquare size={30} />
              </a>

              <a
                href='#'
                className='text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5'
              >
                <FaSquareXTwitter size={30}/>
              </a>

              <a
                href='#'
                className='text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5'
              >
                <AiFillTikTok size={30}/>
              </a>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
            <div>
              <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                <li className='mb-4'>
                  <a href='https://flowbite.com/' className='hover:underline'>
                    Home
                  </a>
                </li>
                <li className='mb-4'>
                  <a
                    href='https://tailwindcss.com/'
                    className='hover:underline'
                  >
                    Quiénes somos
                  </a>
                </li>
                <li className='mb-4'>
                  <a
                    href='https://tailwindcss.com/'
                    className='hover:underline'
                  >
                    Localízame
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                <li className='mb-4'>
                  <a
                    href='https://github.com/themesberg/flowbite'
                    className='hover:underline '
                  >
                    Joyería
                  </a>
                </li>
                <li className='mb-4'>
                  <a
                    href='https://discord.gg/4eeurUVvTy'
                    className='hover:underline'
                  >
                    Relojería
                  </a>
                </li>
                <li className='mb-4'>
                  <a
                    href='https://discord.gg/4eeurUVvTy'
                    className='hover:underline'
                  >
                    Reseñas
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    Política de privacidad
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Aviso Legal
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <div className='sm:flex sm:items-center sm:justify-center'>
          <img src='/assets/img/logos/PORTADA_LOGO_COLOR.jpg' alt='Logo Fondos Europeos' className='w-1/5'/>
          <img src='/assets/img/logos/logo-fondos-europeos-next-generation.webp' alt='Logo Fondos Next Generation' className='w-1/3'/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
