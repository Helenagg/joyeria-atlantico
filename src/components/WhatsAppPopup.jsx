import { WhatsAppWidget } from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css';

const WhatsAppPopup = () => {
  return (
    <>
        <WhatsAppWidget 
            phoneNumber='34627971028'
            message='¡Hola! ¿En que puedo ayudarte?'
            companyName='Joyería Atlántico'
            sendButtonText='Enviar consulta'
            replyTimeText=''
            inputPlaceHolder='Escribe aqui tu consulta'
        />
    </>
  )
}

export default WhatsAppPopup