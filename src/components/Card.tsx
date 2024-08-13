// import React from 'react';

// interface CardProductsProps {
//   imageUrl: string;
//   title: string;
//   description: string;
//   link: string;
//   linkText: string;
//   price: number;
//   presentation: string;
// }

// const CardProducts: React.FC<CardProductsProps> = ({
//   imageUrl,
//   title,
//   description,
//   link,
//   linkText,
//   price,
//   presentation,
// }) => {

//   const formatPrice = (amount: number): string => {
//     return `$ ${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
//   };

//   return (
//     <div className="card" style={{ width: '18rem', display: 'flex', flexDirection: 'column' }}>
//       <img className="card-img-top" src={imageUrl} alt="Card cap" />
//       <div
//         className="card-body"
//         style={{
//           backgroundImage: 'url(https://i.pinimg.com/564x/5d/30/cd/5d30cd20d278849211ec7c4ba60c8969.jpg)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           padding: '1.5rem',
//           color: 'white',
//           flexGrow: 1,
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'space-between',
//         }}
//       >
//         <h5 className="card-title">{title}</h5>
//         {/* <p className="card-text">{description}</p> */}
//         <p className="card-text" style={{ marginBottom: '0.2rem' }}>{formatPrice(price)}</p>
//         <p className="card-text-presentacion" >PRESENTACION</p>
//         <p className="card-text" style={{ marginTop: '0', marginBottom: '1rem' }}>{presentation}</p>
//         <div style={{ textAlign: 'center' }}>
//           <a
//             href={link}
//             className="btn"
//             style={{
//               backgroundColor: 'transparent',
//               border: '2px solid #5b3100',
//               color: '#5b3100',
//               padding: '0.5rem 2rem',
//               textDecoration: 'none',
//               display: 'inline-block',
//               width: '100%',
//               transition: 'background-color 0.3s, color 0.3s',
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.backgroundColor = '#5b3100';
//               e.currentTarget.style.color = 'white';
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.backgroundColor = 'transparent';
//               e.currentTarget.style.color = '#5b3100';
//             }}
//           >
//             {linkText}
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardProducts;

import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

interface CardProductsProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  price: number;
  presentation: string;
}

const CardProducts: React.FC<CardProductsProps> = ({
  imageUrl,
  title,
  description,
  linkText,
  price,
  presentation,
}) => {
  const [showModal, setShowModal] = useState(false);

  const formatPrice = (amount: number): string => {
    return `$ ${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div
      className="card"
      style={{ width: "18rem", display: "flex", flexDirection: "column" }}
    >
      <img className="card-img-top" src={imageUrl} alt="Card cap" />
      <div
        className="card-body"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/564x/5d/30/cd/5d30cd20d278849211ec7c4ba60c8969.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "1.5rem",
          color: "white",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h5 className="card-title-card">{title}</h5>
        <p className="card-text" style={{ marginBottom: "0.2rem" }}>
          {formatPrice(price)}
        </p>
        <p className="card-text-presentacion">PRESENTACIÓN</p>
        <p
          className="card-text"
          style={{ marginTop: "0", marginBottom: "1rem" }}
        >
          {presentation}
        </p>
        <div style={{ textAlign: "center" }}>
          <Button
            variant="outline-light"
            style={{
              backgroundColor: "transparent",
              border: "2px solid #5b3100",
              color: "#5b3100",
              padding: "0.5rem 2rem",
              textDecoration: "none",
              display: "inline-block",
              width: "100%",
              transition: "background-color 0.3s, color 0.3s",
            }}
            onClick={handleShow}
          >
            {linkText}
          </Button>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal_title">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal_subtitle">{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CardProducts;
