import { useSelector } from "react-redux";
import { RootState3 } from "../Interface/InterFace3";

const Profesion =()=>{
const { instituto, carrera, FechaInicioP, FechaFinP } = useSelector(
    (state: RootState3) => state.Profesion
  );
  return (
    <>
      <h2>Profesión</h2>
      <p>Instituto: {instituto}</p>
      <p>Carrera: {carrera}</p>
      <p>Fecha de Inicio: {FechaInicioP}</p>
      <p>Fecha de Fin: {FechaFinP}</p>
    </>
  );
};

export default Profesion;