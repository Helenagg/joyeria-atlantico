const Brands = () => {
  return (
    <div className='justify-items-center text-center mt-10'>
      <h2 className='text-3xl'>Nuestras Marcas</h2>
      <div className='grid gap-4 mt-6'>
        <div className='grid grid-cols-4 gap-4'>
          <div>
            <img
              className='h-auto max-w-full rounded-lg ml-20'
              src='/assets/img/jaguar/jaguar-logo.jpg'
              alt='Jaguar Logo'
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg ml-10 mt-10'
              src='/assets/img/seiko/2022Authorized-Global-Brand-Retailer.jpg'
              alt='Seiko Logo'
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg -m-8 p-6'
              src='/assets/img/orient/orient-logo.jpg'
              alt='Orient Start Logo'
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='/assets/img/victorinox/logo.jpg'
              alt='Victorinox Logo'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
