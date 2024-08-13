import React from "react";
//import fondoUno from "../assets/fondo-uno.jpg";
import fondoDos from "../assets/fondo-dos.jpg";
import fondoInicial from "../assets/fondoInicial.jpg";
import ProductList from "../components/ProductList";
import FunFacts from "../components/FunFacts";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const Home: React.FC = () => {
  return (
    <div>
      <img src={fondoInicial} alt="Logo" style={{ width: "100%" }} />

      <div className="text_Nuestros_Productos">Nuestros productos</div>

      <div
        className="bg-cards"
        style={{
          backgroundImage: `url('https://i.pinimg.com/564x/74/fd/f1/74fdf1b8a4d4e56910839da7e8b80dc5.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(255, 255, 255, 0.0)",
            borderRadius: "20px",
          }}
        />
        <ProductList />
      </div>

      <FunFacts />

      <img src={fondoDos} alt="Logo" style={{ width: "100%" }} />

      <Footer />

      <WhatsAppButton />
    </div>
  );
};

export default Home;
