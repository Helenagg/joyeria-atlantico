import AccessibleLink from '../components/Accessibility/AccessibleLink';

const Privacy = () => {
  return (
    <div className='mt-32 mx-8'>
      <h2 className='text-center text-3xl text-primary font-bold'>
        Politica de Privacidad
      </h2>
      <h2 className='mt-10 text-xl text-primary font-bold'>
        ENVIO Y REGISTRO DE DATOS DE CARÁCTER PERSONAL:
      </h2>
      <p className='mt-10 text-left text-secondary-green-dark'>
        A efecto de lo previsto en la Ley 15/1999 LOPD y el Reglamento (UE)
        2016/679 del Parlamento Europeo y del Consejo, de 27 de abril, le
        informamos que lo que se obtenga como consecuencia de su envío de datos
        personales, serán incorporados a un fichero automatizado titularidad de
        Joyería Atlántico con C.I.F. BXXXXXXX y domicilio social en Sevilla
        denominado DATOS WEB cuya finalidad principal es PERMITIR LA RECOGIDA DE
        DATOS MEDIANTE LA WEB PARA AYUDAR AL INTERESADO A DISPONER DE
        INFORMACIÓN DE LO QUE NECESITE., teniendo implementadas todas las
        medidas de seguridad establecidas en dichos Decretos mencionados
        anteriormente.
      </p>
      <p className='mt-10 text-left text-secondary-green-dark'>
        El envío de datos de carácter personal es obligatorio para contactar y
        recibir información sobre los servicios prestados por Joyería Atlántico.
        Asimismo, el no facilitar los datos personales solicitados o el no
        aceptar la presente política de protección de datos supone la
        imposibilidad de suscribirse, registrarse o recibir información de
        dichos servicios.
      </p>
      <h2 className='mt-10 text-xl text-primary font-bold'>
        AMBITO DE APLICACIÓN:
      </h2>
      <p className='mt-10 text-left text-secondary-green-dark'>
        Se aplicará a todas aquellas personas que visiten la página web Joyería
        Atlantico. También, a aquellos que comuniquen voluntariamente a la
        entidad a través del enlace CONTACTO{'>'}ENVIAR, su dirección de email,
        cumplimentando el formulario correspondiente. A cualquiera que decida
        ponerse en contacto con la entidad a través de los teléfonos indicados
        en la Web.
      </p>
      <h2 className='mt-10 text-xl text-primary font-bold'>
        EXACTITUD Y VERACIDAD DE LOS DATOS FACILITADOS:
      </h2>
      <p className='mt-4 text-left text-secondary-green-dark'>
        El Usuario que envía la información a Joyería Atlántico es el único
        responsable de la veracidad y corrección de los datos incluidos,
        exonerándose de cualquier responsabilidad al respecto. Los usuarios
        garantizan y responden, en cualquier caso, de la exactitud, vigencia y
        autenticidad de los datos personales facilitados, y se comprometen a
        mantenerlos debidamente actualizados. El usuario acepta proporcionar
        información completa y correcta en el formulario de registro o
        suscripción.
      </p>
      <p className='mt-4 text-left text-secondary-green-dark'>
        Joyería Atlántico no responde de la veracidad de las informaciones que
        no sean de elaboración propia y de las que indique otra fuente, por lo
        que tampoco asume responsabilidad alguna en cuanto a hipotéticos
        perjuicios que pudieran originarse por el uso de dicha información. Se
        exonera a Joyería Atlántico de responsabilidad ante cualquier daño o
        perjuicio que pudiera sufrir el usuario como consecuencia de errores,
        defectos u omisiones, en la información facilitada por la ENTIDAD,
        siempre que proceda de fuentes ajenas a la misma.
      </p>
      <h2 className='mt-10 text-xl text-primary font-bold'>
        CESIÓN DE DATOS A TERCEROS:
      </h2>
      <p className='mt-4 text-left text-secondary-green-dark'>
        Joyería Atlántico NO CEDERÁ los datos personales a terceros. No
        obstante, en el caso de ser cedidos a algún tercero se produciría una
        información previa solicitando el consentimiento expreso del afectado.
      </p>
      <h2 className='mt-10 text-xl text-primary font-bold'>
        EJERCICIO DE DERECHOS DE ACCESO, RECTIFICACIÓN, SUPRESIÓN, LIMITACIÓN Y
        PORTABILIDAD:
      </h2>
      <p className='mt-4 text-left text-secondary-green-dark'>
        Podrá dirigir sus comunicaciones y ejercitar los derechos de Acceso,
        Rectificación, Supresión, Limitación y Portabilidad en cualquier momento
        y según los Decretos legales, de forma gratuita a través de la dirección
        Sevilla o a través de correo electrónico a joyería@joyeriaatlantico.com
        junto con prueba válida en derecho, como fotocopia del NIF e indicando
        en el asunto PROTECCIÓN DE DATOS.
      </p>
      <p className='mt-4 text-left text-secondary-green-dark'>
        No obstante, podrán dirigirse a la autoridad de control que corresponda
        si considera que sus datos no han sido tratados correctamente según la
        legislación vigente: AGENCIA ESPAÑOLA DE PROTECCIÓN DE DATOS {' '}
        <AccessibleLink to='https://www.aepd.es/'>www.agpd.es</AccessibleLink>
      </p>
      <h2 className='mt-10 text-xl text-primary font-bold'>
        ACEPTACIÓN Y CONSENTIMIENTO:
      </h2>
      <p className='mt-4 text-left text-secondary-green-dark'>
        El Usuario declara haber sido informado de las condiciones sobre
        protección de datos de carácter personal, aceptando y consintiendo el
        tratamiento de los mismos por parte de Joyería Atlántico, en la forma y
        para las finalidades indicadas en la presente Política de Protección de
        Datos Personales.
      </p>

      <h2 className='mt-10 text-xl text-primary font-bold'>
        CAMBIOS EN LA PRESENTE POLÍTICA DE PRIVACIDAD:
      </h2>
      <p className='mt-4 text-left text-secondary-green-dark'>
        Joyería Atlántico se reserva el derecho a modificar la presente política
        para adaptarla a novedades legislativas o jurisprudenciales, así como a
        prácticas de la industria. En dichos supuestos, Joyería Atlántico anunciará en
        esta página los cambios introducidos con razonable antelación a su
        puesta en práctica.
      </p>
    </div>
  );
};

export default Privacy;
