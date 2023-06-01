import { useSelector } from "react-redux";
import { RootState } from "../Interface/InterFace2";

const DatosBasicos=()=>{
    const { nombre, apellido, email, telefono } = useSelector(
        (state: RootState) => state.formulario
      );

  return (
    <>
      <h2>Datos Básicos</h2>
      <p>Nombre: {nombre}</p>
      <p>Apellido: {apellido}</p>
      <p>Email: {email}</p>
      <p>Teléfono: {telefono}</p>
    </>
  );
};

export default DatosBasicos;