import { useSelector } from "react-redux";
import { RootState } from "../components/Interface/InterFace2";
import { RootState2 } from "../components/Interface/Interface4";
import { RootState3 } from "../components/Interface/InterFace3";
import { RootState5 } from "../components/Interface/InterFace5";
import { RootState1 } from "../components/Interface/InterFace";
import Accordion from 'react-bootstrap/Accordion';


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
     <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
      <Accordion.Header>Datos Basicos</Accordion.Header>
        <Accordion.Body>
        <p>Nombre: {nombre}</p>
        <p>Apellido: {apellido}</p>
        <p>Email: {email}</p>
        <p>Teléfono: {telefono}</p>
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>    
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
      <Accordion.Header>Ocupacion</Accordion.Header>
        <Accordion.Body>
        <p>Empresa: {Empresa}</p>
        <p>Puesto: {Puesto}</p>
        <p>FechaInicio: {FechaInicio}</p>
        <p>FechaFin: {FechaFin}</p>
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
      <Accordion.Header>Profesion</Accordion.Header>
      <Accordion.Body> 
      <p>instituto: {instituto}</p>
      <p>carrera: {carrera}</p>
      <p>FechaInicioP: {FechaInicioP}</p>
      <p>FechaFinP: {FechaFinP}</p>
      </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
      <Accordion.Header>Biografia</Accordion.Header>
      <Accordion.Body>
      <p>{Biografia}</p> 
      </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1">
      <Accordion.Header>Referencias</Accordion.Header>
      <Accordion.Body>
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
      </Accordion.Body>
      </Accordion.Item>
      </Accordion>      
    </>
  );
};

export default Resumen;

