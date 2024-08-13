import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="footer text-center mt-5">
      <div className="container">
        <p className='footer-text'>Cortes Premium</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/cortespremium24?igsh=MWNrZ2J6b29uc2I3Ng==" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="mx-2 social-icons-instagram" />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=3137918544&text=%C2%A1Hola%21+Estoy+interesado+en+m%C3%A1s+informaci%C3%B3n+sobre+los+cortes.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" className="mx-2 social-icons-whatsapp" />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} size="2x" className="mx-2 social-icons-tiktok" />
          </a>
        </div>
        <p className='footer-derechos'>© 2024 Cortes Premium. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;