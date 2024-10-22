const Presentation = () => {
  return (
    <div className='justify-items-center text-center mt-10'>
      <h2 className='text-3xl'>Joyería Atlántico desde 1989</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 justify-center">
      <div className='text-left mt-2 md:mt-6 md:mx-36 leading-loose'>
      <p className="mt-2">
        Somos la segunda generación de comerciantes de joyería y relojería al
        por menor, que desempeñan su actividad en Sevilla desde 1989, dando
        asesoramiento y trato personalizado, trabajando con los mejores
        proveedores y fabricantes de manera nacional e internacional.
      </p>
      <p className="mt-4">
        De lo mejor de la naturaleza y de las manos de un artista, nace una
        joya. Clásica, moderna o intemporal, muchas veces capaz de expresar sin
        palabras, aquello que queremos decir.
      </p>
      <p className="mt-4">
        El tiempo pasa, pero nada mejor que verlo pasar con un bonito reloj en
        la muñeca, mas que una máquina de medir el tiempo, es el tiempo que
        puedes disfrutarlo cuando lo llevas
      </p>
      </div>
      <div className="w-full mt-4 md:mt-0">
        <img className="rounded-lg" src="/assets/img/logos/joyeria-Atlantico.jpeg" alt="Portada Joyeria"/>
      </div>
      </div>
    </div>
  );
};

export default Presentation;
