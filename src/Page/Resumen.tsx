import { useSelector } from "react-redux";
import { RootState } from "../components/Interface/InterFace2";
import { RootState2 } from "../components/Interface/Interface4";
import { RootState3 } from "../components/Interface/InterFace3";
import { RootState5 } from "../components/Interface/InterFace5";
import { RootState1 } from "../components/Interface/InterFace";


const Resumen = () => {
  const { nombre, apellido, email, telefono } = useSelector(
    (state: RootState) => state.formulario
  );
  const { Empresa, Puesto, FechaInicio, FechaFin } = useSelector(
    (state: RootState2) => state.Ocupacion
  );
  const { instituto, carrera, FechaInicioP, FechaFinP } = useSelector(
    (state: RootState3) => state.Profesion
  );
  const  {Biografia}  = useSelector(
    (state: RootState5) => state.Texto
  );
  const  {nombre2, apellido2, email2, telefono2,nombre3,apellido3,email3,telefono3}  = useSelector(
    (state: RootState1) => state.Referencias
  );

  return (
    <>
      <h1>Resumen</h1>
      <h2>Datos Basicos</h2>
      <p>Nombre: {nombre}</p>
      <p>Apellido: {apellido}</p>
      <p>Email: {email}</p>
      <p>Teléfono: {telefono}</p>
        
      <h2>Ocupacion</h2> 
      <p>Empresa: {Empresa}</p>
      <p>Puesto: {Puesto}</p>
      <p>FechaInicio: {FechaInicio}</p>
      <p>FechaFin: {FechaFin}</p>
       
      <h2>Profesion</h2> 
      <p>instituto: {instituto}</p>
      <p>carrera: {carrera}</p>
      <p>FechaInicioP: {FechaInicioP}</p>
      <p>FechaFinP: {FechaFinP}</p>

      <h2>Biografia</h2>
      <p>{Biografia}</p> 

      <h2>Referencias</h2>
      <h3>Referencia 1</h3>  
      <p>Nombre: {nombre3}</p>
      <p>Apellido: {apellido3}</p>
      <p>Email: {email3}</p>
      <p>Teléfono: {telefono3}</p>

      <h3>Referencia 2</h3>  
      <p>Nombre: {nombre2}</p>
      <p>Apellido: {apellido2}</p>
      <p>Email: {email2}</p>
      <p>Teléfono: {telefono2}</p>
    </>
  );
};

export default Resumen;

