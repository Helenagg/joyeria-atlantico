import { urlBase, watchImages } from '../utils/watchesData';
import CardImage from './CardImage';

  

const Watches = () => {
  return (
    <div className='text-center mt-10'>
      <h2 className='text-3xl mb-10 text-primary font-semibold'>Relojería</h2>
      <p className='my-4 mx-56 text-secondary-dark font-semibold'>
        El tiempo pasa, pero nada mejor que verlo pasar con un bonito reloj en
        la muñeca, mas que una máquina de medir el tiempo, es el tiempo que
        puedes disfrutarlo cuando lo llevas
      </p>
      <div className='grid grid-cols-4 gap-2'>
        {watchImages.map((img) => (
          <div key={img.id}>
            <CardImage
              src={`${urlBase}${img.brand}/${img.src}`}
              alt={`${img.description}{' '}${img.model}`}
              description={img.description}
              model={img.model}
              isWatchesPage />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watches;
