import CardImage from './CardImage';

const watchImages = [
  {
    src: '/assets/img/jaguar/j1011_2.jpg',
    description: 'Jaguar Modelo: J1011',
    id: 1,
  },
  {
    src: '/assets/img/jaguar/j671_a.jpg',
    description: 'Jaguar Modelo: J671',
    id: 2,
  },
  {
    src: '/assets/img/jaguar/j688_1.jpg',
    description: 'Jaguar Modelo: J688',
    id: 3,
  },
  {
    src: '/assets/img/jaguar/j964_3.jpg',
    description: 'Jaguar Modelo: J964',
    id: 4,
  },
  {
    src: '/assets/img/jaguar/j988_1.jpg',
    description: 'Jaguar Modelo: J988',
    id: 5,
  },
];

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
              src={img.src}
              alt={img.id}
              description={img.description}
              price='150€'
              isWatchesPage
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watches;
