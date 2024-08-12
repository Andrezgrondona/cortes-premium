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

      <ProductList />

      <FunFacts />

      <img src={fondoDos} alt="Logo" style={{ width: "100%" }} />

      <Footer />

      <WhatsAppButton />
    </div>
  );
};

export default Home;
