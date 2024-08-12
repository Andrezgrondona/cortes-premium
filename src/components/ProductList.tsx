
import React, { useEffect, useState } from "react";
import { getProducts, Product } from "../services/productService";
import CardProducts from "./Card";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [chunkSize, setChunkSize] = useState<number>(
    window.innerWidth < 768 ? 1 : 3
  );

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newSize = window.innerWidth < 768 ? 1 : 3;
      setChunkSize(newSize);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const productChunks = [];
  for (let i = 0; i < products.length; i += chunkSize) {
    productChunks.push(products.slice(i, i + chunkSize));
  }

  return (
    // <Carousel indicators={false} interval={null}>
    //   {productChunks.map((chunk, index) => (
    //     <Carousel.Item key={index}>
    //       <div className="d-flex justify-content-around">
    //         {chunk.map((product) => (
    //           <div key={product.nombre} className="p-2">
    //             <CardProducts
    //               imageUrl={product.urlImage}
    //               title={product.nombre}
    //               description={product.descripcion}
    //               link="#"
    //               price={product.precio}
    //               presentation={product.presentacion}
    //               linkText="Ver más"
    //             />
    //           </div>
    //         ))}
    //       </div>
    //     </Carousel.Item>
    //   ))}
    // </Carousel>

    <>
      {products.length === 0 ? (
        <div className="text-center mt-5">
          <h3>Cargando productos...</h3>
        </div>
      ) : (
        <Carousel indicators={false} interval={null}>
          {productChunks.map((chunk, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-around">
                {chunk.map((product) => (
                  <div key={product.nombre} className="p-2">
                    <CardProducts
                      imageUrl={product.urlImage}
                      title={product.nombre}
                      description={product.descripcion}
                      link="#"
                      price={product.precio}
                      presentation={product.presentacion}
                      linkText="Ver más"
                    />
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default ProductList;
