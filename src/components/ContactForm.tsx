// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// const ContactForm: React.FC = () => {
//   const form = useRef<HTMLFormElement>(null);

//   const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (form.current) {
//       emailjs
//       .sendForm('service_2pt001d', 'template_2d6trwx', form.current, 'o4FKSVMTGLTVgC0fC')
//         .then(
//           () => {
//             console.log('SUCCESS!');
//             alert('Email sent successfully!');
//           },
//           (error) => {
//             console.log('FAILED...', error.text);
//             alert('Failed to send email. Please try again.');
//           }
//         );
//     } else {
//       console.error('Form reference is null');
//       alert('Failed to send email. Please try again.');
//     }
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label htmlFor="user_name">Name</label>
//       <input type="text" name="user_name" id="user_name" required />

//       <label htmlFor="user_email">Email</label>
//       <input type="email" name="user_email" id="user_email" required />

//       <label htmlFor="message">Message</label>
//       <textarea name="message" id="message" required />

//       <input type="submit" value="Send" />
//     </form>
//   );
// };

// export default ContactForm;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_2pt001d",
          "template_2d6trwx",
          form.current,
          "o4FKSVMTGLTVgC0fC"
        )
        .then(
          () => {
            console.log("SUCCESS!");
            toast.success("¡Mensaje enviado con éxito!", {
              position: "top-center",
              autoClose: 3000,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "light",
            });
          },
          (error) => {
            console.log("FAILED...", error.text);
            toast.error("No se pudo enviar el mensaje. Inténtalo de nuevo.", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "light",
            });
          }
        );
    } else {
      console.error("Form reference is null");
      toast.error("No se pudo enviar el mensaje. Inténtalo de nuevo.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center mb-4 background-container">
      <div className="col-md-6">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="p-4   rounded shadow form-Bg"
        >
          <h2 className="text-center mb-4 contactanos">Contáctanos</h2>
          <p className="text-center mt-4 text-client">
            Si tienes alguna pregunta o necesitas más información, no dudes en
            contactarnos. Estamos aquí para ayudarte y responder a todas tus
            dudas.
          </p>
          <div className="mb-3">
            <label htmlFor="user_name" className="form-label textForm">
              Nombre
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="user_email" className="form-label textForm">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label textForm">
              Celular
            </label>
            <input
              type="phone"
              name="phone"
              id="phone"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label textForm">
              Mensaje
            </label>
            <textarea
              name="message"
              id="message"
              className="form-control"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn custom-button w-50 mx-auto d-block"
          >
            Enviar
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ContactForm;
