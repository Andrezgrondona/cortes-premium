//FunFacts
//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

import React, { useEffect, useState } from "react";
import meatCuriositiesData from "../data/meatCuriositiesData.json.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";

const DatosCuriososDeCarne: React.FC = () => {
  const [datoCurioso, setDatoCurioso] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(
      Math.random() * meatCuriositiesData.datosCuriosos.length
    );
    setDatoCurioso(meatCuriositiesData.datosCuriosos[randomIndex]);
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center text_fun_fact">
        <FontAwesomeIcon icon={faLightbulb} /> 
         Sabias que...
      </h2>
      <p className="text-center sub_text_fun_fact">{datoCurioso}</p>
    </div>
  );
};

export default DatosCuriososDeCarne;
