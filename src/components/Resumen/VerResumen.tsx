import { useContext } from "react";
import ResumenContext from "./ResumenContext";

const VerResumen = () => {
  const { Resumen } = useContext(ResumenContext);

  return <p>Contador {Resumen}</p>;
};

export default VerResumen;