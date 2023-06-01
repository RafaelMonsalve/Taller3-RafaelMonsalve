import { RootState1 } from "../Interface/InterFace"
import { useSelector } from "react-redux";
const Referencias =()=>{
    const  {nombre2, apellido2, email2, telefono2,nombre3,apellido3,email3,telefono3}  = useSelector(
        (state: RootState1) => state.Referencias
      );
  return (
    <>
      <h2>Referencias</h2>
      <h3>Referencia 1</h3>
      <p>Nombre: {nombre2}</p>
      <p>Apellido: {apellido2}</p>
      <p>Email: {email2}</p>
      <p>Teléfono: {telefono2}</p>
      <h3>Referencia 2</h3>
      <p>Nombre: {nombre3}</p>
      <p>Apellido: {apellido3}</p>
      <p>Email: {email3}</p>
      <p>Teléfono: {telefono3}</p>
    </>
  );
};

export default Referencias;