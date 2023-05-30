import React, { useState } from "react";
import Formulario from "../components/Paso1";
import Ocupacion from "../components/Paso2";
import Profesion from "../components/Paso3";
import Biografia from "../components/Paso4";
import Referencias from "../components/Paso5";
import {Button} from "react-bootstrap";
import Resumen from "./Resumen";

interface WizardProps {
  children: React.ReactNode;
}

const Wizard: React.FC<WizardProps> = ({ children }) => {
  const [activePage, setActivePage] = useState(0);
  const pages = React.Children.toArray(children);
  const currentPage = pages[activePage];

  return (
    <div className="wizard">
      <div className="wizard_content">{currentPage}</div>
      <div className="wizard-buttons">
        <Button
          variant="dark"
          onClick={() => setActivePage(activePage - 1)}
          disabled={activePage === 0}
        >
          Anterior
        </Button>
        <Button
          variant="primary"
          onClick={() => setActivePage(activePage + 1)}
          disabled={activePage === pages.length - 1}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Wizard>
      <Formulario />
      <Ocupacion />
      <Profesion />
      <Biografia />
      <Referencias/>
      <Resumen/>
      
    </Wizard>
  );
}
