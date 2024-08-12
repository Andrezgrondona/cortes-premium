import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton: React.FC = () => {
  const whatsappNumber = '3137918544'; 
  const message = '¡Hola! Estoy interesado en más información sobre los cortes.'; 

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="3x" />
    </a>
  );
};

export default WhatsAppButton;