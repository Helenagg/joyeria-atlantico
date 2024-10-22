import ImageCarousel from "./ImageCarousel";

const Watches = () => {
    const watchImages = [
        {
          src: '/assets/img/jaguar/j1011_2.jpg',
          id: 1
        },
        {
          src: '/assets/img/jaguar/j671_a.jpg',
          id: 2
        },
        {
          src: '/assets/img/jaguar/j688_1.jpg',
          id: 3
        },
        {
          src: '/assets/img/jaguar/j964_3.jpg',
          id: 4
        },
        {
          src: '/assets/img/jaguar/j988_1.jpg',
          id: 5
        },
      ]
  return (
    <div className='justify-items-center text-center mt-10'>
      <h2 className='text-3xl mb-10'>Relojería</h2>
      <ImageCarousel images={watchImages} />
    </div>
  );
};

export default Watches;
