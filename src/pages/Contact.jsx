import { HiOutlineMail } from 'react-icons/hi';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { AiFillTikTok } from 'react-icons/ai';
import AccessibleLink from '../components/Accessibility/AccessibleLink';
import AccessibleButton from '../components/Accessibility/AccessibleButton';
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const onSubmit = async () => {
    try {
      const response = await fetch(
        'https://joyeria-atlantico.vercel.app/api/sendEmail',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, subject, message }),
        }
      );

      if (response.ok) {
        setResponseMessage('Correo enviado con éxito');
      } else {
        setResponseMessage('Error al enviar el correo');
      }
    } catch (error) {
      console.error('Error', error);
      setResponseMessage('Error al enviar el correo en catch');
    }
  };

  return (
    <>
      <div className='mt-28'>
        <div className='grid sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-4xl bg-white shadow shadow-secondary rounded-md font-[sans-serif]'>
          <div>
            <h1 className='text-primary text-3xl font-extrabold'>
              Contacta con nosotros
            </h1>
            <p className='text-sm text-secondary-green-dark mt-4'>
              Si tienes alguna duda o consulta, así como algún modelo específico
              no dudas en contactar con nosotros:
            </p>
            <div className='mt-12'>
              <h2 className='text-primary text-base font-bold'>Email</h2>
              <ul className='mt-4'>
                <li className='flex items-center'>
                  <div className='bg-[#e6e6e6cf] h-10 w-10 rounded-lg flex items-center justify-center shrink-0'>
                    <HiOutlineMail size={20} className='text-primary' />
                  </div>
                  <AccessibleLink
                    to='mailto:joyeria@joyeriaatlantico.com'
                    className='text-secondary-green-dark text-sm ml-4'>
                    <small className='block'>Correo electrónico</small>
                    <strong>joyeria@joyeriaatlantico.com</strong>
                  </AccessibleLink>
                </li>
              </ul>
            </div>

            <div className='mt-12'>
              <h2 className='text-primary text-base font-bold'>
                Redes Sociales
              </h2>

              <ul className='flex mt-4 space-x-4'>
                <li className='bg-[#e6e6e6cf] h-10 w-10 rounded-lg flex items-center justify-center shrink-0'>
                  <AccessibleLink
                    to='/'
                    aria-label='Facebook de Joyería Atlántico'>
                    <FaFacebookSquare className='text-primary' size={20} />
                  </AccessibleLink>
                </li>
                <li className='bg-[#e6e6e6cf] h-10 w-10 rounded-lg flex items-center justify-center shrink-0'>
                  <AccessibleLink
                    to='/'
                    aria-label='TikTok de Joyería Atlántico'>
                    <AiFillTikTok className='text-primary' size={20} />
                  </AccessibleLink>
                </li>
                <li className='bg-[#e6e6e6cf] h-10 w-10 rounded-lg flex items-center justify-center shrink-0'>
                  <AccessibleLink
                    to='/'
                    aria-label='Twitter de Joyería Atlántico'>
                    <FaSquareXTwitter className='text-primary' size={20} />
                  </AccessibleLink>
                </li>
                <li className='bg-[#e6e6e6cf] h-10 w-10 rounded-lg flex items-center justify-center shrink-0'>
                  <AccessibleLink
                    to='/'
                    aria-label='Linkedin de Joyería Atlántico'>
                    <FaLinkedin className='text-primary' size={20} />
                  </AccessibleLink>
                </li>
              </ul>
            </div>
          </div>

          <form className='ml-auo space-y-4'>
            <input
              type='text'
              placeholder='Nombre'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500'
            />
            <input
              type='email'
              placeholder='Correo elecrónico'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500'
            />
            <input
              type='text'
              placeholder='Asunto'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className='w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500'
            />
            <textarea
              placeholder='Mensaje'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows='6'
              className='w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-blue-500'></textarea>
            <AccessibleButton
              type='button'
              onClick={onSubmit}
              className='text-white bg-primary hover:bg-secondary-dark rounded-md text-sm px-4 py-3 w-full !mt-6'>
              Enviar
            </AccessibleButton>
          {responseMessage && <p className='text-red-500 text-xs'>{responseMessage}</p>}
          </form>
        </div>
      </div>
      <div className='p-6 mx-auto mt-2 max-w-4xl bg-white shadow shadow-secondary rounded-md'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6339.351414717795!2d-5.9231726!3d37.39750079999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126f3704d0064f%3A0xf1e57b1fde3f9aca!2zSm95ZXLDrWEgQXRsw6FudGljbw!5e0!3m2!1ses!2ses!4v1729613602171!5m2!1ses!2ses'
          className='h-96 w-full'
          allowfullscreen='true'
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'></iframe>
      </div>
    </>
  );
};

export default Contact;
