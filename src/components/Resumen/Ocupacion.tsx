import { useSelector } from "react-redux";
import { RootState2 } from "../Interface/Interface4";

const Ocupacion =()=>{

const { Empresa, Puesto, FechaInicio, FechaFin } = useSelector(
    (state: RootState2) => state.Ocupacion
  );
  return (
    <>
      <h2>Ocupación</h2>
      <p>Empresa: {Empresa}</p>
      <p>Puesto: {Puesto}</p>
      <p>Fecha de Inicio: {FechaInicio}</p>
      <p>Fecha de Fin: {FechaFin}</p>
    </>
  );
};


export default Ocupacion;