import React from "react";

const About: React.FC = () => {
  return (
    <div className="container mt-5 mb-4 ">
      <h2 className="text-center mb-4 about_text">Acera de nosotros</h2>
      <div className="text-center mb-4 about_text_subtitle">
        <p>
          Somos una familia comprometida con la comercialización de ganado en
          pie, respaldada por más de una década de experiencia en el sector.
          Este 2024, hemos decidido dar un paso más y lanzar una línea de cortes
          cárnicos Premium, pensados para ofrecer lo mejor en calidad y precio
          al alcance de todos.
        </p>
      </div>

      <div className="row text-center mb-4">
        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow text-center bgCardAbout">
            <div className="card-body">
              <img
                src="https://i.pinimg.com/564x/74/fd/f1/74fdf1b8a4d4e56910839da7e8b80dc5.jpg"
                alt="Estrategia de Marketing"
                className="img-fluid rounded-circle mb-3"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <h3 className="card-title">Misión</h3>
              <p className="card-title-about">
                Ofrecer a nuestros clientes cortes cárnicos Premium de la más
                alta calidad, garantizando productos seleccionados
                cuidadosamente y empacados al vacío para preservar su frescura.
                Nos esforzamos por transformar cada comida y asado en una
                experiencia inolvidable, al mismo tiempo que mantenemos un
                enfoque en la accesibilidad en precio y la excelencia en sabor.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow text-center bgCardAbout">
            <div className="card-body">
              <img
                src="https://i.pinimg.com/564x/73/bb/2f/73bb2fcf1ed8968043981a0578c47125.jpg"
                alt="Creatividad"
                className="img-fluid rounded-circle mb-3"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <h3 className="card-title">Visión</h3>
              <p className="card-title-about">
                Ser reconocidos como líderes en la industria de la carne
                Premium, destacando por nuestra dedicación a la calidad, la
                innovación en el proceso de selección y maduración de nuestros
                productos, y nuestro compromiso con la satisfacción del cliente.
                Aspiramos a ser la elección preferida de los consumidores que
                buscan productos cárnicos superiores.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow text-center bgCardAbout">
            <div className="card-body">
              <img
                src="https://i.pinimg.com/564x/71/41/04/7141043177a773310a03cab58ad28dab.jpg"
                alt="Publicidad Online"
                className="img-fluid rounded-circle mb-3"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <h3 className="card-title">Compromiso</h3>
              <p className="card-title-about">
                Estamos comprometidos a ofrecer siempre lo mejor a nuestros
                clientes, desde la selección del ganado  hasta el
                empaquetado y maduración de nuestros cortes. Nos comprometemos a
                mantener un estándar de excelencia en todos nuestros procesos,
                asegurando que cada producto que llega a su mesa cumpla con
                nuestras promesas de calidad, frescura y sabor. 
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección del video */}
      <div className="text-center mb-4">
        <h3>¡Mira nuestro video!</h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/os8sKMhHOsM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default About;
