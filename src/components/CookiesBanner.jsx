import CookieConsent from 'react-cookie-consent';

const CookiesBanner = () => {
  // const loadGoogleAnalytics = () => {
  //     // Crea un elemento <script> para cargar Google Analytics
  //     const script = document.createElement("script");
  //     script.src = "https://www.googletagmanager.com/gtag/js?id=TU_ID_DE_ANALYTICS"; // Reemplaza TU_ID_DE_ANALYTICS
  //     script.async = true;
  //     document.head.appendChild(script);

  //     // Configura Google Analytics
  //     script.onload = () => {
  //       window.dataLayer = window.dataLayer || [];
  //       function gtag() {
  //         window.dataLayer.push(arguments);
  //       }
  //       window.gtag = gtag;
  //       gtag("js", new Date());
  //       gtag("config", "TU_ID_DE_ANALYTICS", {
  //         anonymize_ip: true, // Opcional: anonimiza la IP para cumplir con GDPR
  //       });
  //     };
  //   };

  return (
    <>
      <CookieConsent
        location='bottom'
        buttonText='Aceptar'
        declineButtonText='Denegar'
        enableDeclineButton
        cookieName='analyticsConsent'
        style={{
          background: '#fff',
          color: '#8b2c35',
          border: '1px, solid, #958d83',
          width: '75%',
          position: 'fixed',
          bottom: '10px !important',
          right: '0 !important',
          height: '100px',
          padding: '20px',
          boxSizing: 'border-box',
          borderRadius: '8px 8px 8px 8px',
        }}
        buttonStyle={{
          background: '#958d83',
          color: '#8b2c35',
          fontSize: '14px',
          padding: '10px 15px',
          cursor: 'pointer',
          borderRadius: '4px 4px 4px 4px',
        }}
        declineButtonStyle={{
          backgroundColor: '#958d83', // Color diferente para el botón de denegar
          color: '#fff',
          fontSize: '14px',
          borderRadius: '5px',
          padding: '10px 15px',
          cursor: 'pointer',
          borderRadius: '4px 4px 4px 4px',
        }}
        expires={150}
        onAccept={() => {
          window.gtag('consent', 'update', {
            analytics_storage: 'granted',
          });
        }}
        onDecline={() => console.log('Cookie denegada')}>
        Esta web utiliza cookies para fines de análisis.
      </CookieConsent>
    </>
  );
};

export default CookiesBanner;
